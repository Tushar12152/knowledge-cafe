import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMaerk, handleTime}) => {
    const[blogs,setBlog]=useState([])

    useEffect(()=>{
        const loadData=async()=>{
            const res=await fetch('block.json')
            const data=await res.json()
            setBlog(data)
        }
        loadData()
    },[])
    // console.log(blogs)
    return (
        <div className="md:w-2/3">
             
              {
                blogs.map(blog=><Blog handleBookMaerk={handleBookMaerk}
                    handleTime={ handleTime}
                    key={blog.id} blog={blog}></Blog>)
              }
        </div>
    );
};
Blogs.propTypes={
    handleBookMaerk:PropTypes.func,
    handleTime:PropTypes.func.isRequired,
}

export default Blogs;