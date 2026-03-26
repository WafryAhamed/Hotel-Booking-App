import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Tabs } from '../components/ui/Tabs';
import { MOCK_BOOKINGS_EXTENDED } from '../data/mockData';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  ChevronRight,
  CheckCircle,
  Clock,
  X as XCircle,
  AlertCircle,
  CreditCard
} from 'lucide-react';

type BookingStatus = 'upcoming' | 'completed' | 'cancelled' | 'pending';

export function AccountBookingsPage() {
  const [activeTab, setActiveTab] = useState<BookingStatus>('upcoming');

  const bookingsByStatus = {
    upcoming: MOCK_BOOKINGS_EXTENDED.filter((b) => b.status === 'upcoming'),
    completed: MOCK_BOOKINGS_EXTENDED.filter((b) => b.status === 'completed'),
    cancelled: MOCK_BOOKINGS_EXTENDED.filter((b) => b.status === 'cancelled'),
    pending: MOCK_BOOKINGS_EXTENDED.filter((b) => b.status === 'pending')
  };

  const currentBookings = bookingsByStatus[activeTab];

  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'upcoming':
        return (
          <Badge className="bg-blue-100 text-brand-navy flex items-center gap-1 w-fit">
            <Clock className="w-3.5 h-3.5" />
            Upcoming
          </Badge>
        );
      case 'completed':
        return (
          <Badge className="bg-green-100 text-green-700 flex items-center gap-1 w-fit">
            <CheckCircle className="w-3.5 h-3.5" />
            Completed
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge className="bg-red-100 text-red-700 flex items-center gap-1 w-fit">
            <XCircle className="w-3.5 h-3.5" />
            Cancelled
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-amber-100 text-amber-700 flex items-center gap-1 w-fit">
            <AlertCircle className="w-3.5 h-3.5" />
            Pending
          </Badge>
        );
      default:
        return null;
    }
  };

  const getStatusIcon = (status: BookingStatus) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/account">
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-brand-black" />
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-brand-black">My Bookings</h1>
            <p className="text-brand-gray text-sm mt-1">
              Manage and view all your reservations
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6 overflow-hidden">
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as BookingStatus)}
            variant="bordered">
            <Tabs.Trigger value="upcoming">
              Upcoming ({bookingsByStatus.upcoming.length})
            </Tabs.Trigger>
            <Tabs.Trigger value="completed">
              Completed ({bookingsByStatus.completed.length})
            </Tabs.Trigger>
            <Tabs.Trigger value="cancelled">
              Cancelled ({bookingsByStatus.cancelled.length})
            </Tabs.Trigger>
            <Tabs.Trigger value="pending">
              Pending ({bookingsByStatus.pending.length})
            </Tabs.Trigger>
          </Tabs>
        </div>

        {/* Bookings List */}
        {currentBookings.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              {getStatusIcon(activeTab as BookingStatus)}
            </div>
            <h2 className="text-lg font-bold text-brand-black mb-2">
              No bookings {activeTab === 'pending' ? 'pending' : activeTab}
            </h2>
            <p className="text-brand-gray mb-6">
              {activeTab === 'upcoming'
                ? "You haven't made any upcoming reservations yet. Start planning your next trip!"
                : activeTab === 'completed'
                  ? "You haven't completed any bookings yet."
                  : activeTab === 'cancelled'
                    ? "You haven't cancelled any bookings."
                    : "You don't have any pending bookings."}
            </p>
            <Link to="/search">
              <Button variant="primary" className="!bg-brand-navy hover:!bg-blue-900">
                Search Properties
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {currentBookings.map((booking) => (
              <Link
                key={booking.id}
                to={`/account/bookings/${booking.id}`}>
                <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow group">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Image */}
                    <div className="w-full sm:w-48 h-40 sm:h-auto rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={booking.propertyImage}
                        alt={booking.propertyName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-brand-black">
                            {booking.propertyName}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-brand-gray mt-1">
                            <MapPin className="w-4 h-4" />
                            {booking.location}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          {getStatusBadge(booking.status)}
                          <p className="text-sm text-brand-gray mt-2">
                            Ref: {booking.bookingReference}
                          </p>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-sm py-3 border-y border-gray-100">
                        {/* Check-in */}
                        <div>
                          <p className="text-brand-gray text-xs font-medium">
                            CHECK-IN
                          </p>
                          <p className="text-brand-black font-medium mt-1">
                            {formatDate(booking.checkIn)}
                          </p>
                        </div>

                        {/* Check-out */}
                        <div>
                          <p className="text-brand-gray text-xs font-medium">
                            CHECK-OUT
                          </p>
                          <p className="text-brand-black font-medium mt-1">
                            {formatDate(booking.checkOut)}
                          </p>
                        </div>

                        {/* Nights */}
                        <div>
                          <p className="text-brand-gray text-xs font-medium">
                            NIGHTS
                          </p>
                          <p className="text-brand-black font-medium mt-1">
                            {booking.nights}
                          </p>
                        </div>

                        {/* Total */}
                        <div>
                          <p className="text-brand-gray text-xs font-medium">
                            TOTAL
                          </p>
                          <p className="text-brand-navy font-bold text-base mt-1">
                            ${booking.totalPrice}
                          </p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-brand-gray">
                            <Users className="w-4 h-4" />
                            {booking.guests} guest{booking.guests > 1 ? 's' : ''}
                          </div>
                          <div className="flex items-center gap-1 text-brand-gray">
                            <Calendar className="w-4 h-4" />
                            Booked {formatDate(booking.bookingDate)}
                          </div>
                          {booking.paymentStatus && (
                            <div className="flex items-center gap-1 text-brand-gray">
                              <CreditCard className="w-4 h-4" />
                              {booking.paymentStatus}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="w-5 h-5 text-brand-gray group-hover:text-brand-navy transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


