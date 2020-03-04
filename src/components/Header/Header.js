import React, { Component } from "react";
import MenuButton from "../../components/MenuButton/MenuButton";
// import pdf from "../../../public/UjjwalGoyal-resume.pdf"

class Header extends Component {
  render() {
    return (
      <div
        style={{
          width: "60%",
          display: "flex",
          alignSelf: "center",
          zIndex: 3,
          position: "absolute",
          top: 10,
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <MenuButton
          headingColor={this.props.headingColor}
          target=""
          id={1}
          title="Home"
          link="/"
          tabChange={this.props.tabChange}
        />
        <MenuButton
          headingColor={this.props.headingColor}
          target=""
          id={2}
          title="Projects"
          link="#projects"
          tabChange={this.props.tabChange}
        />
        <MenuButton
          headingColor={this.props.headingColor}
          target=""
          id={3}
          title="Artwork"
          link="#artworks"
          tabChange={this.props.tabChange}
        />
        <MenuButton
          headingColor={this.props.headingColor}
          target=""
          id={4}
          title="Blog"
          link="#blog"
          tabChange={this.props.tabChange}
        />
        <MenuButton
          headingColor={this.props.headingColor}
          target="_blank"
          id={5}
          title="Resume"
          link="UjjwalGoyal-resume-latest.pdf"
          tabChange={this.props.tabChange}
        />
        <MenuButton
          headingColor={this.props.headingColor}
          target=""
          id={6}
          title="Contact"
          link="#"
          tabChange={this.props.tabChange}
        />
      </div>
    );
  }
}

export default Header;
