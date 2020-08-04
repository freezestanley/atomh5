import { PaginationProps } from 'antd/es/pagination'
import { useState } from 'react'
export interface PageProps {
  pageNum?: number
  onShowSizeChange?: PaginationProps['onShowSizeChange']
  onChange?: PaginationProps['onChange']
}
export interface returnTypes {
  total: number
  defaultPageConfig: PaginationProps
  setTotal: React.Dispatch<React.SetStateAction<number>>
  defaultPageNum: number
  defaultPageSize: number
  current: number
  setPageNum?: React.Dispatch<React.SetStateAction<number>>
  setPageSize?: React.Dispatch<React.SetStateAction<number>>
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}
export default function UseAntdPage(params: PageProps): returnTypes {
  const [total, setTotal] = useState<number>(0)
  const [current, setCurrent] = useState<number>(params.pageNum || 1)
  // const [pageSize, setPageSize] = useState<number>(20)
  const defaultPageNum = 1
  const defaultPageSize = 20
  const defaultPageConfig: PaginationProps = {
    total,
    current,
    // pageSize,
    showQuickJumper: true,
    showSizeChanger: true,
    // hideOnSinglePage: false,
    pageSizeOptions: ['20', '30', '40'],
    defaultPageSize: 20,
    showTotal: total => `总计: ${total}条`,
    // ! antd4 触发onShowSizeChange，也会同时触发onChange，做分页只需要onChange就够了
    onShowSizeChange: params?.onShowSizeChange,
    onChange: params?.onChange,
  }
  return {
    total,
    current,
    setCurrent,
    defaultPageConfig,
    setTotal,
    defaultPageNum,
    defaultPageSize,
    // setPageNum,
    // setPageSize,
  }
}
