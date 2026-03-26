import { Property } from '../types';
import { FEATURED_PROPERTIES } from './mockData';

const ADDITIONAL_PROPERTIES: Property[] = [
{
  id: 'prop-7',
  name: 'Shibuya Capsule Inn',
  location: 'Shibuya, Tokyo',
  city: 'Tokyo',
  country: 'Japan',
  description:
  'Experience authentic Japanese capsule hotel living in the heart of Shibuya. Modern pods with privacy screens, shared lounge, and 24-hour front desk.',
  shortDescription: 'Modern capsule hotel in vibrant Shibuya district',
  images: [
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'],

  rating: 7.8,
  reviewCount: 1204,
  pricePerNight: 45,
  currency: 'USD',
  propertyType: 'hostel',
  amenities: [
  'Free Wi-Fi',
  'Air Conditioning',
  'Laundry',
  '24h Front Desk',
  'Luggage Storage'],

  freeCancellation: true,
  breakfastIncluded: false,
  isPremium: false,
  badges: ['Budget Pick'],
  roomTypes: [
  {
    id: 'rt-7-1',
    name: 'Standard Capsule',
    images: [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop'],

    bedConfig: '1 Single Pod',
    maxOccupancy: 1,
    sizeSqm: 4,
    viewType: 'Interior',
    pricePerNight: 45,
    cancellationPolicy: 'Free cancellation until 24h before',
    mealInclusion: 'No meals',
    amenities: ['Wi-Fi', 'Reading Light', 'Power Outlet', 'Privacy Screen'],
    availableRooms: 8
  },
  {
    id: 'rt-7-2',
    name: 'Premium Capsule',
    images: [
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop'],

    bedConfig: '1 Large Pod',
    maxOccupancy: 1,
    sizeSqm: 6,
    viewType: 'Interior',
    pricePerNight: 65,
    cancellationPolicy: 'Free cancellation until 24h before',
    mealInclusion: 'No meals',
    amenities: [
    'Wi-Fi',
    'Reading Light',
    'Power Outlet',
    'Privacy Screen',
    'TV'],

    availableRooms: 3
  }]

},
{
  id: 'prop-8',
  name: 'Casa Bella Guesthouse',
  location: 'Gothic Quarter, Barcelona',
  city: 'Barcelona',
  country: 'Spain',
  description:
  'Charming family-run guesthouse in a restored 18th-century building in the Gothic Quarter. Rooftop terrace with cathedral views.',
  shortDescription: 'Charming guesthouse with rooftop cathedral views',
  images: [
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop'],

  rating: 8.4,
  reviewCount: 387,
  pricePerNight: 89,
  originalPrice: 110,
  currency: 'USD',
  propertyType: 'guesthouse',
  amenities: [
  'Free Wi-Fi',
  'Air Conditioning',
  'Terrace',
  'Kitchen',
  'Laundry'],

  freeCancellation: false,
  breakfastIncluded: true,
  isPremium: false,
  badges: ['Breakfast Included', 'Great Location'],
  roomTypes: [
  {
    id: 'rt-8-1',
    name: 'Cozy Double Room',
    images: [
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'],

    bedConfig: '1 Double Bed',
    maxOccupancy: 2,
    sizeSqm: 18,
    viewType: 'Courtyard',
    pricePerNight: 89,
    originalPrice: 110,
    cancellationPolicy: 'Non-refundable',
    mealInclusion: 'Breakfast included',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Ensuite Bathroom'],
    availableRooms: 2
  },
  {
    id: 'rt-8-2',
    name: 'Terrace Suite',
    images: [
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop'],

    bedConfig: '1 King Bed',
    maxOccupancy: 2,
    sizeSqm: 28,
    viewType: 'Cathedral View',
    pricePerNight: 145,
    cancellationPolicy: 'Non-refundable',
    mealInclusion: 'Breakfast included',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Private Terrace', 'Minibar'],
    availableRooms: 1
  }]

},
{
  id: 'prop-9',
  name: 'Seminyak Surf Apartment',
  location: 'Seminyak, Bali',
  city: 'Bali',
  country: 'Indonesia',
  description:
  'Stylish beachside apartment just steps from Seminyak Beach. Fully equipped kitchen, shared pool, and surf board rental available.',
  shortDescription: 'Beachside apartment near Seminyak surf spots',
  images: [
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop'],

  rating: 8.1,
  reviewCount: 256,
  pricePerNight: 68,
  originalPrice: 85,
  currency: 'USD',
  propertyType: 'apartment',
  amenities: [
  'Free Wi-Fi',
  'Pool',
  'Kitchen',
  'Beach Access',
  'Air Conditioning',
  'Free Parking'],

  freeCancellation: true,
  breakfastIncluded: false,
  isPremium: false,
  badges: ['Beach Access'],
  roomTypes: [
  {
    id: 'rt-9-1',
    name: 'Studio Apartment',
    images: [
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop'],

    bedConfig: '1 Queen Bed',
    maxOccupancy: 2,
    sizeSqm: 35,
    viewType: 'Garden',
    pricePerNight: 68,
    originalPrice: 85,
    cancellationPolicy: 'Free cancellation until 48h before',
    mealInclusion: 'No meals',
    amenities: ['Wi-Fi', 'Kitchen', 'Air Conditioning', 'Pool Access'],
    availableRooms: 4
  },
  {
    id: 'rt-9-2',
    name: 'One-Bedroom Suite',
    images: [
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop'],

    bedConfig: '1 King Bed + Sofa Bed',
    maxOccupancy: 3,
    sizeSqm: 55,
    viewType: 'Pool View',
    pricePerNight: 95,
    cancellationPolicy: 'Free cancellation until 48h before',
    mealInclusion: 'No meals',
    amenities: [
    'Wi-Fi',
    'Kitchen',
    'Air Conditioning',
    'Pool Access',
    'Balcony'],

    availableRooms: 2
  }]

},
{
  id: 'prop-10',
  name: 'Le Marais Boutique Hotel',
  location: 'Le Marais, Paris',
  city: 'Paris',
  country: 'France',
  description:
  'Intimate boutique hotel in the trendy Le Marais district. Designer interiors, courtyard garden, and acclaimed bistro on-site.',
  shortDescription: 'Designer boutique hotel in trendy Le Marais',
  images: [
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'],

  rating: 9.1,
  reviewCount: 723,
  pricePerNight: 245,
  originalPrice: 310,
  currency: 'USD',
  propertyType: 'hotel',
  starRating: 4,
  amenities: [
  'Free Wi-Fi',
  'Restaurant',
  'Bar',
  'Room Service',
  'Spa',
  'Concierge',
  'Garden'],

  freeCancellation: true,
  breakfastIncluded: true,
  isPremium: true,
  badges: ['Top Rated', 'Breakfast Included'],
  roomTypes: [
  {
    id: 'rt-10-1',
    name: 'Classic Double',
    images: [
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop'],

    bedConfig: '1 Double Bed',
    maxOccupancy: 2,
    sizeSqm: 22,
    viewType: 'Courtyard',
    pricePerNight: 245,
    originalPrice: 310,
    cancellationPolicy: 'Free cancellation until 72h before',
    mealInclusion: 'Breakfast included',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Minibar', 'Safe'],
    availableRooms: 5
  },
  {
    id: 'rt-10-2',
    name: 'Junior Suite',
    images: [
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop'],

    bedConfig: '1 King Bed',
    maxOccupancy: 2,
    sizeSqm: 38,
    viewType: 'Garden View',
    pricePerNight: 385,
    cancellationPolicy: 'Free cancellation until 72h before',
    mealInclusion: 'Breakfast included',
    amenities: [
    'Wi-Fi',
    'Air Conditioning',
    'Minibar',
    'Safe',
    'Bathrobe',
    'Nespresso'],

    availableRooms: 2
  }]

},
{
  id: 'prop-11',
  name: 'Thames View Apartment',
  location: 'South Bank, London',
  city: 'London',
  country: 'United Kingdom',
  description:
  'Modern riverside apartment with floor-to-ceiling windows overlooking the Thames. Walking distance to Tate Modern and Borough Market.',
  shortDescription: 'Modern riverside flat with Thames panoramas',
  images: [
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop'],

  rating: 8.7,
  reviewCount: 489,
  pricePerNight: 185,
  originalPrice: 230,
  currency: 'USD',
  propertyType: 'apartment',
  amenities: [
  'Free Wi-Fi',
  'Kitchen',
  'Washer',
  'Air Conditioning',
  'City View',
  'Gym Access'],

  freeCancellation: true,
  breakfastIncluded: false,
  isPremium: false,
  badges: ['Great View', 'Free Cancellation'],
  roomTypes: [
  {
    id: 'rt-11-1',
    name: 'One-Bedroom Apartment',
    images: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'],

    bedConfig: '1 Queen Bed',
    maxOccupancy: 2,
    sizeSqm: 45,
    viewType: 'River View',
    pricePerNight: 185,
    originalPrice: 230,
    cancellationPolicy: 'Free cancellation until 48h before',
    mealInclusion: 'No meals',
    amenities: ['Wi-Fi', 'Kitchen', 'Washer', 'Air Conditioning'],
    availableRooms: 3
  },
  {
    id: 'rt-11-2',
    name: 'Two-Bedroom Apartment',
    images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop'],

    bedConfig: '1 King Bed + 2 Single Beds',
    maxOccupancy: 4,
    sizeSqm: 72,
    viewType: 'River View',
    pricePerNight: 275,
    cancellationPolicy: 'Free cancellation until 48h before',
    mealInclusion: 'No meals',
    amenities: [
    'Wi-Fi',
    'Kitchen',
    'Washer',
    'Air Conditioning',
    'Dishwasher'],

    availableRooms: 1
  }]

},
{
  id: 'prop-12',
  name: 'Nusa Dua Beach Resort & Spa',
  location: 'Nusa Dua, Bali',
  city: 'Bali',
  country: 'Indonesia',
  description:
  'Five-star beachfront resort with three pools, full-service spa, four restaurants, and direct beach access. Perfect for families and couples.',
  shortDescription: '5-star beachfront resort with spa & multiple pools',
  images: [
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'],

  rating: 9.3,
  reviewCount: 2847,
  pricePerNight: 320,
  originalPrice: 420,
  currency: 'USD',
  propertyType: 'resort',
  starRating: 5,
  amenities: [
  'Free Wi-Fi',
  'Pool',
  'Spa',
  'Beach Access',
  'Restaurant',
  'Fitness Center',
  'Kids Club',
  'Free Parking',
  'Room Service',
  'Bar',
  'Tennis Court'],

  freeCancellation: true,
  breakfastIncluded: true,
  isPremium: true,
  badges: ['Luxury Pick', 'Breakfast Included', 'Free Cancellation'],
  roomTypes: [
  {
    id: 'rt-12-1',
    name: 'Deluxe Garden Room',
    images: [
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop'],

    bedConfig: '1 King Bed',
    maxOccupancy: 2,
    sizeSqm: 42,
    viewType: 'Garden',
    pricePerNight: 320,
    originalPrice: 420,
    cancellationPolicy: 'Free cancellation until 72h before',
    mealInclusion: 'Breakfast included',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Minibar', 'Safe', 'Bathrobe'],
    availableRooms: 6
  },
  {
    id: 'rt-12-2',
    name: 'Ocean View Suite',
    images: [
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop'],

    bedConfig: '1 King Bed + Daybed',
    maxOccupancy: 3,
    sizeSqm: 65,
    viewType: 'Ocean View',
    pricePerNight: 485,
    originalPrice: 580,
    cancellationPolicy: 'Free cancellation until 72h before',
    mealInclusion: 'Breakfast included',
    amenities: [
    'Wi-Fi',
    'Air Conditioning',
    'Minibar',
    'Safe',
    'Bathrobe',
    'Private Balcony',
    'Jacuzzi'],

    availableRooms: 2
  },
  {
    id: 'rt-12-3',
    name: 'Pool Villa',
    images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'],

    bedConfig: '1 King Bed',
    maxOccupancy: 2,
    sizeSqm: 95,
    viewType: 'Private Pool',
    pricePerNight: 750,
    cancellationPolicy: 'Free cancellation until 72h before',
    mealInclusion: 'Breakfast included',
    amenities: [
    'Wi-Fi',
    'Private Pool',
    'Air Conditioning',
    'Minibar',
    'Butler Service'],

    availableRooms: 1
  }]

}];


// Add room types to the existing featured properties
const FEATURED_WITH_ROOMS: Property[] = FEATURED_PROPERTIES.map((prop) => {
  switch (prop.id) {
    case 'prop-1':
      return {
        ...prop,
        roomTypes: [
        {
          id: 'rt-1-1',
          name: 'Superior Double Room',
          images: [prop.images[0]],
          bedConfig: '1 King Bed',
          maxOccupancy: 2,
          sizeSqm: 30,
          viewType: 'City View',
          pricePerNight: 289,
          originalPrice: 350,
          cancellationPolicy: 'Free cancellation until 48h before',
          mealInclusion: 'Breakfast included',
          amenities: [
          'Wi-Fi',
          'Air Conditioning',
          'Minibar',
          'Safe',
          'Room Service'],

          availableRooms: 4
        },
        {
          id: 'rt-1-2',
          name: 'Deluxe Suite',
          images: [prop.images[1] || prop.images[0]],
          bedConfig: '1 King Bed + Sofa',
          maxOccupancy: 3,
          sizeSqm: 52,
          viewType: 'Eiffel Tower View',
          pricePerNight: 489,
          cancellationPolicy: 'Free cancellation until 48h before',
          mealInclusion: 'Breakfast included',
          amenities: [
          'Wi-Fi',
          'Air Conditioning',
          'Minibar',
          'Safe',
          'Room Service',
          'Bathrobe',
          'Nespresso'],

          availableRooms: 2
        }]

      };
    case 'prop-2':
      return {
        ...prop,
        roomTypes: [
        {
          id: 'rt-2-1',
          name: 'Studio Apartment',
          images: [prop.images[0]],
          bedConfig: '1 Double Bed',
          maxOccupancy: 2,
          sizeSqm: 28,
          viewType: 'City View',
          pricePerNight: 125,
          originalPrice: 160,
          cancellationPolicy: 'Free cancellation until 24h before',
          mealInclusion: 'No meals',
          amenities: ['Wi-Fi', 'Kitchen', 'Washer', 'Air Conditioning'],
          availableRooms: 3
        },
        {
          id: 'rt-2-2',
          name: 'Deluxe One-Bedroom',
          images: [prop.images[1] || prop.images[0]],
          bedConfig: '1 Queen Bed',
          maxOccupancy: 2,
          sizeSqm: 42,
          viewType: 'Skyline View',
          pricePerNight: 185,
          cancellationPolicy: 'Free cancellation until 24h before',
          mealInclusion: 'No meals',
          amenities: [
          'Wi-Fi',
          'Kitchen',
          'Washer',
          'Air Conditioning',
          'Balcony'],

          availableRooms: 1
        }]

      };
    case 'prop-3':
      return {
        ...prop,
        roomTypes: [
        {
          id: 'rt-3-1',
          name: 'Executive Room',
          images: [prop.images[0]],
          bedConfig: '1 King Bed',
          maxOccupancy: 2,
          sizeSqm: 35,
          viewType: 'City View',
          pricePerNight: 345,
          originalPrice: 420,
          cancellationPolicy: 'Free cancellation until 48h before',
          mealInclusion: 'No meals',
          amenities: [
          'Wi-Fi',
          'Air Conditioning',
          'Minibar',
          'Business Desk',
          'Safe'],

          availableRooms: 7
        },
        {
          id: 'rt-3-2',
          name: 'Penthouse Suite',
          images: [prop.images[1] || prop.images[0]],
          bedConfig: '1 King Bed + Living Area',
          maxOccupancy: 2,
          sizeSqm: 78,
          viewType: 'Panoramic Skyline',
          pricePerNight: 680,
          cancellationPolicy: 'Free cancellation until 72h before',
          mealInclusion: 'Breakfast included',
          amenities: [
          'Wi-Fi',
          'Air Conditioning',
          'Minibar',
          'Jacuzzi',
          'Butler Service'],

          availableRooms: 1
        }]

      };
    case 'prop-4':
      return {
        ...prop,
        roomTypes: [
        {
          id: 'rt-4-1',
          name: 'Standard Sea View',
          images: [prop.images[0]],
          bedConfig: '2 Single Beds or 1 Double',
          maxOccupancy: 2,
          sizeSqm: 26,
          viewType: 'Sea View',
          pricePerNight: 198,
          cancellationPolicy: 'Non-refundable',
          mealInclusion: 'Breakfast included',
          amenities: ['Wi-Fi', 'Air Conditioning', 'Balcony', 'Safe'],
          availableRooms: 5
        },
        {
          id: 'rt-4-2',
          name: 'Family Room',
          images: [prop.images[1] || prop.images[0]],
          bedConfig: '1 Double Bed + 2 Single Beds',
          maxOccupancy: 4,
          sizeSqm: 40,
          viewType: 'Pool & Sea View',
          pricePerNight: 285,
          cancellationPolicy: 'Non-refundable',
          mealInclusion: 'Breakfast included',
          amenities: [
          'Wi-Fi',
          'Air Conditioning',
          'Balcony',
          'Safe',
          'Kids Amenities'],

          availableRooms: 2
        }]

      };
    case 'prop-5':
      return {
        ...prop,
        roomTypes: [
        {
          id: 'rt-5-1',
          name: 'Garden Villa',
          images: [prop.images[0]],
          bedConfig: '1 King Bed',
          maxOccupancy: 2,
          sizeSqm: 65,
          viewType: 'Jungle Garden',
          pricePerNight: 175,
          originalPrice: 220,
          cancellationPolicy: 'Free cancellation until 72h before',
          mealInclusion: 'Breakfast included',
          amenities: [
          'Wi-Fi',
          'Private Pool',
          'Outdoor Shower',
          'Terrace',
          'Minibar'],

          availableRooms: 3
        },
        {
          id: 'rt-5-2',
          name: 'Cliff Edge Villa',
          images: [prop.images[1] || prop.images[0]],
          bedConfig: '1 King Bed',
          maxOccupancy: 2,
          sizeSqm: 90,
          viewType: 'Valley View',
          pricePerNight: 310,
          cancellationPolicy: 'Free cancellation until 72h before',
          mealInclusion: 'Breakfast included',
          amenities: [
          'Wi-Fi',
          'Infinity Pool',
          'Outdoor Shower',
          'Terrace',
          'Minibar',
          'Butler Service'],

          availableRooms: 1
        }]

      };
    case 'prop-6':
      return {
        ...prop,
        roomTypes: [
        {
          id: 'rt-6-1',
          name: 'Classic Room',
          images: [prop.images[0]],
          bedConfig: '1 Double Bed',
          maxOccupancy: 2,
          sizeSqm: 22,
          viewType: 'Garden',
          pricePerNight: 215,
          originalPrice: 265,
          cancellationPolicy: 'Free cancellation until 48h before',
          mealInclusion: 'No meals',
          amenities: [
          'Wi-Fi',
          'Air Conditioning',
          'Safe',
          'Tea/Coffee Maker'],

          availableRooms: 6
        },
        {
          id: 'rt-6-2',
          name: 'Premium Room',
          images: [prop.images[1] || prop.images[0]],
          bedConfig: '1 King Bed',
          maxOccupancy: 2,
          sizeSqm: 32,
          viewType: 'Street View',
          pricePerNight: 295,
          cancellationPolicy: 'Free cancellation until 48h before',
          mealInclusion: 'Breakfast available ($25)',
          amenities: [
          'Wi-Fi',
          'Air Conditioning',
          'Safe',
          'Tea/Coffee Maker',
          'Bathrobe',
          'Minibar'],

          availableRooms: 3
        }]

      };
    default:
      return prop;
  }
});

export const SEARCH_PROPERTIES: Property[] = [
...FEATURED_WITH_ROOMS,
...ADDITIONAL_PROPERTIES];


export const AMENITY_OPTIONS = [
'Free Wi-Fi',
'Pool',
'Spa',
'Restaurant',
'Parking',
'Fitness Center',
'Beach Access',
'Kitchen',
'Air Conditioning',
'Pet Friendly',
'Bar',
'Room Service',
'Laundry',
'Concierge',
'Garden',
'Terrace'];


export const PROPERTY_TYPE_OPTIONS = [
{ value: 'hotel', label: 'Hotel' },
{ value: 'apartment', label: 'Apartment' },
{ value: 'villa', label: 'Villa' },
{ value: 'resort', label: 'Resort' },
{ value: 'hostel', label: 'Hostel' },
{ value: 'guesthouse', label: 'Guesthouse' }];


export const SORT_OPTIONS = [
{ value: 'recommended', label: 'Recommended' },
{ value: 'price-asc', label: 'Price: Low to High' },
{ value: 'price-desc', label: 'Price: High to Low' },
{ value: 'rating', label: 'Rating: Highest First' },
{ value: 'reviews', label: 'Most Reviews' },
{ value: 'best-value', label: 'Best Value' }];