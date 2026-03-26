import { Property, Destination, Category, Review, Booking } from '../types';

export const DESTINATIONS: Destination[] = [
{
  id: 'dest-1',
  name: 'Paris',
  country: 'France',
  image:
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
  propertyCount: 2847,
  startingPrice: 89
},
{
  id: 'dest-2',
  name: 'Tokyo',
  country: 'Japan',
  image:
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop',
  propertyCount: 3215,
  startingPrice: 65
},
{
  id: 'dest-3',
  name: 'New York',
  country: 'United States',
  image:
  'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
  propertyCount: 4102,
  startingPrice: 120
},
{
  id: 'dest-4',
  name: 'Barcelona',
  country: 'Spain',
  image:
  'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop',
  propertyCount: 1893,
  startingPrice: 72
},
{
  id: 'dest-5',
  name: 'Bali',
  country: 'Indonesia',
  image:
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop',
  propertyCount: 2156,
  startingPrice: 45
},
{
  id: 'dest-6',
  name: 'London',
  country: 'United Kingdom',
  image:
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
  propertyCount: 3780,
  startingPrice: 95
}];


export const CATEGORIES: Category[] = [
{
  id: 'cat-1',
  name: 'Luxury',
  icon: 'crown',
  propertyCount: 1245,
  image:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
},
{
  id: 'cat-2',
  name: 'Beach',
  icon: 'umbrella',
  propertyCount: 2890,
  image:
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop'
},
{
  id: 'cat-3',
  name: 'City Center',
  icon: 'building',
  propertyCount: 5430,
  image:
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
},
{
  id: 'cat-4',
  name: 'Family-Friendly',
  icon: 'users',
  propertyCount: 3210,
  image:
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop'
},
{
  id: 'cat-5',
  name: 'Business',
  icon: 'briefcase',
  propertyCount: 1870,
  image:
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop'
},
{
  id: 'cat-6',
  name: 'Budget',
  icon: 'wallet',
  propertyCount: 7650,
  image:
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop'
},
{
  id: 'cat-7',
  name: 'Villas',
  icon: 'home',
  propertyCount: 980,
  image:
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop'
},
{
  id: 'cat-8',
  name: 'Romantic',
  icon: 'heart',
  propertyCount: 1560,
  image:
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
}];


