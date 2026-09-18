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
  onNextLevel,
  onBackToMenu 
}) {
  const [autoReveal, setAutoReveal] = useState(() => {
    try {
      const saved = localStorage.getItem('holyground_auto_reveal');
      return saved !== null ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [isFlipped, setIsFlipped] = useState(autoReveal);
  const [shouldAnimateFlip, setShouldAnimateFlip] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showDeeper, setShowDeeper] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const topRef = useRef(null);
  const underRef = useRef(null);

  const isAnimatingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const skipLayoutResetRef = useRef(false);

  const activeCard = deck[currentIndex];
  const nextCardTarget = deck[Math.min(currentIndex + 1, deck.length - 1)];

  const cardAccent = currentLevel?.accentColor || '#c59b27';

  const getArchetypeBadge = (card) => {
    if (!card) return null;
    if (card.archetype === 'story') {
      return { label: 'TELL ME THE STORY', icon: '📖', color: '#D97706', bg: 'rgba(217, 119, 6, 0.1)' };
    }
    if (card.archetype === 'diagnostic') {
      return { label: 'HOW DO YOU OPERATE?', icon: '🧭', color: '#0284C7', bg: 'rgba(2, 132, 199, 0.1)' };
    }
    if (card.archetype === 'contrast') {
      return { label: 'INTERNAL CONTRAST', icon: '⚖️', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.1)' };
    }
    if (card.archetype === 'values') {
      return { label: 'VALUES & IDENTITY', icon: '⚓', color: '#B45309', bg: 'rgba(180, 83, 9, 0.1)' };
    }
    if (card.archetype === 'reflection') {
      return { label: 'REFLECTION ROUND', icon: '✨', color: '#059669', bg: 'rgba(5, 150, 105, 0.1)' };
    }
    return null;
  };

  useEffect(() => {
    try {
      localStorage.setItem('holyground_auto_reveal', JSON.stringify(autoReveal));
    } catch (e) {
      // Ignore storage errors
    }
  }, [autoReveal]);

  const [prevIndex, setPrevIndex] = useState(currentIndex);
  if (prevIndex !== currentIndex) {
    setPrevIndex(currentIndex);
    setIsFlipped(autoReveal);
    setShouldAnimateFlip(false);
    setShowDeeper(false);
    setSelectedOption(null);
  }

  useEffect(() => {
    if (currentIndex === deck.length) {
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
    setShouldAnimateFlip(true);
    setIsFlipped((prev) => !prev);
  };

  const animateNext = (direction = 1) => {
    if (isAnimatingRef.current || currentIndex >= deck.length || !topRef.current || !underRef.current) return;
    isAnimatingRef.current = true;

    const dirNum = typeof direction === 'number' ? direction : 1;
    const sign = dirNum >= 0 ? 1 : -1;

    topRef.current.style.transition = 'transform 0.28s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.28s ease';
    underRef.current.style.transition = 'transform 0.28s cubic-bezier(0.25, 1, 0.5, 1)';

    topRef.current.style.transform = `translate3d(${sign * 450}px, 0px, 0px) rotate(${sign * 25}deg)`;
    topRef.current.style.opacity = '0';
    underRef.current.style.transform = 'translateY(0px) scale(1)';

    setTimeout(() => {
      setShouldAnimateFlip(false);
      setIsFlipped(autoReveal);
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
    if (isAnimatingRef.current || currentIndex === deck.length || !topRef.current || !underRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX || (e.touches && e.touches[0]?.clientX);
    currentXRef.current = 0;
    topRef.current.style.transition = 'none';
    underRef.current.style.transition = 'none';
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDraggingRef.current || currentIndex === deck.length || !topRef.current || !underRef.current) return;
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

      if (draggedDistance > threshold && currentIndex < deck.length) {
        animateNext(currentXRef.current);
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

  const handleCardClick = (e) => {
    if (Math.abs(currentXRef.current) > 10) return;
    if (e && e.target && e.target.closest && (e.target.closest('button') || e.target.closest('.no-card-flip'))) {
      return;
    }
    handleToggleFlip();
  };



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

        {/* Underneath Card Layer */}
        {currentIndex <= deck.length && (
          <div
            ref={underRef}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '28px',
              background: '#ffffff',
              boxShadow: '0 8px 24px rgba(18, 24, 38, 0.06)',
              transform: 'translateY(8px) scale(0.96)',
              zIndex: 2,
              pointerEvents: 'none',
              overflow: 'hidden'
            }}
          >
            {currentIndex === deck.length ? (
              /* Last Card Underneath Completion Card */
              <div 
                className={`card-3d-inner ${autoReveal ? 'flipped' : ''}`}
                style={{ transition: 'none' }}
              >
                {/* UNFLIPPED CARD FRONT COVER */}
                <div className="card-face card-face-front" style={{
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
                      CARD #{deck.length} OF {deck.length}
                    </p>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600 }}>
                    <span>Drag / Swipe left or right • Tap to flip</span>
                  </div>
                </div>

                {/* REVEALED QUESTION SIDE */}
                <div className="card-face card-face-back" style={{
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
                      #{deck.length} / {deck.length}
                    </span>
                  </div>
                  <div style={{ margin: 'auto 0', padding: '0 8px', width: '100%' }}>
                    <p className="card-question-text" style={{ fontSize: 'clamp(1.05rem, 3.4vw, 1.28rem)', fontWeight: 600, lineHeight: 1.55, color: '#121826' }}>
                      "{deck[deck.length - 1]?.text}"
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            ) : currentIndex + 1 === deck.length ? (
              /* Completion Card Underneath */
              <div className="card-face" style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '12px'
              }}>
                <div className="editorial-inner-border" />
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(5, 150, 105, 0.12)',
                  border: '1.5px solid #059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#121826' }}>
                  Deck Complete
                </h3>
              </div>
            ) : (
              <div 
                className={`card-3d-inner ${autoReveal ? 'flipped' : ''}`}
                style={{ transition: 'none' }}
              >
                {/* UNFLIPPED CARD FRONT COVER */}
                <div className="card-face card-face-front" style={{
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
                      {nextCardTarget?.category || (currentLevel ? `LEVEL ${currentLevel.number}` : 'HOLY GROUND')}
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
            )}
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
          {/* 3D Card Container or Completion Card */}
          {currentIndex === deck.length ? (
            <div className="card-face" style={{
              border: `1.5px solid #059669`,
              boxShadow: '0 16px 36px -10px rgba(5, 150, 105, 0.15)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              background: '#ffffff'
            }}>
              <div className="editorial-inner-border" />
              
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(5, 150, 105, 0.12)',
                border: '1.5px solid #059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669',
                marginTop: '10px'
              }}>
                <CheckCircle2 size={34} />
              </div>

              <div style={{ margin: 'auto 0' }}>
                <h2 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#121826', marginBottom: '8px' }}>
                  {currentLevel?.id === 'final-round' ? 'Journey Complete' : 'Deck Complete'}
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.5, padding: '0 12px' }}>
                  {currentLevel?.id === 'final-round'
                    ? "You walked through who you are, what made you, how you connect, what's inside, and where Jesus meets you. Carry these bonds forward."
                    : currentLevel?.id === 'level-5'
                    ? "You completed all 5 core levels of Holy Ground. Step into the Final Reflection Round together."
                    : `You completed all ${deck.length} cards in this deck. Reflect on what God spoke through your time together.`}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', pointerEvents: 'auto' }}>
                {currentLevel?.id !== 'mixed' && currentLevel?.id !== 'final-round' ? (
                  <>
                    <button
                      onClick={onNextLevel}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '18px',
                        background: currentLevel?.id === 'level-5' ? '#059669' : (currentLevel?.accentColor || '#059669'),
                        border: 'none',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        boxShadow: `0 4px 14px ${(currentLevel?.id === 'level-5' ? '#059669' : (currentLevel?.accentColor || '#059669'))}35`
                      }}
                    >
                      <ChevronRight size={16} strokeWidth={2.5} />
                      <span>{currentLevel?.id === 'level-5' ? 'Enter The Reflection Round' : 'Move to Next Deck'}</span>
                    </button>

                    <button
                      onClick={onRestartDeck}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '18px',
                        background: '#121826',
                        border: 'none',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        cursor: 'pointer'
                      }}
                    >
                      Reshuffle Deck
                    </button>

                    <button
                      onClick={onBackToMenu}
                      style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '18px',
                        background: 'transparent',
                        border: 'none',
                        color: '#6b7280',
                        fontWeight: 700,
                        fontSize: '0.73rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        cursor: 'pointer'
                      }}
                    >
                      Choose Another Deck
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onBackToMenu}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '18px',
                      background: currentLevel?.accentColor || '#059669',
                      border: 'none',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: `0 4px 14px ${(currentLevel?.accentColor || '#059669')}35`
                    }}
                  >
                    <span>Choose Another Deck</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
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
                padding: 'clamp(18px, 3vh, 26px) clamp(16px, 3.5vw, 22px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
                overflowY: 'auto'
              }}>
                <div className="editorial-inner-border" />
                
                {/* Top Bar: Category / Archetype badge & Number */}
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {getArchetypeBadge(activeCard) ? (
                      <span style={{
                        fontSize: '0.66rem',
                        fontWeight: 800,
                        color: getArchetypeBadge(activeCard).color,
                        background: getArchetypeBadge(activeCard).bg,
                        padding: '2px 8px',
                        borderRadius: '10px',
                        letterSpacing: '0.06em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <span>{getArchetypeBadge(activeCard).icon}</span>
                        <span>{getArchetypeBadge(activeCard).label}</span>
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: cardAccent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {activeCard?.category || (currentLevel ? `LEVEL ${currentLevel.number}` : 'HOLY GROUND')}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#9ca3af', fontWeight: 700 }}>
                    #{currentIndex + 1} / {deck.length}
                  </span>
                </div>

                {/* Main Question Body */}
                <div style={{ margin: 'auto 0', padding: '6px 4px', width: '100%' }}>
                  <p className="card-question-text" style={{ fontSize: 'clamp(1.02rem, 3.2vw, 1.25rem)', fontWeight: 600, lineHeight: 1.5, color: '#121826' }}>
                    "{activeCard.text}"
                  </p>

                  {/* Diagnostic Options Chips (if present) */}
                  {activeCard.options && activeCard.options.length > 0 && (
                    <div 
                      className="no-card-flip"
                      style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '6px', 
                        justifyContent: 'center', 
                        marginTop: '12px'
                      }} 
                      onClick={(e) => e.stopPropagation()}
                    >
                      {activeCard.options.map((option, idx) => {
                        const isSelected = selectedOption === option;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedOption(isSelected ? null : option);
                            }}
                            style={{
                              padding: '5px 11px',
                              borderRadius: '14px',
                              background: isSelected ? cardAccent : 'rgba(18, 24, 38, 0.04)',
                              border: isSelected ? `1.5px solid ${cardAccent}` : '1px solid rgba(18, 24, 38, 0.1)',
                              color: isSelected ? '#ffffff' : '#374151',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              transition: 'all 0.15s ease',
                              boxShadow: isSelected ? `0 2px 8px ${cardAccent}35` : 'none'
                            }}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Go Deeper Section or Subtext */}
                {activeCard.deeper ? (
                  <div 
                    className="no-card-flip"
                    style={{ width: '100%', marginTop: 'auto', paddingTop: '6px' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {!showDeeper ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeeper(true);
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          borderRadius: '16px',
                          background: `${cardAccent}0D`,
                          border: `1px solid ${cardAccent}35`,
                          color: cardAccent,
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span>Want to go deeper? Tap</span>
                        <span style={{ fontSize: '0.85rem' }}>→</span>
                      </button>
                    ) : (
                      <div
                        style={{
                          background: `${cardAccent}0D`,
                          border: `1px solid ${cardAccent}35`,
                          borderRadius: '14px',
                          padding: '8px 12px',
                          textAlign: 'center',
                          cursor: 'pointer'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeeper(false);
                        }}
                      >
                        <div style={{ fontSize: '0.64rem', fontWeight: 800, color: cardAccent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>
                          GO DEEPER • TAP TO HIDE
                        </div>
                        <p style={{ fontSize: '0.82rem', fontStyle: 'italic', color: '#1f2937', lineHeight: 1.4, margin: 0 }}>
                          "{activeCard.deeper}"
                        </p>
                      </div>
                    )}
                  </div>
                ) : activeCard.subtext ? (
                  <div style={{ width: '100%', marginTop: 'auto', paddingTop: '4px' }}>
                    <p style={{ fontSize: '0.72rem', color: '#9ca3af', fontStyle: 'italic', margin: 0 }}>
                      {activeCard.subtext}
                    </p>
                  </div>
                ) : (
                  <div style={{ height: '6px' }}></div>
                )}
              </div>
            </div>
          )}
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
          onClick={() => animateNext(1)}
          disabled={currentIndex === deck.length}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: currentIndex === deck.length ? '#e5e7eb' : cardAccent,
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: currentIndex === deck.length ? 'not-allowed' : 'pointer',
            boxShadow: currentIndex === deck.length ? 'none' : `0 6px 20px ${cardAccent}35`,
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
