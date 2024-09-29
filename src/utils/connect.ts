import { FunctionComponent } from 'react'
import { Base, DuckType, Store } from 'observable-duck'
import { connect as connectReact } from 'observable-duck/react'
import logger from '../plugin/logger'

export default function connect<TDuck extends DuckType<Base>, Props>(
  Duck: TDuck,
  Component: FunctionComponent<Props>
) {
  return connectReact(Store.create(Duck, { middlewares: [logger] }), Component)
}
