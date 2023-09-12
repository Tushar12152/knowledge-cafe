import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const[blog,setBlog]=useState([])

    useEffect(()=>{
        const loadData=async()=>{
            const res=await fetch('block.json')
            const data=await res.json()
            setBlog(data)
        }
        loadData()
    },[])
    console.log(blog)
    return (
        <div>
              <h1>blogs</h1> 
        </div>
    );
};

export default Blogs;