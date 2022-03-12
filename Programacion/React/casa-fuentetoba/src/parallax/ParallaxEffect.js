import Lottie from "react-lottie";
import React, { forwardRef, useRef } from "react";
import { useEffect, useState } from "react";
import './Parallax.css';
import LottieControl from "./LottieControl";
import rightBrain from "./../../images/brainRightSide.png";
import leftBrain from "./../../images/brainLeftSide.png";
import './Parallax.css';

export function ParallaxEffect(){

    // Set the hooks to re-render after each change
    const [offset, setOffset] = useState(0);
    const [screenSize, setScreenSize] = useState([window.innerWidth, window.innerHeight]);
    
    // useEffect to just set the listeners once
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        }
        window.onresize = () => {
            setScreenSize([window.innerWidth, window.innerHeight]);
        }
    }, []);

    return [offset,screenSize]
};
  
  

// create a object to distribute objects to different speeds
export function ParallaxObject(props){

    // receibe the offset by props
    let offset = props.offset || 0;
    let [screenWidth,screenHeight] = props.screenSize;

    const initialParallaxTop = 1200;
    const [parallaxTop, setParallaxTop] = useState(initialParallaxTop);

    useEffect(()=>{
        setParallaxTop(offset);
    },[offset]);






    /////////////////////////////////////////////
    // diferent positions for each component in screen

    /////// BRAIN //////////////////
    const rightBrainStyle = {
        right: String( 490 - Math.abs(parallaxTop-screenHeight+70) ) +'px'
    }
    const leftBrainStyle = {
        left: String( 490 - Math.abs(parallaxTop-screenHeight+70) ) +'px'
    }

    const style2 = {
        top: String(parallaxTop*0.5 - initialParallaxTop) + 'px',
        margin:'3px',
        width:'300px',
    }

    ///////////////////////////
    // create the animations

    // identify each one by a ref
    const wiresAnimation = useRef(null);

    // update the animation with the scroll
    useEffect(()=>{
        /*animation.destroy();
        setAnimation(initialAnimation);
        animation.goToAndPlay(offset/300,true)*/
        if (wiresAnimation.current){
            wiresAnimation.current.setSeeker((offset%(25*10))/10,true);
            //wiresAnimation.current.getDuration(true);
        }

        
        
    },[offset])
    
    
    return (
        <div className = 'parallax-container'>
            <div className="screen" >
            </div>
            <div className="brain-screen screen" >
                <div className="brain-image-container">
                    <img style={leftBrainStyle} src= { leftBrain}></img>
                    <img style={rightBrainStyle} src= {rightBrain}></img>
                </div>
            </div>
            <div className="parallax-deep" style={style2} id="container">
                <LottieControl linkRef={wiresAnimation}>
                </LottieControl>
            </div>
            <div>
                <img src= 'images/conections1.png' alt="conections wallpaper"></img>
            </div>
        </div>
    );
}