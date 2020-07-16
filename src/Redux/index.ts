import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducer";
import rootSaga from "./saga";

// Saga
const sagaMiddleware = createSagaMiddleware();

// Logger
const logger = createLogger({
  collapsed: true,
  diff: true,
});

// Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
