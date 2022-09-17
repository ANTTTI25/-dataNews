import React from "react";
import round from '../../asserts/round.png';
import './index.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="part1-container">
      <div className="part1-header">
        <img src={round} className='round' />
        <div className="part1-title">
          导语
        </div>
      </div>
      <div className="part1-content-container">
        <div className="part1-content">
          &nbsp;&nbsp;新冠肺炎疫情距今已两年有余，而且<span className="part1-content-sp">还将继续发挥余威</span>。
        </div>
        <div className="part1-content">
          <span className="part1-content-sp">&nbsp;&nbsp;疫情的颠覆性</span>渗透到生活的各个角落，已经很难找出不带疫情印记的事物。
        </div>
        <div className="part1-content part1-special">
          &nbsp;&nbsp;国内疫情形势总体好转，人们逐渐摆脱了封闭和隔离的禁锢。
        </div>
        <div className="part1-content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——去<span className="part1-content-sp">旅游</span>、去<span className="part1-content-sp">游玩</span>，自由的人们如同摆脱牢笼的囚鸟。
        </div>
        <div className="part1-content">
          &nbsp;&nbsp;但今非昔比，<span className="part1-content-sp">后疫情的旅游业已然巨变</span>。相比于景点游，周边游成为新
        </div>
        <div className="part1-content">
          宠，<span className="part1-content-sp">周边</span><span className="part1-content-sp">村镇、野外露营</span>渐成旅游新选择。
        </div>
        <div className="part1-content part1-special">
          &nbsp;&nbsp;对于依托景点游的世界遗产，这种转向值得忧虑，何况疫情已使它们元
        </div>
        <div className="part1-content">
          气大伤。
        </div>
        <div className="part1-content part1-special part1-content-bold">
          &nbsp;&nbsp;然而，在世界遗产之外，<span className="part1-content-sp">还有一类遗产</span>将面临<span className="part1-content-sp">更为严重的危机</span>。
        </div>
        <div className="part1-content part1-special">
          &nbsp;&nbsp;它们也是自然与历史的瑰丽结晶，却往往<span className="part1-content-sp">受到忽视或者混淆</span>。
        </div>
        <div className="part1-content part1-special">
          &nbsp;&nbsp;这篇数据新闻作品就将聚焦于这类遗产，带领读者走进这个隐秘的角
        </div>
        <div className="part1-content">
          落。
        </div>
        <div className="bottom-extra" />
      </div>
    </div>
  )
}