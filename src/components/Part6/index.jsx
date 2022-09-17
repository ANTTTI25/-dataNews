import React from "react";
import './index.css';
import round from '../../asserts/round.png';
import Map from "../Part5/Map";
import content1 from '../../asserts/part6-content1.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="part6-container">
      <div className="part6-title-container">
        <img className="part6-round" src={round} />
        <div className="part6-title-content">
          进退维谷：两难的选择题
        </div>
      </div>
      <div className="part6-subtitle1">
        遗产资源与经济水平不均衡的问题
      </div>
      <div className="part6-content1-container">
        <div className="part6-content1">
          &nbsp;&nbsp;我们不能将华山申遗的失意看作完全的错误，因为<span className="part6-content1-red">保护与开发的矛盾</span>本就是一个难以解决的问题。一方面，世界遗产的苛刻要求对预备遗产的开发程度有限，对于经济收益有所限制；另一方面，申遗工作所耗费的<span className="part6-content1-red">大量钱财</span>几乎<span className="part6-content1-red">都由当地和上级政府部门承担</span>。
        </div>
        <div className="part6-content1">
          &nbsp;&nbsp;预备遗产的“造血”相比于“吸血”只能是杯水车薪，往往会成为当地政府的一个甚至几个财政包袱。同时，我国的世界遗产地图和预备遗产地图呈现出了一个<span className="part6-content1-red">重大问题</span>：<span className="part6-content1-red">遗产资源和经济水平的不均衡</span>。一些遗产资源丰富的省份，却不一定具有申遗所需的雄厚财力。尤其是预备时间长的遗产项目，是否要投入资金去拼搏希望越来越渺茫的申遗机会，这是摆在当地政府面前的一道难题。
        </div>
      </div>
      <div className="part6-map" style={{
        marginLeft: '-300px'
      }}>
        <Map style={{
          height: '767px',
        }} />
      </div>
      <div className="part6-content2-container">
        <div className="part6-content2">
          &nbsp;&nbsp;新冠疫情为预备遗产本就不明朗的未来<span className="part6-content1-red">继续蒙上了阴影</span>。在联合国教科文组织（UNESCO）的调查报告《新冠肺炎疫情下的世界遗产》中，截至2021年2月，仍有71％的世界遗产地<span className="part6-content1-red">处于关闭状态</span>；2020年，赴世界遗产地旅游的游客减少了66％，旅游地40％的正式员工和53％的临时员工<span className="part6-content1-red">面临失业</span>。拥有世界遗产加成的遗产地都已如此，预备遗产自然更加艰难。后疫情时代旅游业的转向又为继续申遗增添了新的阻力，坚持与否，<span className="part6-content1-red">越来越难以抉择</span>。
        </div>
      </div>
      <div className="part6-subtitle2">
        泉州经验
      </div>
      <div className="part6-content3-container">
        <div className="part6-content3">
          &nbsp;&nbsp;虽然不易，但总还有成功的希望。2021年7月25日，世界遗产委员会决定将<span className="part6-content1-red">“泉州：宋元中国的世界海洋商贸中心”</span>列入《世界遗产名录》，泉州历经20年<span className="part6-content1-red">终于申遗成功</span>。通过回顾泉州的申遗长路，也许能为依然在为申遗奔走的预备遗产提供经验。
        </div>
      </div>
    </div>
  )
}