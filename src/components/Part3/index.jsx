import React from "react";
import part3_title from '../../asserts/part3-title.png';
import SelectCard from "../SelectCard";
import './index.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="part3-container">
      <img src={part3_title} className="part3-title" />
      <div className="part3-content1">
        &nbsp;&nbsp;人事有代谢，往来成古今。辽阔而深沉的华夏大地上有太多的山光水影、吉光片羽。人事不复，遗迹长存，文人墨客留下的雪泥鸿爪终究化作飘摇的千年一叹。如今，我们只能在与这些遗产的邂逅中，体会曾经的欢欣与悸动。
      </div>
      <div className="part3-content2">
        &nbsp;&nbsp;自1985年12月12日加入《保护世界文化与自然遗产公约》以来，中国拥有的世界遗产已达56项，是世界自然遗产数量最多的国家、世界文化与自然双重遗产数量最多的国家。即便如此，<span className="part3-content-red">仍有众多预备遗产在《世界遗产名录》的门口久久徘徊</span>。
      </div>
      <div className="part3-content2">
        &nbsp;&nbsp;<span className="part3-content-bigred">预备遗产</span>是指处在世界遗产预备名录但未被正式列入《世界遗产名录》的项目，《世界遗产名录》在原则上只接受预备名录里的遗产申报。进入预备名录后的遗产<span className="part3-content-red">有着迥异的命运</span>，有的很快就能顺利成为世界遗产，有的则要经历长久的修改与等待。在<span className="part3-content-red">“预备岁月”</span>里，有些遗产<span className="part3-content-red">卧薪尝胆</span>，终于申遗功成；有些遗产则<span className="part3-content-red">进退维谷</span>，与世界遗产<span className="part3-content-red">渐行渐远</span>……
      </div>
      <div className="part3-content2 part3-content-bold">
        &nbsp;&nbsp;很多人并不知道预备名录的存在，自然难以区分世界遗产和预备遗产。下面是8处著名的遗产，其中世界遗产和预备遗产各有4处。试着作出判断，检验一下你对遗产的了解吧！
      </div>
      <div className="part3-content3">
        <SelectCard />
      </div>
    </div>
  )
}