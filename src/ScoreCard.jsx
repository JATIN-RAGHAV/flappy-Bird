export default function ScoreCard({ score }) {
  return (
    <div style={{
      transform: `translate(${window.innerWidth / 2}px,20px)`,
      width: '100px',
      height: '50px',
      backgroundColor: 'white',
      zIndex: '2341',
      textAlign: 'center',
      borderRadius: '20px',
      fontFamily: 'Source Code Pro, sans-serif',
      fontSize: '40px',
    }}>
      {score}
    </div>
  )
}
