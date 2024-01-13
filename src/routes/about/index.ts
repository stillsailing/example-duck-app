import { Runtime } from "observable-duck";
import Template from "./Template";
import Duck from "./Duck";
import logger from "../../plugin/logger";

export default Runtime.create(Duck, { middlewares: [logger] }).connect(
  Template
);
