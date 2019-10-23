import React from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Post(props) {
  let post = props.data;
  let fullName = post.userFirstName + " " + post.userLastName;
  let postDate = new Date(post.postDate).toLocaleDateString();
  return (
    <div className="post-container">
      <div className="post-user-icon">
        <img src={post.userImgSrc} alt={fullName} className="post-icon" />
      </div>
      <div className="post-user-info">
        <p>
          <Link to={'/profile/' + post.userId}> {fullName} </Link>
          <br />
          Posted {postDate}
        </p>
      </div>
      <div className="post-text">
        <span>{post.content}</span>
      </div>
      <div className="post-image">
        <img src={post.imgSrc} alt={post.content} />
      </div>
    </div>
  );
}

Post.propTypes = {
    data : PropTypes.shape({
        userId : PropTypes.string,
        userFirstName : PropTypes.string,
        userLastName : PropTypes.string,
        userImgSrc : PropTypes.string,
        imgSrc : PropTypes.string,
        content : PropTypes.string,
        postDate : PropTypes.number
    })
}

export default Post;
