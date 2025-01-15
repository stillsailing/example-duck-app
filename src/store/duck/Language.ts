import { Base } from 'observable-duck'
import { Observable } from 'rxjs'
import { createToPayload, reduceFromPayload } from 'observable-duck/helper'
import { Action } from 'observable-duck/decorator'
import { take } from 'observable-duck/operator'

import i18n from '@/i18n'

export default class Language extends Base {
  get quickTypes() {
    enum Type {
      SET_LANGUAGE,
    }
    return {
      ...Type,
    }
  }
  get reducers() {
    const types = this.types
    return {
      language: reduceFromPayload<string>(types.SET_LANGUAGE, i18n.language),
    }
  }
  get creators() {
    const { types } = this
    return {
      ...super.creators,
      setLanguage: createToPayload<string>(types.SET_LANGUAGE),
    }
  }
  @Action
  takeSetLanguage(action: Observable<ReduxAction<string>>) {
    const { types } = this
    return action.pipe(take(types.SET_LANGUAGE)).subscribe((action) => {
      i18n.changeLanguage(action.payload)
    })
  }
}
