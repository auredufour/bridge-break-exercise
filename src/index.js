import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import configureStore from './store/configure-store';
import 'rxjs';

const store = configureStore()

ReactDOM.render(  
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
