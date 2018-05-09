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
            <h3 style={{alignSelf:"center", color:"white"}}>{this.props.title}</h3>
        </div>
    );
  }
}

export default MenuButton;