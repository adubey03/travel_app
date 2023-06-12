import React from 'react'
import { useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

const AdminDashboard = () => {
  const navigate =useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/admin-login')
    }
   
  }, [])
  

  const HandleLogout = (e) =>{
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/admin-login')
  }
  return (
    <div>
      <h5>Admin Dashboard</h5>
      <button onClick={HandleLogout}>Logout</button>

    </div>
  )
}

export default AdminDashboard