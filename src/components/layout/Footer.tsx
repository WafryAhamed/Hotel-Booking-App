import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '../ui/Separator';
import {
  Shield,
  Headphones,
  Smartphone,
  ShieldCheck
} from 'lucide-react';

// Social media icons - using generic alternatives. HMR refresh v2
const Facebook = ({ className }: { className?: string }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.467-.133-2.82-.133-2.996 0-5.192 1.583-5.192 4.615v2.385z"/></svg>;
const Twitter = ({ className }: { className?: string }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z"/></svg>;
const Instagram = ({ className }: { className?: string }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>;
const Youtube = ({ className }: { className?: string }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.54c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02v-6.04l5.75 3.02-5.75 3.02z"/></svg>;
export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300" role="contentinfo">
      {/* Trust Bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-brand-gold" />
              <span className="text-sm font-medium text-white">
                Secure Booking
              </span>
              <span className="text-xs text-gray-400">
                Your data is always protected
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Headphones className="w-6 h-6 text-brand-gold" />
              <span className="text-sm font-medium text-white">
                24/7 Support
              </span>
              <span className="text-xs text-gray-400">
                We're here whenever you need us
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Smartphone className="w-6 h-6 text-brand-gold" />
              <span className="text-sm font-medium text-white">
                Mobile Friendly
              </span>
              <span className="text-xs text-gray-400">
                Book on the go, anytime
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              <FooterLink to="/about">About Ceylon Paradise</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/press">Press</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/sustainability">Sustainability</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-2.5">
              <FooterLink to="/help">Help Center</FooterLink>
              <FooterLink to="/help/booking">Booking Help</FooterLink>
              <FooterLink to="/help/cancellation">Cancellation</FooterLink>
              <FooterLink to="/help/payment">Payment</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Discover</h3>
            <ul className="space-y-2.5">
              <FooterLink to="/offers">Deals & Offers</FooterLink>
              <FooterLink to="/search?type=luxury">Luxury Stays</FooterLink>
              <FooterLink to="/search?type=beach">Beach Resorts</FooterLink>
              <FooterLink to="/search?type=city">City Hotels</FooterLink>
              <FooterLink to="/search?type=villa">Villas</FooterLink>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              For Partners
            </h3>
            <ul className="space-y-2.5">
              <FooterLink to="/host">List Your Property</FooterLink>
              <FooterLink to="/host/dashboard">Host Dashboard</FooterLink>
              <FooterLink to="/affiliate">Affiliate Program</FooterLink>
              <FooterLink to="/api">API Partners</FooterLink>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Policies</h3>
            <ul className="space-y-2.5">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
              <FooterLink to="/accessibility-statement">
                Accessibility
              </FooterLink>
            </ul>
          </div>
        </div>
      </div>

      <Separator color="#374151" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-xs">
              CP
            </div>
            <span className="text-sm text-gray-400">
              © 2026 Ceylon Paradise. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook">
              
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter">
              
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram">
              
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube">
              
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* App Download */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-600 rounded-lg text-xs text-gray-300 hover:border-gray-400 hover:text-white transition-colors">
              <Smartphone className="w-4 h-4" />
              App Store
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-600 rounded-lg text-xs text-gray-300 hover:border-gray-400 hover:text-white transition-colors">
              <Smartphone className="w-4 h-4" />
              Google Play
            </button>
          </div>
        </div>
      </div>
    </footer>);

}
function FooterLink({
  to,
  children



}: {to: string;children: React.ReactNode;}) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-gray-400 hover:text-white transition-colors">
        
        {children}
      </Link>
    </li>);

}

