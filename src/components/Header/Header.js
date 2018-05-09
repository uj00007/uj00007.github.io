import React, { Component } from 'react';
import MenuButton from '../../components/MenuButton/MenuButton';

class Header extends Component {
  render() {
    return (
      <div style={
        {
          width:"60%",
          display:"flex",
          alignSelf:"center",
          zIndex:3,
          position:"absolute",
          top:10,
          justifyContent:"center",
          flexWrap: "wrap"
        }}>
        <MenuButton title="Home"/>
        <MenuButton title="Projects"/>
        <MenuButton title="Artwork"/>
        <MenuButton title="Blog"/>
        <MenuButton title="Resume"/>
        <MenuButton title="Contact"/>
      </div>
    );
  }
}

export default Header;