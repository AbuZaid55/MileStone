import React from 'react'
import {useLocation , useNavigate} from 'react-router-dom'
import '../CSS/Header.css'

const Header = (props) => {
  const location = useLocation().pathname
  const navigate = useNavigate()
  return (
    <div id='header'>
      <h1>PWSkills Blog</h1>
      <span onClick={()=>{props.setShowForm(true)}} style={{display:`${(location==='/')?'':'none'}`}}>&#43;</span>
      <span onClick={()=>{navigate('/')}} style={{display:`${(location.includes('/details/'))?'':'none'}`}}>&#8592;</span>
    </div>
  )
}

export default Header
