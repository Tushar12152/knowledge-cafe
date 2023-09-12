
import { useState } from 'react'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'


function App() {
  
  const [bookmarks,setBookmarks]=useState([])
  const [markTime,setMarkTime]=useState(0)
  const handleBookMaerk=(blog)=>{
    //  console.log(blog.title)
     setBookmarks([...bookmarks,blog])
  }

  const handleTime=time=>{
    // console.log('clicked time',time)
    setMarkTime(markTime+time)
  }

  return (
    <>
     
     <Header></Header>
      <div className='lg:flex'>
      <Blogs 
       handleBookMaerk={handleBookMaerk}
       handleTime={handleTime}
       ></Blogs>
      <Bookmarks bookmark={bookmarks} markTime={markTime} ></Bookmarks>

      {/* {
        bookmarks.map((bookmark,idx)=> <Bookmarks key={idx} bookmark={bookmark}></Bookmarks>)
      } */}
      </div>
    </>
  )
}

export default App
