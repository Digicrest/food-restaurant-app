import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistStore } from 'redux-persist'
import './index.css'

import App from './App'
import Loader from './components/Loader'

import store from './store/store'
let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Loader />}
      persistor={persistor}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
