import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import Order from './page/Order'
import Product from './page/Product'
import MainLayout from './layout/MainLayout'
import { Shipping } from './page/Shipping'
import { NotFound } from './page/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* MainLayout wraps all routes sidebar consistent*/}
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="order" element={<Order />} />
          <Route path="product" element={<Product />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
