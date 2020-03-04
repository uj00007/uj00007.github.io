import React, { Component } from "react";
import IconLink from "../../components/IconLink/IconLink";

class Content extends Component {
  componentDidMount() {
    document.getElementsByTagName("CANVAS")[0].style.background = "#131010";
  }
  render() {
    return (
      <div
        style={{
          color: "red",
          display: "flex",
          zIndex: 3,
          // position: "absolute",
          alignSelf: "center",
          top: 100,
          flexDirection: "column"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: 160,
            width: 160,
            borderRadius: 160,
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center"
          }}
        >
          <img
            alt=""
            src={require("../../passportpic.jpg")}
            style={{
              height: 150,
              width: 150,
              borderRadius: 150,
              borderColor: "white",
              alignSelf: "center"
            }}
          />
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "80%",
            alignSelf: "center"
          }}
        >
          <IconLink
            iconName="fab fa-instagram"
            link="https://www.instagram.com/uj00007/"
          />
          <IconLink
            iconName="fab fa-facebook-f"
            link="https://www.facebook.com/uj00007"
          />
          <IconLink
            iconName="fab fa-github"
            link="https://github.com/uj00007"
          />
          <IconLink
            iconName="fab fa-linkedin-in"
            link="https://www.linkedin.com/in/ujjwal-goyal-26762216/"
          />
          <IconLink
            iconName="far fa-envelope"
            link="mailto:uj00007@gmail.com"
          />
          <IconLink
            iconName="fab fa-twitter"
            link="https://twitter.com/uj00007"
          />
        </div>
        <h1
          style={{
            fontSize: "4.5rem",
            color: "white",
            fontWeight: 700,
            marginTop: 10,
            marginBottom: 10,
            fontFamily: '"Raleway", sans-serif'
          }}
        >
          Ujjwal Goyal
        </h1>
        <h3
          style={{
            color: "white",
            fontWeight: 700,
            marginTop: 10,
            alignSelf: "center"
          }}
        >
          Happy to help... ; )
        </h3>
      </div>
    );
  }
}

export default Content;
