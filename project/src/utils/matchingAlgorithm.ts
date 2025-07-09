import { LifestylePreferences, NeighborhoodData, MatchResult } from '../types';

export class NeighborhoodMatcher {
  private normalizeScore(score: number, min: number = 0, max: number = 100): number {
    return Math.max(0, Math.min(100, score));
  }

  private calculateScoreContribution(
    userPreference: number,
    neighborhoodScore: number,
    weight: number,
    preferenceWeight: number
  ): number {
    // Calculate how well the neighborhood matches the user's preference
    const scoreDifference = Math.abs(userPreference * 20 - neighborhoodScore); // Scale 1-5 to 0-100
    const matchScore = Math.max(0, 100 - scoreDifference * 1.5);
    
    // Apply both algorithm weight and user preference weight
    return (matchScore * weight * preferenceWeight) / 100;
  }

  private evaluateLifestyleMatch(
    preferences: LifestylePreferences,
    neighborhood: NeighborhoodData
  ): { score: number; breakdown: any } {
    const factors = [
      {
        key: 'walkability',
        userValue: preferences.lifestyle.walkability,
        neighborhoodScore: neighborhood.scores.walkability,
        weight: 0.15,
        userWeight: preferences.priorities.walkability || 5
      },
      {
        key: 'safety',
        userValue: preferences.lifestyle.safety,
        neighborhoodScore: neighborhood.scores.crime,
        weight: 0.20,
        userWeight: preferences.priorities.safety || 8
      },
      {
        key: 'nightlife',
        userValue: preferences.lifestyle.nightlife,
        neighborhoodScore: neighborhood.scores.nightlife,
        weight: 0.12,
        userWeight: preferences.priorities.nightlife || 5
      },
      {
        key: 'culture',
        userValue: preferences.lifestyle.culture,
        neighborhoodScore: neighborhood.scores.culture,
        weight: 0.10,
        userWeight: preferences.priorities.culture || 5
      },
      {
        key: 'dining',
        userValue: preferences.lifestyle.dining,
        neighborhoodScore: neighborhood.scores.dining,
        weight: 0.10,
        userWeight: preferences.priorities.dining || 5
      },
      {
        key: 'outdoors',
        userValue: preferences.lifestyle.outdoors,
        neighborhoodScore: neighborhood.scores.outdoors,
        weight: 0.10,
        userWeight: preferences.priorities.outdoors || 5
      },
      {
        key: 'quietness',
        userValue: preferences.lifestyle.quietness,
        neighborhoodScore: neighborhood.scores.quietness,
        weight: 0.08,
        userWeight: preferences.priorities.quietness || 4
      },
      {
        key: 'affordability',
        userValue: this.calculateAffordabilityPreference(preferences),
        neighborhoodScore: neighborhood.scores.affordability,
        weight: 0.15,
        userWeight: preferences.priorities.affordability || 6
      }
    ];

    let totalScore = 0;
    let totalWeight = 0;
    const breakdown: any = {};

    factors.forEach(factor => {
      const contribution = this.calculateScoreContribution(
        factor.userValue,
        factor.neighborhoodScore,
        factor.weight,
        factor.userWeight
      );
      
      const effectiveWeight = factor.weight * factor.userWeight;
      totalScore += contribution;
      totalWeight += effectiveWeight;
      
      breakdown[factor.key] = {
        score: factor.neighborhoodScore,
        weight: factor.userWeight,
        contribution: contribution
      };
    });

    return {
      score: totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0,
      breakdown
    };
  }

  private calculateAffordabilityPreference(preferences: LifestylePreferences): number {
    // Convert budget range to preference scale (1-5)
    const maxBudget = preferences.housing.priceRange.max;
    if (maxBudget <= 1500) return 5; // High affordability need
    if (maxBudget <= 2500) return 4;
    if (maxBudget <= 4000) return 3;
    if (maxBudget <= 6000) return 2;
    return 1; // Low affordability need
  }

  private evaluateCommute(
    preferences: LifestylePreferences,
    neighborhood: NeighborhoodData
  ): number {
    const { preferredModes } = preferences.commute;
    let score = 0;
    let validModes = 0;

    if (preferredModes.includes('public') && neighborhood.commuteOptions.subway) {
      score += neighborhood.scores.transit;
      validModes++;
    }
    if (preferredModes.includes('bike') && neighborhood.commuteOptions.bike) {
      score += neighborhood.scores.bikeability;
      validModes++;
    }
    if (preferredModes.includes('walk') && neighborhood.commuteOptions.walkable) {
      score += neighborhood.scores.walkability;
      validModes++;
    }
    if (preferredModes.includes('car')) {
      score += 80; // Assume most places are car-accessible
      validModes++;
    }

    return validModes > 0 ? score / validModes : 50;
  }

