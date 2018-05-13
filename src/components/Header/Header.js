import React, { Component } from 'react';
import MenuButton from '../../components/MenuButton/MenuButton';
// import pdf from "../../../public/UjjwalGoyal-resume.pdf"

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
        <MenuButton title="Home" link="https://ujjwalgoyal.herokuapp.com/"/>
        <MenuButton title="Projects" link="#"/>
        <MenuButton title="Artwork" link="#"/>
        <MenuButton title="Blog" link="#"/>
        <MenuButton title="Resume" link="UjjwalGoyal-resume.pdf"/>
        <MenuButton title="Contact" link="#"/>
      </div>
    );
  }
}

export default Header;