import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router'
import Header from './components/layout/Header'
import { useAuthStore } from './stores/authStore'

const App = () => {
  const getProfile = useAuthStore(state => state.getProfile)
  useEffect(() => {

    getProfile();

  }, [getProfile])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App