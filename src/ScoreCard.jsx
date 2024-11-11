export default function ScoreCard({ score }) {
  return (
    <div style={{
      transform: `translate(${window.innerWidth / 2}px,20px)`,
      width: '100px',
      height: '50px',
      backgroundColor: 'red',
      zIndex: '2341',
      textAlign: 'center',
      fontSize: '40px',
      borderRadius: '20px'
    }}>
      {score}
    </div>
  )
}
