import React from 'react'
import '../CSS/Details.css'
import {useParams} from 'react-router-dom'

const Details = (props) => {
  const index = useParams().index
  const blogs = props.blogs 
 if(blogs.length>0){
  return (
    <div id='details'>
      <div>

        <div>
          <div>
            <h1>{blogs[index].title}</h1>
            <p>{blogs[index].desc}</p>
          </div>
          <div><img src={blogs[index].url} alt="Image" /></div>
        </div>

        <div>
          <p>{blogs[index].details}</p>
        </div>
      </div>
    </div>
  )
 }
}

export default Details
