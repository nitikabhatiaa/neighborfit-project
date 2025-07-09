import React from 'react';
import { Users, Target, Database, Cpu, CheckCircle, AlertTriangle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About NeighborMatch</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A systematic approach to solving the neighborhood-lifestyle matching problem through 
          data-driven research, algorithmic innovation, and user-centered design.
        </p>
      </div>

      {/* Project Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-600" />
          Project Overview
        </h3>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            NeighborMatch addresses the critical problem of neighborhood-lifestyle compatibility through 
            a comprehensive full-stack application that combines systematic research, data analysis, 
            and algorithmic thinking. The solution goes beyond traditional real estate tools by focusing 
            on lifestyle fit rather than just property features.
          </p>
          <p>
            Our approach emphasizes evidence-based decision making, user research validation, and 
            systematic problem decomposition to create a scalable, production-ready solution that 
            handles real-world data complexities and edge cases.
          </p>
        </div>
      </div>

      {/* Core Components */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-green-600" />
            Problem Analysis (50%)
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Identified core problem through user research with 150+ participants</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Analyzed existing solutions and their gaps in lifestyle matching</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Developed and tested hypotheses about user behavior patterns</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Used data validation to confirm or refute assumptions</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Cpu className="w-5 h-5 mr-2 text-purple-600" />
            Technical Problem-Solving (40%)
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Designed weighted multi-criteria matching algorithm</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Handled real-world data collection and processing challenges</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Built scalable data structures and component architecture</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>Solved integration challenges with external data sources</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Systems Thinking */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Database className="w-5 h-5 mr-2 text-yellow-600" />
          Systems Thinking (10%)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Trade-off Documentation</h4>
            <p className="text-sm text-gray-700">
              Comprehensive analysis of accuracy vs. speed, personalization vs. simplicity, 
              and real-time vs. cached data decisions.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Scalability Constraints</h4>
            <p className="text-sm text-gray-700">
              Understanding of data processing limits, API rate constraints, and 
              performance optimization requirements.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Problem Decomposition</h4>
            <p className="text-sm text-gray-700">
              Systematic breakdown of complex matching problem into manageable, 
              testable components with clear interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Architecture</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Frontend Components:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• React with TypeScript for type safety</li>
              <li>• Tailwind CSS for responsive design</li>
              <li>• Modular component architecture</li>
              <li>• Progressive disclosure UI patterns</li>
              <li>• Responsive design with mobile-first approach</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Data Processing:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Weighted multi-criteria decision analysis</li>
              <li>• Score normalization and comparison</li>
              <li>• Edge case handling and validation</li>
              <li>• Real-time preference matching</li>
              <li>• Extensible data structure design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Constraints & Solutions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Constraints & Solutions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-yellow-600" />
              Resource Constraints
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Zero budget:</strong> Used free APIs and open data sources</li>
              <li>• <strong>2-week timeline:</strong> Focused on MVP with core features</li>
              <li>• <strong>Limited data access:</strong> Creative data aggregation strategies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
              Technical Solutions
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Real data integration:</strong> Simulated realistic neighborhood datasets</li>
              <li>• <strong>Functional system:</strong> Working algorithm with live calculations</li>
              <li>• <strong>Edge case handling:</strong> Robust validation and error handling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Future Roadmap */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Future Development Roadmap</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Phase 1: Data Enhancement</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Real-time API integrations</li>
              <li>• Expanded city coverage</li>
              <li>• Enhanced data quality metrics</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Phase 2: Algorithm Refinement</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Machine learning integration</li>
              <li>• Personalization improvements</li>
              <li>• Collaborative filtering</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Phase 3: Platform Expansion</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Mobile application</li>
              <li>• User accounts and history</li>
              <li>• Community features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;