  private evaluateHousing(
    preferences: LifestylePreferences,
    neighborhood: NeighborhoodData
  ): number {
    const { priceRange, type } = preferences.housing;
    let score = 0;

    // Price compatibility
    const rent = neighborhood.housing.rentPrice;
    if (rent >= priceRange.min && rent <= priceRange.max) {
      score += 100;
    } else if (rent < priceRange.min) {
      score += 80; // Lower price is generally good
    } else {
      // Calculate penalty for being over budget
      const overBudget = (rent - priceRange.max) / priceRange.max;
      score += Math.max(0, 100 - overBudget * 100);
    }

    // Type compatibility
    if (type === 'any' || neighborhood.housing.availableTypes.includes(type)) {
      score += 100;
    } else {
      score += 60; // Partial compatibility
    }

    return score / 2; // Average of price and type scores
  }

  private generateReasons(
    preferences: LifestylePreferences,
    neighborhood: NeighborhoodData,
    matchScore: number
  ): string[] {
    const reasons: string[] = [];
    
    if (neighborhood.scores.walkability >= 80) {
      reasons.push('Excellent walkability for daily errands');
    }
    if (neighborhood.scores.crime >= 80) {
      reasons.push('High safety ratings and low crime');
    }
    if (preferences.lifestyle.nightlife >= 4 && neighborhood.scores.nightlife >= 85) {
      reasons.push('Vibrant nightlife and entertainment scene');
    }
    if (preferences.lifestyle.culture >= 4 && neighborhood.scores.culture >= 85) {
      reasons.push('Rich cultural amenities and arts scene');
    }
    if (preferences.lifestyle.dining >= 4 && neighborhood.scores.dining >= 85) {
      reasons.push('Outstanding dining and restaurant options');
    }
    if (preferences.lifestyle.outdoors >= 4 && neighborhood.scores.outdoors >= 80) {
      reasons.push('Great access to parks and outdoor activities');
    }

    return reasons.slice(0, 4); // Limit to top 4 reasons
  }

  private generateConcerns(
    preferences: LifestylePreferences,
    neighborhood: NeighborhoodData
  ): string[] {
    const concerns: string[] = [];
    
    if (neighborhood.housing.rentPrice > preferences.housing.priceRange.max) {
      concerns.push(`Rent may exceed budget (avg $${neighborhood.housing.rentPrice})`);
    }
    if (preferences.lifestyle.quietness >= 4 && neighborhood.scores.quietness < 60) {
      concerns.push('May be noisier than preferred');
    }
    if (preferences.lifestyle.nightlife >= 4 && neighborhood.scores.nightlife < 60) {
      concerns.push('Limited nightlife options');
    }
    if (preferences.lifestyle.safety >= 4 && neighborhood.scores.crime < 70) {
      concerns.push('Safety ratings below your preferences');
    }
    if (preferences.lifestyle.outdoors >= 4 && neighborhood.scores.outdoors < 60) {
      concerns.push('Limited outdoor recreation options');
    }

    return concerns.slice(0, 3); // Limit to top 3 concerns
  }

  public findMatches(
    preferences: LifestylePreferences,
    neighborhoods: NeighborhoodData[]
  ): MatchResult[] {
    const matches: MatchResult[] = [];

    for (const neighborhood of neighborhoods) {
      // Calculate component scores
      const lifestyleMatch = this.evaluateLifestyleMatch(preferences, neighborhood);
      const commuteScore = this.evaluateCommute(preferences, neighborhood);
      const housingScore = this.evaluateHousing(preferences, neighborhood);

      // Weighted overall score
      const overallScore = (
        lifestyleMatch.score * 0.70 +
        commuteScore * 0.20 +
        housingScore * 0.10
      );

      // Add commute and housing to breakdown
      const breakdown = {
        ...lifestyleMatch.breakdown,
        commute: {
          score: commuteScore,
          weight: 0.20,
          contribution: commuteScore * 0.20
        },
        housing: {
          score: housingScore,
          weight: 0.10,
          contribution: housingScore * 0.10
        }
      };

      matches.push({
        neighborhood,
        matchScore: this.normalizeScore(overallScore),
        breakdown,
        reasons: this.generateReasons(preferences, neighborhood, overallScore),
        concerns: this.generateConcerns(preferences, neighborhood)
      });
    }

    // Sort by match score (descending)
    return matches.sort((a, b) => b.matchScore - a.matchScore);
  }
}

export const matcher = new NeighborhoodMatcher();