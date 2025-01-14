import { Store } from 'observable-duck'
import logger from '@/plugin/logger'
import Root from './Root'

export const RootStore = new Store(Root, { middlewares: [logger] })
