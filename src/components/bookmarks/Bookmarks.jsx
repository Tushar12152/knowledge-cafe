import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmark,markTime}) => {
    return (
        <div className="md:w-1/3 mt-8 ">
            <div className='bg-gray-300 p-3 rounded-lg  w-[60%]'>
            <h1 className='text-center text-blue-400'>Spent time on read : {markTime}</h1>
            </div>
            <h2 className='bg-gray-300 p-3 mt-4 font-bold  w-[60%]'>Bookmark Blogs:{bookmark.length}</h2>
             <div>
                  {/* <Bookmark bookmark={bookmark}></Bookmark> */}
                  {
                  bookmark.map(book=><Bookmark key={book.id} bookmark={book}
                    markTime={markTime}
                  ></Bookmark>)
                  }
             </div>

        </div>
    );
};
Bookmarks.propTypes={
    bookmark:PropTypes.object.isRequired,
    markTime:PropTypes.number.isRequired,
}

export default Bookmarks;