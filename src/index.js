import React from 'react';
// import { IconContext } from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/Navbar';
import store from './redux/configureStore';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
    <FaBeer className="icon" />
  </Provider>,
);
