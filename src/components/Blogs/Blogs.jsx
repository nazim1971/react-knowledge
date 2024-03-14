import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark,handleTime}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="w-2/3" >
          <h1 className="text-3xl" >Blogs</h1>
            {
                blogs.map(item => <Blog handleTime={handleTime} handleBookmark={handleBookmark}  key={item.id}  blog={item} ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleBookmark: PropTypes.func.isRequired
}

export default Blogs;