import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/ToastProvider';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { Separator } from '../components/ui/Separator';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe,
  Smartphone } from
'lucide-react';

export function SignInPage() {
  const navigate = useNavigate();
  const { login, isLoading: authLoading } = useAuth();
  const { addToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email.trim()) newErrors.email = 'Email is required';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    newErrors.email = 'Invalid email';
    if (!password.trim()) newErrors.password = 'Password is required';else
    if (password.length < 6)
    newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      await login(email, password);
      addToast({
        type: 'success',
        message: 'Welcome back! Signing you in...',
      });
      setTimeout(() => {
        navigate('/account');
      }, 500);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign in failed. Please try again.';
      addToast({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = (provider: string) => {
    addToast({
      type: 'info',
      message: `${provider} authentication coming soon`,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-brand-navy text-white flex items-center justify-center font-bold">
              SH
            </div>
            <span className="text-2xl font-bold text-brand-black">Ceylon Paradise</span>
          </Link>
          <h1 className="text-xl font-bold text-brand-black mt-4">
            Welcome back
          </h1>
          <p className="text-sm text-brand-gray mt-1">
            Sign in to access your account
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          {/* Social sign in */}
          <div className="space-y-3 mb-5">
            <button 
              type="button"
              onClick={() => handleSocialSignIn('Google')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-brand-black">
              <Globe className="w-5 h-5" />
              Continue with Google
            </button>
            <button 
              type="button"
              onClick={() => handleSocialSignIn('Apple')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-brand-black">
              <Smartphone className="w-5 h-5" />
              Continue with Apple
            </button>
          </div>

          <Separator label="or sign in with email" />

          {/* Email form */}
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email)
                setErrors((p) => ({
                  ...p,
                  email: undefined
                }));
              }}
              error={errors.email}
              disabled={isLoading || authLoading}
              placeholder="you@example.com"
              startAdornment={<Mail className="w-4 h-4 text-brand-gray" />} />
            
            <div>
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password)
                  setErrors((p) => ({
                    ...p,
                    password: undefined
                  }));
                }}
                error={errors.password}
                disabled={isLoading || authLoading}
                placeholder="Enter your password"
                startAdornment={
                <Lock className="w-4 h-4 text-brand-gray" />
                }
                endAdornment={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading || authLoading}
                  className="text-brand-gray hover:text-brand-black transition-colors disabled:opacity-50"
                  aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                  }>
                  
                    {showPassword ?
                  <EyeOff className="w-4 h-4" /> :

                  <Eye className="w-4 h-4" />
                  }
                  </button>
                } />
              
            </div>

            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                disabled={isLoading || authLoading}
                size="sm" />
              
              <Link
                to="/forgot-password"
                className="text-sm text-brand-blue hover:text-brand-navy transition-colors">
                
                Forgot password?
              </Link>
            </div>

            <Button
              variant="primary"
              size="large"
              loading={isLoading || authLoading}
              disabled={isLoading || authLoading}
              className="w-full !bg-brand-navy hover:!bg-navy-700 !font-bold">
              
              Sign In
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-brand-gray mt-6">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-brand-blue font-semibold hover:text-brand-navy transition-colors">
            
            Create account
          </Link>
        </p>
      </div>
    </main>);

}

