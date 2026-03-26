import { Review } from '../types';

export interface AmenityGroup {
  category: string;
  icon: string;
  items: string[];
}

export interface PolicyItem {
  label: string;
  value: string;
  icon: string;
}

export interface NearbyAttraction {
  name: string;
  type: string;
  distance: string;
  icon: string;
}

export const PROPERTY_AMENITIES_GROUPED: AmenityGroup[] = [
{
  category: 'Room',
  icon: 'bed',
  items: [
  'Free Wi-Fi',
  'Air Conditioning',
  'Flat-screen TV',
  'Safe',
  'Desk',
  'Wardrobe',
  'Soundproofing',
  'Heating',
  'Iron',
  'Hairdryer']

},
{
  category: 'Bathroom',
  icon: 'bath',
  items: [
  'Private Bathroom',
  'Bathrobe',
  'Slippers',
  'Free Toiletries',
  'Shower',
  'Bathtub',
  'Bidet',
  'Towels']

},
{
  category: 'Food & Dining',
  icon: 'utensils',
  items: [
  'Restaurant',
  'Bar',
  'Room Service',
  'Breakfast Buffet',
  'Minibar',
  'Coffee Machine',
  'Tea/Coffee Maker',
  'Special Diet Menus']

},
{
  category: 'Wellness & Recreation',
  icon: 'dumbbell',
  items: [
  'Swimming Pool',
  'Spa & Wellness Center',
  'Fitness Center',
  'Sauna',
  'Hot Tub',
  'Massage',
  'Yoga Classes',
  'Tennis Court']

},
{
  category: 'Transport & Parking',
  icon: 'car',
  items: [
  'Free Parking',
  'Valet Parking',
  'Airport Shuttle',
  'Car Rental Desk',
  'Bicycle Rental',
  'Electric Vehicle Charging']

},
{
  category: 'Family',
  icon: 'baby',
  items: [
  'Kids Club',
  'Babysitting Service',
  "Children's Playground",
  'Family Rooms',
  'Cribs Available',
  'High Chairs']

},
{
  category: 'Business',
  icon: 'briefcase',
  items: [
  'Business Center',
  'Meeting Rooms',
  'Conference Facilities',
  'Fax/Photocopying',
  'Printer Access']

},
{
  category: 'Accessibility',
  icon: 'accessibility',
  items: [
  'Wheelchair Accessible',
  'Elevator',
  'Accessible Parking',
  'Braille Signage',
  'Roll-in Shower',
  'Lowered Amenities']

}];


export const PROPERTY_POLICIES: PolicyItem[] = [
{ label: 'Check-in', value: 'From 3:00 PM', icon: 'clock' },
{ label: 'Check-out', value: 'Until 11:00 AM', icon: 'clock' },
{
  label: 'Cancellation',
  value:
  'Free cancellation up to 48 hours before check-in. After that, the first night will be charged.',
  icon: 'info'
},
{
  label: 'Children',
  value:
  'Children of all ages are welcome. Children under 6 stay free when using existing beds.',
  icon: 'baby'
},
{
  label: 'Pets',
  value: 'Pets are not allowed. Service animals are welcome.',
  icon: 'paw'
},
{
  label: 'ID Required',
  value:
  'Guests are required to show a photo ID and credit card at check-in.',
  icon: 'id'
},
{
  label: 'Payment',
  value:
  'Visa, Mastercard, American Express, and cash accepted. Payment is taken at check-in.',
  icon: 'credit-card'
},
{
  label: 'Damage Deposit',
  value:
  'A damage deposit of $200 is required on arrival. This is fully refundable upon check-out subject to inspection.',
  icon: 'shield'
}];


