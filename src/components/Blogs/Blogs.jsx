import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="w-2/3" >
            {/* {
                blogs.map(item=> <img src={item.cover} key={item.div} ></img>)
            } */}
            <h1 className="text-3xl" >Blogs</h1>
        </div>
    );
};

export default Blogs;