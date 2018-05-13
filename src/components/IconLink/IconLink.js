import React, { Component } from 'react';

class IconLink extends Component {
  render() {
    return (
        <div style={{fontSize:"1.8em", color:"tomato"}}>
        <a style={{ color: "inherit"}}target="_blank" href={this.props.link}><i className={this.props.iconName}></i></a>
</div>
    );
  }
}

export default IconLink;