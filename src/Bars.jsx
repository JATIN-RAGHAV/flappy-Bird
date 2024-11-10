export default function Bars({ height, xPosition1, blankSpaceHeight, width }) {
  width += 'px'
  const lowerBarHeight = (window.innerHeight - (blankSpaceHeight + height)) + 'px'
  return (<div
    style={{
      transform: `translateX(${xPosition1}px)`,
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
