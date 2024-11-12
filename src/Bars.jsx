export default function Bars({ height, xPosition1, blankSpaceHeight, width }) {
  width += 'px'
  const lowerBarHeight = (window.innerHeight - (blankSpaceHeight + height)) + 'px'
  const towersColor = '#c2bfb8'
  const borderRadius = '3px'
  return (<div
    style={{
      transform: `translateX(${xPosition1}px)`,
      position: 'fixed',
      zIndex: '-1'
    }}
  >
    <div
      style={{
        background: towersColor,
        height: height + 'px',
        width: width,
        borderRadius: borderRadius
      }}
    >

    </div>
    <div
      style={{
        height: blankSpaceHeight + 'px',
        alignItems: 'end',
        display: 'flex',
        justifyContent: 'end'
      }}
    >
      <div style={{
        backgroundColor: '#71797E',
        height: '150px',
        marginRight: '7px',
        width: '2px',
        background: 'linear-gradient(to top, #71797E, transparent)'
      }}

      ></div>
    </div>
    <div
      style={{
        width: width,
        height: lowerBarHeight,
        background: towersColor,
        borderRadius: borderRadius
      }}
    >
    </div>
  </div>);
}
