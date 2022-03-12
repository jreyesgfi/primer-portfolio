import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ParallaxEffect } from './views/parallax/ParallaxEffect';
import NavBar from './views/nav/NavBar';
import { screenHeightFactor } from './views/screen/globalConfig';

function App() {
  
  // export the parameters needed to evaluate what screem is it
  
  const [currentScreen, setCurrentScreen] = useState(1);
  let [offset,screenSize] = ParallaxEffect();

  // resize the screen to be more useful
  screenSize = [screenSize[0],screenSize[1]*screenHeightFactor]

  // create a mutable object that presist along the time
  const generalOffset = useRef(offset);
  generalOffset.current = offset;

  const generalScreenSize = useRef(screenSize);
  generalScreenSize.current = screenSize;


  // the current screen will auto-uploaded each time that the screen-size or the offset change
  useEffect(()=>{
    setCurrentScreen(1 +  Math.round(offset / screenSize[1]));
  },[offset, screenSize])

  // create a function to point the information in the clases
  let askOffset = () => {
    return (generalOffset.current)
  };

  return (
    <div className="App">
      <NavBar className="nav-bar">
      </NavBar>
      <div className = 'parallax-container'>
      </div>
    </div>
  );
}

export default App;
