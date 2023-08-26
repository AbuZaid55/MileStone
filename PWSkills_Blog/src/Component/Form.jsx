import React,{useState} from 'react'
import '../CSS/Form.css'
import {toast} from 'react-toastify'

const Form = (props) => {
    const [data,setData]=useState({url:"",title:"",desc:"",details:""})

    const addBlog = (e)=>{
        e.preventDefault()
        let blogs = JSON.parse(localStorage.getItem('blogs'))
        if(!blogs){
            localStorage.setItem("blogs",JSON.stringify([data]))
        }else{
            blogs.push(data)
            localStorage.setItem("blogs",JSON.stringify(blogs))
        }
        props.getBlogs()
        setData({url:"",title:"",desc:"",details:""})
        toast.success("Blog Added Successfully")
        props.setShowForm(false)
    }
    return (
        <div id='form'>
            <div>
                <span onClick={() => { props.setShowForm(false) }}>&#215;</span>
                <form onSubmit={(e)=>{addBlog(e)}}>
                    <input value={data.url} onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='url' type="text" placeholder='Enter Thumbnail URL' />
                    <input value={data.title} onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='title' type="text" placeholder='Enter Blog Title' />
                    <input value={data.desc} onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='desc' type="text" placeholder='Enter Blog Description' />
                    <textarea value={data.details} onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}} name='details' placeholder='Write..'></textarea>
                    <button>Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default Form
