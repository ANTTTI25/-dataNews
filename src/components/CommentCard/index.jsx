import React from "react";
import './index.css';
import commentLeft from '../../asserts/comment-left.png';


// eslint-disable-next-line import/no-anonymous-default-export
export default (prop) => {
  const { avatar, comment, position, name } = prop;

  return (
    <div className="card-container">
      {position === 'left' ? (
        <>
          <img className="card-avatar-left" src={avatar} />
          <div className="card-comment-container-left">
            <img src={commentLeft} className="card-comment-left" />
            <div className="comment-left-main">
              <div className="comment-main-name">
                { name }
              </div>
              <div className="comment-main-comment">
                &nbsp;&nbsp;{ comment }
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card-comment-container-left reverse">
            <img src={commentLeft} className="card-comment-left" />
            <div className="comment-left-main reverse">
              <div className="comment-main-name">
                { name }
              </div>
              <div className="comment-main-comment">
                &nbsp;&nbsp;{ comment }
              </div>
            </div>
          </div>
          <img className="card-avatar-right" src={avatar} />
        </>
      )}
    </div>
  )
}