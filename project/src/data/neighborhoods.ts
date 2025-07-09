import { NeighborhoodData } from '../types';

// Sample neighborhood data with realistic scores and information
export const neighborhoods: NeighborhoodData[] = [
  {
    id: 'soho-nyc',
    name: 'SoHo',
    city: 'New York',
    state: 'NY',
    coordinates: { lat: 40.7223, lng: -74.0030 },
    scores: {
      walkability: 98,
      transit: 95,
      bikeability: 85,
      crime: 82,
      schools: 88,
      nightlife: 95,
      culture: 98,
      dining: 96,
      shopping: 98,
      outdoors: 65,
      quietness: 45,
      affordability: 15
    },
    demographics: {
      medianAge: 35,
      medianIncome: 120000,
      populationDensity: 74000,
      familyFriendly: 65
    },
    housing: {
      medianPrice: 2500000,
      rentPrice: 4500,
      availableTypes: ['apartment', 'loft', 'condo']
    },
    amenities: ['Art galleries', 'Designer boutiques', 'Restaurants', 'Museums'],
    commuteOptions: {
      subway: true,
      bus: true,
      bike: true,
      walkable: true
    },
    description: 'Trendy neighborhood known for art, fashion, and dining',
    images: ['https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg']
  },
  {
    id: 'mission-sf',
    name: 'Mission District',
    city: 'San Francisco',
    state: 'CA',
    coordinates: { lat: 37.7599, lng: -122.4148 },
    scores: {
      walkability: 92,
      transit: 88,
      bikeability: 90,
      crime: 68,
      schools: 75,
      nightlife: 90,
      culture: 92,
      dining: 94,
      shopping: 82,
      outdoors: 78,
      quietness: 55,
      affordability: 35
    },
    demographics: {
      medianAge: 32,
      medianIncome: 85000,
      populationDensity: 45000,
      familyFriendly: 70
    },
    housing: {
      medianPrice: 1800000,
      rentPrice: 3200,
      availableTypes: ['apartment', 'house', 'condo']
    },
    amenities: ['Street art', 'Taquerias', 'Bars', 'Parks'],
    commuteOptions: {
      subway: true,
      bus: true,
      bike: true,
      walkable: true
    },
    description: 'Vibrant Latino neighborhood with excellent food and nightlife',
    images: ['https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg']
  },
  {
    id: 'capitol-hill-seattle',
    name: 'Capitol Hill',
    city: 'Seattle',
    state: 'WA',
    coordinates: { lat: 47.6205, lng: -122.3212 },
    scores: {
      walkability: 88,
      transit: 85,
      bikeability: 82,
      crime: 75,
      schools: 80,
      nightlife: 92,
      culture: 90,
      dining: 89,
      shopping: 85,
      outdoors: 82,
      quietness: 58,
      affordability: 45
    },
    demographics: {
      medianAge: 30,
      medianIncome: 72000,
      populationDensity: 38000,
      familyFriendly: 68
    },
    housing: {
      medianPrice: 950000,
      rentPrice: 2200,
      availableTypes: ['apartment', 'house', 'condo']
    },
    amenities: ['Coffee shops', 'Live music venues', 'Parks', 'Independent shops'],
    commuteOptions: {
      subway: false,
      bus: true,
      bike: true,
      walkable: true
    },
    description: 'Hip neighborhood with great coffee culture and music scene',
    images: ['https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg']
  },
  {
    id: 'highland-park-la',
    name: 'Highland Park',
    city: 'Los Angeles',
    state: 'CA',
    coordinates: { lat: 34.1139, lng: -118.2039 },
    scores: {
      walkability: 75,
      transit: 65,
      bikeability: 70,
      crime: 70,
      schools: 72,
      nightlife: 78,
      culture: 85,
      dining: 82,
      shopping: 75,
      outdoors: 88,
      quietness: 65,
      affordability: 55
    },
    demographics: {
      medianAge: 34,
      medianIncome: 68000,
      populationDensity: 28000,
      familyFriendly: 78
    },
    housing: {
      medianPrice: 850000,
      rentPrice: 2800,
      availableTypes: ['house', 'apartment', 'duplex']
    },
    amenities: ['Art galleries', 'Craft breweries', 'Parks', 'Vintage shops'],
    commuteOptions: {
      subway: true,
      bus: true,
      bike: true,
      walkable: false
    },
    description: 'Artistic neighborhood with a growing food and arts scene',
    images: ['https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg']
  },
  {
    id: 'williamsburg-brooklyn',
    name: 'Williamsburg',
    city: 'Brooklyn',
    state: 'NY',
    coordinates: { lat: 40.7081, lng: -73.9571 },
    scores: {
      walkability: 92,
      transit: 90,
      bikeability: 88,
      crime: 85,
      schools: 82,
      nightlife: 94,
      culture: 92,
      dining: 93,
      shopping: 90,
      outdoors: 78,
      quietness: 52,
      affordability: 35
    },
    demographics: {
      medianAge: 31,
      medianIncome: 88000,
      populationDensity: 52000,
      familyFriendly: 72
    },
    housing: {
      medianPrice: 1200000,
      rentPrice: 3500,
      availableTypes: ['apartment', 'condo', 'loft']
    },
    amenities: ['Waterfront parks', 'Rooftop bars', 'Farm-to-table restaurants', 'Boutiques'],
    commuteOptions: {
      subway: true,
      bus: true,
      bike: true,
      walkable: true
    },
    description: 'Trendy waterfront neighborhood with excellent dining and nightlife',
    images: ['https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg']
  },
  {
    id: 'pearl-district-portland',
    name: 'Pearl District',
    city: 'Portland',
    state: 'OR',
    coordinates: { lat: 45.5267, lng: -122.6890 },
    scores: {
      walkability: 95,
      transit: 82,
      bikeability: 90,
      crime: 88,
      schools: 85,
      nightlife: 80,
      culture: 88,
      dining: 87,
      shopping: 92,
      outdoors: 85,
      quietness: 72,
      affordability: 40
    },
    demographics: {
      medianAge: 38,
      medianIncome: 95000,
      populationDensity: 35000,
      familyFriendly: 80
    },
    housing: {
      medianPrice: 750000,
      rentPrice: 2400,
      availableTypes: ['apartment', 'condo', 'loft']
    },
    amenities: ['Art galleries', 'Parks', 'Farmers market', 'Specialty stores'],
    commuteOptions: {
      subway: false,
      bus: true,
      bike: true,
      walkable: true
    },
    description: 'Upscale district with galleries, parks, and sustainable living',
    images: ['https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg']
  }
];