import React, { useState } from 'react';
import { LifestylePreferences } from '../types';
import { Car, Train, Bike, Scaling as Walking, Home, Heart, Star } from 'lucide-react';

interface LifestyleFormProps {
  onSubmit: (preferences: LifestylePreferences) => void;
}

const LifestyleForm: React.FC<LifestyleFormProps> = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState<LifestylePreferences>({
    id: Date.now().toString(),
    commute: {
      maxTime: 30,
      preferredModes: ['car'],
      workLocation: ''
    },
    housing: {
      type: 'any',
      priceRange: { min: 1000, max: 5000 },
      size: 'any'
    },
    lifestyle: {
      nightlife: 3,
      culture: 3,
      outdoors: 3,
      dining: 3,
      shopping: 3,
      quietness: 3,
      walkability: 3,
      safety: 4
    },
    demographics: {
      ageRange: '25-35',
      familyStatus: 'single',
      petsAllowed: false
    },
    priorities: {
      safety: 8,
      walkability: 7,
      affordability: 6,
      nightlife: 5,
      culture: 5,
      dining: 5,
      outdoors: 5,
      quietness: 4
    }
  });

  const handleLifestyleChange = (key: string, value: number) => {
    setPreferences(prev => ({
      ...prev,
      lifestyle: {
        ...prev.lifestyle,
        [key]: value
      }
    }));
  };

  const handlePriorityChange = (key: string, value: number) => {
    setPreferences(prev => ({
      ...prev,
      priorities: {
        ...prev.priorities,
        [key]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const lifestyleFactors = [
    { key: 'safety', label: 'Safety & Security', icon: '🛡️' },
    { key: 'walkability', label: 'Walkability', icon: '🚶' },
    { key: 'nightlife', label: 'Nightlife & Entertainment', icon: '🍻' },
    { key: 'culture', label: 'Arts & Culture', icon: '🎨' },
    { key: 'dining', label: 'Dining & Restaurants', icon: '🍽️' },
    { key: 'shopping', label: 'Shopping & Retail', icon: '🛍️' },
    { key: 'outdoors', label: 'Outdoor Activities', icon: '🌳' },
    { key: 'quietness', label: 'Peace & Quiet', icon: '🔇' }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Commute Preferences */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Car className="w-5 h-5 mr-2 text-blue-600" />
          Commute Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum commute time (minutes)
            </label>
            <input
              type="range"
              min="10"
              max="90"
              value={preferences.commute.maxTime}
              onChange={(e) => setPreferences(prev => ({
                ...prev,
                commute: { ...prev.commute, maxTime: parseInt(e.target.value) }
              }))}
              className="w-full"
            />
            <div className="text-sm text-gray-600 mt-1">{preferences.commute.maxTime} minutes</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred transportation modes
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'car', label: 'Car', icon: Car },
                { value: 'public', label: 'Public Transit', icon: Train },
                { value: 'bike', label: 'Bike', icon: Bike },
                { value: 'walk', label: 'Walk', icon: Walking }
              ].map((mode) => {
                const Icon = mode.icon;
                return (
                  <button
                    key={mode.value}
                    type="button"
                    onClick={() => {
                      const modes = preferences.commute.preferredModes.includes(mode.value as any)
                        ? preferences.commute.preferredModes.filter(m => m !== mode.value)
                        : [...preferences.commute.preferredModes, mode.value as any];
                      setPreferences(prev => ({
                        ...prev,
                        commute: { ...prev.commute, preferredModes: modes }
                      }));
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-200 ${
                      preferences.commute.preferredModes.includes(mode.value as any)
                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{mode.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Housing Preferences */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Home className="w-5 h-5 mr-2 text-green-600" />
          Housing Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
            <div className="space-y-2">
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={preferences.housing.priceRange.min}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  housing: {
                    ...prev.housing,
                    priceRange: { ...prev.housing.priceRange, min: parseInt(e.target.value) }
                  }
                }))}
                className="w-full"
              />
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={preferences.housing.priceRange.max}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  housing: {
                    ...prev.housing,
                    priceRange: { ...prev.housing.priceRange, max: parseInt(e.target.value) }
                  }
                }))}
                className="w-full"
              />
              <div className="text-sm text-gray-600">
                ${preferences.housing.priceRange.min} - ${preferences.housing.priceRange.max}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Housing Type</label>
            <select
              value={preferences.housing.type}
              onChange={(e) => setPreferences(prev => ({
                ...prev,
                housing: { ...prev.housing, type: e.target.value as any }
              }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="any">Any Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <select
              value={preferences.housing.size}
              onChange={(e) => setPreferences(prev => ({
                ...prev,
                housing: { ...prev.housing, size: e.target.value as any }
              }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="any">Any Size</option>
              <option value="studio">Studio</option>
              <option value="1br">1 Bedroom</option>
              <option value="2br">2 Bedroom</option>
              <option value="3br+">3+ Bedrooms</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lifestyle Factors */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Heart className="w-5 h-5 mr-2 text-red-600" />
          Lifestyle Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lifestyleFactors.map((factor) => (
            <div key={factor.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <span className="text-lg mr-2">{factor.icon}</span>
                  {factor.label}
                </label>
                <span className="text-sm text-gray-500">
                  {preferences.lifestyle[factor.key as keyof typeof preferences.lifestyle]}/5
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={preferences.lifestyle[factor.key as keyof typeof preferences.lifestyle]}
                onChange={(e) => handleLifestyleChange(factor.key, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Not Important</span>
                <span>Very Important</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Priority Weighting */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-600" />
          Priority Weighting
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Rate how important each factor is in your decision (1-10 scale)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(preferences.priorities).map((key) => (
            <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={preferences.priorities[key]}
                  onChange={(e) => handlePriorityChange(key, parseInt(e.target.value))}
                  className="w-20"
                />
                <span className="text-sm text-gray-600 w-6 text-right">
                  {preferences.priorities[key]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Find My Perfect Neighborhood
        </button>
      </div>
    </form>
  );
};

export default LifestyleForm;