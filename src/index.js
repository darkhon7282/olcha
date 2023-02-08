import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// redux - ma'lumotlarni bir joydan boshqa joyga yuborish uchun kerak
import rootReducer from './context/reducer';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

