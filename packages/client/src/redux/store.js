import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userInitialState from "./user/state";

import CombinedReducers from "./reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware = devTools
  ? compose(applyMiddleware(thunk), devTools)
  : compose(applyMiddleware(thunk));

const ls = {
  user: userInitialState,
};

const store = createStore(CombinedReducers, ls, appliedMiddleware);

// store.subscribe(() => setLocalStorage(store.getState().queue, PLAYER_QUEUE));

export default store;
