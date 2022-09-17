import React from "react";
import { useState } from "react";
import border from "../../asserts/showpoem-border.png";
import './index.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (prop) => {
  const { content, position, answer } = prop;
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div style={{
        display: showAnswer ? 'none' : 'block'
      }} className={`showpoem-container-${position} showpoem-container`} onClick={() => setShowAnswer(true)}>
        <img src={border} className={`showpoem-border-${position}`} />
        <span className={`showpoem-content-${position}`}>{content}</span>
      </div>
      <div style={{
        display: showAnswer ? 'flex' : 'none'
      }} className={`showpoem-answer-container ${showAnswer ? 'scale-up-hor-center' : ''}`}>
        <img src={border} className="showpoem-answer-border-left" />
        <div className="showpoem-answer-content">
          {answer || '大一百次'}
        </div>
        <img src={border} className="showpoem-answer-border-left" />
      </div>
    </>
  )
}