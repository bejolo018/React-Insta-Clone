import React from 'react';
import './CommentSection.css'

const CommentInput = props => {
  return (
    <form>
      <input type="text" 
      value={props.comment} 
      placeholder="Add comment... "
      onChange={props.changeComment}
       />
    </form>
  );
};

export default CommentInput;