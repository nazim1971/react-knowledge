import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)
  }

  const handleTime = time =>{
    setReadingTime(readingTime+time)
  }
  return (
    <>
      
      <Header></Header> 
      <div className='md:flex'>
      <Blogs handleBookmark={handleBookmark} handleTime={handleTime} > </Blogs> 
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}  ></Bookmarks>
      </div>    
    </>
  )
}

export default App
