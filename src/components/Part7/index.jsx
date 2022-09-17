import React from "react";
import './index.css';
import round from '../../asserts/round.png';
import CommentCard from "../CommentCard";
import comment1 from '../../asserts/comment-1.jpg';
import comment2 from '../../asserts/comment-2.png';
import comment3 from '../../asserts/comment-3.jpg';
import comment4 from '../../asserts/comment-4.jpg';
import comment5 from '../../asserts/comment-5.jpg';
import DemoHeatmap from "./HeatMap.jsx";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="part7-container">
      <div className="part7-title-container">
        <img src={round} className="part7-title-img" />
        <div className="part7-title-content">
          柳暗花明：多样的保护途径
        </div>
      </div>
      <div className="part7-content1-container">
        <div className="part7-content1">
          &nbsp;&nbsp;行路至此，我们对于申遗或许会有所动摇。这些年来，不少学者提出了关于“申遗热”的反思。尤其随着教科文组织对申遗标准的愈益收紧和申遗成本的水涨船高，人们对于申遗的热情也在降温，申遗越来越成为一个需要认真思考、谨慎权衡的选择。
        </div>
      </div>
      <div className="part7-comments">
        <CommentCard avatar={comment1} position={'left'} name='阮仪三（著名古城保护专家）' comment='  现在各地方政府，对世界遗产的认识普遍有所偏差。有些地方领导干部，把申遗看作是重要政绩，看作是地方发展经济的重要手段和发展旅游的重要资源。这种观念部分是正确的，但并不完整......我们首先应该看到，申遗成功是全人类给中国的重要责任，是全世界人民委托中国来很好地保护这些遗产，让它们继续留存下去并且发挥作用。' />
      </div>
      <div className="part7-comments">
        <CommentCard avatar={comment2} position={'right'} name='单霁翔（故宫学术委员会主任）' comment='    申遗成功不是终点，而是新的起点。申报世界遗产的目的不仅是为了发展旅游，它是一个综合的效益。在申报遗产成功之时，你已经成为万众瞩目的世界文化遗产，更要承担保护的责任。要纠正一些错误观念，不能盲目地申报，比数量更重要的，是保护这些文化遗产的品质和价值。' />
      </div>
      <div className="part7-comments">
        <CommentCard avatar={comment3} position={'left'} name='葛剑雄（时任复旦大学图书馆馆长）' comment='    不少地方存在认识误区，以为只要申遗成功，这个项目就成了摇钱树，就有大笔的保护基金来了，就有大笔的旅游收入了。其实不是这样的，联合国教科文组织的基金主要是考虑救助濒危遗迹，并且是在本国没有保护能力的条件下。' />
      </div>
      <div className="part7-comments">
        <CommentCard avatar={comment4} position={'right'} name='邵甬（同济大学建筑与城市规划学院教授）' comment='    出现被除名项目、多处遗产项目收到“黄牌”的情况，意味着世界遗产保护形势依然严峻，各国当引以为戒。这提示每一个缔约国，要切实担负起责任和义务，不是说拿到这块“牌子”就可以高枕无忧了。' />
      </div>
      <div className="part7-comments">
        <CommentCard avatar={comment5} position={'left'} name='裴钰（文化学者）' comment='      申遗只是一项保护活动，一种程序，不要过度炒作，不要给它更多不必要的期许，过高的期待都是不太好的，要理性看待，理性的发展。有了申遗这块牌子，只是一个文化保护的牌子，它还不是“金字招牌”，发展还是硬道理。' />
      </div>
      <div className="part7-content2-container">
        <div className="part7-content2">
          &nbsp;&nbsp;可以看见，世界遗产的“金字招牌”为旅游带来的集聚效应正随着时间而衰减。同时，世界遗产对于那些名不见经传的项目会有很大的加成，但并不是本身就大名鼎鼎的遗产的刚需。是否要继续投入到申遗之旅中，这个问题的答案将会更加多元。
        </div>
      </div>
      <div className="part7-content3-subtitle">
        申遗带来的经济红利
      </div>
      <div className="part7-content3-container">
        <div className="part7-content3">
          &nbsp;&nbsp;其实申遗就像是一个标准，也是一个抓手，倡导申遗的根本目的还是要实现古迹的可持续保护和发展，而让遗产成为公众的共有记忆和共同财产，是可持续保护的根本。“将世界遗产作为全人类的宝贵财富加以妥善保护和永续传承，是中国政府作为《世界遗产公约》缔约国的庄严承诺。”这是国家的承诺，这是对历史、对人民的庄严承诺。申遗的首要目的就是对遗产的可持续性保护，如果只是为了名利而申遗，这样的申遗工作必然是危险的。况且随着时间变化，申遗带来的经济红利似乎已不复当年。
        </div>
      </div>
      <div className="part7-relitu">
        <DemoHeatmap />
      </div>
      <div className="part7-content4-container">
        <div className="part7-content4">
          &nbsp;&nbsp;而对于之前列出的预备遗产的问题，现在也有了更好的解决方案，那就是“打包申遗”（又称“捆绑式申遗”）。打包申遗指将多个有关联的遗产项目集合为一个项目来进行申遗工作，这既能够增强遗产项目的综合竞争力，又能适应“苏州决定”为申遗工作带来的限制。近年来，我国的申遗工作已多次成功利用打包申遗的方法，泉州的成功申遗也是对其的一次应用。对于预备遗产来说，无论是否继续积极申遗，都会有可行的解决方案，只要不违背保护与传承遗产的初心，两种选择都是可以且可行的。
        </div>
      </div>
      <div className="part7-hexiantu">

      </div>
    </div>
  )
}