import { Base } from 'observable-duck'
import Route from '@/duck/Route'

export default class Root extends Base {
  get quickTypes() {
    enum Type {}
    return {
      ...Type,
    }
  }
  get reducers() {
    const types = this.types
    return {}
  }
  get creators() {
    const { types } = this
    return {
      ...super.creators,
    }
  }
  get quickDucks() {
    return {
      route: Route,
    }
  }
}
