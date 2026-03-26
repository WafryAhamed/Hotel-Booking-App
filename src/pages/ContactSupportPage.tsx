import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { Separator } from '../components/ui/Separator';
import {
  ArrowLeft,
  Send,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Headphones,
  MessageCircle,
  FileText
} from 'lucide-react';

type SupportStep = 'form' | 'submitted';

export function ContactSupportPage() {
  const { addToast } = useToast();
  const [step, setStep] = useState<SupportStep>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    bookingId: '',
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.description.trim())
      newErrors.description = 'Description is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      addToast('Please fix all errors before submitting', 'error');
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('submitted');
      addToast('Support ticket submitted! We will respond within 24 hours.', 'success');
    }, 1500);
  };

  if (step === 'submitted') {
    return (
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <button className="flex items-center gap-2 text-brand-blue hover:text-brand-navy mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </Link>

          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-brand-black mb-2">
              We've Received Your Message
            </h1>

            <p className="text-brand-gray text-lg mb-8">
              Thank you for contacting Ceylon Paradise support. Our team will review
              your message and get back to you as soon as possible.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 text-left">
              <p className="text-sm text-blue-900 font-medium mb-4">
                Ticket Details
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Support Ticket #</span>
                  <span className="font-mono font-bold text-brand-navy">
                    SH-20260325-001847
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Category</span>
                  <span className="font-medium text-brand-black">
                    {formData.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Email</span>
                  <span className="text-brand-black">{formData.email}</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-sm text-brand-gray">
                  Response time: 2-4 hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-sm text-brand-gray">
                  Check your email for updates
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Headphones className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-sm text-brand-gray">
                  24/7 support team standing by
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button
                variant="primary"
                className="flex-1 !bg-brand-navy hover:!bg-blue-900"
                onClick={() => (window.location.href = '/')}>
                Back to Home
              </Button>
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => (window.location.href = '/help')}>
                View Help Center
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Link to="/">
          <button className="flex items-center gap-2 text-brand-blue hover:text-brand-navy mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-black mb-2">
            Contact Support
          </h1>
          <p className="text-brand-gray text-lg">
            We're here to help. Fill out the form below and our support team
            will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
                {/* Name */}
                <Input
                  label="Full Name"
                  name="name"
                  placeholder="Full name (as shown on ID)"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                />

                {/* Email */}
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Email address for contact"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />

                {/* Phone */}
                <Input
                  label="Phone Number"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />

                {/* Category */}
                <Select
                  label="Support Category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  error={errors.category}
                  options={[
                    { value: '', label: 'Select a category' },
                    { value: 'Booking Issue', label: 'Booking Issue' },
                    { value: 'Cancellation', label: 'Cancellation' },
                    { value: 'Payment', label: 'Payment' },
                    { value: 'Technical Issue', label: 'Technical Issue' },
                    { value: 'Account Help', label: 'Account Help' },
                    { value: 'Property Issue', label: 'Property Issue' },
                    { value: 'Other', label: 'Other' }
                  ]}
                />

                {/* Booking ID (optional) */}
                <Input
                  label="Booking Reference (if applicable)"
                  name="bookingId"
                  placeholder="BK-2026-001847"
                  value={formData.bookingId}
                  onChange={handleInputChange}
                  optional
                />

                {/* Subject */}
                <Input
                  label="Subject"
                  name="subject"
                  placeholder="Brief description of your issue"
                  value={formData.subject}
                  onChange={handleInputChange}
                  optional
                />

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Please provide as much detail as possible about your issue..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-navy/20 resize-none`}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full !bg-brand-navy hover:!bg-blue-900 flex items-center justify-center gap-2"
                  leftIcon={<Send className="w-4 h-4" />}>
                  {isSubmitting ? 'Sending...' : 'Send Support Request'}
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar - Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Response Time */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 className="font-bold text-brand-black">Average Response</h3>
              </div>
              <p className="text-3xl font-bold text-brand-navy">2-4</p>
              <p className="text-sm text-brand-gray">Hours</p>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-brand-black mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="w-5 h-5 text-brand-navy flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-black text-sm">
                      Call Us
                    </p>
                    <p className="text-xs text-brand-gray">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:support@ceylonparadise.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail className="w-5 h-5 text-brand-navy flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-black text-sm">
                      Email
                    </p>
                    <p className="text-xs text-brand-gray">
                      support@ceylonparadise.com
                    </p>
                  </div>
                </a>

                <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left">
                  <MessageCircle className="w-5 h-5 text-brand-navy flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-black text-sm">
                      Live Chat
                    </p>
                    <p className="text-xs text-brand-gray">Available 24/7</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Helpful Resources */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Quick Help
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/help"
                    className="text-brand-blue hover:text-brand-navy font-medium">
                    Browse Help Articles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-brand-blue hover:text-brand-navy font-medium">
                    View Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-brand-blue hover:text-brand-navy font-medium">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


