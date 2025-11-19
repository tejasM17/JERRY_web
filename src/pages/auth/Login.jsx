import React, { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'
import { useNavigate } from 'react-router-dom'

const Login = () => {
     const { login, loading } = useAuthStore();
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const navigate = useNavigate();

     const submitLogin = async (e) => {
          e.preventDefault();

          const result = await login(email, password);
          if (result.success) {
               navigate('/myprofile');
          }
     }

     return (
          <>
               <h1>Log in to your account</h1>
               <div className=''>
                    <form onSubmit={submitLogin}>
                         <input required type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
                         <br />
                         <input required type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                         <br />

                         <button type='submit' disabled={loading}>
                              {loading ? 'Logging in...' : 'Login'}
                         </button>
                    </form>

                    <p>Don't have an account?<a className='text-blue-400' href="/home/register">Sign Up</a></p>

                    <div className="space-y-4 mt-4">
                         <a
                              href="http://localhost:5000/api/auth/google"
                              className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                         >
                              Login with Google
                         </a>
                         <a
                              href="http://localhost:5000/api/auth/github"
                              className=" bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
                         >
                              Login with GitHub
                         </a>
                    </div>
               </div>
          </>
     )
}

export default Login