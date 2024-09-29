import { Base } from 'observable-duck'
import { reduceFromPayload } from 'observable-duck/helper'
import { StreamerMethod } from 'observable-duck/decorator'
import { filterAction } from 'observable-duck/operator'
import { Observable } from 'rxjs'
import { Action } from 'redux'

class AppBase extends Base {
  get quickTypes() {
    enum Type {
      UPDATE,
    }
    return {
      ...Type,
    }
  }
  get reducers() {
    const types = this.types
    return {
      stamp: reduceFromPayload<number>(types.UPDATE, Date.now()),
      version: (state = '1.0') => state,
    }
  }
  get creators() {
    const { types } = this
    return {
      ...super.creators,
      update: () => ({ type: types.UPDATE, payload: Date.now() }),
    }
  }
  @StreamerMethod()
  watchUpdate(action$: Observable<Action>) {
    const duck = this
    return action$.pipe(filterAction(duck.types.UPDATE)).subscribe(() => {
      const state = duck.getState()
      console.log('App Updated!')
    })
  }
}

export default class AppDuck extends AppBase {
  get quickTypes() {
    enum Type {
      UPDATE,
    }
    return {
      ...super.quickTypes,
      ...Type,
    }
  }
}
