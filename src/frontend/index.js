import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './routes/App';
import reducer from './reducers';

if (typeof window !== 'undefined') {
  let composeEnhancers;
  if (process.env.NODE === 'production') composeEnhancers = compose;
  else composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const preloadState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadState, composeEnhancers(applyMiddleware(thunk)));
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
}
