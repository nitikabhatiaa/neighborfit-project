import React, { useState } from 'react';
import Header from './components/Header';
import LifestyleForm from './components/LifestyleForm';
import MatchingResults from './components/MatchingResults';
import ResearchSection from './components/ResearchSection';
import AboutSection from './components/AboutSection';
import { LifestylePreferences, MatchResult } from './types';
import { neighborhoods } from './data/neighborhoods';
import { matcher } from './utils/matchingAlgorithm';

function App() {
  const [currentTab, setCurrentTab] = useState('matcher');
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleLifestyleSubmit = (preferences: LifestylePreferences) => {
    const results = matcher.findMatches(preferences, neighborhoods);
    setMatchResults(results);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setMatchResults([]);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'matcher':
        return (
          <div className="space-y-8">
            {!showResults ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Find Your Perfect Neighborhood
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Our advanced matching algorithm analyzes your lifestyle preferences, commute needs, 
                    and housing requirements to find neighborhoods that truly fit your life.
                  </p>
                </div>
                <LifestyleForm onSubmit={handleLifestyleSubmit} />
              </>
            ) : (
              <MatchingResults results={matchResults} onReset={handleReset} />
            )}
          </div>
        );
      case 'research':
        return <ResearchSection />;
      case 'about':
        return <AboutSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentTab={currentTab} onTabChange={setCurrentTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;