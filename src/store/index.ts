import { Store } from 'observable-duck'
import Root from './Root'
import logger from '@src/plugin/logger'

export const RootStore = Store.create(Root, {
  middlewares: [logger],
})
