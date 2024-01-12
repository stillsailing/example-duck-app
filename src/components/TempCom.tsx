import { Base, ConnectedProps, Runtime, StreamerMethod } from 'observable-duck';
import * as React from 'react';
import logger from '../plugin/logger';

function TempCom(props: ConnectedProps<Temp> & { name: string }) {
  const { store, name } = props;
  return <div style={{ border: '1px solid', padding: 8 }}>TempCom-{name}: {store.temp.getTime()}</div>;
}

class Temp extends Base {
  get reducers() {
    return {
      temp: (state = new Date(), action) => state
    }
  }
  @StreamerMethod()
  watch() {}
}

export const TempCom1 = Runtime.create(Temp, { middlewares: [logger] }).connect(TempCom)
export const TempCom2 = Runtime.create(Temp, { middlewares: [logger] }).connect(TempCom)