import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store';
import DevTools from './components/devtool';
import RootRoute  from './routes'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <RootRoute history={history} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
