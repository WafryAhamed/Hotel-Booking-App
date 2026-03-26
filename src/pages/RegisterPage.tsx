import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/ToastProvider';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { Separator } from '../components/ui/Separator';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
  Smartphone } from
'lucide-react';

export function RegisterPage() {
  const navigate = useNavigate();
  const { register, isLoading: authLoading } = useAuth();
  const { addToast } = useToast();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field])
    setErrors((prev) => ({
      ...prev,
      [field]: ''
    }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    e.email = 'Invalid email';
    if (!form.password) e.password = 'Password is required';else
    if (form.password.length < 8) e.password = 'At least 8 characters';
    if (form.password !== form.confirmPassword)
    e.confirmPassword = "Passwords don't match";
    if (!agreeTerms) e.terms = 'You must agree to the terms';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      addToast({
        type: 'error',
        message: 'Please check your form for errors',
      });
      return;
    }

    setIsLoading(true);
    try {
      await register(form.name, form.email, form.password);
      addToast({
        type: 'success',
        message: 'Account created successfully! Signing you in...',
      });
      setTimeout(() => {
        navigate('/account');
      }, 500);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed. Please try again.';
      addToast({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = (provider: string) => {
    addToast({
      type: 'info',
      message: `${provider} sign up coming soon`,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-brand-navy text-white flex items-center justify-center font-bold">
              CP
            </div>
            <span className="text-2xl font-bold text-brand-black">Ceylon Paradise</span>
          </Link>
          <h1 className="text-xl font-bold text-brand-black mt-4">
            Create your account
          </h1>
          <p className="text-sm text-brand-gray mt-1">
            Join Ceylon Paradise and start exploring
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="space-y-3 mb-5">
            <button 
              type="button"
              onClick={() => handleSocialSignUp('Google')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-brand-black">
              <Globe className="w-5 h-5" />
              Continue with Google
            </button>
            <button 
              type="button"
              onClick={() => handleSocialSignUp('Apple')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-brand-black">
              <Smartphone className="w-5 h-5" />
              Continue with Apple
            </button>
          </div>

          <Separator label="or register with email" />

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <Input
              label="Full Name"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              error={errors.name}
              disabled={isLoading || authLoading}
              placeholder="Full name (as shown on ID)"
              startAdornment={<User className="w-4 h-4 text-brand-gray" />} />
            
            <Input
              label="Email"
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              error={errors.email}
              disabled={isLoading || authLoading}
              placeholder="you@example.com"
              startAdornment={<Mail className="w-4 h-4 text-brand-gray" />} />
            
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={(e) => updateField('password', e.target.value)}
              error={errors.password}
              disabled={isLoading || authLoading}
              placeholder="At least 8 characters"
              startAdornment={<Lock className="w-4 h-4 text-brand-gray" />}
              endAdornment={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading || authLoading}
                className="text-brand-gray hover:text-brand-black disabled:opacity-50">
                
                  {showPassword ?
                <EyeOff className="w-4 h-4" /> :

                <Eye className="w-4 h-4" />
                }
                </button>
              } />
            
            <Input
              label="Confirm Password"
              type="password"
              value={form.confirmPassword}
              onChange={(e) => updateField('confirmPassword', e.target.value)}
              error={errors.confirmPassword}
              disabled={isLoading || authLoading}
              placeholder="Repeat your password"
              startAdornment={<Lock className="w-4 h-4 text-brand-gray" />} />
            

            <div>
              <Checkbox
                label={
                <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link
                    to="/terms"
                    className="text-brand-blue hover:underline">
                    
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                    to="/privacy"
                    className="text-brand-blue hover:underline">
                    
                      Privacy Policy
                    </Link>
                  </span>
                }
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                disabled={isLoading || authLoading}
                size="sm"
                error={!!errors.terms} />
              
              {errors.terms &&
              <p className="text-xs text-red-500 mt-1">{errors.terms}</p>
              }
            </div>

            <Button
              variant="primary"
              size="large"
              loading={isLoading || authLoading}
              disabled={isLoading || authLoading}
              className="w-full !bg-brand-navy hover:!bg-navy-700 !font-bold">
              
              Create Account
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-brand-gray mt-6">
          Already have an account?{' '}
          <Link
            to="/signin"
            className="text-brand-blue font-semibold hover:text-brand-navy transition-colors">
            
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

