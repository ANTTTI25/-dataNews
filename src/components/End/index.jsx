import React from "react";
import './index.css';
import round from '../../asserts/round.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="end-container">
      <div className="end-title-container">
        <img src={round} className="end-round-left" />
        <div className="end-title-content">
          尾声
        </div>
        <img src={round} className="end-round-right" />
      </div>
      <div className="end-content-container">
        <div className="end-content">
          对于不同的预备遗产，
        </div>
        <div className="end-content">
          申遗或是坦途，或是险途；
        </div>
        <div className="end-content">
          但对于所有遗产，
        </div>
        <div className="end-content">
          保护开发的每一步都是险途。
        </div>
        <div className="end-content">
          讲好中国故事，
        </div>
        <div className="end-content">
          先要记住和热爱中国故事；
        </div>
        <div className="end-content">
          遗产可以预备，
        </div>
        <div className="end-content">
          留存过往、赓续未来的初心不能预备。
        </div>
        <div className="end-content">
          惟愿遗产长久屹立，
        </div>
        <div className="end-content">
          正如辽阔深沉的华夏民族。
        </div>
      </div>
    </div>
  )
}