import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title} = bookmark;
    return (
        <div >
            <h3 className='text-2xl my-5 rounded-2xl p-4 border-2 border-black bg-slate-200'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;