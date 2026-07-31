import React from 'react';
import { ArrowLeft, RefreshCw, Layers } from 'lucide-react';
import HolyGroundLogo from './HolyGroundLogo';

export default function Header({ currentLevel, activeDeckCount, currentIndex, onBackToMenu, onShuffleDeck }) {
  return (
    <header className="app-header">
      {/* Left section with Logo & Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        {currentLevel ? (
          <button
            onClick={onBackToMenu}
            className="header-back-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
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
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <ArrowLeft size={15} />
            <span>Decks</span>
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HolyGroundLogo size={32} color="#c59b27" glow={false} />
            <div>
              <h1 className="font-serif" style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                lineHeight: 1, 
                color: '#121826',
                textTransform: 'uppercase'
              }}>
                HOLY GROUND
              </h1>
              <p style={{ 
                fontSize: '0.65rem', 
                color: '#6b7280', 
                fontWeight: 600, 
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '2px',
                whiteSpace: 'nowrap'
              }}>
                Real Community • Everyday Life
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Center level title indicator */}
      {currentLevel && (
        <div 
          className="header-level-title"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: '#ffffff',
            border: `1px solid ${currentLevel.accentColor}40`,
            borderRadius: '20px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: currentLevel.accentColor,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)',
            flexShrink: 1,
            minWidth: 0
          }}
        >
          <Layers size={14} style={{ flexShrink: 0 }} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {currentLevel.title}
          </span>
        </div>
      )}

      {/* Right controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        {currentLevel && onShuffleDeck && (
          <button
            onClick={onShuffleDeck}
            title="Shuffle deck"
            className="header-shuffle-btn"
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
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            <RefreshCw size={14} />
          </button>
        )}

        {currentLevel && activeDeckCount > 0 && (
          <div 
            className="header-counter"
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#121826',
              background: '#ffffff',
              padding: '6px 14px',
              borderRadius: '16px',
              border: '1px solid rgba(18, 24, 38, 0.12)',
              letterSpacing: '0.05em',
              boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {Math.min(currentIndex + 1, activeDeckCount)} / {activeDeckCount}
          </div>
        )}
      </div>
    </header>
  );
}
