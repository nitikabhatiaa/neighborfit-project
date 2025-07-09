import React from 'react';
import { MatchResult } from '../types';
import { MapPin, Star, TrendingUp, AlertTriangle, ExternalLink } from 'lucide-react';

interface MatchingResultsProps {
  results: MatchResult[];
  onReset: () => void;
}

const MatchingResults: React.FC<MatchingResultsProps> = ({ results, onReset }) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No results yet</h3>
        <p className="text-gray-600">Complete the lifestyle form to find your perfect neighborhood match.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Your Neighborhood Matches
        </h2>
        <button
          onClick={onReset}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Search Again
        </button>
      </div>

      <div className="grid gap-6">
        {results.map((result, index) => (
          <div key={result.neighborhood.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {result.neighborhood.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">
                        {Math.round(result.matchScore)}% Match
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {result.neighborhood.city}, {result.neighborhood.state}
                  </p>
                  <p className="text-sm text-gray-700">
                    {result.neighborhood.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    index === 0 ? 'bg-green-100 text-green-800' :
                    index === 1 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    #{index + 1} Match
                  </div>
                </div>
              </div>

              {/* Match Score Breakdown */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                  Score Breakdown
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.entries(result.breakdown).map(([category, data]) => (
                    <div key={category} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 capitalize mb-1">
                        {category}
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {Math.round(data.score)}/100
                      </div>
                      <div className="text-xs text-gray-500">
                        Weight: {data.weight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neighborhood Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {result.neighborhood.scores.walkability}
                  </div>
                  <div className="text-sm text-gray-600">Walkability</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {result.neighborhood.scores.safety}
                  </div>
                  <div className="text-sm text-gray-600">Safety</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {result.neighborhood.scores.nightlife}
                  </div>
                  <div className="text-sm text-gray-600">Nightlife</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">
                    ${Math.round(result.neighborhood.housing.rentPrice)}
                  </div>
                  <div className="text-sm text-gray-600">Avg Rent</div>
                </div>
              </div>

              {/* Reasons and Concerns */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-green-800 mb-2">
                    Why it's a good match:
                  </h4>
                  <ul className="space-y-1">
                    {result.reasons.map((reason, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
                {result.concerns.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      Considerations:
                    </h4>
                    <ul className="space-y-1">
                      {result.concerns.map((concern, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          {concern}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Amenities */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Amenities:</h4>
                <div className="flex flex-wrap gap-2">
                  {result.neighborhood.amenities.map((amenity, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingResults;