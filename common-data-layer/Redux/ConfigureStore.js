import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'

import Config from '../Config/DebugConfig'

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  // saga
  const sagaMonitor = Config.useReactotron
    ? console.tron.createSagaMonitor()
    : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)
  enhancers.push(applyMiddleware(...middleware))

  // reactotron
  const createAppropriateStore = Config.useReactotron
    ? console.tron.createStore
    : createStore

  // redux dev tools
  const store = createAppropriateStore(
    rootReducer,
    composeWithDevTools({})(...enhancers)
  )

  const sagasManager = sagaMiddleware.run(rootSaga)
  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
