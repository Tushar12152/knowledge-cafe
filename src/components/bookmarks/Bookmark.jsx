import PropTypes from 'prop-types'


const Bookmark = ({bookmark}) => {
//   console.log(bookmark.title)
    return (
        <div className='bg-gray-300 p-3   w-[60%]'>
             
                <h3 className='text-center bg-white p-3 rounded '>{bookmark.title}</h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object,
   
}

export default Bookmark;