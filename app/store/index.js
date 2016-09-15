import React from 'react';
import { createStore } from 'redux';
import { createDevTools } from 'redux-devtools'

import reducer from '../reducers'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
  )

export default function configureStore(initialState) {
  //const store = createStore(lotteryApp, initialState, enhancer);

  const store = createStore(
    reducer,
    DevTools.instrument()
  )
  return store;
}


