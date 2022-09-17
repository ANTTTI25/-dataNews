import React from "react";
import round from '../../asserts/round.png';
import progress from '../../asserts/progress.png';
import './index.css';
import Pie from './Pie.jsx';
import Column from './Column.jsx';
import { useEffect } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const pieData = [
    { type: "申遗一次成功", value: 54 },
    { type: "申遗多次成功", value: 2 },
  ]
  // useEffect(() => {
  //   const piePlot = new Pie('part4-pie', {
  //     pieData,
  //     angleField: 'value',
  //     colorField: 'type',
  //   });
    
  //   setpiePlot.render();
  // }, [])
  return (
    <div className="part4-container">
      <div className="part4-title">
        <img src={round} className="part4-round" />
        <div className="part4-title-content">望眼欲穿：拥挤的申遗路</div>
      </div>
      <div className="part4-content1-container">
        <div className="part4-content1">
          通过联合国教科文组织世界遗产中心（WHC）的公告，我们知道了一项遗产<span className="part4-content1-red">从申请到正式成为世界遗产的流程</span>：
        </div>
        <div className="part4-content1">
          &nbsp;&nbsp;①<span className="part4-content1-red">暂定名单</span>：缔约国对其境内的重要自然和文化遗产进行“清点”。 
        </div>
        <div className="part4-content1">
          &nbsp;&nbsp;②<span className="part4-content1-red">提名文件</span>：缔约国编制暂定名单并从中选择地点，提交申报文件。
        </div>
        <div className="part4-content1">
          &nbsp;&nbsp;③<span className="part4-content1-red">咨询机构</span>：被提名的遗产由《世界遗产公约》授权的两个咨询机构进行独立评估：国际古迹遗址理事会
      （ICOMOS）和国际自然保护联盟（IUCN），它们分别提供对文化  和自然遗址的评估。第三个咨询机构是国际文
      化财产保存和修复研究中心（ICCROM），这是一个政府间组织，就文化遗址保护以及培训活动向委员会提供专家
      咨询意见。
        </div>
        <div className="part4-content1">
          &nbsp;&nbsp;④<span className="part4-content1-red">委员会审议</span>：委员会每年举行一次会议，决定哪些遗产地将列入《世界遗产名录》。
        </div>
      </div>
      <div className="part4-borderline">
        <img src={progress} style={{
          width: '1514px',
          marginLeft: '-320px',
        }} />
      </div>
      <div className="part4-content1-container part4-content2-container">
        <div className="part4-content1 part4-content2">
          &nbsp;&nbsp;在申报流程中，还有<span className="part4-content1-red">两个重要条件</span>不可忽视：2000年的<span className="part4-content1-red">“凯恩斯决定”</span>与2004年的<span className="part4-content1-red">“苏州决定”</span>。前者规定缔约国每年只能申报一项世界遗产；后者则对前者做了修改：从2006年起，一个缔约国<span className="part4-content1-red">每年可至多申报两项世界遗产</span>，其中至少有一项是自然遗产。因此，对于《中国申请世界遗产预备名单》中的61项预备遗产来说，要想申遗就必须<span className="part4-content1-red">“排队”</span>。
        </div>
        <div className="part4-content1 part4-content2">
          &nbsp;&nbsp;预备遗产的申遗往往需要等待，那些申遗成功的预备遗产往往也在预备名录里待了很久。而让这份等待更难熬的则是<span className="part4-content1-red">不确定性</span>。申遗不仅是<span className="part4-content1-red">“排队”</span>，还是<span className="part4-content1-red">“插队”</span>：申遗不是论资排辈，先到先得，而是<span className="part4-content1-red">相互竞争</span>、<span className="part4-content1-red">优中选优</span>，国家会优先考虑<span className="part4-content1-red">准备最充分的遗产</span>作为当年的申报项目。
        </div>
        <div className="part4-maps">
          <Pie />
          <Column />
        </div>
      </div>
    </div>
  )
}