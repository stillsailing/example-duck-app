import { Runtime } from 'observable-duck'
import Template from './Template'
import Duck from './Duck'

export default Runtime.create(Duck).connect(Template)
