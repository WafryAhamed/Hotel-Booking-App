import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  User,
  MapPin,
  AlertCircle
} from 'lucide-react';

export function PropertyApprovalPage() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  useParams();
  const [isApproving, setIsApproving] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [notes, setNotes] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);

  // Mock property data
  const property = {
    id: 1,
    name: 'Rustic Mountain Cabin',
    address: '456 Mountain Road',
    city: 'Asheville, NC',
    zipCode: '28801',
    country: 'United States',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    propertyType: 'Cabin',
    pricePerNight: 180,
    description: 'Beautiful mountain cabin with scenic views, perfect for a peaceful getaway.',
    amenities: ['WiFi', 'Kitchen', 'Hot Tub', 'Fireplace', 'Parking', 'Heating'],
    images: [
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1522672726800-ce3665a3a4f5?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1502672260069-d8a47f3a7ccf?w=500&h=400&fit=crop',
    ],
    host: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (828) 555-0123',
      joinDate: '2024-01-15',
      verificationStatus: 'verified',
      totalProperties: 0,
    },
    documents: [
      { name: 'Property ID Verification', status: 'approved' },
      { name: 'Tax Identification', status: 'approved' },
      { name: 'Insurance Certificate', status: 'pending' },
    ],
    submittedAt: '2024-12-10',
    status: 'pending',
  };

  const handleApprove = async () => {
    setIsApproving(true);
    // Simulate API call
    setTimeout(() => {
      setIsApproving(false);
      addToast('Property approved successfully! Host notified.', 'success');
      navigate('/admin/approvals?approved=true');
    }, 1500);
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      addToast('Please provide a rejection reason', 'error');
      return;
    }
    setIsRejecting(true);
    // Simulate API call
    setTimeout(() => {
      setIsRejecting(false);
      setShowRejectModal(false);
      addToast('Property rejected. Host will receive notification with feedback.', 'success');
      navigate('/admin/approvals?rejected=true');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/admin/approvals">
            <button className="flex items-center gap-2 text-blue-100 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Approvals
            </button>
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">{property.name}</h1>
              <p className="text-blue-100 mt-2">{property.address}</p>
            </div>
            <Badge className="bg-orange-400 text-white">Pending Review</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Photos */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-brand-black mb-4">Property Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {property.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Property ${idx + 1}`}
                    className="w-full h-40 object-cover rounded-lg border border-gray-200"
                  />
                ))}
              </div>
              <p className="text-sm text-brand-gray">
                {property.images.length} photos submitted
              </p>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-brand-black mb-6">Property Details</h2>
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <p className="text-sm font-bold text-brand-gray uppercase mb-2">Description</p>
                  <p className="text-brand-black">{property.description}</p>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase mb-1">Type</p>
                    <p className="font-bold text-brand-black">{property.propertyType}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase mb-1">
                      Max Guests
                    </p>
                    <p className="font-bold text-brand-black">{property.maxGuests}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase mb-1">Bedrooms</p>
                    <p className="font-bold text-brand-black">{property.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase mb-1">Bathrooms</p>
                    <p className="font-bold text-brand-black">{property.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase mb-1">
                      Price/Night
                    </p>
                    <p className="font-bold text-brand-black">${property.pricePerNight}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase mb-1">
                      Submitted
                    </p>
                    <p className="font-bold text-brand-black">{property.submittedAt}</p>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <p className="text-sm font-bold text-brand-gray uppercase mb-3">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity) => (
                      <Badge
                        key={amenity}
                        className="bg-blue-100 text-blue-800">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-brand-black mb-6">Submitted Documents</h2>
              <div className="space-y-3">
                {property.documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-brand-navy" />
                      <p className="font-bold text-brand-black">{doc.name}</p>
                    </div>
                    <Badge
                      className={
                        doc.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Notes */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-brand-black mb-4">Admin Notes</h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any notes about this property (visible only to admins)..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 resize-none"
                rows={4}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Host Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Host Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase mb-1">Name</p>
                  <p className="font-bold text-brand-black">{property.host.name}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase mb-1">Email</p>
                  <p className="text-sm text-brand-navy">{property.host.email}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase mb-1">Phone</p>
                  <p className="font-bold text-brand-black">{property.host.phone}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-bold text-brand-gray uppercase mb-1">
                    Member Since
                  </p>
                  <p className="font-bold text-brand-black">{property.host.joinDate}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-gray uppercase mb-1">
                    Verification
                  </p>
                  <Badge className="bg-green-100 text-green-800 inline-block">
                    {property.host.verificationStatus.charAt(0).toUpperCase() +
                      property.host.verificationStatus.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-brand-black">{property.address}</p>
                <p className="text-brand-black">
                  {property.city}, {property.zipCode}
                </p>
                <p className="text-brand-gray">{property.country}</p>
              </div>
            </div>

            {/* Approval Review Checklist */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-brand-black mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                Review Checklist
              </h4>
              <div className="space-y-2">
                {[
                  'Photos are clear and professional',
                  'Amenities match property type',
                  'Pricing is reasonable',
                  'Documents verified',
                  'Host identity confirmed',
                ].map((check, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 text-sm text-brand-gray cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-brand-navy" />
                    {check}
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-3">
              <Button
                onClick={handleApprove}
                disabled={isApproving}
                className="w-full bg-green-600 text-white hover:bg-green-700 flex items-center justify-center gap-2">
                {isApproving ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Approving...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Approve Property
                  </>
                )}
              </Button>
              <button
                onClick={() => setShowRejectModal(true)}
                disabled={isRejecting}
                className="w-full px-4 py-3 rounded-lg border-2 border-red-600 text-red-600 font-bold hover:bg-red-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
                <XCircleIcon className="w-5 h-5" />
                {isRejecting ? 'Rejecting...' : 'Reject Property'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rejection Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border border-gray-200 max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-brand-black mb-4">Reject Property?</h3>
            <p className="text-brand-gray mb-6">
              Please provide a reason for rejection. The host will receive an email with your
              feedback.
            </p>
            <div className="mb-6">
              <label className="block text-sm font-bold text-brand-black mb-2">
                Reason for Rejection
              </label>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="e.g., Photos are not clear enough, Amenities list is incomplete..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 resize-none"
                rows={4}
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowRejectModal(false)}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 text-brand-black font-bold hover:border-gray-300">
                Cancel
              </button>
              <button
                onClick={handleReject}
                disabled={!rejectionReason.trim() || isRejecting}
                className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 disabled:opacity-50">
                {isRejecting ? 'Rejecting...' : 'Reject'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


