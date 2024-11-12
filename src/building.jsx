export default function building({ height, xPosition1, blankSpaceHeight, width }) {
  const towersColor = '#69738c'
  const borderRadius = '3px'
  return (
    <div
      style={{
        background: towersColor,
        height: height + 'px',
        width: width,
        borderRadius: borderRadius
      }}
    >
    </div>
  )
}
