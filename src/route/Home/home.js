import React, { Component } from 'react';
import './home.less';

import { Header, Banner, BottomTabBar } from "../../components";

let parts = {
  Home: undefined

};
export default class Home extends Component {

  constructor(props) {
    super(props)
    parts.Home = (<div>
      <Header />
      <Banner />

      <article className="YLhelpInfo">
        <header>
          延陵荟互助
		      </header>
          <div>
            YANGING ASSOCIACTION
          </div>
        <p>
          延陵荟，全名《南京市延陵荟公益服务中心》。创建至今已经十年，是凝聚在宁苏中地区各界精英，交流沟通，互帮互助，同时服务覆盖苏中地区一千五百万百姓的平台。延陵荟是人脉与价值分享平台。她是有互助精神人群专属，线上线下相结合的，为每一位成员提供缔结信任、价值分享、个人成长及发展机会的创新型服务平台。定位人脉与价值分享；爱心与互助公益服务。
		       </p>
      </article>
      <div className="gallery">
        <ul>
          <li>
            <div>
              <img src="./images/index_help01.png" />
            </div>
            <div>连接有互助公益爱心的社会各界人士，让每一个人的空闲资源得以对接，让每一个生活困难得以及时解决</div>
          </li>
          <li>
            <div>
              <img src="./images/index_help02.png" />
            </div>
            <div>我认识人人，人人认识我；我帮助人人，人人帮助我。</div>
          </li>
          <li>
            <div>
              <img src="./images/index_help03.png" />
            </div>
            <div>做人，让人贴心；做事，让人放心。</div>
          </li>
        </ul>
      </div>

      <div className="honourWall">
        <div>光荣榜</div>
        <div>HONOUR</div>
        <ul>
          <li>
            <div>
              <img src="./images/honour1.png" />
            </div>
            <div>Andrew</div>
          </li>
          <li>
            <div>
              <img src="./images/honour2.png"  style={{width:110,height:110,marginTop:-10}}  />
            </div>
            <div>Azmki</div>
          </li>
          <li>
            <div>
              <img src="./images/honour3.png" />
            </div>
            <div>Lyan</div>
          </li>
        </ul>
      </div>

      <div className="urgentMission">
        <div>紧急任务</div>
        <div>URGENT TASKS</div>
         <p><span>1 : </span> 你的工作已经很繁忙,但是领导又给你 <span>2018-8-1</span></p>
         <p><span>2 : </span> 你的工作已经很繁忙,但是领导又给你 <span>2018-8-1</span></p>
         <p><span>3️ : </span> 你的工作已经很繁忙,但是领导又给你 <span>2018-8-1</span></p>
         <p><span>4 : </span> 你的工作已经很繁忙,但是领导又给你<span>2018-8-1</span></p>
         <p><span>5️ : </span> 你的工作已经很繁忙,但是领导又给你<span>2018-8-1</span></p>
          <footer>查看更多>></footer>
      </div>
    </div>)
  }


  render() {
    return (
      <div>
        <BottomTabBar parts={parts} />
      </div>
    );
  }
}






