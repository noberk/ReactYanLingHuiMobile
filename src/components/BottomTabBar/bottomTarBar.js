import React from "react";
import { TabBar, Icon } from 'antd-mobile';
import 'antd-mobile/lib/tab-bar/style';



export default class BottomTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'index',
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(component) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {component}
      </div>
    );
  }
  createTabItem = () => {

  }
  render() {
    const { parts } = this.props;
    const barItem = [
       { title: "首页", key: "index", uri: './images/icon_home.png', tab: "index", components: parts.Home },
      { title: "任务大厅", key: "quest", uri: './images/icon_home.png', tab: "quest", components: <div>任务大厅</div> },
      { title: "名医汇", key: "experts", uri: './images/icon_home.png', tab: "experts", components: <div>名医汇</div> },
      { title: "排行榜", key: "rank", uri: './images/icon_home.png', tab: "rank", components: <div>排行榜</div> },
      { title: "个人中心", key: "profile", uri: './images/icon_home.png', tab: "profile", components: <div>个人中心</div> },
    ]
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}>
          {barItem.map((bar) => {
           return <TabBar.Item icon={{ uri: bar.uri }} selectedIcon={{ uri: bar.uri }}
              title={bar.title} key={bar.key} selected={this.state.selectedTab === bar.tab}
              onPress={() => { this.setState({ selectedTab: bar.tab, }); }}>
              {this.renderContent(bar.components)}
            </TabBar.Item>
          })}
        </TabBar>
      </div>
    );
  }
}

