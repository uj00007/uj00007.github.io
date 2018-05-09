import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
        <div style={{color:"red",display:"flex",zIndex:3,position:"absolute",alignSelf:"center",top:100,flexDirection:"column"}}>
        <div style={{backgroundColor:"white",height:160, width:160, borderRadius: 160,display:"flex",justifyContent:"center",alignSelf:"center", alignItems:"center"}}>
          <img src={require("../../passportpic.jpg")} style={{ height:150, width:150, borderRadius: 150,borderColor:"white", alignSelf:"center"}}/>
        </div>
        <h1 style={{fontSize:"4rem", color:"white", fontWeight: 700}}>Ujjwal Goyal</h1>
      </div>
    );
  }
}

export default Content;