export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
{
  name: 'City Center',
  type: 'landmark',
  distance: '0.5 km',
  icon: 'building'
},
{
  name: 'Main Train Station',
  type: 'transport',
  distance: '1.2 km',
  icon: 'train'
},
{
  name: 'International Airport',
  type: 'transport',
  distance: '18 km',
  icon: 'plane'
},
{ name: 'Beach', type: 'nature', distance: '2.3 km', icon: 'waves' },
{
  name: 'Shopping District',
  type: 'shopping',
  distance: '0.8 km',
  icon: 'shopping-bag'
},
{
  name: 'National Museum',
  type: 'culture',
  distance: '1.5 km',
  icon: 'landmark'
},
{ name: 'Central Park', type: 'nature', distance: '0.3 km', icon: 'trees' },
{
  name: 'Restaurant Row',
  type: 'dining',
  distance: '0.4 km',
  icon: 'utensils'
}];


export const EXTENDED_REVIEWS: Review[] = [
{
  id: 'rev-ext-1',
  author: 'Emily R.',
  avatar:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  rating: 9.5,
  date: '2026-03-10',
  title: 'Absolutely stunning property!',
  content:
  'The hotel exceeded all our expectations. The room was spacious, clean, and beautifully decorated. Staff was incredibly helpful and the breakfast buffet was outstanding. Would definitely return.',
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
  id: 'rev-ext-2',
  author: 'James K.',
  avatar:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  rating: 8.2,
  date: '2026-03-05',
  title: 'Great location, good value',
  content:
  'Perfect location for exploring the city. The room was comfortable and well-maintained. Would definitely recommend for business travelers. The Wi-Fi was fast and reliable.',
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
  id: 'rev-ext-3',
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
},
{
  id: 'rev-ext-4',
  author: 'David W.',
  avatar:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  rating: 7.8,
  date: '2026-02-20',
  title: 'Solid choice for solo travelers',
  content:
  'Clean, well-located, and reasonably priced. The bar area was a nice place to meet other travelers. Room was a bit small but had everything I needed.',
  travelerType: 'solo',
  categories: {
    cleanliness: 8.0,
    comfort: 7.5,
    location: 8.5,
    value: 7.8,
    staff: 7.5
  }
},
{
  id: 'rev-ext-5',
  author: 'Sophie T.',
  avatar:
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  rating: 9.2,
  date: '2026-02-15',
  title: 'Romantic getaway perfection',
  content:
  'We booked the suite for our anniversary and it was magical. The view was breathtaking, the spa was world-class, and the staff made us feel so special with a complimentary bottle of champagne.',
  travelerType: 'couple',
  categories: {
    cleanliness: 9.5,
    comfort: 9.3,
    location: 9.0,
    value: 8.8,
    staff: 9.8
  }
},
{
  id: 'rev-ext-6',
  author: 'Michael B.',
  avatar:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  rating: 8.5,
  date: '2026-02-10',
  title: 'Great for a group trip',
  content:
  'Stayed with a group of friends and we all had a blast. The location is unbeatable, right in the heart of everything. Rooms were clean and comfortable. The rooftop bar was the highlight!',
  travelerType: 'friends',
  categories: {
    cleanliness: 8.8,
    comfort: 8.5,
    location: 9.5,
    value: 8.0,
    staff: 8.2
  }
},
{
  id: 'rev-ext-7',
  author: 'Akiko N.',
  avatar:
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
  rating: 8.8,
  date: '2026-01-28',
  title: 'Wonderful business stay',
  content:
  'The business center was well-equipped and the meeting rooms were modern. Fast Wi-Fi throughout the property. The executive lounge breakfast was a nice perk. Will book again for my next trip.',
  travelerType: 'business',
  categories: {
    cleanliness: 9.0,
    comfort: 8.8,
    location: 8.5,
    value: 8.5,
    staff: 9.0
  }
},
{
  id: 'rev-ext-8',
  author: 'Carlos M.',
  avatar:
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  rating: 9.4,
  date: '2026-01-20',
  title: 'Best hotel experience ever',
  content:
  'From the moment we arrived, everything was perfect. The concierge arranged a private tour for us, the room was immaculate, and the restaurant served the best local cuisine. Truly a 5-star experience.',
  travelerType: 'couple',
  categories: {
    cleanliness: 9.8,
    comfort: 9.5,
    location: 9.0,
    value: 9.2,
    staff: 9.8
  }
}];