import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router'
import { useAuthStore } from './stores/authStore'
import Register from './pages/auth/Register.jsx'
import Login from './pages/auth/Login.jsx'
import Myprofile from './pages/auth/Myprofile.jsx'
import Editprofile from './pages/auth/Editprofile.jsx'
import Home from './pages/Home.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import GetStarted from './pages/GetStarted.jsx'
import ProtectedAuth from './ProtectedAuth.jsx'
import Currency from './pages/content/Chat.jsx'
import App from './App.jsx'

const AppWrapper = () => {
  const { handleOAuthToken } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      handleOAuthToken(token);
      navigate('/myprofile', { replace: true });
    }
  }, [location, navigate, handleOAuthToken]);

  return (
    <Routes>
      <Route path='/' element={<App />}>

        <Route element={<ProtectedAuth />}>
          <Route path='/getstarted' element={<GetStarted />} />
          <Route path='/home/register' element={<Register />} />
          <Route path='/home/login' element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Currency />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/myprofile/edit' element={<Editprofile />} />
        </Route>
      </Route>
    </Routes>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </StrictMode>
)