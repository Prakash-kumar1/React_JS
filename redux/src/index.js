import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider } from 'react-redux' ;

// This store from store folder with file index.js [manit]
// import store from './store/index';

// This store from app folder with file store.js [Geeky shows]
import {store} from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// Provider is a wrapper component which gives the feature to access 
// the store to all the child components .
    <Provider store={store}> 
    {/* // wrapped your app in the Provider */}
    <App />
    </Provider>
);

reportWebVitals();
