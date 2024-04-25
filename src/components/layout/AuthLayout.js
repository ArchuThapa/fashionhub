import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {

  return (
    <div>
      <div className="bg-slate-500 h-[100vh] flex justify-center">
        <Outlet />
    </div>
    </div>
  )
}

export default AuthLayout


