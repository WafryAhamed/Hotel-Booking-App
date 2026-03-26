import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import { Badge } from '../components/ui/Badge';
import {
  ArrowLeft,
  Star,
  AlertCircle,
  Trash,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

export function ReviewModerationPage() {
  const { addToast } = useToast();
  const [selectedReview, setSelectedReview] = useState(null);
  const [filterReason, setFilterReason] = useState('all');
  const [moderationNotes, setModerationNotes] = useState('');

  // Mock flagged reviews
  const flaggedReviews = [
    {
      id: 1,
      reviewer: 'John Smith',
      reviewerImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
      property: 'Modern Downtown Apartment',
      propertyId: 'prop-1',
      rating: 2,
      content: 'Dirty rooms and terrible service. Did not match listing photos. Worst experience ever.',
      date: '2024-12-10',
      reason: 'Potentially spam',
      flaggedBy: 'Property Host',
      status: 'pending',
      flagCount: 3,
    },
    {
      id: 2,
      reviewer: 'Priya Nair',
      reviewerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      property: 'Beachfront Villa',
      propertyId: 'prop-4',
      rating: 1,
      content:
        "Host was rude and unprofessional. Used offensive language when I asked about the heating. Property was freezing. Would not recommend to anyone.",
      date: '2024-12-09',
      reason: 'Offensive language',
      flaggedBy: 'Host',
      status: 'pending',
      flagCount: 2,
    },
    {
      id: 3,
      reviewer: 'Mike Johnson',
      reviewerImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
      property: 'Luxury Penthouse',
      propertyId: 'prop-8',
      rating: 3,
      content: 'Average property. Overcrowded area. Too noisy at night. Not worth the price.',
      date: '2024-12-08',
      reason: 'Potential fake review',
      flaggedBy: 'System AI',
      status: 'reviewing',
      flagCount: 1,
    },
    {
      id: 4,
      reviewer: 'Sarah Williams',
      reviewerImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
      property: 'Mountain Cabin',
      propertyId: 'prop-12',
      rating: 1,
      content: 'Bed was full of bugs. Plumbing did not work. This place is disgusting.',
      date: '2024-12-07',
      reason: 'Health and safety concern',
      flaggedBy: 'System AI',
      status: 'pending',
      flagCount: 4,
    },
    {
      id: 5,
      reviewer: 'David Brown',
      reviewerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop',
      property: 'Urban Loft',
      propertyId: 'prop-15',
      rating: 5,
      content:
        'Best place ever! Amazing place. Must book. Great value. Highly recommend. 5 stars for sure!!!',
      date: '2024-12-06',
      reason: 'Overly promotional content',
      flaggedBy: 'System AI',
      status: 'approved',
      flagCount: 1,
    },
  ];

  const reasons = [
    { value: 'all', label: 'All Reasons' },
    { value: 'spam', label: 'Potentially Spam' },
    { value: 'offensive', label: 'Offensive Language' },
    { value: 'fake', label: 'Potential Fake Review' },
    { value: 'health', label: 'Health & Safety' },
    { value: 'promotional', label: 'Overly Promotional' },
  ];

  const filteredReviews = flaggedReviews.filter(
    (review) => filterReason === 'all' || review.reason.toLowerCase().includes(filterReason)
  );

  const getReasonColor = (reason) => {
    switch (reason) {
      case 'Potentially spam':
        return 'bg-red-100 text-red-800';
      case 'Offensive language':
        return 'bg-red-100 text-red-800';
      case 'Potential fake review':
        return 'bg-orange-100 text-orange-800';
      case 'Health and safety concern':
        return 'bg-red-100 text-red-800';
      case 'Overly promotional content':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'reviewing':
        return 'bg-blue-100 text-blue-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'hidden':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprove = (reviewId) => {
    // Mock action
    console.log('Approved review:', reviewId);
    addToast('Review approved and published', 'success');
    setSelectedReview(null);
  };

  const handleHide = (reviewId) => {
    // Mock action
    console.log('Hidden review:', reviewId);
    addToast('Review hidden from public display', 'success');
    setSelectedReview(null);
  };

  const handleRemove = (reviewId) => {
    // Mock action
    console.log('Removed review:', reviewId);
    addToast('Review removed and flagged', 'success');
    setSelectedReview(null);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/admin">
            <button className="flex items-center gap-2 text-blue-100 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Review Moderation</h1>
          <p className="text-blue-100">Review and moderate guest reviews</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1">
            <label className="block text-sm font-bold text-brand-black mb-2">
              Filter by Reason
            </label>
            <select
              value={filterReason}
              onChange={(e) => setFilterReason(e.target.value)}
              className="w-full md:w-64 px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20">
              {reasons.map((reason) => (
                <option key={reason.value} value={reason.value}>
                  {reason.label}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-brand-gray">
            Showing {filteredReviews.length} of {flaggedReviews.length} flagged reviews
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <button
              key={review.id}
              onClick={() => setSelectedReview(review)}
              className="w-full bg-white rounded-lg border border-gray-200 p-6 hover:border-brand-navy hover:shadow-lg transition-all text-left">
              <div className="flex items-start gap-4">
                <img
                  src={review.reviewerImage}
                  alt={review.reviewer}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-brand-black">{review.reviewer}</p>
                      <p className="text-sm text-brand-gray">{review.property}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-brand-gold text-brand-gold"
                          />
                        ))}
                        {[...Array(5 - review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-gray-300"
                          />
                        ))}
                      </div>
                      <ChevronRight className="w-5 h-5 text-brand-gray" />
                    </div>
                  </div>

                  <p className="text-sm text-brand-gray line-clamp-2 mb-3">"{review.content}"</p>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className={getReasonColor(review.reason)}>
                      {review.reason}
                    </Badge>
                    <Badge className={getStatusColor(review.status)}>
                      {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                    </Badge>
                    {review.flagCount > 1 && (
                      <Badge className="bg-red-100 text-red-800">
                        Flagged {review.flagCount}x
                      </Badge>
                    )}
                    <span className="text-xs text-brand-gray ml-auto">{review.date}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-brand-black mb-2">All Clear!</h3>
            <p className="text-brand-gray">No flagged reviews matching this filter.</p>
          </div>
        )}
      </div>

      {/* Review Detail Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg border border-gray-200 max-w-2xl w-full my-8">
            {/* Modal Header */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <img
                    src={selectedReview.reviewerImage}
                    alt={selectedReview.reviewer}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-brand-black">{selectedReview.reviewer}</p>
                    <p className="text-sm text-brand-gray">{selectedReview.property}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-brand-gray hover:text-brand-black">
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Rating & Flags */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(selectedReview.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-brand-gold text-brand-gold"
                    />
                  ))}
                  {[...Array(5 - selectedReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>
                <div className="text-sm text-brand-gray">{selectedReview.date}</div>
              </div>

              {/* Flags */}
              <div className="space-y-2">
                <p className="text-sm font-bold text-brand-black">Flags</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className={getReasonColor(selectedReview.reason)}>
                    <AlertCircle className="w-3 h-3 mr-1 inline" />
                    {selectedReview.reason}
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-800">
                    Flagged by: {selectedReview.flaggedBy}
                  </Badge>
                  {selectedReview.flagCount > 1 && (
                    <Badge className="bg-red-100 text-red-800">
                      Flagged {selectedReview.flagCount} times
                    </Badge>
                  )}
                </div>
              </div>

              {/* Review Content */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-bold text-brand-gray mb-2">Review Text</p>
                <p className="text-brand-black leading-relaxed">"{selectedReview.content}"</p>
              </div>

              {/* Moderation Notes */}
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Moderation Notes
                </label>
                <textarea
                  value={moderationNotes}
                  onChange={(e) => setModerationNotes(e.target.value)}
                  placeholder="Add notes about your decision..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 resize-none"
                  rows={3}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 flex gap-3">
              <button
                onClick={() => setSelectedReview(null)}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 text-brand-black font-bold hover:border-gray-300">
                Close
              </button>
              <button
                onClick={() => handleHide(selectedReview.id)}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-orange-600 text-orange-600 font-bold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
                <EyeOff className="w-4 h-4" />
                Hide Review
              </button>
              <button
                onClick={() => handleRemove(selectedReview.id)}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-red-600 text-red-600 font-bold hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                <Trash className="w-4 h-4" />
                Remove
              </button>
              <button
                onClick={() => handleApprove(selectedReview.id)}
                className="flex-1 px-4 py-2 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


