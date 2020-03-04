import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Maintainence from "./components/Maintainence/Maintainence";
import Content from "./containers/Content/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      headingColor: "white"
    };
  }

  tabChange = tab => {
    if (tab === 1 || tab === 5)
      this.setState({
        selectedTab: tab,
        headingColor: "white"
      });
    else
      this.setState({
        selectedTab: tab,
        headingColor: "tomato"
      });
  };
  render() {
    return (
      <div className="App">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignSelf: "center",
            flexDirection: "column",
            zIndex: 3,
            position: "absolute",
            top: 10,
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Header
            tabChange={this.tabChange}
            headingColor={this.state.headingColor}
          />
          {this.state.selectedTab === 1 ? (
            <Content />
          ) : this.state.selectedTab === 2 ? (
            <Maintainence />
          ) : this.state.selectedTab === 3 ? (
            <Maintainence />
          ) : this.state.selectedTab === 4 ? (
            <Maintainence />
          ) : this.state.selectedTab === 5 ? (
            <Content />
          ) : (
            this.state.selectedTab === 6 && <Maintainence />
          )}
        </div>
      </div>
    );
  }
}

export default App;
