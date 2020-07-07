
/**
 * antd-table column interface
 * 使用方式:
 * const columnItem:TableColumnType = {}
 * or
 * const columns:TableColumnType[] = []
 */
declare interface TableColumnType {
  title: string;
  dataIndex: string;
  fixed?: boolean | string;
  width?: number;
  align?: 'center' | 'left' | 'right';
  key?: string;
  defaultSortOrder?: any;
  sorter?: any;
  sortOrder?: any;
  render?: (text: any, record: any, index: number) => React.ReactNode;
}
/**
 * 公共响应方式
 */
declare interface ResType<T> {
  success: boolean;
  code: string;
  value: T;
  message: string;
  pageNum?: number | null,
  pageSize?: number | null,
}

