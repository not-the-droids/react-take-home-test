import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)) //must keep this to utilize THUNK
);

export default store;