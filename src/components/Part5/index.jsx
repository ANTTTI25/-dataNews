import React from "react";
import './index.css';
import round from '../../asserts/round.png';
import content3_borderline from '../../asserts/content3-borderline.png'
import Map from "./Map.jsx";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="part5-container">
      <div className="part5-title-container">
        <img src={round} className="part5-round" />
        <div className="part5-title-content">
          道阻且长：严格的指向标
        </div>
      </div>
      <div className="part5-subtitle1">
        进入预备名单年限
      </div>
      <div className="part5-content1-container">
        <div className="part5-content1">
          &nbsp;&nbsp;在预备名录中长久等待自然有其原因，而这样的原因往往是<span className="part5-content1-red">复杂的</span>。
        </div>
        <div className="part5-content1">
          &nbsp;&nbsp;联合国教科文组织世界遗产中心（WHC）为世界遗产制定了<span className="part5-content1-red">10条标准</span>，遗产项目<span className="part5-content1-red">只要满足一条</span>就具备了申遗的条件。但由于这10条标准<span className="part5-content1-red">难以量化</span>，世界遗产中心又在2012年给出了这10条标准的<span className="part5-content1-red">操作化指南</span>，即<span className="part5-content1-red">“5C战略目标”</span>：
        </div>
        <div className="part5-content1">
          &nbsp;&nbsp;1. 提高《世界遗产名录》的可<span className="part5-content1-bigred">信</span>度(Credibility)；
        </div>
        <div className="part5-content1">
          &nbsp;&nbsp;2. 保证对世界遗产的有效<span className="part5-content1-bigred">保护</span>(Conservation)；
        </div>
        <div className="part5-content1">
         &nbsp;&nbsp;3. 促进各缔约国有效的<span className="part5-content1-bigred">能力建设</span>(Capacity-building)；
        </div>
        <div className="part5-content1">
         &nbsp;&nbsp;4. 通过宣传增强大众对世界遗产的认识、<span className="part5-content1-bigred">参与</span>和支持(Communication)；
        </div>
        <div className="part5-content1">
          &nbsp;&nbsp;5. 加强<span className="part5-content1-bigred">社会各界</span>在实施《世界遗产公约》中的作用(Communities)。
        </div>
      </div>
      <div className="part5-kelitu">
      <iframe scrolling="no" frameBorder="0" title="Interactive or visual content"
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            src="https://flo.uri.sh/story/1686191/embed?auto=1" style={{
              width: '900px',
               height: '650px'
            }} />
      </div>
      <div className="part5-subtitle2">
        中国遗产名录与预备遗产名录的相似性与重叠度
      </div>
      <div className="part5-content2-container">
        <div className="part5-content1">
          &nbsp;&nbsp;不少专家将申遗的要点集中在了<span className="part5-content1-red">真实性</span>和<span className="part5-content1-red">整体性</span>两个要素上。前者是对<span className="part5-content1-red">遗产自身价值的考量</span>，后者则是<span className="part5-content1-red">对遗产环境的考虑</span>。通过这样的视角，也许我们就能够对于那些久久徘徊在申遗之外的预备遗产有所认识。
        </div>
        <div className="part5-content1">
          &nbsp;&nbsp;在我国刮起“申遗热”的时期，各地热衷申遗，希望申遗的项目多多益善。项目的泛滥自然会带来<span className="part5-content1-red">滥竽充数</span>的问题。翻看我国的遗产名录和预备遗产名录，不难发现其中一些项目的<span className="part5-content1-red">相似性与重叠度</span>。
        </div>
      </div>
      <div className="part5-map">
        
      </div>
      <div className="part5-content3-container">
        <div className="part5-content3-left">
          &nbsp;&nbsp;这种情况对项目申遗的阻力体现在<span className="part5-content1-red">两方面</span>：一是部分项目<span className="part5-content1-red">不具备世界遗产的价值</span>，二是部分项目<span className="part5-content1-red">存在重合</span>。由于世界遗产<span className="part5-content1-red">数量有限</span>、<span className="part5-content1-red">标准严苛</span>，当几个相似项目一齐呈现在世界遗产委员会的专家面前，它们自然要经历<span className="part5-content1-red">更为严格的对照与审核</span>。
        </div>
        <div className="part5-content3-right">
          &nbsp;&nbsp;在自身价值之外，还有一些预备遗产的问题在于<span className="part5-content1-red">整体环境</span>。预备遗产是否得到<span className="part5-content1-red">充分的重视</span>、是否得到<span className="part5-content1-red">应有的保护</span>，这些都会被世界遗产委员会考量。委员会对遗产保护的要求相当严格，所以遗产的<span className="part5-content1-red">开发空间非常有限</span>。任何不恰当的开发利用，都可能成为预备遗产被否决的理由。
        </div>
        <img src={content3_borderline} className="part5-content3-borderline" />
      </div>
      <div className="part5-content4-container">
        <div className="part5-content1">
          &nbsp;&nbsp;在预备遗产中纷繁复杂的问题背后，往往会显露出管理体制的缺陷与遗产环境的破坏。两者联系紧密，前者常常成为后者的充分条件。这一方面，最有名的例子就是<span className="part5-content1-bigboldred">华山</span>：世纪初被列入预备名录的华山曾被寄予厚望，却在预备名录中蛰伏21年，推荐顺位也持续走低。华山申遗的失意，就是对保护与开发之间矛盾的最好展示。
        </div>
      </div>
      <div className="part5-timeline">
        
      </div>
    </div>
  )
}