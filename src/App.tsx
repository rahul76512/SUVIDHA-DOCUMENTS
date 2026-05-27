/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, CheckCircle, Fingerprint, Award, FileText,
  ShieldAlert, Home, Phone, Star, Mail, MapPin, Search,
  Compass, BadgeAlert, ArrowUpRight, Scale, BookOpen, Clock, AlertTriangle, AlertCircle
} from 'lucide-react';

import { Header } from './components/Header';
import { ContactCard } from './components/ContactCard';
import { ConsultationForm } from './components/ConsultationForm';
import { SERVICE_CATEGORIES, FAQS, TESTIMONIALS, OWNER_DETAILS } from './data';
import { ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const [selectedCategory, setSelectedCategory] = useState('aadhaar');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  
  // Track selected service for checklist drawer/modal details
  const [drawerService, setDrawerService] = useState<ServiceItem | null>(null);

  const currentCategoryObj = useMemo(() => {
    return SERVICE_CATEGORIES.find(c => c.id === selectedCategory) || SERVICE_CATEGORIES[0];
  }, [selectedCategory]);

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return FAQS;
    return FAQS.filter(
      faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
             faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
             faq.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Maps Lucide icon name to actual Component
  const renderCategoryIcon = (iconName: string, className: string = "w-5 h-5") => {
    switch (iconName) {
      case "Fingerprint": return <Fingerprint className={className} />;
      case "Award": return <Award className={className} />;
      case "FileText": return <FileText className={className} />;
      case "ShieldAlert": return <ShieldAlert className={className} />;
      case "Home": return <Home className={className} />;
      default: return <FileText className={className} />;
    }
  };

  return (
    <div className="bg-brand-background text-gray-800 font-sans min-h-screen selection:bg-amber-100 selection:text-brand-secondary">
      
      {/* Interactive sticky navigation header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Section */}
      <section id="hero" className="relative bg-brand-primary overflow-hidden border-b border-brand-secondary/25">
        {/* Abstract design elements representation of scale of justice or security shields */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#775a19_1.3px,transparent_1.3px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-amber-55 text-white px-3 py-1 bg-opacity-10 rounded-sm font-mono text-[11px] font-semibold tracking-wider uppercase border border-brand-secondary/50">
                <Scale className="w-3.5 h-3.5 text-brand-secondary" />
                <span>Advocate Yash Gupta • Bar Council of Delhi</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Trusted Documentation & <span className="text-brand-secondary">Legal Advisory</span> in Dwarka
              </h1>
              
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-2xl">
                Located directly opposite the <strong className="text-white">SDM Office, Sector 10 Dwarka</strong>, Delhi. We deliver seamless processing, documentation, stamp duty collection, and authentic legal vetting. Skip the queues and secure your legally complaint certificates smoothly.
              </p>

              {/* Verified Trust Stats Banner */}
              <div className="grid grid-cols-3 gap-4 py-3 border-y border-white/10 max-w-xl">
                <div className="text-left font-serif">
                  <span className="block text-2xl sm:text-3xl font-black text-amber-500">100%</span>
                  <span className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-wider">Transparent Fees</span>
                </div>
                <div className="text-left font-serif">
                  <span className="block text-2xl sm:text-3xl font-black text-amber-500">8+ Yrs</span>
                  <span className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-wider">Experienced Advisory</span>
                </div>
                <div className="text-left font-serif">
                  <span className="block text-2xl sm:text-3xl font-black text-amber-500">Opposite</span>
                  <span className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-wider">SDM Office Gate</span>
                </div>
              </div>

              {/* CTA Action Controls */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => handleNavigate('enquiry')}
                  className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-sans font-semibold px-8 py-4 rounded-sm transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Book Slot / Prepare Document</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNavigate('services')}
                  className="bg-white/15 hover:bg-white/20 text-white font-sans font-semibold px-8 py-4 rounded-sm border border-white/20 transition-all text-sm"
                >
                  Explore Document Categories
                </button>
              </div>
            </div>

            {/* Right Graphic column representing primary Advocate and Delhi Stamp Market */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-brand-secondary/10 rounded-sm blur-3xl" />
              <div className="relative border-4 border-white/10 rounded-lg p-3 bg-white bg-opacity-5 backdrop-blur-md max-w-md mx-auto aspect-4/3 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
                  alt="Legal scale of justice and stamp documents"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-sm grayscale-20 opacity-90 hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Office Hours Indicator */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xs p-4 rounded-sm shadow-xl border-l-4 border-brand-secondary text-left">
                  <p className="text-[10px] font-mono text-brand-secondary font-bold tracking-wider uppercase">SUVIDHA DOCUMENTS GATEWAY</p>
                  <p className="text-xs text-slate-800 font-semibold mt-1">Visit Shop No-35, DDA Market Sector 10</p>
                  <p className="text-[10px] text-gray-500 font-medium">Opposite District Magistrate (SDM) Court, Dwarka</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services and Document Checklists Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs bg-amber-100 text-brand-secondary font-mono px-3 py-1 rounded-full uppercase tracking-widest font-bold">
            Comprehensive Government & Legal Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary tracking-tight">
            Select Your Documentation Needs
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans">
            Click on any category below. Instantly inspect specific timelines and generate custom document checklists required at our Delhi revenue desks.
          </p>
        </div>

        {/* Tab Switcher Headers */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-2 border-b border-gray-100 max-w-4xl mx-auto">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2.5 px-5 py-3.5 rounded-sm text-sm font-sans font-medium transition-all select-none ${
                selectedCategory === cat.id
                  ? "bg-brand-primary text-white shadow-md font-semibold"
                  : "bg-white text-gray-600 border border-gray-100 hover:border-gray-200 hover:text-brand-primary"
              }`}
            >
              {renderCategoryIcon(cat.icon, "w-4 h-4")}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Information Card Dashboard */}
        <div className="text-left bg-white rounded-lg border border-gray-100 shadow-sm p-6 md:p-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-150">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">{currentCategoryObj.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{currentCategoryObj.description}</p>
            </div>
            
            <a
              href="#enquiry"
              className="inline-flex self-start items-center gap-1.5 text-xs font-mono font-bold text-brand-secondary hover:text-brand-primary hover:underline"
            >
              <span>INQUIRE ABOUT THIS ENTIRE DEPT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid Layout of Specific Services inside the Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategoryObj.services.map((service, idx) => (
              <div
                key={idx}
                className="bg-brand-background border border-gray-150/50 rounded-lg p-5 flex flex-col justify-between hover:border-amber-200 transition-all legal-card"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-serif text-base font-bold text-brand-primary leading-tight">
                      {service.name}
                    </h4>
                    {service.isPopular && (
                      <span className="bg-amber-100 text-brand-secondary text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded-sm whitespace-nowrap">
                        ★ POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed h-10">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-200/50 space-y-1.5 text-left font-mono text-[11px] text-gray-650">
                    <p className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-secondary flex-shrink-0" />
                      <span>Process Timeline: <strong>{service.completionTime}</strong></span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    onClick={() => setDrawerService(service)}
                    className="w-full text-center text-xs font-mono font-bold border border-brand-primary py-2.5 rounded-sm text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
                  >
                    View Document Checklist Required
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Side-Modal overlay */}
      <AnimatePresence>
        {drawerService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerService(null)}
              className="absolute inset-0 bg-black"
            />
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg border border-gray-100 shadow-2xl relative max-w-lg w-full z-10 p-6 md:p-8 text-left"
            >
              <div className="flex justify-between items-start gap-4 pb-4 border-b border-gray-100">
                <div>
                  <span className="text-[10px] font-mono text-brand-secondary font-bold uppercase tracking-wider">OFFICIAL APPLICATION CHECKLIST</span>
                  <h3 className="font-serif text-xl md:text-2xl font-black text-brand-primary mt-1">{drawerService.name}</h3>
                </div>
                <button
                  onClick={() => setDrawerService(null)}
                  className="font-mono text-xs text-gray-400 hover:text-gray-900 border border-gray-100 p-1 px-2.5 rounded-sm hover:bg-gray-50"
                >
                  ✕ Close
                </button>
              </div>

              {/* Document Lists */}
              <div className="py-6 space-y-5">
                <div>
                  <h4 className="text-[11px] font-mono text-brand-primary uppercase tracking-wider font-extrabold mb-2.5 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Required Supporting Documents
                  </h4>
                  <ul className="space-y-2">
                    {drawerService.requiredDocs.map((doc, dIdx) => (
                      <li key={dIdx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-background p-4 rounded-sm border border-gray-150">
                  <div className="flex gap-2.5">
                    <Clock className="w-4 h-4 text-brand-secondary mt-0.5" />
                    <div>
                      <h5 className="text-[11px] font-mono text-gray-500 uppercase tracking-wider font-semibold">Government Service SLA SLA Timeline</h5>
                      <p className="text-xs text-slate-800 font-bold mt-0.5">{drawerService.completionTime}</p>
                      <p className="text-[10px] text-gray-400 mt-1 font-sans">Applications opposite gate 35 SDM are processed efficiently with daily updates.</p>
                    </div>
                  </div>
                </div>

                {/* Important Instructions Alert */}
                <div className="bg-amber-50/50 p-4 rounded-sm border border-amber-100 flex gap-2.5">
                  <AlertCircle className="w-4 h-4 text-brand-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-[11px] font-mono text-brand-secondary uppercase tracking-wider font-semibold">Mandatory In-Person Warning</h5>
                    <p className="text-[10px] text-gray-600 leading-relaxed mt-0.5">Please ensure original physical copies of address credentials are made available during consultation for accurate stamp duty validation verification.</p>
                  </div>
                </div>
              </div>

              {/* CTA Inside Checklist Drawer */}
              <div className="pt-4 border-t border-gray-100 flex gap-2">
                <button
                  onClick={() => {
                    setDrawerService(null);
                    handleNavigate('enquiry');
                  }}
                  className="w-full text-center bg-brand-primary text-white py-3 rounded-sm font-semibold text-xs uppercase tracking-wider hover:bg-brand-secondary transition-colors"
                >
                  Prepare My Application Online
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* About Section: Focus on Advocate Yash Gupta & Office Credentials */}
      <section id="about" className="bg-brand-primary text-white py-20 relative">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,rgba(119,90,25,0.4)_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5">
              <div className="relative border-2 border-white/10 rounded-lg p-2.5 bg-white bg-opacity-5 max-w-sm mx-auto shadow-2xl overflow-hidden aspect-4/5">
                <img
                  src="/yash_gupta.png"
                  alt="Advocate Yash Gupta professional legal consulting represent"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    const cleanSrc = img.src.toLowerCase();
                    if (cleanSrc.endsWith('/yash_gupta.png')) {
                      // If local public image is not uploaded yet, try the GitHub URL
                      img.src = "https://raw.githubusercontent.com/rahul76512/SUVIDHA-DOCUMENTS/718d190909ab13d3bb632bbab4ccabc96d63761f/yash_gupta.png";
                    } else if (cleanSrc.includes('githubusercontent.com')) {
                      // If GitHub raw link fails (e.g. repository is private), use stock photo
                      img.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200";
                    }
                  }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-sm transition-all duration-300"
                />
                
                <div className="absolute right-4 bottom-4 bg-brand-secondary text-white py-2 px-4 shadow-md rounded-xs pointer-events-none z-10">
                  <p className="font-serif text-sm font-black text-center">Adv. Yash Gupta</p>
                  <p className="text-[9px] font-mono text-gray-200 tracking-wider">Bar Registration: Delhi NCT</p>
                </div>
              </div>
            </div>

            {/* About Narrative Text Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs bg-brand-secondary text-white font-mono px-3 py-1 bg-opacity-30 rounded-full uppercase tracking-widest font-bold">
                Professional Leadership
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                About Advocate Yash Gupta & Suvidha Legal Services
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                {OWNER_DETAILS.about}
              </p>

              {/* Structured Credentials Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Dwarka Revenue Specialist</h4>
                    <p className="text-xs text-gray-400 mt-1">Specialized in District revenue mutation registries, DDA conversions, and leasehold stamp optimization.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Legally-Compliant Drafting</h4>
                    <p className="text-xs text-gray-400 mt-1">Every rent agreement, partnership draft or affidavit carries professional advocate endorsement to ensure structural compliance.</p>
                  </div>
                </div>
              </div>

              {/* Special Note on Security opposite SDM */}
              <div className="bg-white/5 border border-white/10 rounded-sm p-4 text-xs font-mono text-gray-400 flex gap-2.5">
                <BadgeAlert className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                <span>We guarantee zero intermediary fees. Citizens receive transparent receipts for all stamp papers and statutory application filing processes.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs bg-amber-100 text-brand-secondary font-mono px-3 py-1 rounded-full uppercase tracking-widest font-bold">
            Real Citizen Feedbacks
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight animate-fade-in">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans">
            Hear from local shop owners, residents, and working professionals across Dwarka, Delhi NCT who trust Suvidha Documents.
          </p>
        </div>

        {/* Testimonial Cards Slider representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 shadow-xs rounded-lg p-6 flex flex-col justify-between relative"
            >
              {/* Double Quote Mark Display icon */}
              <div className="absolute right-6 top-6 opacity-5 font-serif text-6xl text-brand-primary pointer-events-none select-none">
                “
              </div>
              
              <div className="space-y-4">
                {/* 5 Star rating system representation */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-sans italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-white font-mono flex items-center justify-center text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{t.name}</h4>
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Toggle FAQs Section */}
      <section id="faqs" className="bg-brand-primary/5 py-20 text-center border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs bg-amber-100 text-brand-secondary font-mono px-3 py-1 rounded-full uppercase tracking-widest font-bold">
              Got Questions? We Have Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-sans">
              Find instant answers regarding Delhi NCT registration guidelines, required address proofs, and custom court work.
            </p>
            
            {/* Real Search bar overlay for interactive FAQ filtering */}
            <div className="relative mt-6 max-w-md mx-auto">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs (e.g., Aadhaar, Rent, SDM)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-white rounded-sm text-sm focus:border-brand-primary focus:ring-0 outline-hidden font-sans placeholder:text-gray-400 shadow-xs"
              />
            </div>
          </div>

          {/* FAQ Accordion container */}
          <div className="max-w-3xl mx-auto text-left space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isActive = activeFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-sm border border-gray-150 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaqIndex(isActive ? null : idx)}
                      className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-sans font-semibold text-sm sm:text-base text-brand-primary focus:outline-hidden group"
                    >
                      <span>{faq.question}</span>
                      <span className="text-brand-secondary font-mono text-xl ml-4 select-none">
                        {isActive ? '−' : '+'}
                      </span>
                    </button>
                    
                    {isActive && (
                      <div className="p-4 sm:p-5 pt-0 border-t border-gray-50 bg-brand-background text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center bg-white border rounded-sm">
                <p className="text-sm text-gray-400 font-mono">No matching FAQs found for "{searchQuery}". Try searching "Rent", "Aadhaar", or contact our support lines.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Interactive Booking Enquiries Wizards and Consultation Section */}
      <section id="enquiry" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs bg-amber-100 text-brand-secondary font-mono px-3 py-1 rounded-full uppercase tracking-widest font-bold">
            Instant Stamp / Document Generation Wizard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight">
            Register Enquiry & Secure Checklist
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans">
            Input applicant details and pick slot to receive your custom legal checklists instantly over secure active WhatsApp from Advocate Yash Gupta.
          </p>
        </div>

        {/* Form and Address double side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto text-left">
          {/* Active Contact Information */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ContactCard />
          </div>

          {/* Dynamic Interactive Wizard Form */}
          <div className="lg:col-span-8">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Bottom Footer Section */}
      <footer className="bg-brand-primary text-gray-300 pt-16 pb-8 border-t border-brand-secondary/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1 Brand Statement */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-white tracking-widest uppercase">SUVIDHA DOCUMENTS</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              Delhi NCR's premiere documentation portal. Direct advocate processing opposite gate 35 SDM office Tower, Sector 10 Dwarka.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono bg-white/5 border border-white/10 text-brand-secondary px-2 py-1 rounded-sm">
                ESTABLISHED 2018
              </span>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div className="space-y-4 text-xs font-mono">
            <h4 className="text-white text-xs uppercase tracking-wider font-extrabold text-brand-secondary">Service Divisions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setSelectedCategory('aadhaar')} className="hover:text-white transition-colors text-left font-sans">Aadhaar UIDAI Support</button></li>
              <li><button onClick={() => setSelectedCategory('certificates')} className="hover:text-white transition-colors text-left font-sans">Revenue SDM Certificates</button></li>
              <li><button onClick={() => setSelectedCategory('legal')} className="hover:text-white transition-colors text-left font-sans">Rent Agreements & Notary</button></li>
              <li><button onClick={() => setSelectedCategory('property')} className="hover:text-white transition-colors text-left font-sans">Property Registry & Stampings</button></li>
            </ul>
          </div>

          {/* Col 3 Legal Notice Disclaimers */}
          <div className="space-y-4 text-xs">
            <h4 className="text-white text-xs uppercase tracking-wider font-extrabold text-brand-secondary mb-1">Government Disclaimer</h4>
            <p className="text-[10px] leading-relaxed text-gray-400">
              Disclaimer: Suvidha Documents is a private legal drafting, consulting, and application assistance portal led by Advocate Yash Gupta (Delhi Bar). We facilitate legal services and application submissions for dynamic convenience. All government stamps, fee receipts, and official registry costs are fully transparent and documented.
            </p>
          </div>

          {/* Col 4 Quick Contact & Support Hub */}
          <div className="space-y-4 text-xs">
            <h4 className="text-white text-xs uppercase tracking-wider font-extrabold text-brand-secondary">Direct Support Desk</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-secondary text-amber-500" />
                <span>Shop 35, DDA Market Sector 10 Dwarka</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-secondary" />
                <span>+91 9868180800, +91 7669883030</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>suvidhalegals35@gmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Sub-Footer copyrights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-gray-500 font-mono space-y-2">
          <p>© {new Date().getFullYear()} Suvidha Documents. Led by Advocate Yash Gupta. All Rights Reserved.</p>
          <p className="text-gray-600">Designed with absolute compliance guidelines for Delhi NCT citizen documentation.</p>
        </div>
      </footer>

    </div>
  );
}
