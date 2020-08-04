import { GlobalStateType } from './global'
import { ProductDefineStateType } from '../pages/productDefine/models/productDefine'
import { ConcatStateType } from '../pages/productConcat/models/concatDefine'
export interface GlobalModelType {
  global: GlobalStateType
  productDefine: ProductDefineStateType
  concatDefine: ConcatStateType
}
