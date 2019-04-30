import React from 'react';

const PostContainer = () =>{
    return(
        <div className='post-container'>
        <div className='post-header'>
        <img src='' className='profile-img'></img>
        Insert username Here
        </div>
        <div>
        <img src='' className='post-img'></img>
        </div>
        <div className='post-footer'>
        <img src='' className='like-icon'></img>
        <img src='' className='comment-icon'></img>
        </div>
        <div className='like-counter'>
        22 likes
        </div>
        
        </div>
    )
}

export default PostContainer