import React from 'react';
import { ArrowLeft, RefreshCw, Layers } from 'lucide-react';
import HolyGroundLogo from './HolyGroundLogo';

export default function Header({ currentLevel, activeDeckCount, currentIndex, onBackToMenu, onShuffleDeck }) {
  return (
    <header style={{
      width: '100%',
      padding: '20px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      zIndex: 20,
      background: 'rgba(251, 249, 244, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(18, 24, 38, 0.08)'
    }}>
      {/* Left section with Logo & Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {currentLevel ? (
          <button
            onClick={onBackToMenu}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid rgba(18, 24, 38, 0.14)',
              color: '#121826',
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={15} />
            <span>Decks</span>
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <HolyGroundLogo size={36} color="#c59b27" glow={false} />
            <div>
              <h1 className="font-serif" style={{ 
                fontSize: '1.35rem', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                lineHeight: 1, 
                color: '#121826',
                textTransform: 'uppercase'
              }}>
                HOLY GROUND
              </h1>
              <p style={{ 
                fontSize: '0.68rem', 
                color: '#6b7280', 
                fontWeight: 600, 
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '3px'
              }}>
                Real Community • Everyday Life
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Center level title indicator */}
      {currentLevel && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          background: '#ffffff',
          border: `1px solid ${currentLevel.accentColor}40`,
          borderRadius: '20px',
          fontSize: '0.78rem',
          fontWeight: 700,
          color: currentLevel.accentColor,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)'
        }}>
          <Layers size={14} />
          <span>{currentLevel.title}</span>
        </div>
      )}

      {/* Right controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {currentLevel && onShuffleDeck && (
          <button
            onClick={onShuffleDeck}
            title="Shuffle deck"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid rgba(18, 24, 38, 0.14)',
              color: '#121826',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)',
              transition: 'all 0.2s ease'
            }}
          >
            <RefreshCw size={15} />
          </button>
        )}

        {currentLevel && activeDeckCount > 0 && (
          <div style={{
            fontSize: '0.82rem',
            fontWeight: 800,
            color: '#121826',
            background: '#ffffff',
            padding: '6px 14px',
            borderRadius: '16px',
            border: '1px solid rgba(18, 24, 38, 0.12)',
            letterSpacing: '0.05em',
            boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)'
          }}>
            {Math.min(currentIndex + 1, activeDeckCount)} / {activeDeckCount}
          </div>
        )}
      </div>
    </header>
  );
}
