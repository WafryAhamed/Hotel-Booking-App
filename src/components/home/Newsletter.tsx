import React, { useState } from 'react';
import { useToast } from '../ui/ToastProvider';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Mail, CheckCircle } from 'lucide-react';
export function Newsletter() {
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      addToast('Please enter your email address', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      addToast('Please enter a valid email address', 'error');
      return;
    }
    setError('');
    setIsSubmitted(true);
    addToast('Welcome! Check your inbox for exclusive deals.', 'success');
  };
  return (
    <section
      className="w-full py-10 md:py-14 bg-gray-50"
      aria-labelledby="newsletter-heading">
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-7 h-7 text-brand-navy" />
        </div>
        <h2
          id="newsletter-heading"
          className="text-2xl md:text-3xl font-bold text-brand-black mb-2">
          
          Get Exclusive Deals
        </h2>
        <p className="text-brand-gray mb-6 text-sm md:text-base">
          Subscribe to our newsletter for the best travel deals, insider tips,
          and destination inspiration.
        </p>

        {isSubmitted ?
        <div className="flex items-center justify-center gap-2 py-4 px-6 bg-green-50 border border-green-200 rounded-xl">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              You're subscribed! Check your inbox for a welcome email.
            </span>
          </div> :

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          
            <div className="flex-1">
              <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              error={error}
              startAdornment={<Mail className="w-4 h-4 text-gray-400" />}
              size="medium" />
            
            </div>
            <Button
            variant="primary"
            size="medium"
            className="!bg-brand-navy hover:!bg-blue-900 flex-shrink-0"
            type="submit">
            
              Subscribe
            </Button>
          </form>
        }

        <p className="text-xs text-brand-gray mt-3">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>);

}

