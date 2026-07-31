import React from 'react';
import { ArrowLeft, RefreshCw, Layers } from 'lucide-react';
import HolyGroundLogo from './HolyGroundLogo';

export default function Header({ currentLevel, activeDeckCount, currentIndex, onBackToMenu, onShuffleDeck }) {
  return (
    <header className="app-header">
      {/* Left section with Logo & Brand */}
      <div className="header-left-section">
        {currentLevel ? (
          <button
            onClick={onBackToMenu}
            className="header-back-btn"
          >
            <ArrowLeft size={15} />
            <span>Decks</span>
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HolyGroundLogo size={32} color="#c59b27" glow={false} />
            <div>
              <h1 className="font-serif" style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                lineHeight: 1,
                color: '#121826',
                textTransform: 'uppercase'
              }}>
                HOLY GROUND
              </h1>
              <p style={{
                fontSize: '0.62rem',
                color: '#6b7280',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '2px',
                whiteSpace: 'nowrap'
              }}>
                Creating space for God in every conversation.
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
            borderColor: `${currentLevel.accentColor}40`,
            color: currentLevel.accentColor,
          }}
        >
          <Layers size={13} style={{ flexShrink: 0 }} />
          <span>{currentLevel.title}</span>
        </div>
      )}

      {/* Right controls */}
      <div className="header-right-section">
        {currentLevel && onShuffleDeck && (
          <button
            onClick={onShuffleDeck}
            title="Shuffle deck"
            className="header-shuffle-btn"
          >
            <RefreshCw size={14} />
          </button>
        )}

        {currentLevel && activeDeckCount > 0 && (
          <div className="header-counter">
            {Math.min(currentIndex + 1, activeDeckCount)} / {activeDeckCount}
          </div>
        )}
      </div>
    </header>
  );
}
