import React ,{useState,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './Component/Header'
import Home from './Pages/Home'
import Details from './Pages/Details'
import './CSS/App.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showForm,setShowForm]=useState(false)
  const [blogs,setBlogs]=useState([])
  const getBlogs = ()=>{
    const data = JSON.parse(localStorage.getItem("blogs"))
    if(data && data.length>0){
      setBlogs(data)
    }
  }
  useEffect(()=>{
    getBlogs()
  },[])
  return (
    <div>
      <Header setShowForm={setShowForm}/>
      <Routes>
        <Route path='/' element={<Home getBlogs={getBlogs} blogs={blogs} showForm={showForm} setShowForm={setShowForm}/>}/>
        <Route path='/details/:index' element={<Details blogs={blogs}/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
