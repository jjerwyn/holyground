import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LevelSelector from './components/LevelSelector';
import CardDeck from './components/CardDeck';
import Footer from './components/Footer';
import { LEVELS, QUESTIONS } from './data/questions';

const MIXED_LEVEL = {
  id: 'mixed',
  slug: 'mixed',
  number: 'ALL',
  title: 'Group Night Mix',
  subtitle: 'Shuffled deck of all levels and wildcards',
  tagline: 'Unpredictable, spontaneous, and deep.',
  accentColor: '#ec4899',
  bgColor: 'rgba(236, 72, 153, 0.15)',
  cardBg: 'linear-gradient(135deg, #2a1b2e 0%, #3a1b38 100%)',
  borderColor: 'rgba(236, 72, 153, 0.4)'
};

// Helper function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getDeckAndLevelFromPath(pathname) {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();

  if (cleanPath === 'mixed') {
    return {
      level: MIXED_LEVEL,
      deck: shuffleArray(QUESTIONS)
    };
  }

  const levelMap = {
    'level1': 'level-1',
    'level-1': 'level-1',
    'level2': 'level-2',
    'level-2': 'level-2',
    'level3': 'level-3',
    'level-3': 'level-3',
    'level4': 'level-4',
    'level-4': 'level-4',
    'level5': 'wildcards',
    'level-5': 'wildcards',
    'wildcards': 'wildcards'
  };

  const targetLevelId = levelMap[cleanPath];
  if (targetLevelId) {
    const level = LEVELS.find((l) => l.id === targetLevelId);
    if (level) {
      const filtered = QUESTIONS.filter((q) => q.levelId === level.id);
      return {
        level,
        deck: shuffleArray(filtered)
      };
    }
  }

  return { level: null, deck: [] };
}

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(null);
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync state with URL path on initial mount & back/forward navigation
  useEffect(() => {
    const syncFromLocation = () => {
      const { level, deck: initialDeck } = getDeckAndLevelFromPath(window.location.pathname);
      setCurrentLevel(level);
      setDeck(initialDeck);
      setCurrentIndex(0);
    };

    syncFromLocation();

    const handlePopState = () => {
      syncFromLocation();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle Level Selection
  const handleSelectLevel = (level) => {
    const filteredQuestions = QUESTIONS.filter((q) => q.levelId === level.id);
    const shuffled = shuffleArray(filteredQuestions);
    setCurrentLevel(level);
    setDeck(shuffled);
    setCurrentIndex(0);

    const targetSlug = level.slug || level.id;
    window.history.pushState({}, '', `/${targetSlug}`);
  };

  // Handle Mixed Deck (Group Night)
  const handleSelectMixedDeck = () => {
    const shuffledAll = shuffleArray(QUESTIONS);
    setCurrentLevel(MIXED_LEVEL);
    setDeck(shuffledAll);
    setCurrentIndex(0);

    window.history.pushState({}, '', '/mixed');
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

    window.history.pushState({}, '', '/');
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
