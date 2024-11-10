import { useState, useEffect } from 'react'
import './App.css'
import Bird from './Bird';
import Bars from './Bars';

// Time in which the ball will fall from the top to the ground
let ballFallTime = 0.5;
// Amount of upward boost on clicking up arrow
const upBoast = 0.3
// Crosses the screen in this much time
let barSpeed;
if (window.innerWidth > 1000)
  barSpeed = 2;
else
  barSpeed = 1;

const initialBarHeight = window.innerHeight / 4
const initialBallPosition = window.innerHeight / 2

const isOver = (birdY, birdSize) => {
  const isTouchingTop = birdY <= birdSize
  const isTouchingBottom = birdY >= window.innerHeight + 20;
  // const isSmashing;
  if (isTouchingTop || isTouchingBottom)
    return true
  return false
}

function App() {
  let blankSpaceHeight;
  const G = (2 * window.innerHeight) / ballFallTime;
  const upArrowVelocity = upBoast * G
  const timeInterval = 0.01;
  const [y, setY] = useState(initialBallPosition)
  const [v, setV] = useState(0);
  const [barHeight, setBarHeight] = useState(initialBarHeight)
  const [barXPosition, setBarXPosition] = useState(window.innerWidth);
  const minBarHeight = window.innerHeight / 7


  const resetFunction = () => {
    console.log(y);
    setY(initialBallPosition);
    setV(0);
    setBarHeight(initialBarHeight);
    setBarXPosition(window.innerWidth);
  }
  let size;
  if (window.innerWidth > 600)
    size = 100
  else
    size = window.innerWidth / 6

  if (window.innerHeight > 600)
    blankSpaceHeight = 300;
  else
    blankSpaceHeight = window.innerHeight / 3

  useEffect(() => {
    const eventHandler = (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        setV(-1 * (upArrowVelocity))
      }
    }
    window.addEventListener('keydown', eventHandler);
    const interval = setInterval(() => {
      if (isOver(y, size)) {
        resetFunction();
      };
      const distTraveled = (v * timeInterval) + ((1 / 2) * (G) * (timeInterval * timeInterval))
      setV(v => v + (G * timeInterval))
      setY(y => {
        return (y + distTraveled)
      });
      if (barXPosition <= -300) {
        setBarHeight(Math.random() * (window.innerHeight - (blankSpaceHeight + (2 * minBarHeight))) + minBarHeight)
        setBarXPosition(window.innerWidth);
      }
      else
        setBarXPosition(x => x - ((window.innerWidth / barSpeed) * timeInterval))
    }, timeInterval * 1000)
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', eventHandler);
    }
  }, [v]);



  return (
    <>
      <Bars height={barHeight} xPosition1={barXPosition} blankSpaceHeight={blankSpaceHeight} secondBar={true} xPosition2={400} />
      <Bird y={y} size={size} />
    </>
  )
}

export default App
