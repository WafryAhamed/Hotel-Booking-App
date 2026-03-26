import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  ArrowLeft,
  Users,
  Home,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  ChevronRight
} from 'lucide-react';

export function AdminDashboardPage() {
  // Mock admin data
  const adminStats = {
    totalUsers: 125430,
    totalListings: 54230,
    pendingApprovals: 12,
    activeDeals: 8,
    supportTickets: 34,
  };

  // Mock moderation queue
  const flaggedReviews = [
    {
      id: 1,
      reviewer: 'John Smith',
      property: 'Modern Downtown Apartment',
      rating: 2,
      content: 'Dirty rooms and terrible service',
      reason: 'Potentially spam',
      date: '2024-12-10',
    },
    {
      id: 2,
      reviewer: 'Priya Nair',
      property: 'Beachfront Villa',
      rating: 1,
      content: 'Host was rude and property was not as described',
      reason: 'Offensive language',
      date: '2024-12-09',
    },
    {
      id: 3,
      reviewer: 'Mike Johnson',
      property: 'Luxury Penthouse',
      rating: 3,
      content: 'Average property. Overcrowded area.',
      reason: 'Potential fake review',
      date: '2024-12-08',
    },
  ];

  // Mock pending properties
  const pendingProperties = [
    {
      id: 1,
      name: 'Rustic Mountain Cabin',
      host: 'Sarah Johnson',
      bedrooms: 3,
      submitted: '2024-12-10',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Urban Loft',
      host: 'Michael Chen',
      bedrooms: 1,
      submitted: '2024-12-09',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Waterfront Cottage',
      host: 'Emma Wilson',
      bedrooms: 2,
      submitted: '2024-12-08',
      status: 'reviewing',
    },
  ];

  // Mock support tickets
  const supportTickets = [
    {
      id: 'SUP-001',
      guest: 'David Lee',
      issue: 'Payment processing failed',
      priority: 'high',
      status: 'open',
    },
    {
      id: 'SUP-002',
      host: 'Lisa Anderson',
      issue: 'Can\'t update property amenities',
      priority: 'medium',
      status: 'open',
    },
    {
      id: 'SUP-003',
      guest: 'Robert Brown',
      issue: 'Booking cancellation request',
      priority: 'medium',
      status: 'waiting',
    },
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
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-blue-100">Manage platform users, listings, and content</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {/* Total Users */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-xs font-medium uppercase">Total Users</p>
                <p className="text-3xl font-bold text-brand-black mt-2">
                  {(adminStats.totalUsers / 1000).toFixed(0)}K
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-navy" />
              </div>
            </div>
            <p className="text-xs text-green-600 font-medium">+2,340 this month</p>
          </div>

          {/* Total Listings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-xs font-medium uppercase">Listings</p>
                <p className="text-3xl font-bold text-brand-black mt-2">
                  {(adminStats.totalListings / 1000).toFixed(0)}K
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <Home className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-green-600 font-medium">+450 this month</p>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-xs font-medium uppercase">Pending</p>
                <p className="text-3xl font-bold text-brand-black mt-2">{adminStats.pendingApprovals}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <Link to="/admin/approvals">
              <button className="text-xs font-medium text-brand-navy hover:underline">
                Review now →
              </button>
            </Link>
          </div>

          {/* Active Deals */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-xs font-medium uppercase">Active Deals</p>
                <p className="text-3xl font-bold text-brand-black mt-2">{adminStats.activeDeals}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <Link to="/admin/promotions">
              <button className="text-xs font-medium text-brand-navy hover:underline">
                Manage →
              </button>
            </Link>
          </div>

          {/* Support Queue */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-brand-gray text-xs font-medium uppercase">Open Tickets</p>
                <p className="text-3xl font-bold text-brand-black mt-2">{adminStats.supportTickets}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <p className="text-xs text-red-600 font-medium">Average wait: 2hrs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pending Property Approvals */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-brand-black">
                  Pending Property Approvals
                </h2>
                <Link to="/admin/approvals">
                  <button className="text-sm text-brand-navy font-medium hover:underline">
                    View All
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                {pendingProperties.map((property) => (
                  <Link to={`/admin/approvals/${property.id}`} key={property.id}>
                    <div className="p-4 rounded-lg border border-gray-200 hover:border-brand-navy hover:bg-blue-50 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-brand-black">{property.name}</p>
                          <p className="text-sm text-brand-gray">
                            {property.bedrooms} BR • Submitted {property.submitted}
                          </p>
                        </div>
                        <Badge
                          className={
                            property.status === 'pending'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-blue-100 text-blue-800'
                          }>
                          {property.status === 'pending' ? 'Awaiting Review' : 'In Review'}
                        </Badge>
                      </div>
                      <p className="text-xs text-brand-gray">Host: {property.host}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Flagged Reviews */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-brand-black">Flagged Reviews</h2>
                <Link to="/admin/reviews">
                  <button className="text-sm text-brand-navy font-medium hover:underline">
                    View All
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                {flaggedReviews.map((review) => (
                  <Link to={`/admin/reviews/${review.id}`} key={review.id}>
                    <div className="p-4 rounded-lg border border-gray-200 hover:border-brand-navy hover:bg-blue-50 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-brand-black">{review.reviewer}</p>
                          <p className="text-sm text-brand-gray">{review.property}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-100 text-red-800 text-xs">
                            {review.reason}
                          </Badge>
                          <ChevronRight className="w-4 h-4 text-brand-gray" />
                        </div>
                      </div>
                      <p className="text-xs text-brand-gray line-clamp-1">"{review.content}"</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Tickets */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4">Recent Support Tickets</h3>
              <div className="space-y-3">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="p-3 rounded-lg border border-gray-200 hover:border-brand-navy transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-xs font-bold text-brand-navy">{ticket.id}</p>
                        <p className="text-sm font-medium text-brand-black mt-1">
                          {ticket.issue}
                        </p>
                      </div>
                      <Badge
                        className={
                          ticket.priority === 'high'
                            ? 'bg-red-100 text-red-800 text-xs'
                            : 'bg-yellow-100 text-yellow-800 text-xs'
                        }>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-xs text-brand-gray">
                      {ticket.guest || ticket.host}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4">Admin Actions</h3>
              <div className="space-y-3">
                <Link to="/admin/approvals">
                  <Button className="w-full justify-center bg-brand-navy text-white hover:bg-brand-navy/90">
                    Review Approvals
                  </Button>
                </Link>
                <Link to="/admin/reviews">
                  <button className="w-full px-4 py-2.5 rounded-lg border-2 border-brand-navy text-brand-navy font-bold hover:bg-blue-50 transition-colors">
                    Moderate Reviews
                  </button>
                </Link>
                <Link to="/admin/promotions">
                  <button className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 text-brand-black font-bold hover:border-gray-300 transition-colors">
                    Manage Deals
                  </button>
                </Link>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-black mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                System Health
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-brand-gray">API Status</span>
                  <span className="font-bold text-green-600">Healthy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-gray">Database</span>
                  <span className="font-bold text-green-600">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brand-gray">Cache</span>
                  <span className="font-bold text-green-600">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


