import React from 'react'

const LikeSection = props => {
    return [
        <div 
        className='like-section'
        key='likes-icons-container'
        onClick={props.incrementLike}
        > 
        <div className="commentlike">
          <i className="far fa-heart" />
        </div>

        <div className='commentbubble'>
            <i class="far fa-comment"></i>
        </div>

            <div className='like-section' key='likes-container'>
                <div className='like-section-wrapper'>{props.likes} likes</div>
            </div>
        </div>
    ]
}

export default LikeSection;