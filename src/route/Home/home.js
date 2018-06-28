import React, { Component } from 'react';
import './home.less';

import { Header,Banner } from "../../components";


export default class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <Banner />

        <article className="YLhelpInfo">
          <header>
            延陵荟互助
		      </header>
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
          <div>荣誉墙</div>
          <ul>
            <li>
              <div>
                <img src="./images/logo.png" />
              </div>
              <div>admin</div>
            </li>
            <li>
              <div>
                <img src="./images/logo.png" />
              </div>
              <div>lixingchen</div>
            </li>
            <li>
              <div>
                <img src="./images/logo.png" />
              </div>
              <div>xijingping</div>
            </li>
            <li>
              <div>
                <img src="./images/logo.png" />
              </div>
              <div>hujingtao</div>
            </li>
          </ul>
        </div>

        <div className="urgentMission">
          <div>紧急任务</div>
          <div>迫在眉睫，孤立无助，施以援手，雪中送炭</div>
        </div>
      </div>
    );
  }
}






