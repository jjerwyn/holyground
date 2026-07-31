import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MessageCircle, Cross, HeartHandshake, Zap, Play, Shuffle } from 'lucide-react';
import { LEVELS } from '../data/questions';
import HolyGroundLogo from './HolyGroundLogo';

export default function LevelSelector({ onSelectLevel, onSelectMixedDeck }) {
  const getLevelIcon = (id) => {
    switch (id) {
      case 'level-1':
        return <Compass size={22} color="#E11D48" strokeWidth={2} />;
      case 'level-2':
        return <MessageCircle size={22} color="#0284C7" strokeWidth={2} />;
      case 'level-3':
        return <Cross size={22} color="#D97706" strokeWidth={2} />;
      case 'level-4':
        return <HeartHandshake size={22} color="#8B5CF6" strokeWidth={2} />;
      case 'wildcards':
        return <Zap size={22} color="#059669" strokeWidth={2} />;
      default:
        return <Compass size={22} color="#d97706" strokeWidth={2} />;
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '540px',
      margin: '0 auto',
      padding: '20px 24px 48px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px'
    }}>
      {/* Editorial Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px'
        }}
      >
        <HolyGroundLogo size={64} color="#c59b27" glow={false} />

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          background: '#ffffff',
          border: '1px solid rgba(18, 24, 38, 0.12)',
          borderRadius: '20px',
          fontSize: '0.72rem',
          fontWeight: 800,
          color: '#121826',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)'
        }}>
          <span>A CARD GAME FOR COMMUNITY</span>
        </div>

        <h2 className="font-serif" style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          lineHeight: 1.05,
          color: '#121826',
          letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}>
          Holy Ground
        </h2>

        <p style={{
          fontSize: '0.98rem',
          color: '#4b5563',
          lineHeight: 1.6,
          maxWidth: '420px',
          fontWeight: 500
        }}>
          Step onto holy ground with your friends, Connect Group, or leaders. Select your deck depth and spark conversations that matter.
        </p>
      </motion.div>

      {/* Deck selection cards with physical box aesthetic */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {LEVELS.map((level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            whileHover={{ scale: 1.015, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectLevel(level)}
            className="editorial-card-frame"
            style={{
              padding: '24px 24px 24px 28px',
              borderRadius: '24px',
              background: '#ffffff',
              border: `1.5px solid ${level.borderColor}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Subtle inner debossed frame */}
            <div className="editorial-inner-border" />

            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flex: 1, position: 'relative', zIndex: 2 }}>
              {/* Serif Number Stamp */}
              <div className="font-serif" style={{
                fontSize: '2.2rem',
                fontWeight: 700,
                color: level.accentColor,
                lineHeight: 1,
                width: '46px',
                textAlign: 'center',
                flexShrink: 0
              }}>
                {level.number}
              </div>

              <div style={{
                width: '1px',
                height: '42px',
                background: 'rgba(18, 24, 38, 0.08)',
                flexShrink: 0
              }} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: level.accentColor,
                    textTransform: 'uppercase'
                  }}>
                    {getLevelIcon(level.id)}
                    <span>LEVEL {level.number}</span>
                  </div>
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#121826', marginBottom: '4px' }}>
                  {level.title}
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#6b7280', lineHeight: 1.4, fontWeight: 500 }}>
                  {level.tagline}
                </p>
              </div>
            </div>

            {/* Play Arrow */}
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: level.accentColor,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: `0 4px 14px ${level.accentColor}35`,
              position: 'relative',
              zIndex: 2
            }}>
              <Play size={16} fill="#ffffff" style={{ marginLeft: '2px' }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mix Decks CTA */}
      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onSelectMixedDeck}
        style={{
          width: '100%',
          padding: '20px 24px',
          borderRadius: '24px',
          background: '#121826',
          border: '1px solid #121826',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.95rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          boxShadow: '0 12px 30px -8px rgba(18, 24, 38, 0.3)'
        }}
      >
        <Shuffle size={18} color="#c59b27" />
        <span>Mix All Decks (115 Cards)</span>
      </motion.button>
    </div>
  );
}
