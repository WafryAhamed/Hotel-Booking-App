import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import { SEARCH_PROPERTIES } from '../data/searchData';
import { GuestDetails } from '../types';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Separator } from '../components/ui/Separator';
import {
  ChevronLeft,
  Check,
  Lock,
  Shield,
  CreditCard,
  Building,
  Wallet,
  Calendar,
  Users,
  MapPin,
  Star,
  Info } from
'lucide-react';
type BookingStep = 'details' | 'payment' | 'confirmation';
const COUNTRIES = [
{
  value: 'us',
  label: 'United States'
},
{
  value: 'uk',
  label: 'United Kingdom'
},
{
  value: 'fr',
  label: 'France'
},
{
  value: 'de',
  label: 'Germany'
},
{
  value: 'jp',
  label: 'Japan'
},
{
  value: 'es',
  label: 'Spain'
},
{
  value: 'id',
  label: 'Indonesia'
},
{
  value: 'au',
  label: 'Australia'
},
{
  value: 'ca',
  label: 'Canada'
},
{
  value: 'it',
  label: 'Italy'
}];

const ARRIVAL_TIMES = [
{
  value: '',
  label: 'Select arrival time'
},
{
  value: '12:00-14:00',
  label: '12:00 PM – 2:00 PM'
},
{
  value: '14:00-16:00',
  label: '2:00 PM – 4:00 PM'
},
{
  value: '16:00-18:00',
  label: '4:00 PM – 6:00 PM'
},
{
  value: '18:00-20:00',
  label: '6:00 PM – 8:00 PM'
},
{
  value: '20:00-22:00',
  label: '8:00 PM – 10:00 PM'
},
{
  value: '22:00-00:00',
  label: '10:00 PM – 12:00 AM'
}];

