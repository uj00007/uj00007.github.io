import React, { Component } from 'react';
import IconLink from '../../components/IconLink/IconLink';

class Maintainence extends Component {
  componentDidMount(){
    document.getElementsByTagName("CANVAS")[0].style.background="white";
    // console.log(document.getElementsByTagName("CANVAS")[0].innerHTML="<script>$('body').jParticle({background: 'white',particlesNumber: 60,linkDist: 20,createLinkDist: 150,color: '#dbd2d2',width: null,height: null,linksWidth: 0.3,particle:{color:'red',minSize:2,maxSize:5,speed:30}});</script>");
  }
  render() {
    return (
      <div style={{width:"100%",color:"red",display:"flex",zIndex:3,position:"absolute",alignSelf:"center",top:100,flexDirection:"column"}}>
      
      <img alt="" src={"stay_tuned.png"} style={{paddingLeft:150,alignSelf:"flex-start", position:"absolute"}}/>  
      <img alt="" src={"rocket2.gif"} style={{alignSelf:"center"}}/>
        <img alt="" width={400} src={"comingsoon.png"} style={{paddingTop:50,paddingRight:100,alignSelf:"flex-end", position:"absolute"}}/>
      </div>
    );
  }
}

export default Maintainence;