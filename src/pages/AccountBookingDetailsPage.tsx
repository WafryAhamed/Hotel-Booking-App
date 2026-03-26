import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Separator } from '../components/ui/Separator';
import { MOCK_BOOKINGS_EXTENDED } from '../data/mockData';
import {
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  CreditCard,
  Mail,
  Phone,
  Clock,
  AlertCircle,
  CheckCircle,
  Download,
  Edit,
  X
} from 'lucide-react';

export function AccountBookingDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [showCancelModal, setShowCancelModal] = useState(false);

  const booking = MOCK_BOOKINGS_EXTENDED.find((b) => b.id === id);

  if (!booking) {
    return (
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/account/bookings">
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 text-brand-black" />
            </button>
          </Link>
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-brand-black mb-2">
              Booking Not Found
            </h1>
            <p className="text-brand-gray mb-6">
              We couldn't find the booking you're looking for.
            </p>
            <Link to="/account/bookings">
              <Button variant="primary" className="!bg-brand-navy hover:!bg-blue-900">
                Back to My Bookings
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'cancelled':
        return <X className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return (
          <Badge className="bg-blue-100 text-brand-navy flex items-center gap-2 w-fit">
            {getStatusIcon(status)}
            Upcoming
          </Badge>
        );
      case 'completed':
        return (
          <Badge className="bg-green-100 text-green-700 flex items-center gap-2 w-fit">
            {getStatusIcon(status)}
            Completed
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge className="bg-red-100 text-red-700 flex items-center gap-2 w-fit">
            {getStatusIcon(status)}
            Cancelled
          </Badge>
        );
      default:
        return (
          <Badge className="bg-amber-100 text-amber-700 flex items-center gap-2 w-fit">
            {getStatusIcon(status)}
            Pending
          </Badge>
        );
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/account/bookings">
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-brand-black" />
            </button>
          </Link>
        </div>

        {/* Page Title & Status */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-brand-black mb-2">
              Booking Details
            </h1>
            <p className="text-brand-gray">
              Booking Reference: <span className="font-mono font-medium text-brand-black">{booking.bookingReference}</span>
            </p>
          </div>
          <div>{getStatusBadge(booking.status)}</div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={booking.propertyImage}
                  alt={booking.propertyName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-brand-black mb-2">
                  {booking.propertyName}
                </h2>
                <div className="flex items-center gap-1 text-brand-gray mb-4">
                  <MapPin className="w-4 h-4" />
                  {booking.location}
                </div>
                <Button
                  variant="secondary"
                  className="w-full">
                  View Property
                </Button>
              </div>
            </div>

            {/* Stay Details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-brand-black mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Your Stay
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-brand-gray font-medium">
                      Check-in
                    </p>
                    <p className="text-brand-black font-semibold mt-1">
                      {formatDate(booking.checkIn)}
                    </p>
                    <p className="text-xs text-brand-gray mt-1">
                      After {booking.checkInTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray font-medium">
                      Check-out
                    </p>
                    <p className="text-brand-black font-semibold mt-1">
                      {formatDate(booking.checkOut)}
                    </p>
                    <p className="text-xs text-brand-gray mt-1">
                      Before {booking.checkOutTime}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-brand-gray font-medium">
                      NIGHTS
                    </p>
                    <p className="text-2xl font-bold text-brand-black mt-1">
                      {booking.nights}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray font-medium">
                      GUESTS
                    </p>
                    <p className="text-2xl font-bold text-brand-black mt-1">
                      {booking.guests}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray font-medium">
                      ROOMS
                    </p>
                    <p className="text-2xl font-bold text-brand-black mt-1">
                      {booking.rooms}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-brand-gray font-medium">
                    Room Type
                  </p>
                  <p className="text-brand-black font-semibold mt-1">
                    {booking.roomType}
                  </p>
                </div>

                {booking.specialRequests && (
                  <div>
                    <p className="text-sm text-brand-gray font-medium">
                      Special Requests
                    </p>
                    <p className="text-brand-black mt-1 bg-amber-50 p-3 rounded-lg border border-amber-100">
                      {booking.specialRequests}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Guest Information */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-brand-black mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Guest Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-brand-gray font-medium">
                    Full Name
                  </p>
                  <p className="text-brand-black font-semibold mt-1">
                    {booking.guestInfo.firstName} {booking.guestInfo.lastName}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-brand-gray font-medium mb-1">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                    <p className="text-brand-black font-semibold">
                      {booking.guestInfo.email}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-brand-gray font-medium mb-1">
                      <Phone className="w-4 h-4" />
                      Phone
                    </div>
                    <p className="text-brand-black font-semibold">
                      {booking.guestInfo.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Cancellation Policy
              </h3>
              <p className="text-blue-900 text-sm leading-relaxed">
                {booking.cancellationPolicy}
              </p>
            </div>

            {/* Action Buttons */}
            {booking.status === 'upcoming' && (
              <div className="space-y-3">
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Modify Booking
                </Button>
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center gap-2 border-red-200 text-red-600 hover:bg-red-50"
                  onClick={() => setShowCancelModal(true)}>
                  <X className="w-4 h-4" />
                  Cancel Booking
                </Button>
              </div>
            )}
          </div>

          {/* Right Sidebar (1/3 width) */}
          <div className="space-y-6">
            {/* Price Breakdown */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-brand-black mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Price Summary
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-gray">
                    ${booking.pricePerNight} × {booking.nights} nights
                  </span>
                  <span className="text-brand-black font-medium">
                    ${booking.subtotal}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-brand-gray">Taxes & fees</span>
                  <span className="text-brand-black font-medium">
                    ${booking.taxes + booking.serviceFee}
                  </span>
                </div>

                {booking.taxes > 0 && (
                  <div className="flex justify-between text-sm text-brand-gray text-xs">
                    <span>Taxes</span>
                    <span>${booking.taxes}</span>
                  </div>
                )}

                {booking.serviceFee > 0 && (
                  <div className="flex justify-between text-sm text-brand-gray text-xs">
                    <span>Service fee</span>
                    <span>${booking.serviceFee}</span>
                  </div>
                )}

                <Separator />

                <div className="flex justify-between text-lg">
                  <span className="font-bold text-brand-black">Total paid</span>
                  <span className="font-bold text-brand-navy">
                    ${booking.totalPrice}
                  </span>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-brand-gray mb-2">
                    Payment Method
                  </p>
                  <p className="font-medium text-brand-black">
                    {booking.paymentMethod}
                  </p>
                  {booking.paymentStatus && (
                    <Badge className="bg-green-100 text-green-700 mt-2">
                      ✓ {booking.paymentStatus}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
              <h3 className="text-lg font-bold text-brand-black mb-4">
                Quick Actions
              </h3>
              <Button
                variant="secondary"
                className="w-full flex items-center justify-center gap-2"
                leftIcon={<Download className="w-4 h-4" />}>
                Download Invoice
              </Button>
              <Button
                variant="secondary"
                className="w-full flex items-center justify-center gap-2"
                leftIcon={<Calendar className="w-4 h-4" />}>
                Add to Calendar
              </Button>
              <Button
                variant="secondary"
                className="w-full flex items-center justify-center gap-2"
                leftIcon={<Share className="w-4 h-4" />}>
                Share Booking
              </Button>
              <Button
                variant="secondary"
                className="w-full flex items-center justify-center gap-2"
                leftIcon={<MessageIcon className="w-4 h-4" />}>
                Contact Property
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Booking Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-brand-black mb-4">
              Cancel Booking?
            </h2>
            <p className="text-brand-gray mb-6">
              Are you sure you want to cancel your booking for{' '}
              <span className="font-semibold text-brand-black">
                {booking.propertyName}
              </span>
              ? <br />
              <br />
              Based on the cancellation policy, you will receive a refund of{' '}
              <span className="font-bold text-green-600">
                ${Math.round(booking.totalPrice * 0.5)}
              </span>
              .
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
              <p className="text-sm text-blue-900">
                {booking.cancellationPolicy}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => setShowCancelModal(false)}
                className="flex-1">
                Keep Booking
              </Button>
              <Button
                variant="primary"
                onClick={() => setShowCancelModal(false)}
                className="flex-1 !bg-red-600 hover:!bg-red-700">
                Yes, Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// Icon placeholder
const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);


