export default function ReestCard({ setOver }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div style={{
        height: window.innerHeight / 2,
        width: window.innerWidth / 2 > 300 ? 300 : window.innerWidth / 2,
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#afafaf',
        backgroundImage: "url(https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_36/1703426/ss-160909-911-attack-mbe-630_7.jpg)",
        backgroundSize: 'cover',
      }}>
        <button onClick={() => setOver(false)} style={{
          background: 'transparent',
          border: 'none',
          fontSize: '40px',

        }}>
          Start
        </button>
      </div>
    </div>

  )
}
