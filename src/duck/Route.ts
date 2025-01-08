import { Base } from 'observable-duck'
import { createToPayload, reduceFromPayload } from 'observable-duck/helper'

export default class Route extends Base {
  get quickTypes() {
    enum Type {
      SET,
    }
    return {
      ...Type,
    }
  }
  get reducers() {
    const types = this.types
    return {
      path: reduceFromPayload<string>(types.SET, '/'),
    }
  }
  get creators() {
    const { types } = this
    return {
      ...super.creators,
      set: createToPayload<string>(types.SET),
    }
  }
}
