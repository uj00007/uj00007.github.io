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
        <a  target={this.props.target} href={this.props.link} style={{color:"transparent"}} onClick={()=>{if(this.props.id === 2 || this.props.id === 3 || this.props.id === 4|| this.props.id === 6|| this.props.id === 5 )this.props.tabChange(this.props.id)}}>
            <h3 style={{alignSelf:"center", color:this.props.headingColor, fontFamily: '"Raleway", sans-serif'}}>{this.props.title}</h3>
        </a>
            </div>
    );
  }
}

export default MenuButton;