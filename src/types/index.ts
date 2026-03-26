export interface Property {
  id: string;
  name: string;
  location: string;
  city: string;
  country: string;
  description: string;
  shortDescription: string;
  images: string[];
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  originalPrice?: number;
  currency: string;
  propertyType:
  'hotel' |
  'apartment' |
  'villa' |
  'resort' |
  'hostel' |
  'guesthouse';
  starRating?: number;
  amenities: string[];
  freeCancellation: boolean;
  breakfastIncluded: boolean;
  isPremium: boolean;
  badges: string[];
  roomTypes: RoomType[];
}

export interface RoomType {
  id: string;
  name: string;
  images: string[];
  bedConfig: string;
  maxOccupancy: number;
  sizeSqm: number;
  viewType: string;
  pricePerNight: number;
  originalPrice?: number;
  cancellationPolicy: string;
  mealInclusion: string;
  amenities: string[];
  availableRooms: number;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  propertyCount: number;
  startingPrice: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  propertyCount: number;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  travelerType: 'solo' | 'couple' | 'family' | 'business' | 'friends';
  categories: {
    cleanliness: number;
    comfort: number;
    location: number;
    value: number;
    staff: number;
  };
}

export interface Booking {
  id: string;
  propertyId: string;
  propertyName: string;
  propertyImage: string;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  roomType: string;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled' | 'pending';
  bookingDate: string;
}

export interface SearchFilters {
  destination: string;
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  children: number;
  rooms: number;
  priceRange: [number, number];
  starRating: number[];
  guestRating: number | null;
  propertyTypes: string[];
  amenities: string[];
  freeCancellation: boolean;
  breakfastIncluded: boolean;
  sortBy: string;
}

export interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  arrivalTime: string;
  specialRequests: string;
  isBusinessTravel: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'guest' | 'customer' | 'host' | 'admin';
  savedProperties: string[];
  bookings: string[];
}