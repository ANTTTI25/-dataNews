import React from "react";
import ShowPoem from "../ShowPoem";
import round from '../../asserts/round.png';
import './index.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className='part2-container'>
      <div className="part2-header">
        <img src={round} className='round' />
        <span className="part2-title">
          前导互动
        </span>
      </div>
      <div className="part2-content">
        <ShowPoem content="太行之山何崔巍，岩幽谷隐藏风雷。（明·石珝）" position="left" />
        <ShowPoem content="莲华峰下锁雕梁，此去瑶池地共长。（唐·李商隐）" position="right" />
        <ShowPoem content="太行之山何崔巍，岩幽谷隐藏风雷。（明·石珝）" position="left" />
        <ShowPoem content="莲华峰下锁雕梁，此去瑶池地共长。（唐·李商隐）" position="right" />
      </div>
    </div>
  )
}