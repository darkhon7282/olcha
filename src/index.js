import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "number-brm"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BackToTop from "../src/components/back-to-top/BackToTop"

// redux - ma'lumotlarni bir joydan boshqa joyga yuborish uchun kerak
import rootReducer from './context/reducer';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux-persist - Redux va localstorage bilan ishlash
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { SkeletonTheme } from 'react-loading-skeleton';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["cart", "heart"],
  blacklist: ["water"]
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

// const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SkeletonTheme baseColor='#eee' highlightColor='#f7f7f7' duration={3}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <BackToTop/>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </SkeletonTheme>
  
);

