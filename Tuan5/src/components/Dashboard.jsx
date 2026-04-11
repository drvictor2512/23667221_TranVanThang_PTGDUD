import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
        <div>Dashboard</div>
        <nav>
        <Link to='/dashboard/profile'>Profile</Link>
        <Link to='/dashboard/setting'>Setting</Link>
        <Link to='/dashboard/order'>Order</Link>
        </nav>
        <Outlet />  
    </>
  )
}

export default Dashboard