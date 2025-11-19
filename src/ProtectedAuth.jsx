import React from 'react'
import { useAuthStore } from './stores/authStore'
import { Navigate, Outlet } from 'react-router'

const ProtectedAuth = () => {
     const user = useAuthStore(state => state.user)
     if (user) {
          return <Navigate to='/' />
     }
     return (
          <Outlet />
     )
}

export default ProtectedAuth