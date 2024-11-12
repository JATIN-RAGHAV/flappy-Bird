export default function ReestCard({ setOver }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Source Code Pro, sans-serif',
    }}>
      <div style={{
        height: window.innerHeight / 2,
        width: window.innerWidth / 2 > 300 ? 300 : window.innerWidth / 2,
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#afafaf',
        backgroundImage: "url(/resetpic.jpg)",
        backgroundSize: 'cover',
        flexDirection: 'column'
      }}>
        <button onClick={() => setOver(false)} style={{
          background: 'transparent',
          border: 'none',
          fontSize: '40px',
        }}>
          Start
        </button>
        <div style={{
          padding: '10px',
          backgroundColor: '#afafaf',
          borderRadius: '10px',
          marginTop: '100px',
          fontWeight: '700',
          fontSize: '20px',
        }}>
          MAX SCORE: 2977
        </div>
      </div>
    </div>

  )
}
