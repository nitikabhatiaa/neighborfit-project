// Core type definitions for the neighborhood-lifestyle matching system

export interface LifestylePreferences {
  id: string;
  userId?: string;
  commute: {
    maxTime: number; // minutes
    preferredModes: ('car' | 'public' | 'bike' | 'walk')[];
    workLocation?: string;
  };
  housing: {
    type: 'apartment' | 'house' | 'condo' | 'any';
    priceRange: {
      min: number;
      max: number;
    };
    size: 'studio' | '1br' | '2br' | '3br+' | 'any';
  };
  lifestyle: {
    nightlife: number; // 1-5 scale
    culture: number;
    outdoors: number;
    dining: number;
    shopping: number;
    quietness: number;
    walkability: number;
    safety: number;
  };
  demographics: {
    ageRange: string;
    familyStatus: 'single' | 'couple' | 'family' | 'roommates';
    petsAllowed: boolean;
  };
  priorities: {
    [key: string]: number; // weighted importance (1-10)
  };
}

export interface NeighborhoodData {
  id: string;
  name: string;
  city: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  scores: {
    walkability: number;
    transit: number;
    bikeability: number;
    crime: number;
    schools: number;
    nightlife: number;
    culture: number;
    dining: number;
    shopping: number;
    outdoors: number;
    quietness: number;
    affordability: number;
  };
  demographics: {
    medianAge: number;
    medianIncome: number;
    populationDensity: number;
    familyFriendly: number;
  };
  housing: {
    medianPrice: number;
    rentPrice: number;
    availableTypes: string[];
  };
  amenities: string[];
  commuteOptions: {
    subway: boolean;
    bus: boolean;
    bike: boolean;
    walkable: boolean;
  };
  description: string;
  images: string[];
}

export interface MatchResult {
  neighborhood: NeighborhoodData;
  matchScore: number;
  breakdown: {
    [category: string]: {
      score: number;
      weight: number;
      contribution: number;
    };
  };
  reasons: string[];
  concerns: string[];
}

export interface ResearchData {
  problem: {
    definition: string;
    hypothesis: string[];
    userResearch: string[];
  };
  methodology: {
    dataCollection: string[];
    analysisApproach: string[];
    validationMethods: string[];
  };
  findings: {
    keyInsights: string[];
    dataGaps: string[];
    assumptions: string[];
  };
  algorithm: {
    approach: string;
    weightingStrategy: string;
    tradeoffs: string[];
  };
}