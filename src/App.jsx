import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LevelSelector from './components/LevelSelector';
import CardDeck from './components/CardDeck';
import Footer from './components/Footer';
import { QUESTIONS } from './data/questions';

// Helper function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Level Selection
  const handleSelectLevel = (level) => {
    const filteredQuestions = QUESTIONS.filter((q) => q.levelId === level.id);
    const shuffled = shuffleArray(filteredQuestions);
    setCurrentLevel(level);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  // Handle Mixed Deck (Group Night)
  const handleSelectMixedDeck = () => {
    const mixedLevel = {
      id: 'mixed',
      number: 'ALL',
      title: 'Group Night Mix',
      subtitle: 'Shuffled deck of all levels and wildcards',
      tagline: 'Unpredictable, spontaneous, and deep.',
      accentColor: '#ec4899',
      bgColor: 'rgba(236, 72, 153, 0.15)',
      cardBg: 'linear-gradient(135deg, #2a1b2e 0%, #3a1b38 100%)',
      borderColor: 'rgba(236, 72, 153, 0.4)'
    };
    const shuffledAll = shuffleArray(QUESTIONS);
    setCurrentLevel(mixedLevel);
    setDeck(shuffledAll);
    setCurrentIndex(0);
  };

  const handleNextCard = () => {
    if (currentIndex < deck.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleShuffleDeck = () => {
    const shuffled = shuffleArray(deck);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  const handleBackToMenu = () => {
    setCurrentLevel(null);
    setDeck([]);
    setCurrentIndex(0);
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!currentLevel) return;
      if (e.key === 'ArrowRight') {
        handleNextCard();
      } else if (e.key === 'ArrowLeft') {
        handlePrevCard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLevel, currentIndex, deck.length]);

  return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <Header
        currentLevel={currentLevel}
        activeDeckCount={deck.length}
        currentIndex={currentIndex}
        onBackToMenu={handleBackToMenu}
        onShuffleDeck={handleShuffleDeck}
      />

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0'
      }}>
        {!currentLevel ? (
          <LevelSelector
            onSelectLevel={handleSelectLevel}
            onSelectMixedDeck={handleSelectMixedDeck}
          />
        ) : (
          <CardDeck
            currentLevel={currentLevel}
            deck={deck}
            currentIndex={currentIndex}
            onNextCard={handleNextCard}
            onPrevCard={handlePrevCard}
            onRestartDeck={handleShuffleDeck}
            onBackToMenu={handleBackToMenu}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
