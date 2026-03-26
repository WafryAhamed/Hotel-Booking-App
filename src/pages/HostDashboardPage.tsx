import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  ArrowLeft,
  ChevronRight,
  Home,
  DollarSign,
  TrendingUp,
  MessageSquare,
  AlertCircle,
  Calendar,
  CheckCircle,
} from 'lucide-react';

export function HostDashboardPage() {
  const [selectedProperty, setSelectedProperty] = useState(1);

  // Mock host data
  const hostName = 'Sarah Johnson';
  const totalBookings = 24;
  const monthlyRevenue = 8250;
  const occupancyRate = 85;
  const pendingApprovals = 1;

  // Mock properties
  const properties = [
    { id: 1, name: 'Modern Downtown Apartment', bookings: 14, revenue: 4800 },
    { id: 2, name: 'Beachfront Villa', bookings: 10, revenue: 3450 },
  ];

  // Mock inquiries
  const inquiries = [
    { id: 1, guest: 'Alex Chen', dates: '12-15 Dec 2024', property: 'Downtown Apt', status: 'pending' },
    { id: 2, guest: 'Emma Wilson', dates: '20-22 Dec 2024', property: 'Beachfront Villa', status: 'pending' },
    { id: 3, guest: 'Michael Brown', dates: '1-5 Jan 2025', property: 'Downtown Apt', status: 'accepted' },
  ];

  // Mock calendar data (simplified)
  const calendarDays = [
    { date: 1, status: 'available' },
    { date: 2, status: 'booked' },
    { date: 3, status: 'booked' },
    { date: 4, status: 'available' },
    { date: 5, status: 'available' },
    { date: 6, status: 'blocked' },
    { date: 7, status: 'available' },
    { date: 8, status: 'booked' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <button className="flex items-center gap-2 text-blue-100 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Welcome back, {hostName}!</h1>
          <p className="text-blue-100">
            Here's your hosting dashboard for this month
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Total Bookings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-sm font-medium">Total Bookings</p>
                <p className="text-3xl font-bold text-brand-black mt-2">{totalBookings}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-brand-navy" />
              </div>
            </div>
            <p className="text-xs text-brand-gray">+2 this month</p>
          </div>

          {/* Monthly Revenue */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-sm font-medium">Monthly Revenue</p>
                <p className="text-3xl font-bold text-brand-black mt-2">
                  ${monthlyRevenue.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-brand-gray">+12% from last month</p>
          </div>

          {/* Occupancy Rate */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-sm font-medium">Occupancy Rate</p>
                <p className="text-3xl font-bold text-brand-black mt-2">{occupancyRate}%</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-xs text-brand-gray">Target: 90%</p>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-sm font-medium">Pending Reviews</p>
                <p className="text-3xl font-bold text-brand-black mt-2">{pendingApprovals}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <Link to="/host/reviews">
              <button className="text-xs font-medium text-brand-navy hover:underline">
                View details
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Selection */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-brand-black mb-4">Your Properties</h2>
              <div className="space-y-3">
                {properties.map((property) => (
                  <button
                    key={property.id}
                    onClick={() => setSelectedProperty(property.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                      selectedProperty === property.id
                        ? 'border-brand-navy bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          selectedProperty === property.id
                            ? 'bg-brand-navy text-white'
                            : 'bg-gray-100 text-brand-gray'
                        }`}>
                          <Home className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-brand-black">{property.name}</p>
                          <p className="text-sm text-brand-gray">
                            {property.bookings} bookings • ${property.revenue.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      {selectedProperty === property.id && (
                        <CheckCircle className="w-5 h-5 text-brand-navy" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-black">Guest Inquiries</h2>
                <Link to="/host/inquiries">
                  <button className="text-sm text-brand-navy font-medium hover:underline">
                    View All
                  </button>
                </Link>
              </div>
              <div className="space-y-3">
                {inquiries.slice(0, 3).map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                    <div>
                      <p className="font-bold text-brand-black">{inquiry.guest}</p>
                      <p className="text-sm text-brand-gray">
                        {inquiry.dates} • {inquiry.property}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        className={
                          inquiry.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }>
                        {inquiry.status === 'pending' ? 'Awaiting Response' : 'Accepted'}
                      </Badge>
                      <ChevronRight className="w-5 h-5 text-brand-gray" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Calendar Preview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-brand-black">December Calendar</h2>
                <Link to="/host/calendar">
                  <button className="text-sm text-brand-navy font-medium hover:underline">
                    Full Calendar
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-8 gap-2">
                {calendarDays.map((day) => (
                  <div key={day.date} className="text-center">
                    <div
                      className={`w-full aspect-square rounded text-xs font-bold flex items-center justify-center ${
                        day.status === 'booked'
                          ? 'bg-brand-navy text-white'
                          : day.status === 'blocked'
                          ? 'bg-gray-300 text-white'
                          : 'bg-green-100 text-green-800'
                      }`}>
                      {day.date}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-100 border border-green-800"></div>
                  <span className="text-brand-gray">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-brand-navy"></div>
                  <span className="text-brand-gray">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gray-300"></div>
                  <span className="text-brand-gray">Blocked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/host/add-property">
                  <Button className="w-full justify-center bg-brand-navy text-white hover:bg-brand-navy/90">
                    Add New Property
                  </Button>
                </Link>
                <Link to="/host/calendar">
                  <button className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 text-brand-navy font-bold hover:border-brand-navy transition-colors">
                    Manage Calendar
                  </button>
                </Link>
                <Link to="/host/messages">
                  <button className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 text-brand-navy font-bold hover:border-brand-navy transition-colors">
                    View Messages
                  </button>
                </Link>
              </div>
            </div>

            {/* Performance Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200 p-6">
              <h3 className="font-bold text-brand-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Boost Earnings
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-brand-gray">
                    Add 3+ high-quality photos to increase booking rate
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-brand-gray">
                    Respond to inquiries within 1 hour
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-brand-gray">
                    Enable instant booking to increase conversions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-brand-gray">
                    Get to Superhost status with 4.8+ rating
                  </span>
                </li>
              </ul>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-navy" />
                Need Help?
              </h3>
              <p className="text-sm text-brand-gray mb-4">
                Our dedicated host support team is here to help you succeed.
              </p>
              <Link to="/contact">
                <Button className="w-full justify-center bg-white border-2 border-brand-navy text-brand-navy hover:bg-blue-50">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


