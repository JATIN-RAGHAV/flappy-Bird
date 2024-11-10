export default function Bird({ y, size }) {
  size += 'px';
  const distFromLeft = window.innerWidth / 20

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
          width={size}
          height={size}
          src="https://www.svgrepo.com/show/493481/plane.svg"
        />
      </div>
    </>
  )
}
