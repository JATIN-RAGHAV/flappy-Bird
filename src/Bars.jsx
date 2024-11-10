export default function Bars({ height, xPosition }) {
  const width = 300 + 'px'
  const blankSpaceHeight = 300;
  const lowerBarHeight = (window.innerHeight - (blankSpaceHeight + height)) + 'px'
  return (<div
    style={{
      transform: `translateX(${xPosition}px)`,
      position: 'fixed',
      zIndex: '-1'
    }}

  >
    <div
      style={{
        background: 'black',
        height: height + 'px',
        width: width,
      }}
    >
    </div>
    <div
      style={{
        height: blankSpaceHeight + 'px'
      }}
    >
    </div>
    <div
      style={{
        width: width,
        height: lowerBarHeight,
        background: 'black'
      }}
    >
    </div>
  </div>);
}
