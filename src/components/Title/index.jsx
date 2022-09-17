import React from "react";
import './index.css';
import header from '../../asserts/header.png';
import img3_1 from '../../asserts/3-1.svg';
import img3_2 from '../../asserts/3-2.svg';
import back_img from '../../asserts/title-background.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="header">
      <img src={header} className="header-img" />
      {/* <img src={back_img} className="back-img" /> */}
      <div className="title">
        预备遗产之路：坦途还是险途？
      </div>
      <img src={img3_1} className="img3-1" />
      <img src={img3_2} className="img3-2" />
    </div>
  )
}