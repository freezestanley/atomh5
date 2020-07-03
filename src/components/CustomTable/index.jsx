import React from 'react';
import { Table } from 'antd';
import { thousandToFormat } from './utils/util.js';
import createEnhancedSearchForm from './utils/createEnhancedSearchForm';
/**
 * props:
 * initQuery: Boolean 加载后是否自动查询
 * pageName:  String  页码的字段名:默认 pageNum
 * pageSizeName: String 一页数量的字段名: 默认 pageSize
 * queryData: Promise resolve({ success: true, total: Number, data:Array})
 * method:
 * search: 表格查询，可加额外参数。默认当前页参数
 */
class ClassicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        current: 1,
        pageSize: 40,
      },
      data: [],
      loading: true,
      params: {},
      searchKey: {},
    };
    this.searchFormRef = null;
  }

  componentDidMount() {
    const {
      searchKey = {},
      queryData,
      initQuery,
      pageName,
      pageSizeName,
      defaultPageSize,
    } = this.props;

    if (initQuery) {
      queryData
      && queryData({
        ...searchKey,
        pagination: {
          [pageName]: 1,
          [pageSizeName]: defaultPageSize,
        },
      }).then(res => {
        this.handleQueryData(res);
      });
    }
  }

  handleQueryData = ({data = [], total}) => {
    if (Array.isArray(data)) {
      // data.forEach(item => {
      //   for (const i in item) {
      //     if (typeof item[i] === 'number' && !isNaN(item[i])) {
      //       item[i] = thousandToFormat(
      //         item[i],
      //         this.props.maximumFractionDigits,
      //       );
      //     }
      //   }
      // });
      this.setState({
        loading: false,
        data: data.map((item, index) => ({ ...item, key: index })),
        pagination: {...this.state.pagination, total},
      });
    }
  };

  search = (searchParams = {}) => {
    const {pageName, pageSizeName} = this.props;
    const { queryData } = this.props;
    const params = {
      pagination: {
        [pageName]: searchParams[pageName] ? searchParams[pageName] : this.state.pagination.current,
        [pageSizeName]: searchParams[pageSizeName] ? searchParams[pageSizeName] : this.state.pagination.pageSize,
      },
      ...searchParams,
    };
    this.setState({
      pagination: {
        current: params.pagination[pageName],
        pageSize: params.pagination[pageSizeName],
      },
      loading: true,
    });
    queryData
        && queryData(params).then(res => {
          this.handleQueryData(res);
        });
  };

  onChange = (pagination, filters, sorter, extra) => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        current: pagination.current,
      },
    });
    this.props.queryData
      && this.props
        .queryData({
          pagination: {
            pageNum: pagination.current,
            pageSize: this.state.pagination.pageSize,
          },
          searchKey: this.state.searchKey,
        })
        .then(res => {
          this.handleQueryData(res);
        });
  };

  // 校验表单
  onSearchSubmit = () => {
    const {pageName, pageSizeName} = this.props;
    this.searchFormRef && this.searchFormRef.validateFields((err, values) => {
      if (err) {
        console.warn('form valid error:', err);
        return false;
      }
      console.log('values',values)
      this.setState({
        searchKey: values,
      });
      this.props.queryData({
        pagination: {
          [pageName]: this.state.pagination.current,
          [pageSizeName]: this.state.pagination.pageSize,
        },
        searchKey: values,
      }).then(res => {
        this.handleQueryData(res);
      });
    });
  };

  render() {
    const { data, loading, pagination} = this.state;
    const EnhancedSearchForm = createEnhancedSearchForm(
      this.props.CustomSearchForm,
    );
    const { hasTotalRow } = this.props;
    return (
      <React.Fragment>
        { EnhancedSearchForm && (
          <EnhancedSearchForm
            ref={ref => this.searchFormRef = ref}
            onSearchSubmit={this.onSearchSubmit}
          />
        )}
        <Table
          loading={loading}
          dataSource={data}
          onChange={this.onChange}
          pagination={{
            current: pagination.current,
            pageSize: hasTotalRow ? pagination.pageSize + 1 : pagination.pageSize,
            total: hasTotalRow ? pagination.total + 1 : pagination.total,
          }}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}
ClassicTable.defaultProps = {
  maximumFractionDigits: 2,
  pageName: 'pageNum',
  pageSizeName: 'pageSize',
  defaultPageSize: 40,
  initQuery: true,
  hasTotalRow: false,
};
export default ClassicTable;
