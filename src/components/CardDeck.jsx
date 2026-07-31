import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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
  const [autoReveal, setAutoReveal] = useState(() => {
    try {
      const saved = localStorage.getItem('holyground_auto_reveal');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [isFlipped, setIsFlipped] = useState(autoReveal);
  const [shouldAnimateFlip, setShouldAnimateFlip] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const topRef = useRef(null);
  const underRef = useRef(null);

  const isAnimatingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const skipLayoutResetRef = useRef(false);

  const activeCard = deck[currentIndex];
  const nextCardTarget = deck[Math.min(currentIndex + 1, deck.length - 1)];

  const isWildcard = activeCard?.type === 'wildcard';
  const cardAccent = isWildcard ? '#059669' : (currentLevel?.accentColor || '#c59b27');

  useEffect(() => {
    try {
      localStorage.setItem('holyground_auto_reveal', JSON.stringify(autoReveal));
    } catch (e) {
      // Ignore storage errors
    }
  }, [autoReveal]);

  useEffect(() => {
    setIsFlipped(autoReveal);
    setShouldAnimateFlip(false);
    
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
  }, [currentIndex, deck.length, autoReveal]);

  // Synchronously reset transform positions before browser paint on index change
  useLayoutEffect(() => {
    if (skipLayoutResetRef.current) {
      skipLayoutResetRef.current = false;
      return;
    }
    if (topRef.current) {
      topRef.current.style.transition = 'none';
      topRef.current.style.transform = 'translate3d(0px, 0px, 0px) rotate(0deg)';
      topRef.current.style.opacity = '1';
    }
    if (underRef.current) {
      underRef.current.style.transition = 'none';
      underRef.current.style.transform = 'translateY(8px) scale(0.96)';
    }
    isAnimatingRef.current = false;
  }, [currentIndex]);

  const handleToggleFlip = () => {
    if (!isFlipped) {
      setShouldAnimateFlip(true);
      setIsFlipped(true);
    }
  };

  const animateNext = () => {
    if (isAnimatingRef.current || currentIndex >= deck.length - 1 || !topRef.current || !underRef.current) return;
    isAnimatingRef.current = true;

    topRef.current.style.transition = 'transform 0.28s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.28s ease';
    underRef.current.style.transition = 'transform 0.28s cubic-bezier(0.25, 1, 0.5, 1)';

    topRef.current.style.transform = 'translate3d(450px, 0px, 0px) rotate(25deg)';
    topRef.current.style.opacity = '0';
    underRef.current.style.transform = 'translateY(0px) scale(1)';

    setTimeout(() => {
      setShouldAnimateFlip(false);
      onNextCard();
    }, 280);
  };

  const animatePrev = () => {
    if (isAnimatingRef.current || currentIndex <= 0 || !topRef.current || !underRef.current) return;
    isAnimatingRef.current = true;

    setShouldAnimateFlip(false);

    // 1. Prepare top card off-screen on the right with opacity 0
    topRef.current.style.transition = 'none';
    topRef.current.style.transform = 'translate3d(450px, -15px, 0px) rotate(22deg)';
    topRef.current.style.opacity = '0';
    underRef.current.style.transition = 'none';
    underRef.current.style.transform = 'translateY(0px) scale(1)';

    // 2. Skip the useLayoutEffect reset so it doesn't kill our animation
    skipLayoutResetRef.current = true;

    // 3. Trigger parent state change to previous card
    onPrevCard();
    setIsFlipped(autoReveal);

    // 4. Animate top card landing smoothly back on top (from right -> center)
    requestAnimationFrame(() => {
      if (!topRef.current || !underRef.current) return;
      topRef.current.style.transition = 'transform 0.32s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.28s ease';
      underRef.current.style.transition = 'transform 0.32s cubic-bezier(0.25, 1, 0.5, 1)';

      topRef.current.style.transform = 'translate3d(0px, 0px, 0px) rotate(0deg)';
      topRef.current.style.opacity = '1';
      underRef.current.style.transform = 'translateY(8px) scale(0.96)';

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 320);
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        handleToggleFlip();
      } else if (e.key === 'ArrowRight') {
        animateNext();
      } else if (e.key === 'ArrowLeft') {
        animatePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, deck.length]);

  // Pointer & Touch Handlers using global window listeners (100% Matching deck-preview.html)
  const handlePointerDown = (e) => {
    if (isAnimatingRef.current || !topRef.current || !underRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX || (e.touches && e.touches[0]?.clientX);
    currentXRef.current = 0;
    topRef.current.style.transition = 'none';
    underRef.current.style.transition = 'none';
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDraggingRef.current || !topRef.current || !underRef.current) return;
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
      if (clientX === undefined) return;

      const x = clientX - startXRef.current;
      currentXRef.current = x;

      const rotate = x * 0.08;
      const opacity = 1 - Math.abs(x) / 600;
      const progress = Math.min(Math.abs(x) / 180, 1);
      const scale = 0.96 + (0.04 * progress);
      const y = 8 - (8 * progress);

      topRef.current.style.transform = `translate3d(${x}px, 0px, 0px) rotate(${rotate}deg)`;
      topRef.current.style.opacity = opacity;
      underRef.current.style.transform = `translateY(${y}px) scale(${scale})`;
    };

    const handlePointerUp = () => {
      if (!isDraggingRef.current || !topRef.current || !underRef.current) return;
      isDraggingRef.current = false;

      const threshold = 50;
      const draggedDistance = Math.abs(currentXRef.current);

      if (draggedDistance > threshold && currentIndex < deck.length - 1) {
        animateNext();
      } else if (draggedDistance > 0) {
        topRef.current.style.transition = 'transform 0.28s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.28s ease';
        underRef.current.style.transition = 'transform 0.28s cubic-bezier(0.25, 1, 0.5, 1)';
        topRef.current.style.transform = 'translate3d(0px, 0px, 0px) rotate(0deg)';
        topRef.current.style.opacity = '1';
        underRef.current.style.transform = 'translateY(8px) scale(0.96)';
      }
      currentXRef.current = 0;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [currentIndex, deck.length]);

  const handleCardClick = () => {
    if (Math.abs(currentXRef.current) > 10) return;
    handleToggleFlip();
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

  return (
    <div className="card-stack-wrapper">
      {/* Physical Card Stack Container */}
      <div className="card-physical-container">
        
        {/* Ghost Deck Stack Layer (Card #3+) */}
        {currentIndex + 2 < deck.length && (
          <div style={{
            position: 'absolute',
            width: '90%',
            height: '92%',
            borderRadius: '28px',
            background: 'rgba(255, 255, 255, 0.65)',
            border: '1px solid rgba(18, 24, 38, 0.06)',
            transform: 'translateY(16px) scale(0.92)',
            zIndex: 1,
            boxShadow: '0 4px 16px rgba(18, 24, 38, 0.03)'
          }} />
        )}

        {/* Underneath Card Layer (100% Matching deck-preview.html) */}
        {nextCardTarget && (
          <div
            ref={underRef}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '28px',
              background: '#ffffff',
              border: `1.5px solid ${cardAccent}`,
              boxShadow: '0 8px 24px rgba(18, 24, 38, 0.06)',
              transform: 'translateY(8px) scale(0.96)',
              zIndex: 2,
              pointerEvents: 'none',
              overflow: 'hidden'
            }}
          >
            <div 
            className={`card-3d-inner ${autoReveal ? 'flipped' : ''}`}
            style={{ transition: 'none' }}
          >
            {/* UNFLIPPED CARD FRONT COVER */}
            <div className="card-face card-face-front" style={{
              border: `1.5px solid ${cardAccent}`,
              boxShadow: '0 16px 36px -10px rgba(18, 24, 38, 0.06)',
              padding: 'clamp(20px, 4vh, 32px) clamp(18px, 4vw, 24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div className="editorial-inner-border" />
              <div style={{
                padding: '4px 14px',
                background: '#ffffff',
                border: `1px solid ${cardAccent}40`,
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: cardAccent,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                <span>{currentLevel ? `LEVEL ${currentLevel.number}` : 'HOLY GROUND'}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <HolyGroundLogo size={48} color={cardAccent} glow={false} />
                <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.06em', color: '#121826', textTransform: 'uppercase' }}>
                  HOLY GROUND
                </h3>
                <p style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600 }}>
                  CARD #{currentIndex + 2} OF {deck.length}
                </p>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600 }}>
                <span>Drag / Swipe left or right • Tap to flip</span>
              </div>
            </div>

            {/* REVEALED QUESTION SIDE */}
            <div className="card-face card-face-back" style={{
              border: `1.5px solid ${cardAccent}`,
              boxShadow: '0 16px 36px -10px rgba(18, 24, 38, 0.06)',
              padding: 'clamp(20px, 4vh, 32px) clamp(18px, 4vw, 24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div className="editorial-inner-border" />
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: cardAccent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  HOLY GROUND
                </span>
                <span style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 700 }}>
                  #{currentIndex + 2} / {deck.length}
                </span>
              </div>
              <div style={{ margin: 'auto 0', padding: '0 8px', width: '100%' }}>
                <p className="card-question-text" style={{ fontSize: 'clamp(1.05rem, 3.4vw, 1.28rem)', fontWeight: 600, lineHeight: 1.55, color: '#121826' }}>
                  "{nextCardTarget.text}"
                </p>
              </div>
              <div></div>
            </div>
          </div>
          </div>
        )}

        {/* Active Top Card (100% Direct DOM Ref Physics & Animation Engine matching deck-preview.html) */}
        <div
          ref={topRef}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 10,
            cursor: 'grab',
            touchAction: 'none',
            transform: 'translate3d(0px, 0px, 0px) rotate(0deg)',
            opacity: 1,
            willChange: 'transform'
          }}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          onClick={handleCardClick}
        >
          {/* 3D Card Container */}
          <div 
            className={`card-3d-inner ${isFlipped ? 'flipped' : ''}`}
            style={{
              transition: shouldAnimateFlip ? 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
            }}
          >
            {/* UNFLIPPED CARD FRONT COVER */}
            <div className="card-face card-face-front" style={{
              border: `1.5px solid ${cardAccent}`,
              boxShadow: '0 16px 36px -10px rgba(18, 24, 38, 0.12)',
              padding: 'clamp(20px, 4vh, 32px) clamp(18px, 4vw, 24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div className="editorial-inner-border" />
              <div style={{
                padding: '4px 14px',
                background: '#ffffff',
                border: `1px solid ${cardAccent}40`,
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: cardAccent,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                <span>{currentLevel ? `LEVEL ${currentLevel.number}` : 'HOLY GROUND'}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <HolyGroundLogo size={48} color={cardAccent} glow={false} />
                <h3 className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.06em', color: '#121826', textTransform: 'uppercase' }}>
                  HOLY GROUND
                </h3>
                <p style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600 }}>
                  CARD #{currentIndex + 1} OF {deck.length}
                </p>
              </div>

              <div style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600 }}>
                <span>Drag / Swipe left or right • Tap to flip</span>
              </div>
            </div>

            {/* REVEALED QUESTION SIDE */}
            <div className="card-face card-face-back" style={{
              border: `1.5px solid ${cardAccent}`,
              boxShadow: '0 16px 36px -10px rgba(18, 24, 38, 0.12)',
              padding: 'clamp(20px, 4vh, 32px) clamp(18px, 4vw, 24px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div className="editorial-inner-border" />
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: cardAccent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  HOLY GROUND
                </span>
                <span style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 700 }}>
                  #{currentIndex + 1} / {deck.length}
                </span>
              </div>

              <div style={{ margin: 'auto 0', padding: '0 8px', width: '100%' }}>
                <p className="card-question-text" style={{ fontSize: 'clamp(1.05rem, 3.4vw, 1.28rem)', fontWeight: 600, lineHeight: 1.55, color: '#121826' }}>
                  "{activeCard.text}"
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Touch Control Buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        width: '100%',
        paddingBottom: '4px'
      }}>
        <button
          onClick={animatePrev}
          disabled={currentIndex === 0}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid rgba(18, 24, 38, 0.14)',
            color: currentIndex === 0 ? '#d1d5db' : '#121826',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 12px rgba(18, 24, 38, 0.04)',
            transition: 'all 0.2s ease',
            flexShrink: 0,
            opacity: currentIndex === 0 ? 0.4 : 1
          }}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleToggleFlip}
          style={{
            padding: '12px 22px',
            borderRadius: '24px',
            background: '#ffffff',
            border: `1.5px solid ${cardAccent}`,
            color: '#121826',
            fontWeight: 800,
            fontSize: '0.8rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: `0 4px 14px rgba(197, 155, 39, 0.18)`,
            whiteSpace: 'nowrap'
          }}
        >
          🔄
          <span>{isFlipped ? 'Show Cover' : 'Flip Question'}</span>
        </button>

        <button
          onClick={animateNext}
          disabled={currentIndex === deck.length - 1}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: currentIndex === deck.length - 1 ? '#e5e7eb' : cardAccent,
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentIndex === deck.length - 1 ? 'not-allowed' : 'pointer',
            boxShadow: currentIndex === deck.length - 1 ? 'none' : `0 6px 20px ${cardAccent}35`,
            flexShrink: 0
          }}
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Auto-Reveal Preference Pill Button */}
      <button
        onClick={() => setAutoReveal((prev) => !prev)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 18px',
          borderRadius: '20px',
          background: autoReveal ? '#121826' : '#ffffff',
          color: autoReveal ? '#ffffff' : '#121826',
          border: '1px solid rgba(18, 24, 38, 0.14)',
          fontSize: '0.74rem',
          fontWeight: 800,
          letterSpacing: '0.05em',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(18, 24, 38, 0.03)',
          transition: 'all 0.2s ease',
          margin: '0 auto'
        }}
      >
        {autoReveal && <span>⚡</span>}
        <span>Auto-Reveal Question: <strong>{autoReveal ? 'ON' : 'OFF'}</strong></span>
      </button>
    </div>
  );
}
