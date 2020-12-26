import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import manageFoodAdvice from './reducers/manageFoodAdvice';
import manageJournal from './reducers/manageJournal';
import manageResources from './reducers/manageResources';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  manageFoodAdvice,
  manageJournal,
  manageResources
});

let store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <>
    <style type="text/css">
      {`
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }

        body {
          font-family: Arial;
          background-color: #5D72D0;
          color: white;
        }
        html {
          font-size: 62.5%;
        }
      `}
    </style>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </>,
  document.getElementById('root')
);