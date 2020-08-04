/**
 * @description 如果要使用其他第三方库的antd hook比如ahooks
 * 将三方库的hook引进来，在此文件自定义，一同返回出去
 * 泛型<T>, 是指列表每一项的字段 UseAntdTable<ResData>
 */
import { PaginationProps } from 'antd/es/pagination'
import { TableProps } from 'antd/es/table'
import useAntdPage, { PageProps, returnTypes } from './useAntdPage'
import { useState } from 'react'
interface PropTypes {
  pagination?: PageProps
}
interface tableReturnTypes {
  pagination: returnTypes
}
export default function UseAntdTable<T>(props: PropTypes): tableReturnTypes {
  const pagination = useAntdPage(props.pagination)
  const defaultTableConfig: TableProps<T> = {
    // loading={tableLoading}
    // columns={columns}
    // dataSource={dataList}
    // scroll={{
    //   y: 500,
    // }}
    // rowKey={(record: any) => record.id}
    // pagination={{
    //   ...defaultPageConfig,
    // }}
  }
  return {
    pagination,
  }
}
