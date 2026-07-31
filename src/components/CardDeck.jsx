import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronRight, ChevronLeft, RotateCw, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import HolyGroundLogo from './HolyGroundLogo';

export default function CardDeck({ 
  currentLevel, 
  deck, 
  currentIndex, 
  onNextCard, 
  onPrevCard, 
  onRestartDeck, 
  onBackToMenu 
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  const activeCard = deck[currentIndex];

  useEffect(() => {
    setIsFlipped(false);
    
    if (deck.length > 0 && currentIndex >= deck.length) {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setIsCompleted(false);
    }
  }, [currentIndex, deck.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 60;
    const velocityThreshold = 200;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      onNextCard();
    } else if ((info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) && currentIndex > 0) {
      onPrevCard();
    }
  };

  const handleCardClick = () => {
    if (Math.abs(x.get()) > 10) return;
    setIsFlipped((prev) => !prev);
  };

  if (isCompleted || !activeCard) {
    return (
      <div style={{
        width: '100%',
        maxWidth: '420px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          background: 'rgba(5, 150, 105, 0.12)',
          border: '2px solid #059669',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#059669',
          boxShadow: '0 8px 24px rgba(5, 150, 105, 0.15)'
        }}>
          <CheckCircle2 size={40} />
        </div>

        <h2 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 700, color: '#121826' }}>
          Deck Complete
        </h2>

        <p style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.6 }}>
          You completed all {deck.length} cards in this deck. Take a moment to reflect on what God spoke through the room tonight.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginTop: '10px' }}>
          <button
            onClick={onRestartDeck}
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '24px',
              background: '#121826',
              border: 'none',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 8px 20px rgba(18, 24, 38, 0.25)'
            }}
          >
            <RotateCw size={16} />
            <span>Shuffle & Play Again</span>
          </button>

          <button
            onClick={onBackToMenu}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '24px',
              background: '#ffffff',
              border: '1px solid rgba(18, 24, 38, 0.14)',
              color: '#121826',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)'
            }}
          >
            Select Different Deck
          </button>
        </div>
      </div>
    );
  }

  const isWildcard = activeCard.type === 'wildcard';
  const cardAccent = isWildcard ? '#059669' : (currentLevel?.accentColor || '#c59b27');

  return (
    <div style={{
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    }}>
      {/* Physical Card Stack Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Ghost Deck Stack Layers */}
        {currentIndex + 2 < deck.length && (
          <div style={{
            position: 'absolute',
            width: '90%',
            height: '440px',
            borderRadius: '28px',
            background: 'rgba(255, 255, 255, 0.65)',
            border: '1px solid rgba(18, 24, 38, 0.06)',
            transform: 'translateY(16px) scale(0.92)',
            zIndex: 1,
            boxShadow: '0 4px 16px rgba(18, 24, 38, 0.03)'
          }} />
        )}
        {currentIndex + 1 < deck.length && (
          <div style={{
            position: 'absolute',
            width: '95%',
            height: '455px',
            borderRadius: '28px',
            background: '#ffffff',
            border: '1px solid rgba(18, 24, 38, 0.08)',
            transform: 'translateY(8px) scale(0.96)',
            zIndex: 2,
            boxShadow: '0 8px 24px rgba(18, 24, 38, 0.04)'
          }} />
        )}

        {/* Active Physical Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.id}
            style={{
              x,
              rotate,
              opacity,
              position: 'absolute',
              width: '100%',
              height: '470px',
              zIndex: 10,
              cursor: 'grab'
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: 'grabbing', scale: 0.985 }}
            onClick={handleCardClick}
          >
            {/* 3D Card Container */}
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              perspective: '1000px'
            }}>
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* UNFLIPPED CARD FRONT COVER (EDITORIAL MATERIAL DESIGN) */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  borderRadius: '28px',
                  background: '#ffffff',
                  border: `1.5px solid ${cardAccent}`,
                  boxShadow: `0 30px 60px -15px rgba(18, 24, 38, 0.12), 0 0 25px ${cardAccent}15`,
                  padding: '36px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  {/* Inner Debossed Border Frame */}
                  <div className="editorial-inner-border" />

                  {/* Top Level Pill */}
                  <div style={{
                    padding: '5px 16px',
                    background: '#ffffff',
                    border: `1px solid ${cardAccent}40`,
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: cardAccent,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: '0 2px 6px rgba(18, 24, 38, 0.03)'
                  }}>
                    <span>{currentLevel ? `LEVEL ${currentLevel.number}` : 'HOLY GROUND'}</span>
                  </div>

                  {/* Center Emblem */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <HolyGroundLogo size={64} color={cardAccent} glow={false} />

                    <h3 className="font-serif" style={{
                      fontSize: '1.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: '#121826',
                      textTransform: 'uppercase'
                    }}>
                      HOLY GROUND
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 600, letterSpacing: '0.06em' }}>
                      CARD #{currentIndex + 1} OF {deck.length}
                    </p>
                  </div>

                  {/* Bottom Touch Hint */}
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#9ca3af',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <span>Tap or Space to flip • Swipe or Arrows for next</span>
                  </div>
                </div>

                {/* REVEALED QUESTION SIDE (PURE EDITORIAL TYPOGRAPHY) */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  borderRadius: '28px',
                  background: '#ffffff',
                  border: `1.5px solid ${cardAccent}`,
                  boxShadow: `0 30px 60px -15px rgba(18, 24, 38, 0.14), 0 0 30px ${cardAccent}18`,
                  padding: '40px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  {/* Inner Debossed Border Frame */}
                  <div className="editorial-inner-border" />

                  {/* Revealed Header */}
                  <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: cardAccent,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase'
                    }}>
                      HOLY GROUND
                    </span>

                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 700 }}>
                      #{currentIndex + 1} / {deck.length}
                    </span>
                  </div>

                  {/* Editorial Serif Question */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto 0',
                    padding: '0 6px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <p className="font-serif" style={{
                      fontSize: '1.42rem',
                      fontWeight: 600,
                      lineHeight: 1.5,
                      color: '#121826',
                      letterSpacing: '-0.01em'
                    }}>
                      "{activeCard.text}"
                    </p>
                  </div>

                  <div style={{ height: '12px' }} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Touch Control Buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        width: '100%'
      }}>
        <button
          onClick={onPrevCard}
          disabled={currentIndex === 0}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid rgba(18, 24, 38, 0.14)',
            color: currentIndex === 0 ? '#d1d5db' : '#121826',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 12px rgba(18, 24, 38, 0.04)',
            transition: 'all 0.2s ease'
          }}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            padding: '14px 28px',
            borderRadius: '24px',
            background: '#ffffff',
            border: `1.5px solid ${cardAccent}`,
            color: '#121826',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: `0 4px 14px ${cardAccent}18`
          }}
        >
          <RotateCw size={15} color={cardAccent} />
          <span>{isFlipped ? 'Show Cover' : 'Flip Question'}</span>
        </button>

        <button
          onClick={onNextCard}
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: cardAccent,
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: `0 6px 20px ${cardAccent}35`
          }}
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
