import { useState, useEffect } from 'react'
import './App.css'
import Bird from './Bird';
import Bars from './Bars';


function App() {
  const pixelsPerMeter = window.innerHeight / 10
  const G = pixelsPerMeter * 20;
  const timeInterval = 0.01;
  const [y, setY] = useState(10)
  const [v, setV] = useState(0);
  const [barHeight, setBarHeight] = useState(500)
  const [barXPosition, setBarXPosition] = useState(window.innerWidth);
  useEffect(() => {
    const eventHandler = (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        setV(-1 * (8 * pixelsPerMeter))
      }
    }
    window.addEventListener('keydown', eventHandler);
    const interval = setInterval(() => {
      const distTraveled = (v * timeInterval) + ((1 / 2) * (G) * (timeInterval * timeInterval))
      setV(v => v + (G * timeInterval))
      setY(y => {
        if (distTraveled + y <= window.innerHeight - 30 && distTraveled + y >= 10) {
          return (y + distTraveled)
        } else if (distTraveled + y <= 10) {
          setV(0);
        }
        return y
      });
      if (barXPosition <= -300) {
        setBarHeight(Math.random() * window.innerHeight * 0.6)
        setBarXPosition(window.innerWidth);
      }
      else
        setBarXPosition(x => x - 8)
    }, timeInterval * 1000)
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', eventHandler);
    }
  }, [v]);



  return (
    <>
      <Bars height={barHeight} xPosition={barXPosition} />
      <Bird y={y} />
    </>
  )
}

export default App
