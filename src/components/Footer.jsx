import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '32px 20px',
      textAlign: 'center',
      marginTop: 'auto',
      fontSize: '0.78rem',
      color: '#6b7280',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      borderTop: '1px solid rgba(18, 24, 38, 0.06)'
    }}>
      <p className="font-serif" style={{ fontWeight: 700, color: '#121826', letterSpacing: '0.08em', fontSize: '0.9rem' }}>
        HOLY GROUND
      </p>
      <p style={{ fontWeight: 500 }}>
        Building authentic community and spiritual depth beyond Sunday morning services.
      </p>
    </footer>
  );
}
