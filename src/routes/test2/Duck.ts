import { Base } from 'observable-duck'
import { StreamerMethod } from 'observable-duck/decorator'
import { filterAction } from 'observable-duck/operator'
import { reduceFromPayload } from 'observable-duck/helper'

import { Observable } from 'rxjs'
import { Action } from 'redux'

export default class Test2 extends Base {
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
  @StreamerMethod()
  watchUpdate(action$: Observable<Action>) {
    const duck = this
    return action$.pipe(filterAction(duck.types.UPDATE)).subscribe(() => {
      const state = duck.getState()
      console.log('Personal Updated!')
    })
  }
}
