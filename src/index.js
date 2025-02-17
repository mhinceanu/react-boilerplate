import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import createStore from './store/createStore';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

const storeConfig = createStore({});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <storeConfig.Provider store={storeConfig.store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </storeConfig.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
