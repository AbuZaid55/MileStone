import React from 'react';
import {Link} from 'react-router-dom'
import '../CSS/Home.css'
import Form from '../Component/Form';

const Home = (props) => {
  return (
    <div>
      <div style={{display:`${(props.showForm)?'':'none'}`}}><Form getBlogs={props.getBlogs} setShowForm={props.setShowForm}/></div>
      <div id='home'>
      {
        props.blogs.map((blog,index)=>{
          return <div key={index}>
          <img src={blog.url} alt="Thumbnail" />
          <h2>{blog.title}</h2>
          <p>{blog.desc}</p>
          <Link to={`/details/${index}`}><button>Read More</button></Link>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default Home
