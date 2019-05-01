import React from 'react';

const Likes = props => {
    return [
        <div
        className='post-likes'
        key='likes-icons-container'
        onClick={props.incrementLike}
        >
            <div className='like-section-wrapper'>
                <img src='' alt='like' />
                <img src='' alt='comment' />
            </div>     
        <div className='like-section' key='likes-container'>
        <div className='like-section-wrapper'>{props.likes}</div>
        </div>
        </div>
    ]
}

export default Likes