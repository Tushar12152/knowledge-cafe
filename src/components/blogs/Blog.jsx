import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
const Blog = ({blog,handleBookMaerk, handleTime}) => {
    // console.log(blog)
    const {cover_image,posted_date,author,author_img,reading_time,hashTagging, title}=blog
    return (
        <div>
             <div className="w-96 mx-auto mt-8 mb-16">
             <img className="w-full mx-auto" src={cover_image} alt="" />
               <div className="flex justify-between items-center mt-4">
               <div className="flex gap-4">
                 <div>
                     <img className="w-10 rounded-full" src={author_img} alt="" />
                 </div>
                 <div>
                     <h1 className="font-bold text-lg">{author}</h1>
                     <p className="text-gray-400 text-[12px]">{posted_date}</p>
                 </div>
              </div>
                <div>
                     <span className="text-gray-400 text-[12px] mb-4">{reading_time} munite ago</span>  
                     <button onClick={()=>handleBookMaerk(blog)} className='mt-6 ml-2 text-gray-400'> <FaBookmark/></button>      
                </div>
         </div>
         <h2 className="font-bold text-2xl">{ title}</h2>
         <p className="mt-2 text-gray-400">{hashTagging[0]} {hashTagging[1]}</p>
          <button onClick={()=> handleTime(reading_time)}  className='mt-6 text-blue-400 underline' href="">Mark as read</button>
             </div>
        </div>
    );
};

Blog.propTypes={
   blog:PropTypes.object.isRequired,
   handleBookMaerk:PropTypes.func.isRequired,
   handleTime:PropTypes.func.isRequired,
  
}
export default Blog;