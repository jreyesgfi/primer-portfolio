import React from 'react'
import Lottie from 'react-lottie-player'
import { parseSrc, Player } from '@lottiefiles/react-lottie-player';
import * as LottiePlayer from "@lottiefiles/lottie-player";
 
// documents to install
// npm install --save @lottiefiles/lottie-player
export default class LottieControl extends React.Component {
 
  constructor(props) {
    super(props);
    //this.state = {isStopped: true, isPaused: true};

    // ref to the animation to create just one and can access it
    this.ref = props.linkRef;

    // the path to the json animation
    const animationDefSrc = 'animated_json/open_settings_button.json';
    this.src = props.src || animationDefSrc;

    // the loop boolean
    this.loop = props.autoplay ?? false;

    // size
    this.size = props.size || [300,300];

    // keep last frame
    this.keepLastFrame = props.keepLastFrame ?? true;

    const pass = (()=>pass)
    // action to take a place after the animation complete
    this.onComplete = props.onComplete ?? pass;

    // autoplay
    this.autoplay = props.autoplay ?? false;

  }
 
  render() {
 
    return <div className="centered-div">
       <Player
        autoplay={this.autoplay}
        ref={this.ref} // set the ref to your class instance
        loop={this.loop}
        controls={false}
        src= {this.src}
        mode={'normal'}
        style={{  width : String(this.size[0]) + 'px', height: String(this.size[1]) + 'px', }}
        background={'#00000000'}
        keepLastFrame = {this.keepLastFrame}
        onEvent = {(event)=>{
          if (event =='complete'){
            this?.onComplete();
          }
        }}
      ></Player>
    </div>
  }
}
 