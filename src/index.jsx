import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';
import userReducer from './store/reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
