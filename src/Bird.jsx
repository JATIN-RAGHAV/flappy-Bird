export default function Bird({ y, size, goingUp }) {
  size += 'px';
  const distFromLeft = window.innerWidth / 20
  const rotation = goingUp ? 30 : -30;
  return (
    <>
      <div
        style={{
          transformOrigin: 'top right',
          transform: `translateY(${y - 100}px) translateX(${distFromLeft}px) scaleX(-1)`,
          transition: 'transform 0.01s ease',
          position: 'fixed',
          zIndex: '2',
          borderRadius: '100%'
        }}
      >
        <img
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.5'
          }}
          width={size}
          height={size}
          src="https://www.svgrepo.com/show/493481/plane.svg"
        />
      </div>
    </>
  )
}
