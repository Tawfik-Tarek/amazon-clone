import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Checkout, Home, Navbar, ProductsPage, SearchRes } from './components'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchRes />} />
        <Route path="/product/:id" element={<ProductsPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App