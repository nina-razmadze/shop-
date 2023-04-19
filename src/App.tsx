import { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './components/products/Products';
import IlustrationBooks from './components/products/Products';
import MachineLearning from '../src/components/MachineLearning/MachineLearning';

function App() {
  return (
    <BrowserRouter>
      <h1>Book Shop</h1>
      <div className='card text-center'>
        <nav className='card-header'>
          <ul className='nav nav-tabs card-header-tabs'>
            <li>
              <Link className='nav-link' to='/ilustration-books'>
                Ilustration Books
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/best-sellers'>
                Machine Learning
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/ilustration-books' element={<Products />}></Route>
          <Route path='/best-sellers' element={<MachineLearning />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
