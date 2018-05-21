import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Maintainence from './components/Maintainence/Maintainence';
import Content from './containers/Content/Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:1,
      headingColor:"white"
    }
  }

  tabChange = (tab) => {
    if(tab === 1 || tab === 5)
    this.setState({
      selectedTab: tab,
      headingColor: "white"
    });
    else
    this.setState({
      selectedTab: tab,
      headingColor: "tomato"
    });
  }
  render() {
    return (
      <div className="App">
        <Header tabChange={this.tabChange} headingColor={this.state.headingColor}/>
        {this.state.selectedTab === 1?
          <Content />:
          this.state.selectedTab === 2?
          <Maintainence />:
            this.state.selectedTab === 3?
            <Maintainence />:
              this.state.selectedTab === 4?
              <Maintainence />:
                this.state.selectedTab === 5?
                <Content />:
                  this.state.selectedTab === 6 &&
                  <Maintainence />
        }
      </div>
    );
  }
}

export default App;
