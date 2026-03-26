import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';
import { DropdownMenu } from '../ui/DropdownMenu';
import {
  Search,
  Globe,
  Heart,
  Menu,
  X,
  Building,
  Tag,
  HelpCircle,
  User,
  LogOut,
  Calendar,
  LayoutDashboard } from
'lucide-react';
interface NavbarProps {
  isLoggedIn?: boolean;
  userRole?: 'guest' | 'customer' | 'host' | 'admin';
  userName?: string;
  onSignIn?: () => void;
  onRegister?: () => void;
}
export function Navbar({
  isLoggedIn = false,
  userRole = 'guest',
  userName = 'Alex Morgan',
  onSignIn,
  onRegister
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header
      className={`w-full sticky top-0 z-50 ${isHome ? 'bg-brand-navy' : 'bg-white border-b border-gray-200'}`}>
      
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation">
        
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="Ceylon Paradise Home">
            
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${isHome ? 'bg-brand-gold text-brand-navy' : 'bg-brand-navy text-white'}`}>
              
              CP
            </div>
            <span
              className={`text-xl font-bold hidden sm:block ${isHome ? 'text-white' : 'text-brand-black'}`}>
              
              Ceylon Paradise
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/offers" isHome={isHome}>
              <Tag className="w-4 h-4" />
              Deals
            </NavLink>
            <NavLink to="/host" isHome={isHome}>
              <Building className="w-4 h-4" />
              List Your Property
            </NavLink>
            <NavLink to="/help" isHome={isHome}>
              <HelpCircle className="w-4 h-4" />
              Help
            </NavLink>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language/Currency */}
            <button
              className={`p-2 rounded-lg transition-colors ${isHome ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-brand-gray hover:text-brand-black hover:bg-gray-100'}`}
              aria-label="Select language">
              
              <Globe className="w-5 h-5" />
            </button>

            {/* Saved */}
            <Link
              to="/account/saved"
              className={`p-2 rounded-lg transition-colors ${isHome ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-brand-gray hover:text-brand-black hover:bg-gray-100'}`}
              aria-label="Saved properties">
              
              <Heart className="w-5 h-5" />
            </Link>

            {isLoggedIn ?
            <DropdownMenu
              trigger={
              <button className="flex items-center gap-2 p-1.5 rounded-full border border-transparent hover:border-gray-200 transition-colors">
                    <Avatar name={userName} alt={userName} size="sm" />
                  </button>
              }>
              
                <DropdownMenu.Item
                label="Dashboard"
                icon={<LayoutDashboard className="w-4 h-4" />}
                onClick={() => {}} />
              
                <DropdownMenu.Item
                label="My Bookings"
                icon={<Calendar className="w-4 h-4" />}
                onClick={() => {}} />
              
                <DropdownMenu.Item
                label="Saved Properties"
                icon={<Heart className="w-4 h-4" />}
                onClick={() => {}} />
              
                <DropdownMenu.Item
                label="Profile"
                icon={<User className="w-4 h-4" />}
                onClick={() => {}} />
              
                {userRole === 'host' &&
              <DropdownMenu.Item
                label="Host Dashboard"
                icon={<Building className="w-4 h-4" />}
                onClick={() => {}} />

              }
                {userRole === 'admin' &&
              <DropdownMenu.Item
                label="Admin Panel"
                icon={<LayoutDashboard className="w-4 h-4" />}
                onClick={() => {}} />

              }
                <DropdownMenu.Divider />
                <DropdownMenu.Item
                label="Sign Out"
                icon={<LogOut className="w-4 h-4" />}
                onClick={() => {}} />
              
              </DropdownMenu> :

            <div className="flex items-center gap-2">
                <Link to="/signin">
                  <Button
                  variant={isHome ? 'tertiary' : 'secondary'}
                  size="small"
                  className={
                  isHome ?
                  '!text-white !border-white/30 hover:!bg-white/10' :
                  ''
                  }>
                  
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                  variant="primary"
                  size="small"
                  className={
                  isHome ?
                  '!bg-brand-gold !text-brand-navy hover:!bg-yellow-400' :
                  '!bg-brand-navy hover:!bg-blue-900'
                  }>
                  
                    Register
                  </Button>
                </Link>
              </div>
            }
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg ${isHome ? 'text-white' : 'text-brand-black'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}>
            
            {mobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen &&
        <div
          className={`lg:hidden pb-4 border-t ${isHome ? 'border-white/20' : 'border-gray-200'}`}>
          
            <div className="flex flex-col gap-1 pt-3">
              <MobileNavLink
              to="/search"
              isHome={isHome}
              onClick={() => setMobileMenuOpen(false)}>
              
                <Search className="w-5 h-5" />
                Search
              </MobileNavLink>
              <MobileNavLink
              to="/offers"
              isHome={isHome}
              onClick={() => setMobileMenuOpen(false)}>
              
                <Tag className="w-5 h-5" />
                Deals & Offers
              </MobileNavLink>
              <MobileNavLink
              to="/account/saved"
              isHome={isHome}
              onClick={() => setMobileMenuOpen(false)}>
              
                <Heart className="w-5 h-5" />
                Saved Properties
              </MobileNavLink>
              <MobileNavLink
              to="/host"
              isHome={isHome}
              onClick={() => setMobileMenuOpen(false)}>
              
                <Building className="w-5 h-5" />
                List Your Property
              </MobileNavLink>
              <MobileNavLink
              to="/help"
              isHome={isHome}
              onClick={() => setMobileMenuOpen(false)}>
              
                <HelpCircle className="w-5 h-5" />
                Help & Support
              </MobileNavLink>

              <div
              className={`border-t mt-2 pt-3 ${isHome ? 'border-white/20' : 'border-gray-200'}`}>
              
                {isLoggedIn ?
              <>
                    <MobileNavLink
                  to="/account"
                  isHome={isHome}
                  onClick={() => setMobileMenuOpen(false)}>
                  
                      <User className="w-5 h-5" />
                      My Account
                    </MobileNavLink>
                    <MobileNavLink
                  to="/account/bookings"
                  isHome={isHome}
                  onClick={() => setMobileMenuOpen(false)}>
                  
                      <Calendar className="w-5 h-5" />
                      My Bookings
                    </MobileNavLink>
                  </> :

              <div className="flex gap-2 px-3 pt-1">
                    <Link
                  to="/signin"
                  className="flex-1"
                  onClick={() => setMobileMenuOpen(false)}>
                  
                      <Button
                    variant="secondary"
                    size="medium"
                    className="w-full">
                    
                        Sign In
                      </Button>
                    </Link>
                    <Link
                  to="/register"
                  className="flex-1"
                  onClick={() => setMobileMenuOpen(false)}>
                  
                      <Button
                    variant="primary"
                    size="medium"
                    className="w-full !bg-brand-navy">
                    
                        Register
                      </Button>
                    </Link>
                  </div>
              }
              </div>
            </div>
          </div>
        }
      </nav>
    </header>);

}
function NavLink({
  to,
  isHome,
  children




}: {to: string;isHome: boolean;children: React.ReactNode;}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isHome ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-brand-black hover:bg-gray-100'}`}>
      
      {children}
    </Link>);

}
function MobileNavLink({
  to,
  isHome,
  children,
  onClick





}: {to: string;isHome: boolean;children: React.ReactNode;onClick: () => void;}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isHome ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-brand-black hover:bg-gray-50'}`}>
      
      {children}
    </Link>);

}
