import React from 'react';
import { Select } from 'antd';
import XIcon from '@/components/XIcon';

const { Option } = Select;
const suffixIcon = (
  <div style={{ color: '#909090', fontSize: '20px' }}>
    <XIcon type="iconxialashaixuanbutton" />
  </div>
);

class CustomSelect extends React.Component {
  state = {
    dataList: [],
    status: 'all',
  };

  componentDidMount() {
    const {searchParams} = this.props;
    this.getList(searchParams);
  }

  componentDidUpdate(prevProps, prevState) {
    const { value, customData, dependencyProps, searchParams} = this.props;
    if (JSON.stringify(value) !== JSON.stringify(prevProps.value)) {
      this.getValueAndSetStatus(value);
    }
    if (JSON.stringify(customData) !== JSON.stringify(prevProps.customData)) {
      this.getList();
    }
    if (JSON.stringify(searchParams) !== JSON.stringify(prevProps.searchParams)) {
      this.getList(searchParams);
    }
    if (dependencyProps && dependencyProps.length) {
      dependencyProps.forEach(item => {
        if (prevProps[item] !== this.props[item]) {
          this.getList();
        }
      });
    }
  }

  getList = (params = {}) => {
    const { queryData, customData } = this.props;
    if (customData && Array.isArray(customData)) {
      this.setState({dataList: customData}, () => {
        const {value} = this.props;
        this.getValueAndSetStatus(value);
      });
    }
    if (queryData && !customData) {
      queryData(params).then(data => {
        if (Array.isArray(data)) {
          this.setState({ dataList: data }, () => {
            const {value} = this.props;
            this.getValueAndSetStatus(value);
          });
        }
      });
    }
  };

  onChange=(value, option) => {
    const {onChange} = this.props;
    console.log('onChange',onChange)
    let changeOption = option.props;
    const {dataList} = this.state;
    if (Array.isArray(option)) {
      changeOption = option.map(optionItm => optionItm.props);
    }
    value = this.getValueAndSetStatus(value);
    onChange && onChange(value, changeOption, dataList);
  };

  getValueAndSetStatus = (value) => {
    const {mode, matchKey, hasAll} = this.props;
    const {dataList} = this.state;
    if (mode === 'multiple' && Array.isArray(value)) {
      if (value.includes(''))value = dataList.map(itm => itm[matchKey]);
      if (value.includes('none'))value = [];
      if (hasAll && dataList.length) {
        const status = dataList.every(itm => value.includes(itm[matchKey])) ? 'none' : 'all';
        this.setState({status});
      }
    }
    return value;
  };

  getSelectSettings = () => {
    const { mode, onChange, ...rest } = this.props;
    const multipleSetting = { };
    if (mode === 'multiple') {
      multipleSetting.maxTagCount = 1;
      multipleSetting.maxTagTextLength = 10;
      multipleSetting.maxTagPlaceholder = (a) => `已选${a.length + 1}项`;
    }
    const settings = {
      suffixIcon,
      mode,
      style: rest.style ? rest.style : { width: '100%' },
      showSearch: true,
      optionFilterProp: 'children',
      showArrow: true,
      onChange: this.onChange,
      ...multipleSetting,
      ...rest,
    };
    return settings;
  };

  render() {
    const {hasAll, renderOptions, mode} = this.props;
    const {dataList, status} = this.state;
    const settings = this.getSelectSettings();
    const options = renderOptions && renderOptions(dataList);
    const allOption = {
      all: <Option value="" label="全选">{mode === 'multiple' ? '全选' : '全部' }</Option>,
      none: <Option value="none" label="取消全选">取消全选</Option>,
    }[status];
    console.log('this.props.onChange',this.props.onChange)
    return (
      <Select {...settings}>
        {hasAll && dataList.length > 0 && allOption}
        {options}
      </Select>
    );
  }
}
CustomSelect.defaultProps = {
  hasAll: false, // 是否提供全部选项
  matchKey: 'value', // 便利源数据匹配的key，多选并且带有全选时必传
};
CustomSelect.Option = Option;

export default CustomSelect;
