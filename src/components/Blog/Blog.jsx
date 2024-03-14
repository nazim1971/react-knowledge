import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookmark,handleTime}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;

    return (
        <div className='my-10 border-2 border-red-500 rounded-2xl' >
            <img className='w-full rounded-2xl' src={cover} alt={`cover picture of title ${title}`} />
           <div className='flex justify-between items-center my-4'>    
           <div className='flex items-center gap-4' >
                <img className='w-[70px]' src={author_img} alt="" />
                <div>
                    <h3>{author}</h3>
                    <h3>{posted_date}</h3>
                </div>
            </div>

            <div className='flex gap-2' ><p>{reading_time} min read </p>
            <button onClick={()=>handleBookmark(blog)} className='text-red-600' ><FaBookmark></FaBookmark></button>
            </div>
           </div>
            <h2 className='text-3xl' >{title}</h2>
            {
                hashtags.map((id,idx) => <a key={idx} className='px-2' >#{id}</a>)
            }
            <br />
            <button onClick={()=> handleTime(reading_time)} className='p-2 bg-slate-300 rounded-3xl' >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default Blog;