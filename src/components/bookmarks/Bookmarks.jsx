import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks,readingTime}) => {

    return (
        <div className="w-1/3" >
            <h3>Spent time on read : {readingTime} min</h3>
            <h1 className="text-3xl">BookMarked Blog: {bookmarks.length}</h1>
            {
             bookmarks.map(id => <Bookmark key={id.id} bookmark={id} >  </Bookmark>)
                }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.func.isRequired
}

export default Bookmarks;