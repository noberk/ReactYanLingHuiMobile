import React from "react";
import { TabBar,Icon } from 'antd-mobile';
import 'antd-mobile/lib/tab-bar/style'; 
export default class BottomTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
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

  render() {
      const { parts } = this.props;
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}>
            <TabBar.Item icon={{ uri: './images/icon_home.png' }} selectedIcon={{ uri: './images/icon_home.png' }}
            title="My" key="my" selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {this.setState({selectedTab: 'yellowTab',});}}>

            {this.renderContent(parts.Home)}
          </TabBar.Item>
          <TabBar.Item title="首页" key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(<div>123</div>)}
          </TabBar.Item>
        
        </TabBar>
      </div>
    );
  }
}

