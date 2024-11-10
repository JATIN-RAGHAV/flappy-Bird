export default function Bird({ y }) {
  return (
    <>
      <div
        style={{
          transform: `translateY(${y}px) translateX(140px)`,
          width: 'fit-content',
          transition: 'transform 0.01s ease',
          position: 'fixed',
          zIndex: '2',
          color: 'blue'
        }}
      >
        XXXXXXX
      </div>
    </>
  )
}
