/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Menu, X, Landmark } from 'lucide-react';
import { OWNER_DETAILS } from '../data';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "About Adv. Yash", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQs", id: "faqs" },
    { label: "Enquire Now", id: "enquiry" }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs backdrop-blur-md bg-opacity-95">
      {/* Top Notification Bar representing Delhi NCT service assurance */}
      <div className="bg-brand-primary text-white text-[11px] font-mono tracking-wider py-1.5 px-4 text-center">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          TRUSTED DOCUMENTATION & LEGAL ADVISORY • SHOP NO-35 OPPOSITE DWARKA SECTOR-10 SDM OFFICE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand Title */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="bg-brand-primary text-white p-2.5 rounded-sm shadow-xs group-hover:bg-brand-secondary transition-colors">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-primary">SUVIDHA</span>
                <span className="font-sans text-xs bg-amber-100 text-brand-secondary px-1.5 py-0.5 rounded-sm font-semibold tracking-wider uppercase">DOCS</span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-400 tracking-wide font-medium">By Advocate Yash Gupta</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-sans font-medium rounded-sm transition-all ${
                  activeSection === item.id
                    ? "bg-amber-100/50 text-brand-secondary font-semibold"
                    : "text-gray-600 hover:text-brand-primary hover:bg-gray-55"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Primary Quick Call Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${OWNER_DETAILS.primaryPhone}`}
              className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white px-4 py-2 text-sm rounded-sm font-semibold transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-brand-secondary" />
              <span>Call +91 9868180800</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-brand-primary focus:outline-hidden p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Dropdown menu with elegant exit-transition */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-sm text-base font-medium font-sans ${
                activeSection === item.id
                  ? "bg-amber-50 text-brand-secondary font-bold"
                  : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={`tel:${OWNER_DETAILS.primaryPhone}`}
              className="flex items-center justify-center gap-2 bg-brand-primary text-white py-3 rounded-sm font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Advocate Yash
            </a>
            <a
              href={`https://wa.me/919868180800`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-sm font-semibold text-sm"
            >
              <span className="font-bold">💬 WhatsApp Support</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
