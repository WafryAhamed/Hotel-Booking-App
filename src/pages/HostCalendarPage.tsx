import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Lock,
  AlertCircle
} from 'lucide-react';

export function HostCalendarPage() {
  const { addToast } = useToast();
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11)); // December 2024
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [customPrice, setCustomPrice] = useState('150');

  // Mock calendar data
  const blockedDates = [6, 12, 25, 26];
  const bookedDates = [2, 3, 8, 9, 10, 15, 16, 21, 22, 23, 30, 31];
  const seasonalPricingDates = [1, 7, 14, 20, 28]; // Higher priced dates

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    if (bookedDates.includes(day)) {
      return; // Can't modify booked dates
    }
    if (blockedDates.includes(day)) {
      setShowBlockModal(true);
    } else {
      setShowPricingModal(true);
    }
  };

  const getDayStatus = (day) => {
    if (bookedDates.includes(day)) return 'booked';
    if (blockedDates.includes(day)) return 'blocked';
    if (seasonalPricingDates.includes(day)) return 'seasonal';
    return 'available';
  };

  // Generate calendar days
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const calendarDays = [];

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const monthName = currentMonth.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  const occupancyDays = bookedDates.length;
  const occupancyRate = ((occupancyDays / daysInMonth) * 100).toFixed(0);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/host/dashboard">
            <button className="flex items-center gap-2 text-blue-100 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Manage Calendar</h1>
          <p className="text-blue-100">
            Block dates, set seasonal pricing, and manage availability
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-brand-black">{monthName}</h2>
                <div className="flex gap-2">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <ChevronLeft className="w-5 h-5 text-brand-navy" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <ChevronRight className="w-5 h-5 text-brand-navy" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="space-y-4">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-bold text-brand-gray text-sm py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Day Cells */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((day, idx) => {
                    const status = day ? getDayStatus(day) : null;

                    return (
                      <button
                        key={idx}
                        disabled={!day || bookedDates.includes(day)}
                        onClick={() => day && handleDateClick(day)}
                        className={`aspect-square rounded-lg font-bold text-sm transition-all ${
                          !day
                            ? 'bg-transparent cursor-default'
                            : bookedDates.includes(day)
                            ? 'bg-brand-navy text-white cursor-not-allowed opacity-50'
                            : status === 'blocked'
                            ? 'bg-gray-300 text-white border-2 border-gray-400 hover:bg-gray-400'
                            : status === 'seasonal'
                            ? 'bg-brand-gold text-white border-2 border-brand-gold/80 hover:bg-brand-gold/90'
                            : 'bg-green-100 text-green-800 border-2 border-green-200 hover:bg-green-200'
                        }`}>
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs font-bold text-brand-gray mb-3">Legend:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-100 border border-green-200"></div>
                    <span className="text-brand-gray">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-brand-gold"></div>
                    <span className="text-brand-gray">Seasonal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gray-300"></div>
                    <span className="text-brand-gray">Blocked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-brand-navy opacity-50"></div>
                    <span className="text-brand-gray">Booked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Occupancy Stats */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4">Occupancy</h3>
              <div className="mb-4">
                <div className="flex items-end justify-between mb-2">
                  <p className="text-sm text-brand-gray">December 2024</p>
                  <p className="text-2xl font-bold text-brand-navy">{occupancyRate}%</p>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-brand-navy transition-all"
                    style={{ width: `${occupancyRate}%` }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-brand-gray">Booked</p>
                  <p className="text-lg font-bold text-brand-navy">{bookedDates.length}</p>
                </div>
                <div>
                  <p className="text-brand-gray">Available</p>
                  <p className="text-lg font-bold text-green-600">
                    {daysInMonth - bookedDates.length - blockedDates.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2.5 rounded-lg border-2 border-brand-navy text-brand-navy font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Set Base Price
                </button>
                <button className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 text-brand-black font-bold hover:border-gray-300 transition-colors flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  Block Week
                </button>
              </div>
            </div>

            {/* Base Pricing */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4">Base Pricing</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-brand-gray">Price per night</label>
                  <p className="text-2xl font-bold text-brand-navy mt-1">$150</p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-brand-gray mb-2">Estimated monthly earnings:</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${(150 * bookedDates.length).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-black mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                Tips
              </h4>
              <ul className="space-y-2 text-xs text-brand-gray">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Block dates for personal use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Raise prices during peak seasons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Offer discounts for longer stays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Modal */}
      {showPricingModal && selectedDate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border border-gray-200 max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Set Price for December {selectedDate}
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Price per night
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-brand-gray font-bold">$</span>
                  <input
                    type="number"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                  />
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-brand-gray mb-1">Estimated earnings</p>
                <p className="font-bold text-brand-navy">
                  ${(parseInt(customPrice) * 1).toLocaleString()} per night
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPricingModal(false)}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 text-brand-black font-bold hover:border-gray-300">
                Cancel
              </button>
              <button
                onClick={() => {
                  addToast(`Price set to $${customPrice} per night for December ${selectedDate}`, 'success');
                  setShowPricingModal(false);
                }}
                className="flex-1 px-4 py-2 rounded-lg bg-brand-navy text-white font-bold hover:bg-brand-navy/90">
                Save Price
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Block Modal */}
      {showBlockModal && selectedDate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border border-gray-200 max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Unblock December {selectedDate}?
            </h3>
            <p className="text-brand-gray mb-6">
              This date is currently blocked. Would you like to unblock it and make it available
              for bookings?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBlockModal(false)}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 text-brand-black font-bold hover:border-gray-300">
                Keep Blocked
              </button>
              <button
                onClick={() => {
                  addToast(`December ${selectedDate} is now available for bookings`, 'success');
                  setShowBlockModal(false);
                }}
                className="flex-1 px-4 py-2 rounded-lg bg-brand-navy text-white font-bold hover:bg-brand-navy/90">
                Unblock
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


