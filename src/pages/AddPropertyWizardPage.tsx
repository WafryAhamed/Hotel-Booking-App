import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Home,
  MapPin,
  Image,
  DollarSign,
  FileText
} from 'lucide-react';

export function AddPropertyWizardPage() {
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  // Form data
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    propertyName: '',
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    
    // Step 2: Location
    address: '',
    city: '',
    country: 'United States',
    zipCode: '',
    
    // Step 3: Property Type
    propertyType: '',
    
    // Step 4: Amenities
    amenities: [],
    
    // Step 5: Photos
    photos: [],
    
    // Step 6: Rooms & Pricing
    pricePerNight: '',
    minStay: 1,
    maxGuests: 2,
    
    // Step 7: Policies
    cancellationPolicy: 'moderate',
    houseRules: '',
    checkInTime: '15:00',
    checkOutTime: '11:00',
  });

  const allAmenities = [
    'WiFi',
    'Kitchen',
    'Parking',
    'Air Conditioning',
    'Heating',
    'Washer',
    'Dryer',
    'TV',
    'Gym',
    'Pool',
    'Hot Tub',
    'Garden',
  ];

  const propertyTypes = [
    'Apartment',
    'House',
    'Villa',
    'Studio',
    'Room',
    'Townhouse',
    'Cabin',
    'Cottage',
  ];

  // Validation
  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.propertyName) newErrors.propertyName = 'Property name is required';
      if (!formData.bedrooms) newErrors.bedrooms = 'Number of bedrooms is required';
      if (!formData.bathrooms) newErrors.bathrooms = 'Number of bathrooms is required';
    }

    if (step === 2) {
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
    }

    if (step === 3) {
      if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    }

    if (step === 4) {
      if (formData.amenities.length === 0) newErrors.amenities = 'Select at least one amenity';
    }

    if (step === 6) {
      if (!formData.pricePerNight) newErrors.pricePerNight = 'Price per night is required';
      if (isNaN(formData.pricePerNight) || Number(formData.pricePerNight) <= 0) {
        newErrors.pricePerNight = 'Price must be a positive number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: null,
      }));
    }
  };

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      addToast({
        type: 'success',
        message: `Step ${currentStep} completed. Moving to next step...`,
      });
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      addToast({
        type: 'error',
        message: 'Please fill in all required fields',
      });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      addToast({
        type: 'success',
        message: 'Property submitted for review!',
      });
      // Mock submission
      console.log('Property submitted:', formData);
      setTimeout(() => {
        setCurrentStep(8);
        addToast({
          type: 'success',
          message: 'Your property has been listed successfully!',
        });
      }, 500);
    } else {
      addToast({
        type: 'error',
        message: 'Please fill in all required information',
      });
    }
  };

  const steps = [
    { number: 1, title: 'Basic Info', icon: Home },
    { number: 2, title: 'Location', icon: MapPin },
    { number: 3, title: 'Property Type', icon: Home },
    { number: 4, title: 'Amenities', icon: CheckCircle },
    { number: 5, title: 'Photos', icon: Image },
    { number: 6, title: 'Pricing', icon: DollarSign },
    { number: 7, title: 'Policies', icon: FileText },
    { number: 8, title: 'Success', icon: CheckCircle },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/host">
            <button className="flex items-center gap-2 text-blue-100 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">List Your Property</h1>
          <p className="text-blue-100">Complete this wizard to add your property to Ceylon Paradise</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex gap-2 mb-4">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => step.number < currentStep && setCurrentStep(step.number)}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  step.number <= currentStep ? 'bg-brand-navy' : 'bg-gray-300'
                }`} />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-brand-gray">
              Step {currentStep} of {steps.length - 1}
            </p>
            <p className="text-sm font-bold text-brand-black">{steps[currentStep - 1].title}</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Basic Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    Property Name *
                  </label>
                  <Input
                    placeholder="e.g., Cozy Downtown Apartment"
                    value={formData.propertyName}
                    onChange={(e) => handleInputChange('propertyName', e.target.value)}
                    error={errors.propertyName}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      Bedrooms *
                    </label>
                    <select
                      value={formData.bedrooms}
                      onChange={(e) => handleInputChange('bedrooms', parseInt(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      Bathrooms *
                    </label>
                    <select
                      value={formData.bathrooms}
                      onChange={(e) => handleInputChange('bathrooms', parseInt(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      Max Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Location</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    Street Address *
                  </label>
                  <Input
                    placeholder="e.g., 123 Main Street"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    error={errors.address}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      City *
                    </label>
                    <Input
                      placeholder="e.g., New York"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      error={errors.city}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      Zip Code *
                    </label>
                    <Input
                      placeholder="e.g., 10001"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      error={errors.zipCode}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    Country *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Property Type */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Property Type</h2>
              <p className="text-brand-gray text-sm mb-6">
                What type of property are you listing?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleInputChange('propertyType', type)}
                    className={`p-4 rounded-lg border-2 transition-all font-bold text-center ${
                      formData.propertyType === type
                        ? 'border-brand-navy bg-blue-50 text-brand-navy'
                        : 'border-gray-200 text-brand-black hover:border-gray-300'
                    }`}>
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Amenities */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Amenities</h2>
              <p className="text-brand-gray text-sm mb-6">
                Select all amenities available at your property
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allAmenities.map((amenity) => (
                  <label key={amenity} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-navy cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                      className="w-5 h-5 rounded border-gray-300 accent-brand-navy cursor-pointer"
                    />
                    <span className="text-sm font-medium text-brand-black">{amenity}</span>
                  </label>
                ))}
              </div>
              {errors.amenities && (
                <p className="text-red-600 text-sm mt-4">{errors.amenities}</p>
              )}
            </div>
          )}

          {/* Step 5: Photos */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Photos</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-brand-navy transition-colors">
                <div className="flex flex-col items-center gap-3 mb-4">
                  <Image className="w-12 h-12 text-gray-400" />
                  <h3 className="font-bold text-brand-black">Upload Property Photos</h3>
                </div>
                <p className="text-sm text-brand-gray mb-6">
                  Drag and drop images here or click to browse (min 5 photos)
                </p>
                <Button className="bg-brand-navy text-white">Choose Files</Button>
              </div>
              <p className="text-xs text-brand-gray mt-4">
                High-quality photos get 70% more bookings. Use natural lighting and show all rooms.
              </p>
            </div>
          )}

          {/* Step 6: Pricing */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Pricing & Availability</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    Price Per Night (USD) *
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 150"
                    value={formData.pricePerNight}
                    onChange={(e) => handleInputChange('pricePerNight', e.target.value)}
                    error={errors.pricePerNight}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      Minimum Stay (nights)
                    </label>
                    <select
                      value={formData.minStay}
                      onChange={(e) => handleInputChange('minStay', parseInt(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
                      {[1, 2, 3, 4, 5, 7, 14, 30].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'night' : 'nights'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      Maximum Guests
                    </label>
                    <select
                      value={formData.maxGuests}
                      onChange={(e) => handleInputChange('maxGuests', parseInt(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Policies */}
          {currentStep === 7 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Policies & House Rules</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    Cancellation Policy
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'flexible', label: 'Flexible - Free cancellation up to 1 day before' },
                      { value: 'moderate', label: 'Moderate - 50% refund up to 3 days before' },
                      { value: 'strict', label: 'Strict - No refunds within 7 days' },
                    ].map((policy) => (
                      <label key={policy.value} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-navy cursor-pointer">
                        <input
                          type="radio"
                          name="cancellation"
                          value={policy.value}
                          checked={formData.cancellationPolicy === policy.value}
                          onChange={(e) => handleInputChange('cancellationPolicy', e.target.value)}
                          className="w-4 h-4 accent-brand-navy cursor-pointer"
                        />
                        <span className="text-sm font-medium text-brand-black">{policy.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      Check-in Time
                    </label>
                    <select
                      value={formData.checkInTime}
                      onChange={(e) => handleInputChange('checkInTime', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
                      {['14:00', '15:00', '16:00', '17:00', '18:00'].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-black mb-2">
                      Check-out Time
                    </label>
                    <select
                      value={formData.checkOutTime}
                      onChange={(e) => handleInputChange('checkOutTime', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
                      {['09:00', '10:00', '11:00', '12:00'].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2">
                    House Rules
                  </label>
                  <textarea
                    placeholder="e.g., No smoking, Quiet hours after 10 PM, No parties..."
                    value={formData.houseRules}
                    onChange={(e) => handleInputChange('houseRules', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 resize-none"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 8: Success */}
          {currentStep === 8 && (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-black mb-2">
                Property Listed Successfully!
              </h2>
              <p className="text-brand-gray text-lg mb-8">
                Your property has been submitted for review. You'll receive an email
                confirmation within 24 hours.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-bold text-brand-black mb-3">What happens next?</h3>
                <ul className="space-y-2 text-sm text-brand-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-navy font-bold mt-1">1.</span>
                    <span>Our team reviews your property (24 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-navy font-bold mt-1">2.</span>
                    <span>You'll receive approval email with next steps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-navy font-bold mt-1">3.</span>
                    <span>Start receiving bookings from guests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-navy font-bold mt-1">4.</span>
                    <span>Get paid weekly to your bank account</span>
                  </li>
                </ul>
              </div>
              <Link to="/host/dashboard">
                <Button className="bg-brand-navy text-white hover:bg-brand-navy/90">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {currentStep < 8 && (
          <div className="flex gap-4">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg border-2 font-bold transition-colors ${
                currentStep === 1
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-brand-navy text-brand-navy hover:bg-blue-50'
              }`}>
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Previous
              </div>
            </button>

            <button className="flex-1" />

            {currentStep === 7 ? (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors flex items-center gap-2 justify-center">
                <CheckCircle className="w-5 h-5" />
                Submit for Review
              </button>
            ) : (
              <button
                onClick={handleNextStep}
                className="px-8 py-3 rounded-lg bg-brand-navy text-white font-bold hover:bg-brand-navy/90 transition-colors flex items-center gap-2">
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}


