import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const pixelsPerMeter = window.innerHeight / 10
  const G = pixelsPerMeter * 9.8;
  const timeInterval = 0.01;
  const [y, setY] = useState(10)
  const [v, setV] = useState(0);
  useEffect(() => {
    const eventHandler = (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        setV(-1 * (6 * pixelsPerMeter))
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
    }, timeInterval * 1000)
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', eventHandler);
    }
  }, [v]);

  return (
    <>
      <div
        style={{
          transform: `translateY(${y}px) translateX(140px)`,
          width: '50px',
          transition: 'transform 0.01s ease'
        }}
      >
        X
      </div>
    </>
  )
}

export default App
