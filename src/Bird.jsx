export default function Bird({ y, size }) {
  size += 'px';
  const distFromLeft = window.innerWidth / 20

  return (
    <>
      <div
        style={{
          transformOrigin: 'top right',
          transform: `translateY(${y - 100}px) translateX(${distFromLeft}px)`,
          width: size,
          height: size,
          transition: 'transform 0.01s ease',
          position: 'fixed',
          zIndex: '2',
          backgroundColor: 'red',
          borderRadius: '100%'
        }}
      >
      </div>
    </>
  )
}
