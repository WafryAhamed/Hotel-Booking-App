import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import {
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';

export function PolicyPage() {
  const { type } = useParams();

  const policyType = type || 'privacy';

  const policies = {
    privacy: {
      title: 'Privacy Policy',
      icon: Eye,
      lastUpdated: 'December 1, 2024',
      color: 'from-purple-600 to-purple-900',
      sections: [
        {
          heading: '1. Introduction',
          content: `Ceylon Paradise ("we," "us," "our," or "Company") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
          and use our services.`,
        },
        {
          heading: '2. Information We Collect',
          content: `We collect information you provide directly:
          • Account information (name, email, phone, address, payment methods)
          • Profile information (photo, bio, preferences)
          • Booking and property information
          • Communication and transaction history
          • Device information and logs
          • Location data (with permission)`,
        },
        {
          heading: '3. How We Use Your Information',
          content: `We use your information to:
          • Provide and improve our services
          • Process transactions and send related information
          • Send promotional communications (with consent)
          • Personalize your experience
          • Ensure fraud prevention and security
          • Comply with legal obligations`,
        },
        {
          heading: '4. Data Security',
          content: `We implement appropriate technical and organizational measures to protect your personal data. 
          This includes encryption of sensitive information, regular security audits, and access controls. 
          However, no method of transmission over the Internet is 100% secure.`,
        },
        {
          heading: '5. Your Privacy Rights',
          content: `You have the right to:
          • Access your personal data
          • Correct inaccurate information
          • Request deletion of your data
          • Opt-out of marketing communications
          • Data portability
          • Object to processing`,
        },
        {
          heading: '6. Contact Us',
          content: `If you have privacy concerns or questions, please contact our Privacy Team at privacy@ceylonparadise.com 
          or write to us at our registered office. We will respond within 30 days.`,
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      icon: BookOpenIcon,
      lastUpdated: 'December 1, 2024',
      color: 'from-blue-600 to-blue-900',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          content: `By accessing and using Ceylon Paradise, you accept and agree to be bound by the terms and provision of this agreement. 
          If you do not agree to abide by the above, please do not use this service.`,
        },
        {
          heading: '2. Use License',
          content: `Permission is granted to temporarily download one copy of the materials (information or software) on Ceylon Paradise 
          for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
          and under this license you may not:
          • Modify or copy the materials
          • Use the materials for any commercial purpose or for any public display
          • Attempt to decompile or reverse engineer any software
          • Transfer the materials to another person or "mirror" the materials on any other server
          • Remove any copyright or other proprietary notations
          • Commit fraud or provide false information`,
        },
        {
          heading: '3. Disclaimer',
          content: `The materials on Ceylon Paradise are provided "as is". Ceylon Paradise makes no warranties, expressed or implied, 
          and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of 
          merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
        },
        {
          heading: '4. Limitations of Liability',
          content: `In no event shall Ceylon Paradise or its suppliers be liable for any damages (including, without limitation, 
          damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
          the materials on Ceylon Paradise.`,
        },
        {
          heading: '5. Accuracy of Materials',
          content: `The materials appearing on Ceylon Paradise could include technical, typographical, or photographic errors.
          Ceylon Paradise does not warrant that any of the materials on the site are accurate, complete, or current.
          Ceylon Paradise may make changes to the materials contained on the site at any time without notice.`,
        },
        {
          heading: '6. Links',
          content: `Ceylon Paradise has not reviewed all of the sites linked to its website and is not responsible for the contents of any
          such linked site. The inclusion of any link does not imply endorsement by Ceylon Paradise of the site. Use of any such linked
          website is at the user's own risk.`,
        },
        {
          heading: '7. Modifications',
          content: `Ceylon Paradise may revise these terms of service for the website at any time without notice. 
          By using this website, you are agreeing to be bound by the then current version of these terms of service.`,
        },
        {
          heading: '8. Governing Law',
          content: `These terms and conditions are governed by and construed in accordance with the laws of the United States, 
          and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`,
        },
      ],
    },
    about: {
      title: 'About Ceylon Paradise',
      icon: ShieldCheckIcon,
      lastUpdated: 'December 1, 2024',
      color: 'from-green-600 to-green-900',
      sections: [
        {
          heading: 'Our Mission',
          content: `Ceylon Paradise exists to make vacation rentals accessible, affordable, and enjoyable for everyone. 
          We believe that every person deserves to experience amazing places and that every property owner deserves 
          the opportunity to earn from their space.`,
        },
        {
          heading: 'Our Story',
          content: `Founded in 2020, Ceylon Paradise started as a small idea to connect travelers with authentic, 
          affordable accommodations around the world. What began with just 100 properties has grown to over 50,000 listings 
          across 195 countries, serving millions of guest each year.`,
        },
        {
          heading: 'Our Values',
          content: `• Trust: We prioritize safety, security, and transparent communication
          • Community: We support both hosts and guests to build lasting connections
          • Innovation: We constantly improve our platform with new features
          • Sustainability: We promote responsible tourism and environmental stewardship
          • Inclusivity: We welcome diverse voices and perspectives`,
        },
        {
          heading: 'Our Team',
          content: `Our diverse team of 500+ professionals works 24/7 across 50 countries to ensure the best experience 
          for our users. From customer support specialists to engineers, designers, and content creators, 
          everyone at Ceylon Paradise is dedicated to our mission.`,
        },
        {
          heading: 'Awards & Recognition',
          content: `• Best Vacation Rental Platform 2024
          • Industry Innovation Award
          • Customer Choice Award (5 consecutive years)
          • Top 50 Travel Tech Companies
          • Certified B Corporation`,
        },
        {
          heading: 'Join Our Community',
          content: `Whether you're a traveler looking for your next adventure or a host wanting to share your space with the world, 
          we'd love to have you be part of the Ceylon Paradise community. Together, we're making the world more connected, one stay at a time.`,
        },
      ],
    },
  };

  const policy = policies[policyType] || policies.privacy;
  const Icon = policy.icon;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${policy.color} text-white py-12`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <button className="flex items-center gap-2 text-white/70 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{policy.title}</h1>
              <p className="text-white/70">Last updated: {policy.lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <Link to="/privacy">
              <button
                className={`py-4 font-bold border-b-2 transition-colors ${
                  policyType === 'privacy'
                    ? 'border-brand-navy text-brand-navy'
                    : 'border-transparent text-brand-gray hover:text-brand-black'
                }`}>
                Privacy Policy
              </button>
            </Link>
            <Link to="/terms">
              <button
                className={`py-4 font-bold border-b-2 transition-colors ${
                  policyType === 'terms'
                    ? 'border-brand-navy text-brand-navy'
                    : 'border-transparent text-brand-gray hover:text-brand-black'
                }`}>
                Terms of Service
              </button>
            </Link>
            <Link to="/about">
              <button
                className={`py-4 font-bold border-b-2 transition-colors ${
                  policyType === 'about'
                    ? 'border-brand-navy text-brand-navy'
                    : 'border-transparent text-brand-gray hover:text-brand-black'
                }`}>
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
          <div className="prose prose-sm max-w-none">
            {policy.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-brand-navy flex-shrink-0" />
                  {section.heading}
                </h2>
                <div className="text-brand-gray leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-brand-black mb-4">Have Questions?</h3>
            <p className="text-brand-gray mb-6">
              If you have any questions about our policies or need further clarification, 
              please don't hesitate to reach out to us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/contact">
                <Button className="w-full bg-brand-navy text-white hover:bg-brand-navy/90">
                  Contact Support
                </Button>
              </Link>
              <a href="mailto:legal@ceylonparadise.com">
                <Button className="w-full border-2 border-brand-navy text-brand-navy hover:bg-blue-50">
                  Email Legal Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


