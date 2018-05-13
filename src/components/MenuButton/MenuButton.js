import React, { Component } from 'react';

class MenuButton extends Component {
  render() {
    return (
        <div style={
            {
                height:40,
                width:80,
                display: "flex",
                justifyContent: "center",
                marginRight: 10
            }
        }>
        <a href={this.props.link} style={{color:"inherit"}}>
            <h3 style={{alignSelf:"center", color:"white", fontFamily: '"Raleway", sans-serif'}}>{this.props.title}</h3>
        </a>
            </div>
    );
  }
}

export default MenuButton;