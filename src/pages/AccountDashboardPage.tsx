import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';
import { Separator } from '../components/ui/Separator';
import { MOCK_BOOKINGS } from '../data/mockData';
import {
  Calendar,
  Heart,
  User,
  SettingsIcon,
  MapPin,
  ArrowRight,
  Bell,
  CreditCard } from
'lucide-react';
export function AccountDashboardPage() {
  const upcomingBookings = MOCK_BOOKINGS.filter((b) => b.status === 'upcoming');
  const completedBookings = MOCK_BOOKINGS.filter(
    (b) => b.status === 'completed'
  );
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <Avatar name="Alex Morgan" alt="Alex Morgan" size="xl" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-black">
              Welcome back, Alex!
            </h1>
            <p className="text-brand-gray text-sm">
              Manage your bookings, saved properties, and account settings
            </p>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <QuickStatCard
            icon={<Calendar className="w-5 h-5" />}
            label="Upcoming Trips"
            value={upcomingBookings.length.toString()}
            color="navy" />
          
          <QuickStatCard
            icon={<Heart className="w-5 h-5" />}
            label="Saved Properties"
            value="4"
            color="red" />
          
          <QuickStatCard
            icon={<MapPin className="w-5 h-5" />}
            label="Past Stays"
            value={completedBookings.length.toString()}
            color="green" />
          
          <QuickStatCard
            icon={<Bell className="w-5 h-5" />}
            label="Notifications"
            value="2"
            color="gold" />
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming booking */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-brand-black">
                  Upcoming Stays
                </h2>
                <Link
                  to="/account/bookings"
                  className="text-sm text-brand-blue hover:text-brand-navy flex items-center gap-1">
                  
                  View all <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {upcomingBookings.length === 0 ?
              <div className="text-center py-8">
                  <Calendar className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-brand-gray text-sm">No upcoming trips</p>
                  <Link
                  to="/search"
                  className="text-sm text-brand-blue font-medium hover:underline mt-1 inline-block">
                  
                    Start planning your next trip
                  </Link>
                </div> :

              <div className="space-y-3">
                  {upcomingBookings.map((booking) =>
                <Link
                  key={booking.id}
                  to={`/account/bookings/${booking.id}`}
                  className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                  
                      <img
                    src={booking.propertyImage}
                    alt={booking.propertyName}
                    className="w-20 h-16 object-cover rounded-lg flex-shrink-0" />
                  
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-brand-black truncate">
                          {booking.propertyName}
                        </h3>
                        <p className="text-xs text-brand-gray">
                          {booking.location}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-600">
                            {booking.checkIn} → {booking.checkOut}
                          </span>
                          <Badge variant="primary" size="small">
                            Upcoming
                          </Badge>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-brand-black self-center">
                        ${booking.totalPrice}
                      </span>
                    </Link>
                )}
                </div>
              }
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h2 className="text-lg font-bold text-brand-black mb-3">
                Quick Links
              </h2>
              <nav className="space-y-1">
                <QuickLink
                  to="/account/profile"
                  icon={<User className="w-4 h-4" />}
                  label="Edit Profile" />
                
                <QuickLink
                  to="/account/saved"
                  icon={<Heart className="w-4 h-4" />}
                  label="Saved Properties" />
                
                <QuickLink
                  to="/account/bookings"
                  icon={<Calendar className="w-4 h-4" />}
                  label="My Bookings" />
                
                <QuickLink
                  to="/help"
                  icon={<SettingsIcon className="w-4 h-4" />}
                  label="Help & Support" />
                
              </nav>
            </div>

            {/* Recent activity */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h2 className="text-lg font-bold text-brand-black mb-3">
                Recent Activity
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-brand-black">
                      Booking confirmed for The Grand Palace Hotel
                    </p>
                    <p className="text-xs text-brand-gray">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-brand-black">
                      Saved Ubud Jungle Villa to wishlist
                    </p>
                    <p className="text-xs text-brand-gray">5 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-brand-black">
                      Left a review for Manhattan Skyline Suites
                    </p>
                    <p className="text-xs text-brand-gray">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>);

}
function QuickStatCard({
  icon,
  label,
  value,
  color





}: {icon: React.ReactNode;label: string;value: string;color: string;}) {
  const colorMap: Record<string, string> = {
    navy: 'bg-navy-50 text-brand-navy',
    red: 'bg-red-50 text-red-600',
    green: 'bg-green-50 text-green-600',
    gold: 'bg-gold-50 text-brand-gold'
  };
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${colorMap[color] || colorMap.navy}`}>
        
        {icon}
      </div>
      <p className="text-2xl font-bold text-brand-black">{value}</p>
      <p className="text-xs text-brand-gray">{label}</p>
    </div>);

}
function QuickLink({
  to,
  icon,
  label




}: {to: string;icon: React.ReactNode;label: string;}) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm text-brand-black font-medium">
      
      <span className="text-brand-gray">{icon}</span>
      {label}
      <ArrowRight className="w-3.5 h-3.5 text-brand-gray ml-auto" />
    </Link>);

}

