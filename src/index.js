import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import combineReducers from './reducers/index';

const initialState = {
  bikes: [
    {
      model: "VESPA C20",
      description: "The VESPA C20 is a stunning moped with a modern electronic system and more.",
      finance: 129,
      option: 249,
      total: 9879,
      duration: 48,
    },
    {
      model: "VESPA 946",
      description: "The VESPA 946 is our heritage model and boots the classical look with all the modern goods.",
      finance: 129,
      option: 249,
      total: 9879,
      duration: 48,
    },
    {
      model: "VESPA 820",
      description: "Our 820 model is the base VESPA which is not only very addorable but so much more.",
      finance: 129,
      option: 249,
      total: 9879,
      duration: 48,
    }
  ]
}

const store = createStore(combineReducers, {
  bikes: initialState.bikes,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
