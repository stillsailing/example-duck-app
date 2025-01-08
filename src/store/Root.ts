import { Base } from 'observable-duck'
import { reduceFromPayload } from 'observable-duck/helper'
import { Action } from 'observable-duck/decorator'
import { take } from 'observable-duck/operator'
import { Observable } from 'rxjs'
import { Action as ReduxAction } from 'redux'
import Route from '@src/duck/Route'

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
