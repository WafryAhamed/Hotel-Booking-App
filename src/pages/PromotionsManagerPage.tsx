import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash,
  Calendar,
  CheckCircle,
  Percent
} from 'lucide-react';

export function PromotionsManagerPage() {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('coupons');
  const [showCouponForm, setShowCouponForm] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: '',
    discount: '',
    expiry: '',
    maxUses: '',
  });

  // Mock coupon data
  const coupons = [
    {
      id: 1,
      code: 'SUMMER30',
      discount: 30,
      type: 'percentage',
      minBooking: 150,
      expiry: '2024-12-31',
      uses: 234,
      maxUses: 500,
      active: true,
    },
    {
      id: 2,
      code: 'LASTMIN25',
      discount: 25,
      type: 'percentage',
      minBooking: 200,
      expiry: '2024-12-31',
      uses: 156,
      maxUses: 300,
      active: true,
    },
    {
      id: 3,
      code: 'HOLIDAY40',
      discount: 40,
      type: 'percentage',
      minBooking: 250,
      expiry: '2025-01-15',
      uses: 45,
      maxUses: 200,
      active: false,
    },
  ];

  // Mock featured destinations
  const featuredDestinations = [
    {
      id: 1,
      name: 'Miami Beach',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop',
      position: 1,
      discount: 15,
    },
    {
      id: 2,
      name: 'New York City',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop',
      position: 2,
      discount: 20,
    },
    {
      id: 3,
      name: 'Los Angeles',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      position: 3,
      discount: 10,
    },
  ];

  // Mock featured listings
  const featuredListings = [
    { id: 'prop-1', name: 'Luxury Penthouse', revenue: 4500, featured: true },
    { id: 'prop-8', name: 'Beachfront Villa', revenue: 3200, featured: true },
    { id: 'prop-15', name: 'Modern Downtown', revenue: 2800, featured: false },
    { id: 'prop-22', name: 'Mountain Retreat', revenue: 2400, featured: false },
  ];

  // Mock hero banners
  const heroBanners = [
    {
      id: 1,
      title: 'Holiday Season Special',
      subtitle: 'Get 40% off select properties',
      image: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=500&h=300&fit=crop',
      active: true,
      startDate: '2024-12-01',
      endDate: '2025-12-25',
    },
    {
      id: 2,
      title: 'New Year Getaways',
      subtitle: 'Book now for January escapes',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
      active: false,
      startDate: '2024-12-15',
      endDate: '2025-01-31',
    },
  ];

  const handleAddCoupon = () => {
    if (!newCoupon.code.trim() || !newCoupon.discount || !newCoupon.expiry || !newCoupon.maxUses) {
      addToast('Please fill in all coupon fields', 'error');
      return;
    }
    if (parseInt(newCoupon.discount) > 100 || parseInt(newCoupon.discount) <= 0) {
      addToast('Discount must be between 1 and 100 percent', 'error');
      return;
    }
    // Mock add
    setShowCouponForm(false);
    setNewCoupon({ code: '', discount: '', expiry: '', maxUses: '' });
    addToast(`Coupon "${newCoupon.code}" created successfully!`, 'success');
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
          <h1 className="text-4xl font-bold mb-2">Promotions Manager</h1>
          <p className="text-blue-100">Create and manage promotional campaigns</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          {[
            { id: 'coupons', label: 'Coupon Codes' },
            { id: 'destinations', label: 'Featured Destinations' },
            { id: 'listings', label: 'Featured Listings' },
            { id: 'banners', label: 'Hero Banners' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-bold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-brand-navy text-brand-navy'
                  : 'border-transparent text-brand-gray hover:text-brand-black'
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Coupon Codes Tab */}
        {activeTab === 'coupons' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-brand-black">Coupon Codes</h2>
              <button
                onClick={() => setShowCouponForm(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-navy text-white font-bold hover:bg-brand-navy/90">
                <Plus className="w-5 h-5" />
                New Coupon
              </button>
            </div>

            <div className="grid gap-4">
              {coupons.map((coupon) => (
                <div key={coupon.id} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-brand-navy/10 flex items-center justify-center">
                        <Percent className="w-8 h-8 text-brand-navy" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-brand-black">{coupon.code}</p>
                        <p className="text-sm text-brand-gray">
                          {coupon.discount}% off • Min ${coupon.minBooking}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={
                          coupon.active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }>
                        {coupon.active ? 'Active' : 'Inactive'}
                      </Badge>
                      <button className="p-2 rounded-lg hover:bg-gray-100">
                        <Edit className="w-5 h-5 text-brand-gray" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-red-100">
                        <Trash className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-brand-gray font-medium mb-1">Uses</p>
                      <p className="font-bold text-brand-black">
                        {coupon.uses} / {coupon.maxUses}
                      </p>
                    </div>
                    <div>
                      <p className="text-brand-gray font-medium mb-1">Expiry</p>
                      <p className="font-bold text-brand-black">{coupon.expiry}</p>
                    </div>
                    <div>
                      <p className="text-brand-gray font-medium mb-1">Usage Rate</p>
                      <p className="font-bold text-brand-black">
                        {((coupon.uses / coupon.maxUses) * 100).toFixed(0)}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Destinations Tab */}
        {activeTab === 'destinations' && (
          <div>
            <h2 className="text-2xl font-bold text-brand-black mb-6">Featured Destinations</h2>
            <p className="text-brand-gray mb-6">
              Drag to reorder. These appear on the homepage carousel.
            </p>

            <div className="space-y-3">
              {featuredDestinations.map((dest, idx) => (
                <div
                  key={dest.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-4">
                  <GripVerticalIcon className="w-5 h-5 text-brand-gray cursor-grab" />
                  <span className="text-lg font-bold text-brand-gray w-8">{idx + 1}</span>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-brand-black">{dest.name}</p>
                    <p className="text-sm text-brand-gray">{dest.discount}% average discount</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                      <Edit className="w-5 h-5 text-brand-gray" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-100">
                      <Trash className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Listings Tab */}
        {activeTab === 'listings' && (
          <div>
            <h2 className="text-2xl font-bold text-brand-black mb-6">Featured Listings</h2>
            <p className="text-brand-gray mb-6">
              Featured listings appear prominently on search results and category pages.
            </p>

            <div className="space-y-3">
              {featuredListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={listing.featured}
                      className="w-5 h-5 accent-brand-navy cursor-pointer"
                    />
                    <div>
                      <p className="font-bold text-brand-black">{listing.name}</p>
                      <p className="text-sm text-brand-gray">
                        Monthly Revenue: ${listing.revenue.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  {listing.featured && (
                    <Badge className="bg-brand-gold text-white flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Featured
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hero Banners Tab */}
        {activeTab === 'banners' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-brand-black">Hero Banners</h2>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-navy text-white font-bold hover:bg-brand-navy/90">
                <Plus className="w-5 h-5" />
                New Banner
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {heroBanners.map((banner) => (
                <div key={banner.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-40 overflow-hidden bg-gray-200">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge
                      className={`absolute top-3 right-3 ${
                        banner.active
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-500 text-white'
                      }`}>
                      {banner.active ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brand-black mb-1">{banner.title}</h3>
                    <p className="text-sm text-brand-gray mb-3">{banner.subtitle}</p>
                    <div className="flex items-center gap-4 text-xs text-brand-gray mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {banner.startDate} to {banner.endDate}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 rounded-lg border-2 border-brand-navy text-brand-navy font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-1">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="flex-1 px-3 py-2 rounded-lg border-2 border-gray-200 text-brand-gray font-bold hover:border-gray-300 transition-colors flex items-center justify-center gap-1">
                        <Trash className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* New Coupon Form Modal */}
      {showCouponForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg border border-gray-200 max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-brand-black mb-6">Create New Coupon</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">Code</label>
                <Input
                  placeholder="e.g., SUMMER30"
                  value={newCoupon.code}
                  onChange={(e) =>
                    setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Discount (%)
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 30"
                  value={newCoupon.discount}
                  onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Expiry Date
                </label>
                <Input
                  type="date"
                  value={newCoupon.expiry}
                  onChange={(e) => setNewCoupon({ ...newCoupon, expiry: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2">
                  Max Uses
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 500"
                  value={newCoupon.maxUses}
                  onChange={(e) => setNewCoupon({ ...newCoupon, maxUses: e.target.value })}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCouponForm(false)}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 text-brand-black font-bold hover:border-gray-300">
                Cancel
              </button>
              <button
                onClick={handleAddCoupon}
                className="flex-1 px-4 py-2 rounded-lg bg-brand-navy text-white font-bold hover:bg-brand-navy/90">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


