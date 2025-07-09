import React from 'react';
import { researchData } from '../data/research';
import { BookOpen, Target, Search, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';

const ResearchSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Research & Analysis</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our systematic approach to solving the neighborhood-lifestyle matching problem through 
          data-driven research and algorithmic innovation.
        </p>
      </div>

      {/* Problem Definition */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-red-600" />
          Problem Definition
        </h3>
        <p className="text-gray-700 mb-4">{researchData.problem.definition}</p>
        
        <h4 className="font-semibold text-gray-900 mb-3">Research Hypotheses:</h4>
        <ul className="space-y-2">
          {researchData.problem.hypothesis.map((hyp, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">{hyp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* User Research */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Search className="w-5 h-5 mr-2 text-blue-600" />
          User Research Findings
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Research Methods:</h4>
            <ul className="space-y-2">
              {researchData.problem.userResearch.map((method, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">{method}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Key Insights:</h4>
            <ul className="space-y-2">
              {researchData.findings.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2">💡</span>
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-green-600" />
          Research Methodology
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Data Collection:</h4>
            <ul className="space-y-2">
              {researchData.methodology.dataCollection.map((method, index) => (
                <li key={index} className="text-sm text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  {method}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Analysis Approach:</h4>
            <ul className="space-y-2">
              {researchData.methodology.analysisApproach.map((approach, index) => (
                <li key={index} className="text-sm text-gray-700">
                  <span className="text-green-600 mr-2">•</span>
                  {approach}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Validation Methods:</h4>
            <ul className="space-y-2">
              {researchData.methodology.validationMethods.map((method, index) => (
                <li key={index} className="text-sm text-gray-700">
                  <span className="text-purple-600 mr-2">•</span>
                  {method}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Algorithm Design */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
          Algorithm Design & Trade-offs
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Approach:</h4>
            <p className="text-gray-700">{researchData.algorithm.approach}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Weighting Strategy:</h4>
            <p className="text-gray-700">{researchData.algorithm.weightingStrategy}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Key Trade-offs:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {researchData.algorithm.tradeoffs.map((tradeoff, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <span className="text-gray-700">{tradeoff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Gaps & Limitations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 text-yellow-600" />
          Data Gaps & Limitations
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Identified Data Gaps:</h4>
            <ul className="space-y-2">
              {researchData.findings.dataGaps.map((gap, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠</span>
                  <span className="text-gray-700">{gap}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Key Assumptions:</h4>
            <ul className="space-y-2">
              {researchData.findings.assumptions.map((assumption, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span className="text-gray-700">{assumption}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Future Improvements */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />
          Future Improvement Opportunities
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Data Enhancement</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Real-time crime and safety data integration</li>
              <li>• Seasonal variation analysis</li>
              <li>• Noise and air quality metrics</li>
              <li>• Community sentiment analysis</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Algorithm Improvements</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Machine learning preference adaptation</li>
              <li>• Collaborative filtering recommendations</li>
              <li>• Dynamic weight adjustment</li>
              <li>• Multi-objective optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;