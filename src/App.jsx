import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import ProductsDetails from './Pages/ProductsDetails'
import PageNF from './Pages/PageNF'
import Checkout from './Pages/Checkout'
import ProductsContext from './Contexts/ProductsContext'
import CardProvider from './Contexts/CardContext'
import Layout from './Components/Layout'

function App() {


  return (
    <>
     <ProductsContext>
     <CardProvider>
     <Layout>
     <Routes>
      <Route path='/' element={<Navigate to='/products' replace/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductsDetails/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<PageNF/>}/>
     </Routes>
     </Layout>
     </CardProvider>
     </ProductsContext>
    </>
  )
}

export default App
