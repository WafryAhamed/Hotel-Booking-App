import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './components/ui/ToastProvider';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { BookingPage } from './pages/BookingPage';
import { SignInPage } from './pages/SignInPage';
import { RegisterPage } from './pages/RegisterPage';
import { AccountDashboardPage } from './pages/AccountDashboardPage';
import { AccountProfilePage } from './pages/AccountProfilePage';
import { AccountSavedPage } from './pages/AccountSavedPage';
import { AccountBookingsPage } from './pages/AccountBookingsPage';
import { AccountBookingDetailsPage } from './pages/AccountBookingDetailsPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { ContactSupportPage } from './pages/ContactSupportPage';
import { HostLandingPage } from './pages/HostLandingPage';
import { HostDashboardPage } from './pages/HostDashboardPage';
import { AddPropertyWizardPage } from './pages/AddPropertyWizardPage';
import { HostCalendarPage } from './pages/HostCalendarPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { PropertyApprovalPage } from './pages/PropertyApprovalPage';
import { PromotionsManagerPage } from './pages/PromotionsManagerPage';
import { ReviewModerationPage } from './pages/ReviewModerationPage';
import { OffersDealsPage } from './pages/OffersDealsPage';
import { PolicyPage } from './pages/PolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { BlogPage } from './pages/BlogPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ToastProvider>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className="flex flex-col min-h-screen w-full">
              <Navbar />
        <div className="flex-1">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/confirmation" element={<BookingPage />} />

            {/* Offers & Discovery */}
            <Route path="/offers" element={<OffersDealsPage />} />
            <Route path="/blog" element={<BlogPage />} />

            {/* Auth */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Account */}
            <Route path="/account" element={<AccountDashboardPage />} />
            <Route path="/account/profile" element={<AccountProfilePage />} />
            <Route path="/account/saved" element={<AccountSavedPage />} />
            <Route path="/account/bookings" element={<AccountBookingsPage />} />
            <Route path="/account/bookings/:id" element={<AccountBookingDetailsPage />} />

            {/* Help */}
            <Route path="/help" element={<HelpCenterPage />} />
            <Route path="/help/:topic" element={<HelpCenterPage />} />
            <Route path="/contact" element={<ContactSupportPage />} />

            {/* Host */}
            <Route path="/host" element={<HostLandingPage />} />
            <Route path="/host/add-property" element={<AddPropertyWizardPage />} />
            <Route path="/host/dashboard" element={<HostDashboardPage />} />
            <Route path="/host/calendar" element={<HostCalendarPage />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/approvals" element={<PropertyApprovalPage />} />
            <Route path="/admin/approvals/:id" element={<PropertyApprovalPage />} />
            <Route path="/admin/promotions" element={<PromotionsManagerPage />} />
            <Route path="/admin/reviews" element={<ReviewModerationPage />} />
            <Route path="/admin/reviews/:id" element={<ReviewModerationPage />} />

            {/* Policies */}
            <Route path="/privacy" element={<PolicyPage />} />
            <Route path="/terms" element={<PolicyPage />} />
            <Route path="/cookies" element={<PolicyPage />} />
            <Route path="/about" element={<PolicyPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