export const FEATURED_PROPERTIES: Property[] = [
{
  id: 'prop-1',
  name: 'The Grand Palace Hotel',
  location: '8th Arrondissement, Paris',
  city: 'Paris',
  country: 'France',
  description:
  'Experience Parisian luxury at its finest in this stunning 5-star hotel steps from the Champs-Élysées.',
  shortDescription: 'Luxury hotel near Champs-Élysées with rooftop dining',
  images: [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'],

  rating: 9.2,
  reviewCount: 1847,
  pricePerNight: 289,
  originalPrice: 350,
  currency: 'USD',
  propertyType: 'hotel',
  starRating: 5,
  amenities: [
  'Free Wi-Fi',
  'Pool',
  'Spa',
  'Restaurant',
  'Room Service',
  'Fitness Center',
  'Concierge'],

  freeCancellation: true,
  breakfastIncluded: true,
  isPremium: true,
  badges: ['Top Rated', 'Breakfast Included'],
  roomTypes: []
},
{
  id: 'prop-2',
  name: 'Sakura View Apartment',
  location: 'Shinjuku, Tokyo',
  city: 'Tokyo',
  country: 'Japan',
  description:
  'Modern apartment with stunning city views and traditional Japanese touches.',
  shortDescription: 'Modern Shinjuku apartment with city skyline views',
  images: [
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'],

  rating: 8.8,
  reviewCount: 632,
  pricePerNight: 125,
  originalPrice: 160,
  currency: 'USD',
  propertyType: 'apartment',
  amenities: [
  'Free Wi-Fi',
  'Kitchen',
  'Washer',
  'Air Conditioning',
  'City View'],

  freeCancellation: true,
  breakfastIncluded: false,
  isPremium: false,
  badges: ['Great Location'],
  roomTypes: []
},
{
  id: 'prop-3',
  name: 'Manhattan Skyline Suites',
  location: 'Midtown, New York',
  city: 'New York',
  country: 'United States',
  description:
  'Premium suites in the heart of Manhattan with breathtaking skyline views.',
  shortDescription: 'Premium Midtown suites with skyline panoramas',
  images: [
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop'],

  rating: 9.0,
  reviewCount: 2103,
  pricePerNight: 345,
  originalPrice: 420,
  currency: 'USD',
  propertyType: 'hotel',
  starRating: 4,
  amenities: [
  'Free Wi-Fi',
  'Fitness Center',
  'Restaurant',
  'Bar',
  'Business Center',
  'Concierge'],

  freeCancellation: true,
  breakfastIncluded: false,
  isPremium: true,
  badges: ['Best Seller', 'Free Cancellation'],
  roomTypes: []
},
{
  id: 'prop-4',
  name: 'Costa Brava Beach Resort',
  location: 'Lloret de Mar, Barcelona',
  city: 'Barcelona',
  country: 'Spain',
  description:
  'Beachfront resort with Mediterranean views, infinity pool, and world-class dining.',
  shortDescription: 'Beachfront resort with infinity pool & sea views',
  images: [
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop'],

  rating: 8.6,
  reviewCount: 945,
  pricePerNight: 198,
  currency: 'USD',
  propertyType: 'resort',
  starRating: 4,
  amenities: [
  'Free Wi-Fi',
  'Pool',
  'Beach Access',
  'Spa',
  'Restaurant',
  'Kids Club',
  'Parking'],

  freeCancellation: false,
  breakfastIncluded: true,
  isPremium: false,
  badges: ['Beachfront', 'Breakfast Included'],
  roomTypes: []
},
{
  id: 'prop-5',
  name: 'Ubud Jungle Villa',
  location: 'Ubud, Bali',
  city: 'Bali',
  country: 'Indonesia',
  description:
  'Private villa surrounded by lush jungle with a private infinity pool and outdoor shower.',
  shortDescription: 'Private jungle villa with infinity pool',
  images: [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop'],

  rating: 9.4,
  reviewCount: 412,
  pricePerNight: 175,
  originalPrice: 220,
  currency: 'USD',
  propertyType: 'villa',
  amenities: [
  'Private Pool',
  'Free Wi-Fi',
  'Kitchen',
  'Garden',
  'Terrace',
  'Free Parking',
  'Airport Shuttle'],

  freeCancellation: true,
  breakfastIncluded: true,
  isPremium: true,
  badges: ['Superb', 'Free Cancellation', 'Breakfast Included'],
  roomTypes: []
},
{
  id: 'prop-6',
  name: 'The Kensington Hotel',
  location: 'South Kensington, London',
  city: 'London',
  country: 'United Kingdom',
  description:
  'Elegant Victorian hotel in the heart of South Kensington, minutes from the museums.',
  shortDescription: 'Elegant Victorian hotel near world-class museums',
  images: [
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'],

  rating: 8.9,
  reviewCount: 1356,
  pricePerNight: 215,
  originalPrice: 265,
  currency: 'USD',
  propertyType: 'hotel',
  starRating: 4,
  amenities: [
  'Free Wi-Fi',
  'Restaurant',
  'Bar',
  'Room Service',
  'Concierge',
  'Laundry'],

  freeCancellation: true,
  breakfastIncluded: false,
  isPremium: false,
  badges: ['Excellent Location', 'Free Cancellation'],
  roomTypes: []
}];


export const PROMO_OFFERS = [
{
  id: 'promo-1',
  title: 'Early Summer Deals',
  subtitle: 'Save up to 30% on summer getaways',
  image:
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop',
  ctaText: 'Explore Deals',
  discount: '30%'
},
{
  id: 'promo-2',
  title: 'Last Minute Escapes',
  subtitle: 'Book within 48 hours for exclusive rates',
  image:
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=400&fit=crop',
  ctaText: 'Find Last Minute',
  discount: '25%'
},
{
  id: 'promo-3',
  title: 'Weekend Getaways',
  subtitle: 'Perfect short breaks from $49/night',
  image:
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=400&fit=crop',
  ctaText: 'Browse Weekends',
  discount: '$49'
}];


export const TRAVEL_INSPIRATION = [
{
  id: 'insp-1',
  title: 'Best Stays for Couples',
  subtitle: 'Romantic retreats and boutique hotels',
  image:
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
  articleCount: 24
},
{
  id: 'insp-2',
  title: 'Top Beach Destinations',
  subtitle: 'Sun, sand, and crystal-clear waters',
  image:
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
  articleCount: 18
},
{
  id: 'insp-3',
  title: 'City Weekend Guides',
  subtitle: 'Make the most of 48 hours in top cities',
  image:
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  articleCount: 32
},
{
  id: 'insp-4',
  title: 'Work-Friendly Stays',
  subtitle: 'Hotels and apartments built for remote work',
  image:
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
  articleCount: 15
}];


export const MOCK_REVIEWS: Review[] = [
{
  id: 'rev-1',
  author: 'Sarah M.',
  avatar:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  rating: 9.5,
  date: '2026-03-10',
  title: 'Absolutely stunning property!',
  content:
  'The hotel exceeded all our expectations. The room was spacious, clean, and beautifully decorated. Staff was incredibly helpful and the breakfast buffet was outstanding.',
  travelerType: 'couple',
  categories: {
    cleanliness: 9.8,
    comfort: 9.5,
    location: 9.2,
    value: 9.0,
    staff: 9.8
  }
},
{
  id: 'rev-2',
  author: 'James K.',
  avatar:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  rating: 8.2,
  date: '2026-03-05',
  title: 'Great location, good value',
  content:
  'Perfect location for exploring the city. The room was comfortable and well-maintained. Would definitely recommend for business travelers.',
  travelerType: 'business',
  categories: {
    cleanliness: 8.5,
    comfort: 8.0,
    location: 9.5,
    value: 8.0,
    staff: 7.5
  }
},
{
  id: 'rev-3',
  author: 'Maria L.',
  avatar:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  rating: 9.0,
  date: '2026-02-28',
  title: 'Perfect family vacation',
  content:
  'We stayed here with our two kids and had an amazing time. The pool area was great, kids club kept the little ones entertained, and the family rooms were very spacious.',
  travelerType: 'family',
  categories: {
    cleanliness: 9.2,
    comfort: 9.0,
    location: 8.8,
    value: 9.0,
    staff: 9.5
  }
}];


export const MOCK_BOOKINGS: Booking[] = [
{
  id: 'book-1',
  propertyId: 'prop-1',
  propertyName: 'The Grand Palace Hotel',
  propertyImage:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
  location: 'Paris, France',
  checkIn: '2026-04-15',
  checkOut: '2026-04-19',
  guests: 2,
  rooms: 1,
  roomType: 'Deluxe Double Room',
  totalPrice: 1156,
  status: 'upcoming',
  bookingDate: '2026-03-01'
},
{
  id: 'book-2',
  propertyId: 'prop-3',
  propertyName: 'Manhattan Skyline Suites',
  propertyImage:
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
  location: 'New York, United States',
  checkIn: '2026-02-10',
  checkOut: '2026-02-14',
  guests: 1,
  rooms: 1,
  roomType: 'Executive Suite',
  totalPrice: 1380,
  status: 'completed',
  bookingDate: '2026-01-15'
},
{
  id: 'book-3',
  propertyId: 'prop-5',
  propertyName: 'Ubud Jungle Villa',
  propertyImage:
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop',
  location: 'Bali, Indonesia',
  checkIn: '2026-01-05',
  checkOut: '2026-01-12',
  guests: 2,
  rooms: 1,
  roomType: 'Private Pool Villa',
  totalPrice: 1225,
  status: 'completed',
  bookingDate: '2025-12-01'
}];


export const DESTINATION_SUGGESTIONS = [
'Paris, France',
'Tokyo, Japan',
'New York, United States',
'Barcelona, Spain',
'Bali, Indonesia',
'London, United Kingdom',
'Rome, Italy',
'Dubai, UAE',
'Sydney, Australia',
'Maldives',
'Santorini, Greece',
'Bangkok, Thailand'];

// Extended mock data for saved/wishlist properties
export const SAVED_PROPERTIES = [
'prop-1',
'prop-4',
'prop-5'
];

// User profile data
export const USER_PROFILE = {
  firstName: 'Alex',
  lastName: 'Morgan',
  email: 'alex.morgan@example.com',
  phone: '+1 (555) 123-4567',
  country: 'United States',
  language: 'English',
  currency: 'USD',
  profileImage:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  joinDate: '2024-06-15',
  communicationPreferences: {
    marketing: true,
    bookingNotifications: true,
    reviews: false,
    newsletter: true
  },
  travelers: [
    {
      id: 'trav-1',
      name: 'Alex Morgan',
      relationship: 'Self',
      dateOfBirth: '1990-01-15',
      nationality: 'United States'
    },
    {
      id: 'trav-2',
      name: 'Priya Nair',
      relationship: 'Spouse',
      dateOfBirth: '1992-05-22',
      nationality: 'United States'
    }
  ]
};

// Extended booking details with payment and policy info
export const MOCK_BOOKINGS_EXTENDED = [
{
  id: 'book-1',
  propertyId: 'prop-1',
  propertyName: 'The Grand Palace Hotel',
  propertyImage:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
  location: 'Paris, France',
  checkIn: '2026-04-15',
  checkOut: '2026-04-19',
  guests: 2,
  rooms: 1,
  roomType: 'Deluxe Double Room',
  status: 'upcoming',
  bookingDate: '2026-03-01',
  bookingReference: 'BK-2026-001847',
  nights: 4,
  pricePerNight: 289,
  subtotal: 1156,
  taxes: 231,
  serviceFee: 85,
  totalPrice: 1472,
  paymentMethod: 'Visa ••••1234',
  paymentStatus: 'Paid',
  cancellationPolicy: 'Free cancellation until 2026-04-08. After that, 50% refund will be charged.',
  checkInTime: '15:00',
  checkOutTime: '11:00',
  specialRequests: 'High floor preferred, non-smoking',
  guestInfo: {
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 123-4567'
  }
},
{
  id: 'book-2',
  propertyId: 'prop-3',
  propertyName: 'Manhattan Skyline Suites',
  propertyImage:
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
  location: 'New York, United States',
  checkIn: '2026-02-10',
  checkOut: '2026-02-14',
  guests: 1,
  rooms: 1,
  roomType: 'Executive Suite',
  status: 'completed',
  bookingDate: '2026-01-15',
  bookingReference: 'BK-2026-001598',
  nights: 4,
  pricePerNight: 345,
  subtotal: 1380,
  taxes: 276,
  serviceFee: 110,
  totalPrice: 1766,
  paymentMethod: 'Visa ••••5678',
  paymentStatus: 'Paid',
  cancellationPolicy: 'Non-refundable. Book with Flexible option for free cancellation.',
  checkInTime: '16:00',
  checkOutTime: '12:00',
  specialRequests: 'Late checkout if available'
},
{
  id: 'book-3',
  propertyId: 'prop-5',
  propertyName: 'Ubud Jungle Villa',
  propertyImage:
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop',
  location: 'Bali, Indonesia',
  checkIn: '2026-01-05',
  checkOut: '2026-01-12',
  guests: 2,
  rooms: 1,
  roomType: 'Private Pool Villa',
  status: 'completed',
  bookingDate: '2025-12-01',
  bookingReference: 'BK-2025-001203',
  nights: 7,
  pricePerNight: 175,
  subtotal: 1225,
  taxes: 245,
  serviceFee: 98,
  totalPrice: 1568,
  paymentMethod: 'Mastercard ••••9012',
  paymentStatus: 'Paid',
  cancellationPolicy: 'Free cancellation until 2 days before check-in.',
  checkInTime: '14:00',
  checkOutTime: '10:00',
  specialRequests: 'Celebration for anniversary - please arrange flowers'
}
];

// FAQ data for help center
export const FREQUENTLY_ASKED_QUESTIONS = [
{
  id: 'faq-1',
  category: 'Booking',
  question: 'How do I make a booking?',
  answer:
  'Search for your destination, check-in and check-out dates, and number of guests. Browse available properties and select one. You\'ll then proceed through our booking flow where you can enter guest details, payment information, and confirm your reservation.'
},
{
  id: 'faq-2',
  category: 'Booking',
  question: 'Can I modify my booking after it\'s confirmed?',
  answer:
  'Yes! Visit your booking details page and click "Modify Booking". You can change dates, number of guests, or room type based on availability. Any changes will be updated in your total price.'
},
{
  id: 'faq-3',
  category: 'Cancellation',
  question: 'What is your cancellation policy?',
  answer:
  'Each property has its own cancellation policy clearly stated during booking. Options range from free cancellation up to a certain date, to non-refundable rates. You can always check your booking details to review the specific policy for your reservation.'
},
{
  id: 'faq-4',
  category: 'Cancellation',
  question: 'How do I cancel my booking?',
  answer:
  'Go to "My Bookings" in your account, select the booking you want to cancel, and click the "Cancel Booking" button. If your cancellation is within the allowed timeframe, you\'ll receive a refund based on your property\'s cancellation policy.'
},
{
  id: 'faq-5',
  category: 'Payment',
  question: 'What payment methods do you accept?',
  answer:
  'We accept all major credit cards (Visa, Mastercard, American Express), digital wallets, and offer the option to pay at the property. Some properties also may offer flexible payment plans.'
},
{
  id: 'faq-6',
  category: 'Payment',
  question: 'When will I be charged for my booking?',
  answer:
  'Most bookings are charged immediately upon confirmation. However, some properties offer "pay later" options where you can pay at check-in or a specified date. This will be clearly indicated during the booking process.'
},
{
  id: 'faq-7',
  category: 'Account',
  question: 'How do I reset my password?',
  answer:
  'Click "Forgot Password" on the sign-in page and enter your email. You\'ll receive a link to reset your password. Follow the instructions in the email to create a new password.'
},
{
  id: 'faq-8',
  category: 'Account',
  question: 'How do I save properties?',
  answer:
  'Click the heart icon on any property card or property detail page to save it to your wishlist. You can view all saved properties in your account dashboard under "Saved Properties".'
},
{
  id: 'faq-9',
  category: 'Property',
  question: 'How are prices calculated?',
  answer:
  'Prices shown are per night. The total includes the base room rate, applicable taxes, and our service fee. Any special offers or discounts will be applied automatically. Breakfast and other inclusions are noted separately.'
},
{
  id: 'faq-10',
  category: 'Property',
  question: 'What does "free cancellation" mean?',
  answer:
  'Free cancellation means you can cancel your booking up to a certain date before check-in and receive a full refund. The exact cancellation deadline is shown in your booking confirmation and property details.'
}
];

// Deals/Offers data
export const DEALS_OFFERS = [
{
  id: 'deal-1',
  title: 'Early Summer Sale',
  subtitle: 'Save 30% on stays through June',
  category: 'Seasonal',
  discount: '30%',
  image:
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=300&fit=crop',
  validUntil: '2026-06-30',
  minStay: 2,
  regions: ['Spain', 'Italy', 'Greece']
},
{
  id: 'deal-2',
  title: 'Last Minute Getaway',
  subtitle: 'Book within 48 hours, get 25% off',
  category: 'Last Minute',
  discount: '25%',
  image:
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=300&fit=crop',
  validUntil: '2026-12-31',
  minStay: 1,
  regions: ['All destinations']
},
{
  id: 'deal-3',
  title: 'Weekend Escape Package',
  subtitle: 'Friday to Sunday, starting at $149',
  category: 'Weekly',
  discount: 'from $149',
  image:
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=300&fit=crop',
  validUntil: '2026-12-31',
  minStay: 2,
  regions: ['United States', 'Canada']
},
{
  id: 'deal-4',
  title: 'Luxury Collection Upgrade',
  subtitle: 'Book luxury, get complimentary breakfast',
  category: 'Luxury',
  discount: 'Free breakfast',
  image:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=300&fit=crop',
  validUntil: '2026-12-31',
  minStay: 3,
  regions: ['Europe', 'Asia']
},
{
  id: 'deal-5',
  title: 'Extended Stay Discount',
  subtitle: 'Stay 7+ nights, save 15%',
  category: 'Long Term',
  discount: '15%',
  image:
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=300&fit=crop',
  validUntil: '2026-12-31',
  minStay: 7,
  regions: ['All destinations']
}
];