export function BookingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addToast } = useToast();
  const propertyId = searchParams.get('property') || 'prop-1';
  const roomId = searchParams.get('room');
  const property = SEARCH_PROPERTIES.find((p) => p.id === propertyId);
  const selectedRoom =
  property?.roomTypes.find((r) => r.id === roomId) || property?.roomTypes[0];
  const [step, setStep] = useState<BookingStep>('details');
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    arrivalTime: '',
    specialRequests: '',
    isBusinessTravel: false
  });
  const [paymentMethod, setPaymentMethod] = useState<
    'card' | 'property' | 'wallet'>(
    'card');
  const [errors, setErrors] = useState<
    Partial<Record<keyof GuestDetails, string>>>(
    {});
  const [isProcessing, setIsProcessing] = useState(false);
  const nights = 3;
  const roomPrice = selectedRoom?.pricePerNight || property?.pricePerNight || 0;
  const subtotal = roomPrice * nights;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;
  const updateField = (field: keyof GuestDetails, value: string | boolean) => {
    setGuestDetails((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined
      }));
    }
  };
  const validateDetails = (): boolean => {
    const newErrors: Partial<Record<keyof GuestDetails, string>> = {};
    if (!guestDetails.firstName.trim())
    newErrors.firstName = 'First name is required';
    if (!guestDetails.lastName.trim())
    newErrors.lastName = 'Last name is required';
    if (!guestDetails.email.trim()) newErrors.email = 'Email is required';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestDetails.email))
    newErrors.email = 'Invalid email address';
    if (!guestDetails.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!guestDetails.country) newErrors.country = 'Please select a country';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleContinueToPayment = () => {
    if (validateDetails()) {
      addToast({
        type: 'success',
        message: 'Guest details confirmed. Proceeding to payment...',
      });
      setStep('payment');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      addToast({
        type: 'error',
        message: 'Please fill in all required fields',
      });
    }
  };

  const handleConfirmBooking = () => {
    setIsProcessing(true);
    addToast({
      type: 'info',
      message: 'Processing your booking...',
    });
    setTimeout(() => {
      setIsProcessing(false);
      setStep('confirmation');
      addToast({
        type: 'success',
        message: 'Booking confirmed! Check your email for confirmation details.',
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 1500);
  };
  if (!property) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-brand-black mb-2">
            Property not found
          </h1>
          <Link to="/search">
            <Button variant="primary" className="!bg-brand-navy">
              Browse properties
            </Button>
          </Link>
        </div>
      </main>);

  }
  // Confirmation step
  if (step === 'confirmation') {
    return (
      <main className="min-h-screen bg-gray-50 py-8 md:py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Success header */}
            <div className="bg-brand-navy px-6 py-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-1">
                Booking Confirmed!
              </h1>
              <p className="text-navy-200 text-sm">
                Your reservation has been successfully placed
              </p>
            </div>

            <div className="p-6">
              {/* Booking reference */}
              <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-6 text-center">
                <p className="text-xs text-brand-gray uppercase tracking-wide mb-1">
                  Booking Reference
                </p>
                <p className="text-2xl font-bold text-brand-navy tracking-wider">
                  SH-{Date.now().toString().slice(-8)}
                </p>
              </div>

              {/* Property summary */}
              <div className="flex gap-4 mb-6">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-24 h-20 object-cover rounded-lg flex-shrink-0" />
                
                <div>
                  <h2 className="font-bold text-brand-black">
                    {property.name}
                  </h2>
                  <p className="text-sm text-brand-gray flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {property.location}
                  </p>
                  {selectedRoom &&
                  <p className="text-sm text-gray-600 mt-1">
                      {selectedRoom.name}
                    </p>
                  }
                </div>
              </div>

              <Separator className="my-4" />

              {/* Stay details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <p className="text-brand-gray text-xs uppercase tracking-wide mb-0.5">
                    Check-in
                  </p>
                  <p className="font-semibold text-brand-black">Apr 15, 2026</p>
                  <p className="text-xs text-brand-gray">From 3:00 PM</p>
                </div>
                <div>
                  <p className="text-brand-gray text-xs uppercase tracking-wide mb-0.5">
                    Check-out
                  </p>
                  <p className="font-semibold text-brand-black">Apr 18, 2026</p>
                  <p className="text-xs text-brand-gray">Until 11:00 AM</p>
                </div>
                <div>
                  <p className="text-brand-gray text-xs uppercase tracking-wide mb-0.5">
                    Guest
                  </p>
                  <p className="font-semibold text-brand-black">
                    {guestDetails.firstName} {guestDetails.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-brand-gray text-xs uppercase tracking-wide mb-0.5">
                    Total Paid
                  </p>
                  <p className="font-bold text-brand-black text-lg">${total}</p>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/account/bookings" className="flex-1">
                  <Button
                    variant="primary"
                    size="large"
                    className="w-full !bg-brand-navy">
                    
                    View My Bookings
                  </Button>
                </Link>
                <Link to="/" className="flex-1">
                  <Button variant="secondary" size="large" className="w-full">
                    Back to Home
                  </Button>
                </Link>
              </div>

              {/* Confirmation note */}
              <p className="text-xs text-brand-gray text-center mt-4">
                A confirmation email has been sent to{' '}
                {guestDetails.email || 'your email address'}
              </p>
            </div>
          </div>
        </div>
      </main>);

  }
  return (
    <main className="min-h-screen bg-gray-50 py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to={`/property/${propertyId}`}
          className="inline-flex items-center gap-1 text-sm text-brand-blue hover:text-brand-navy transition-colors mb-4">
          
          <ChevronLeft className="w-4 h-4" />
          Back to property
        </Link>

        {/* Progress steps */}
        <div className="flex items-center gap-2 mb-6">
          <StepIndicator
            step={1}
            label="Guest Details"
            isActive={step === 'details'}
            isComplete={step === 'payment'} />
          
          <div className="flex-1 h-px bg-gray-300" />
          <StepIndicator
            step={2}
            label="Payment"
            isActive={step === 'payment'}
            isComplete={false} />
          
          <div className="flex-1 h-px bg-gray-300" />
          <StepIndicator
            step={3}
            label="Confirmation"
            isActive={false}
            isComplete={false} />
          
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Form */}
          <div className="flex-1">
            {step === 'details' &&
            <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
                <h1 className="text-xl md:text-2xl font-bold text-brand-black mb-6">
                  Guest Details
                </h1>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                    label="First Name"
                    value={guestDetails.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    error={errors.firstName}
                    placeholder="John" />
                  
                    <Input
                    label="Last Name"
                    value={guestDetails.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    error={errors.lastName}
                    placeholder="Doe" />
                  
                  </div>

                  <Input
                  label="Email Address"
                  type="email"
                  value={guestDetails.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  error={errors.email}
                  placeholder="Email address for booking confirmation" />
                

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                    label="Phone Number"
                    type="tel"
                    value={guestDetails.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    error={errors.phone}
                    placeholder="+1 (555) 000-0000" />
                  
                    <Select
                    label="Country"
                    options={COUNTRIES}
                    value={guestDetails.country}
                    onChange={(val) => updateField('country', val as string)}
                    error={errors.country}
                    placeholder="Select country" />
                  
                  </div>

                  <Select
                  label="Estimated Arrival Time"
                  options={ARRIVAL_TIMES}
                  value={guestDetails.arrivalTime}
                  onChange={(val) =>
                  updateField('arrivalTime', val as string)
                  }
                  placeholder="Select time" />
                

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Special Requests
                    </label>
                    <textarea
                    value={guestDetails.specialRequests}
                    onChange={(e) =>
                    updateField('specialRequests', e.target.value)
                    }
                    placeholder="Any special requests? (e.g., high floor, extra pillows)"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue resize-none" />
                  
                  </div>

                  <Checkbox
                  label="I'm traveling for work"
                  checked={guestDetails.isBusinessTravel}
                  onChange={(e) =>
                  updateField(
                    'isBusinessTravel',
                    (e.target as HTMLInputElement).checked
                  )
                  } />
                
                </div>

                <div className="mt-6">
                  <Button
                  variant="primary"
                  size="large"
                  onClick={handleContinueToPayment}
                  className="w-full sm:w-auto !bg-brand-navy hover:!bg-navy-700 !font-bold">
                  
                    Continue to Payment
                  </Button>
                </div>
              </div>
            }

            {step === 'payment' &&
            <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-xl md:text-2xl font-bold text-brand-black">
                    Payment
                  </h1>
                  <button
                  onClick={() => setStep('details')}
                  className="text-sm text-brand-blue hover:text-brand-navy transition-colors">
                  
                    Edit details
                  </button>
                </div>

                {/* Payment method selection */}
                <div className="space-y-3 mb-6">
                  <PaymentMethodOption
                  icon={<CreditCard className="w-5 h-5" />}
                  label="Credit or Debit Card"
                  description="Visa, Mastercard, American Express"
                  isSelected={paymentMethod === 'card'}
                  onClick={() => setPaymentMethod('card')} />
                
                  <PaymentMethodOption
                  icon={<Building className="w-5 h-5" />}
                  label="Pay at Property"
                  description="Pay when you arrive at the hotel"
                  isSelected={paymentMethod === 'property'}
                  onClick={() => setPaymentMethod('property')} />
                
                  <PaymentMethodOption
                  icon={<Wallet className="w-5 h-5" />}
                  label="Digital Wallet"
                  description="Apple Pay, Google Pay"
                  isSelected={paymentMethod === 'wallet'}
                  onClick={() => setPaymentMethod('wallet')} />
                
                </div>

                {/* Card form */}
                {paymentMethod === 'card' &&
              <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <Input
                  label="Card Number"
                  placeholder="1234 5678 9012 3456"
                  endAdornment={
                  <Lock className="w-4 h-4 text-brand-gray" />
                  } />
                
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="Expiry Date" placeholder="MM/YY" />
                      <Input label="CVV" placeholder="123" type="password" />
                    </div>
                    <Input label="Cardholder Name" placeholder="Name on card" />
                  </div>
              }

                {paymentMethod === 'property' &&
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                    <div className="flex gap-2">
                      <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-brand-black">
                          Pay at the property
                        </p>
                        <p className="text-xs text-gray-600 mt-0.5">
                          Your booking will be confirmed immediately. Payment is
                          collected at check-in. A valid credit card is required
                          to guarantee the reservation.
                        </p>
                      </div>
                    </div>
                  </div>
              }

                {paymentMethod === 'wallet' &&
              <div className="flex gap-3 mb-6">
                    <button className="flex-1 p-4 border border-gray-200 rounded-lg hover:border-brand-navy hover:bg-navy-50 transition-colors text-center">
                      <span className="text-sm font-semibold text-brand-black">
                        Apple Pay
                      </span>
                    </button>
                    <button className="flex-1 p-4 border border-gray-200 rounded-lg hover:border-brand-navy hover:bg-navy-50 transition-colors text-center">
                      <span className="text-sm font-semibold text-brand-black">
                        Google Pay
                      </span>
                    </button>
                  </div>
              }

                {/* Promo code */}
                <div className="flex gap-2 mb-6">
                  <Input placeholder="Promo code" className="flex-1" />
                  <Button variant="secondary">Apply</Button>
                </div>

                {/* Security note */}
                <div className="flex items-center gap-2 text-xs text-brand-gray mb-6">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Your payment information is encrypted and secure</span>
                </div>

                <Button
                variant="primary"
                size="large"
                onClick={handleConfirmBooking}
                loading={isProcessing}
                className="w-full !bg-brand-navy hover:!bg-navy-700 !font-bold">
                
                  {isProcessing ? 'Processing...' : `Confirm & Pay $${total}`}
                </Button>

                <p className="text-xs text-brand-gray text-center mt-3">
                  By confirming, you agree to our Terms of Service and
                  Cancellation Policy
                </p>
              </div>
            }
          </div>

          {/* Right: Booking Summary Sidebar */}
          <div className="lg:w-[360px] flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-20">
              <h2 className="font-bold text-brand-black mb-4">
                Booking Summary
              </h2>

              {/* Property card */}
              <div className="flex gap-3 mb-4">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-20 h-16 object-cover rounded-lg flex-shrink-0" />
                
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-brand-black truncate">
                    {property.name}
                  </h3>
                  <p className="text-xs text-brand-gray flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {property.location}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="bg-brand-navy text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      {property.rating}
                    </span>
                    {property.starRating &&
                    <div className="flex items-center gap-0.5">
                        {Array.from({
                        length: property.starRating
                      }).map((_, i) =>
                      <Star
                        key={i}
                        className="w-3 h-3 fill-brand-gold text-brand-gold" />

                      )}
                      </div>
                    }
                  </div>
                </div>
              </div>

              <Separator className="my-3" />

              {/* Stay details */}
              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-brand-gray" />
                  <span>Apr 15 – Apr 18, 2026 ({nights} nights)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4 text-brand-gray" />
                  <span>2 adults · 1 room</span>
                </div>
                {selectedRoom &&
                <div className="text-gray-600">
                    <span className="font-medium text-brand-black">
                      {selectedRoom.name}
                    </span>
                    <span className="text-xs text-brand-gray block">
                      {selectedRoom.bedConfig}
                    </span>
                  </div>
                }
              </div>

              <Separator className="my-3" />

              {/* Price breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    ${roomPrice} × {nights} nights
                  </span>
                  <span className="text-brand-black">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & fees</span>
                  <span className="text-brand-black">${taxes}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between">
                  <span className="font-bold text-brand-black text-base">
                    Total
                  </span>
                  <span className="font-bold text-brand-black text-xl">
                    ${total}
                  </span>
                </div>
              </div>

              {/* Cancellation note */}
              {property.freeCancellation &&
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-green-800">
                        Free cancellation
                      </p>
                      <p className="text-xs text-green-700">
                        Cancel up to 48h before for a full refund
                      </p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </main>);

}
function StepIndicator({
  step,
  label,
  isActive,
  isComplete





}: {step: number;label: string;isActive: boolean;isComplete: boolean;}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${isComplete ? 'bg-green-600 text-white' : isActive ? 'bg-brand-navy text-white' : 'bg-gray-200 text-brand-gray'}`}>
        
        {isComplete ? <CheckIcon className="w-4 h-4" /> : step}
      </div>
      <span
        className={`text-sm font-medium hidden sm:inline ${isActive ? 'text-brand-black' : 'text-brand-gray'}`}>
        
        {label}
      </span>
    </div>);

}
function PaymentMethodOption({
  icon,
  label,
  description,
  isSelected,
  onClick






}: {icon: React.ReactNode;label: string;description: string;isSelected: boolean;onClick: () => void;}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-colors text-left ${isSelected ? 'border-brand-navy bg-navy-50' : 'border-gray-200 hover:border-gray-300'}`}>
      
      <div
        className={`flex-shrink-0 ${isSelected ? 'text-brand-navy' : 'text-brand-gray'}`}>
        
        {icon}
      </div>
      <div className="flex-1">
        <p
          className={`text-sm font-semibold ${isSelected ? 'text-brand-navy' : 'text-brand-black'}`}>
          
          {label}
        </p>
        <p className="text-xs text-brand-gray">{description}</p>
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-brand-navy' : 'border-gray-300'}`}>
        
        {isSelected &&
        <div className="w-2.5 h-2.5 rounded-full bg-brand-navy" />
        }
      </div>
    </button>);

}

