import { useState, useEffect } from 'react'
import ResetCard from './ResetDiv';
import ScoreCard from './ScoreCard';
import './App.css'
import Bird from './Bird';
import Bars from './Bars';

// Time in which the ball will fall from the top to the ground
let ballFallTime;
// Amount of upward boost on clicking up arrow
let upBoast;
if (window.innerHeight > 900 || window.innerWidth > 1100) {
  ballFallTime = 0.5;
  upBoast = 0.3
} else {
  ballFallTime = 0.7;
  upBoast = 0.3;
}
// Crosses the screen in this much time
let barSpeed;
if (window.innerWidth > 1000)
  barSpeed = 2;
else
  barSpeed = 1;

const initialBarHeight = window.innerHeight / 4
const initialBallPosition = window.innerHeight / 2
const birdX = window.innerWidth / 20;

const isSmashing = (birdSize, birdY, birdX, barX, barWidth, barHeight, blankSpace) => {
  if (birdX + birdSize >= barX + 10 && birdX < barX + barWidth) {
    if (birdY <= barHeight - 30 || birdY + birdSize >= barHeight + blankSpace + 30) {
      return [true, true];
    }
    return [false, true];
  }
  return [false, false];
}

const isOver = (birdY, birdSize, birdX, barX, barWidth, barHeight, blankSpace) => {
  const isTouchingTop = birdY <= -30;
  const isTouchingBottom = birdY + birdSize >= window.innerHeight + 30;
  const [isSmashingBool, isIn] = isSmashing(birdSize, birdY, birdX, barX, barWidth, barHeight, blankSpace)
  if (isTouchingTop || isTouchingBottom || isSmashingBool)
    return [true, isIn]
  return [false, isIn]
}

function App() {
  let blankSpaceHeight;
  const G = (2 * window.innerHeight) / ballFallTime;
  const [score, setScore] = useState(0);
  const upArrowVelocity = upBoast * G
  const timeInterval = 0.01;
  const [y, setY] = useState(initialBallPosition)
  const [v, setV] = useState(0);
  const [barHeight, setBarHeight] = useState(initialBarHeight)
  const [barXPosition, setBarXPosition] = useState(window.innerWidth);
  const minBarHeight = window.innerHeight / 7
  const [isInBar, setIsInBar] = useState(false);
  const [over, setOver] = useState(true);
  let width;
  if (window.innerWidth > 600)
    width = 200
  else
    width = window.innerWidth / 3;

  const resetFunction = () => {
    setY(initialBallPosition);
    setV(0);
    setScore(0);
    setIsInBar(false);
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
    const clickEventHandler = () => {
      setV(-1 * upArrowVelocity);
    }

    window.addEventListener('click', clickEventHandler);
    window.addEventListener('keydown', eventHandler);
    const interval = setInterval(() => {
      const [gameOver, isIn] = isOver(y, size, birdX, barXPosition, width, barHeight, blankSpaceHeight)
      if (gameOver) {
        setOver(true);
        resetFunction();
        setY(initialBarHeight);
        setBarHeight(initialBarHeight);
        setBarXPosition(window.innerWidth);
      } else {
        if (isIn)
          setIsInBar(true);
        else {
          if (isInBar && !gameOver) {
            setScore(s => s + 1);
            setIsInBar(false);
          }
        }
      }
      if (!over) {
        const distTraveled = (v * timeInterval) + ((1 / 2) * (G) * (timeInterval * timeInterval))
        setV(v => v + (G * timeInterval))
        setY(y => {
          return (y + distTraveled)
        });
        if (barXPosition <= -1 * (width)) {
          setBarHeight(Math.random() * (window.innerHeight - (blankSpaceHeight + (2 * minBarHeight))) + minBarHeight)
          setBarXPosition(window.innerWidth);
        }
        else
          setBarXPosition(x => x - ((window.innerWidth / barSpeed) * timeInterval))
      }
    }, timeInterval * 1000)
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', eventHandler);
      window.removeEventListener('click', clickEventHandler);
    }
  }, [v]);


  if (!over) {
    return (
      <><div style={{
        height: '100vh',
        width: '100vw',
        position: 'absolute'
      }}>
      </div>
        <Bars width={width} height={barHeight} xPosition1={barXPosition} blankSpaceHeight={blankSpaceHeight} secondBar={true} xPosition2={400} />
        <Bird y={y} birdX={birdX} size={size} goingUp={v < 0} />
        <ScoreCard score={score} />
      </>
    )
  }
  else {
    return (
      <ResetCard setOver={setOver} />
    )
  }
}

export default App
