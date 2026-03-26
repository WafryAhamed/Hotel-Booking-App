import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import { Avatar } from '../components/ui/Avatar';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Separator } from '../components/ui/Separator';
import { USER_PROFILE } from '../data/mockData';
import {
  ArrowLeft,
  User,
  Bell,
  Globe,
  Save,
  Users,
  Plus,
  Trash,
  Edit
} from 'lucide-react';

export function AccountProfilePage() {
  const { addToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showAddTraveler, setShowAddTraveler] = useState(false);

  const [formData, setFormData] = useState({
    firstName: USER_PROFILE.firstName,
    lastName: USER_PROFILE.lastName,
    email: USER_PROFILE.email,
    phone: USER_PROFILE.phone,
    country: USER_PROFILE.country,
    language: USER_PROFILE.language,
    currency: USER_PROFILE.currency
  });

  const [communicationPrefs, setCommunicationPrefs] = useState(
    USER_PROFILE.communicationPreferences
  );

  const [newTraveler, setNewTraveler] = useState({
    name: '',
    relationship: '',
    dateOfBirth: '',
    nationality: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommunicationChange = (
    key: keyof typeof communicationPrefs,
    value: boolean
  ) => {
    setCommunicationPrefs((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveProfile = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      addToast('Please fill in all required fields', 'error');
      return;
    }
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      addToast('Profile updated successfully!', 'success');
    }, 500);
  };

  const handleAddTraveler = () => {
    if (!newTraveler.name.trim() || !newTraveler.relationship.trim()) {
      addToast('Please fill in traveler name and relationship', 'error');
      return;
    }
    setNewTraveler({
      name: '',
      relationship: '',
      dateOfBirth: '',
      nationality: ''
    });
    setShowAddTraveler(false);
    addToast('Traveler added successfully!', 'success');
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
            <h1 className="text-3xl font-bold text-brand-black">
              Account Settings
            </h1>
            <p className="text-brand-gray text-sm mt-1">
              Manage your profile information and preferences
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-navy to-blue-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <User className="w-5 h-5 text-white" />
                <h2 className="text-lg font-bold text-white">
                  Personal Information
                </h2>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm px-3 py-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center gap-2">
                <Edit className="w-4 h-4" />
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Profile Picture */}
              <div className="flex items-center gap-4">
                <Avatar
                  name={`${USER_PROFILE.firstName} ${USER_PROFILE.lastName}`}
                  alt="Profile"
                  size="lg"
                />
                <div>
                  <p className="text-sm font-medium text-brand-black">
                    Profile Photo
                  </p>
                  <p className="text-xs text-brand-gray mt-1">
                    JPG, PNG or GIF - Max 5MB
                  </p>
                  {isEditing && (
                    <button className="text-sm text-brand-blue hover:text-brand-navy font-medium mt-2">
                      Change Photo
                    </button>
                  )}
                </div>
              </div>

              <Separator />

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="John"
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  placeholder="Doe"
                />
              </div>

              {/* Email */}
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Email address for receiving confirmations"
              />

              {/* Phone */}
              <Input
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="+1 (555) 123-4567"
              />

              {/* Country */}
              <Select
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                disabled={!isEditing}
                options={[
                  { value: 'United States', label: 'United States' },
                  { value: 'United Kingdom', label: 'United Kingdom' },
                  { value: 'Canada', label: 'Canada' },
                  { value: 'Australia', label: 'Australia' },
                  { value: 'France', label: 'France' },
                  { value: 'Germany', label: 'Germany' },
                  { value: 'Japan', label: 'Japan' },
                  { value: 'Spain', label: 'Spain' }
                ]}
              />

              {isEditing && (
                <>
                  <Separator />
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="primary"
                      onClick={handleSaveProfile}
                      disabled={isSaving}
                      className="!bg-brand-navy hover:!bg-blue-900"
                      leftIcon={<Save className="w-4 h-4" />}>
                      {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-navy to-blue-900 px-6 py-4 flex items-center gap-4">
              <Globe className="w-5 h-5 text-white" />
              <h2 className="text-lg font-bold text-white">
                Language & Currency
              </h2>
            </div>

            <div className="p-6 space-y-5">
              <Select
                label="Preferred Language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                options={[
                  { value: 'English', label: 'English' },
                  { value: 'Spanish', label: 'Español' },
                  { value: 'French', label: 'Français' },
                  { value: 'German', label: 'Deutsch' },
                  { value: 'Japanese', label: '日本語' }
                ]}
              />

              <Select
                label="Preferred Currency"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                options={[
                  { value: 'USD', label: 'US Dollars (USD)' },
                  { value: 'EUR', label: 'Euros (EUR)' },
                  { value: 'GBP', label: 'British Pounds (GBP)' },
                  { value: 'JPY', label: 'Japanese Yen (JPY)' },
                  { value: 'AUD', label: 'Australian Dollars (AUD)' }
                ]}
              />
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-navy to-blue-900 px-6 py-4 flex items-center gap-4">
              <Bell className="w-5 h-5 text-white" />
              <h2 className="text-lg font-bold text-white">
                Communication Preferences
              </h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="marketing"
                  checked={communicationPrefs.marketing}
                  onCheckedChange={(checked) =>
                    handleCommunicationChange('marketing', !!checked)
                  }
                />
                <div>
                  <label
                    htmlFor="marketing"
                    className="font-medium text-brand-black cursor-pointer">
                    Marketing Emails
                  </label>
                  <p className="text-sm text-brand-gray mt-1">
                    Receive emails about special offers and promotions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="bookingNotifications"
                  checked={communicationPrefs.bookingNotifications}
                  onCheckedChange={(checked) =>
                    handleCommunicationChange(
                      'bookingNotifications',
                      !!checked
                    )
                  }
                />
                <div>
                  <label
                    htmlFor="bookingNotifications"
                    className="font-medium text-brand-black cursor-pointer">
                    Booking Notifications
                  </label>
                  <p className="text-sm text-brand-gray mt-1">
                    Get updates about your bookings and reservations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="reviews"
                  checked={communicationPrefs.reviews}
                  onCheckedChange={(checked) =>
                    handleCommunicationChange('reviews', !!checked)
                  }
                />
                <div>
                  <label
                    htmlFor="reviews"
                    className="font-medium text-brand-black cursor-pointer">
                    Review Requests
                  </label>
                  <p className="text-sm text-brand-gray mt-1">
                    Be asked to review places you\'ve stayed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="newsletter"
                  checked={communicationPrefs.newsletter}
                  onCheckedChange={(checked) =>
                    handleCommunicationChange('newsletter', !!checked)
                  }
                />
                <div>
                  <label
                    htmlFor="newsletter"
                    className="font-medium text-brand-black cursor-pointer">
                    Weekly Newsletter
                  </label>
                  <p className="text-sm text-brand-gray mt-1">
                    Get curated travel inspiration and deals each week
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Traveler Information */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-navy to-blue-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Users className="w-5 h-5 text-white" />
                <h2 className="text-lg font-bold text-white">
                  Traveler Information
                </h2>
              </div>
              {!showAddTraveler && (
                <button
                  onClick={() => setShowAddTraveler(true)}
                  className="text-sm px-3 py-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Traveler
                </button>
              )}
            </div>

            <div className="p-6 space-y-4">
              {/* Existing Travelers */}
              {USER_PROFILE.travelers.map((traveler) => (
                <div
                  key={traveler.id}
                  className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-brand-black">
                        {traveler.name}
                      </p>
                      <p className="text-sm text-brand-gray">
                        {traveler.relationship}
                      </p>
                    </div>
                    {traveler.id !== 'trav-1' && (
                      <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash className="w-4 h-4 text-red-600" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-brand-gray">Date of Birth</p>
                      <p className="text-brand-black font-medium">
                        {new Date(traveler.dateOfBirth).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-brand-gray">Nationality</p>
                      <p className="text-brand-black font-medium">
                        {traveler.nationality}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Traveler Form */}
              {showAddTraveler && (
                <div className="p-4 border-2 border-dashed border-brand-gold rounded-lg bg-amber-50">
                  <h3 className="font-medium text-brand-black mb-4">
                    Add New Traveler
                  </h3>
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      placeholder="Full name (as shown on ID)"
                      value={newTraveler.name}
                      onChange={(e) =>
                        setNewTraveler((prev) => ({
                          ...prev,
                          name: e.target.value
                        }))
                      }
                    />
                    <Select
                      label="Relationship"
                      value={newTraveler.relationship}
                      onChange={(e) =>
                        setNewTraveler((prev) => ({
                          ...prev,
                          relationship: e.target.value
                        }))
                      }
                      options={[
                        { value: '', label: 'Select relationship' },
                        { value: 'Spouse', label: 'Spouse' },
                        { value: 'Child', label: 'Child' },
                        { value: 'Parent', label: 'Parent' },
                        { value: 'Friend', label: 'Friend' },
                        { value: 'Other', label: 'Other' }
                      ]}
                    />
                    <Input
                      label="Date of Birth"
                      type="date"
                      value={newTraveler.dateOfBirth}
                      onChange={(e) =>
                        setNewTraveler((prev) => ({
                          ...prev,
                          dateOfBirth: e.target.value
                        }))
                      }
                    />
                    <Select
                      label="Nationality"
                      value={newTraveler.nationality}
                      onChange={(e) =>
                        setNewTraveler((prev) => ({
                          ...prev,
                          nationality: e.target.value
                        }))
                      }
                      options={[
                        { value: '', label: 'Select nationality' },
                        { value: 'United States', label: 'United States' },
                        { value: 'United Kingdom', label: 'United Kingdom' },
                        { value: 'Canada', label: 'Canada' },
                        { value: 'Australia', label: 'Australia' }
                      ]}
                    />
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="primary"
                        onClick={handleAddTraveler}
                        className="!bg-brand-navy hover:!bg-blue-900">
                        Add Traveler
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setShowAddTraveler(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

