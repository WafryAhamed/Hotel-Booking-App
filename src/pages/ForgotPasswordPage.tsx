import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ui/ToastProvider';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Separator } from '../components/ui/Separator';
import {
  ArrowLeft,
  Mail,
  CheckCircle,
  Lock
} from 'lucide-react';

type ForgotPasswordStep = 'email' | 'sent' | 'reset';

export function ForgotPasswordPage() {
  const { addToast } = useToast();
  const [step, setStep] = useState<ForgotPasswordStep>('email');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<{
    newPassword?: string;
    confirmPassword?: string;
  }>({});

  // Step 1: Email entry
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email address');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResetEmail(email);
      setStep('sent');
      addToast('Reset link sent! Check your email.', 'success');
    }, 1000);
  };

  // Step 3: Reset password
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: typeof passwordErrors = {};

    if (!newPassword.trim()) {
      errors.newPassword = 'Password is required';
    } else if (newPassword.length < 8) {
      errors.newPassword = 'Password must be at least 8 characters';
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (newPassword !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setPasswordErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep('reset');
        addToast('Password reset successfully! Redirecting to sign in...', 'success');
      }, 1000);
    } else if (errors.newPassword || errors.confirmPassword) {
      addToast(errors.newPassword || errors.confirmPassword || 'Please fix the errors', 'error');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        {step === 'email' && (
          <Link to="/signin" className="inline-flex items-center gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm text-brand-blue hover:text-brand-navy">
              Back to Sign In
            </span>
          </Link>
        )}

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-brand-navy text-white flex items-center justify-center font-bold">
              SH
            </div>
            <span className="text-xl font-bold text-brand-black">Ceylon Paradise</span>
          </Link>
        </div>

        {/* Step 1: Email Entry */}
        {step === 'email' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h1 className="text-2xl font-bold text-brand-black mb-2">
              Reset Your Password
            </h1>
            <p className="text-brand-gray text-sm mb-6">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="Email address associated with your account"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                error={emailError}
                leftIcon={<Mail className="w-5 h-5" />}
              />

              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="w-full !bg-brand-navy hover:!bg-blue-900">
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>

            <Separator />

            <p className="text-sm text-brand-gray text-center">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-brand-blue hover:text-brand-navy font-medium">
                Sign up
              </Link>
            </p>
          </div>
        )}

        {/* Step 2: Email Sent */}
        {step === 'sent' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-brand-navy" />
            </div>

            <h1 className="text-2xl font-bold text-brand-black mb-2">
              Check Your Email
            </h1>

            <p className="text-brand-gray text-sm mb-6">
              We've sent a password reset link to:
            </p>

            <div className="bg-gray-50 rounded-lg p-3 mb-6 border border-gray-200">
              <p className="font-medium text-brand-black">{resetEmail}</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900">
                The link will expire in 30 minutes. If you don't see the email,
                check your spam folder.
              </p>
            </div>

            <Button
              onClick={() => {
                setEmail('');
                setStep('reset');
              }}
              variant="primary"
              className="w-full !bg-brand-navy hover:!bg-blue-900 mb-3">
              Open Email App
            </Button>

            <button
              onClick={() => {
                setEmail('');
                setStep('email');
              }}
              className="text-sm text-brand-blue hover:text-brand-navy font-medium">
              Return to Sign In
            </button>

            <Separator className="my-4" />

            <p className="text-xs text-brand-gray">
              Didn't receive the email?{' '}
              <button className="text-brand-blue hover:text-brand-navy font-medium">
                Try again
              </button>
            </p>
          </div>
        )}

        {/* Step 3: Reset Password */}
        {step === 'reset' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h1 className="text-2xl font-bold text-brand-black mb-2">
              Create New Password
            </h1>
            <p className="text-brand-gray text-sm mb-6">
              Enter a strong password to secure your account.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border ${passwordErrors.newPassword ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-navy/20 pl-10`}
                  />
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                </div>
                {passwordErrors.newPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    {passwordErrors.newPassword}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border ${passwordErrors.confirmPassword ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-navy/20 pl-10`}
                  />
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                </div>
                {passwordErrors.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    {passwordErrors.confirmPassword}
                  </p>
                )}
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-brand-gray">Show password</span>
              </label>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
                Password must be at least 8 characters long.
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="w-full !bg-brand-navy hover:!bg-blue-900">
                {isLoading ? 'Resetting...' : 'Reset Password'}
              </Button>
            </form>
          </div>
        )}

        {/* Success State */}
        {!['email', 'sent', 'reset'].includes(step) && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <h1 className="text-2xl font-bold text-brand-black mb-2">
              Password Reset Successful
            </h1>

            <p className="text-brand-gray text-sm mb-6">
              Your password has been successfully reset. You can now sign in
              with your new password.
            </p>

            <Link to="/signin">
              <Button
                variant="primary"
                className="w-full !bg-brand-navy hover:!bg-blue-900">
                Go to Sign In
              </Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}


