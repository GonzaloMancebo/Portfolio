export default function MaintenanceScreen() {
    return (
      <div style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem' }}>🚧 Sitio en mantenimiento</h1>
        <p style={{ fontSize: '1.5rem' }}>
          Estoy trabajando en nuevos proyectos. Gracias por tu paciencia. 🙏
        </p>
      </div>
    );
  }
  