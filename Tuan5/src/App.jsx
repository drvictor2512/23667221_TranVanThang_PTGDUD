import React, { Profiler } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import ProductDetail from './components/ProductDetail'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Setting from './components/Setting'
import Order from './components/Order'

const App = () => {

  return (
    <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </nav>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='/dashboard' element={<Dashboard />}>
              <Route path='/dashboard/profile' element={<Profile />}/>
              <Route path='/dashboard/setting' element={<Setting />}/>
              <Route path='/dashboard/order' element={<Order />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App