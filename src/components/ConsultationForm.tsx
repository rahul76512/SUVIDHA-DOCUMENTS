/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../data';
import { CheckCircle2, Calendar, Clock, Send, MessageSquare, Plus, ArrowRight } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(SERVICE_CATEGORIES[0].id);
  const [selectedServiceName, setSelectedServiceName] = useState<string>(SERVICE_CATEGORIES[0].services[0].name);
  
  // Client input state
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [prefDate, setPrefDate] = useState("");
  const [prefTime, setPrefTime] = useState("11:30");
  const [notes, setNotes] = useState("");
  
  // Submission success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  const handleCategoryChange = (catId: string) => {
    setSelectedCategoryId(catId);
    const category = SERVICE_CATEGORIES.find(c => c.id === catId);
    if (category && category.services.length > 0) {
      setSelectedServiceName(category.services[0].name);
    }
  };

  const getSelectedCategory = () => {
    return SERVICE_CATEGORIES.find(c => c.id === selectedCategoryId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phone) {
      alert("Please provide at least your Name and Phone Number.");
      return;
    }

    // Generate accurate structured legal inquiry reference ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const dateCode = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const refCode = `SD-${selectedCategoryId.toUpperCase().slice(0, 3)}-${randomNum}`;
    
    setReferenceNumber(refCode);
    setIsSubmitted(true);
  };

  // Build the WhatsApp message payload for the customer to send directly to Adv Yash Gupta!
  const getWhatsAppMessageLink = () => {
    const category = getSelectedCategory()?.title || "";
    const textMessage = `Hello Suvidha Documents! I have initiated a documentation enquiry:\n\n` +
      `*Reference:* ${referenceNumber}\n` +
      `*Client:* ${clientName}\n` +
      `*Phone:* ${phone}\n` +
      `*Category:* ${category}\n` +
      `*Service Request:* ${selectedServiceName}\n` +
      `*Preferred Date:* ${prefDate || 'ASAP'}\n` +
      `*Preferred Time:* ${prefTime}\n` +
      `*Additional Notes:* ${notes || 'None'}\n\n` +
      `Please confirm my slot and documentation checklist. Thanks!`;
    
    return `https://wa.me/919868180800?text=${encodeURIComponent(textMessage)}`;
  };

  const handleReset = () => {
    setClientName("");
    setPhone("");
    setEmail("");
    setPrefDate("");
    setPrefTime("11:30");
    setNotes("");
    setIsSubmitted(false);
    setActiveStep(1);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg border border-emerald-100 shadow-xl p-8 text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-5">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        
        <span className="text-xs bg-emerald-100 text-emerald-800 font-mono px-3 py-1 rounded-sm uppercase tracking-wider font-semibold">
          Enquiry Registered
        </span>
        
        <h3 className="font-serif text-2xl font-bold mt-3 text-brand-primary">Thank You, {clientName}!</h3>
        <p className="font-mono text-sm font-semibold text-brand-secondary mt-1">
          Inquiry Ref: {referenceNumber}
        </p>

        <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          Your documentation request for <strong className="text-gray-800">{selectedServiceName}</strong> is compiled. To guarantee quick tracking and receive your personalized list of required checklist documents instantly, forward this reference over secure WhatsApp directly.
        </p>

        {/* Primary Action */}
        <div className="mt-8 space-y-3">
          <a
            href={getWhatsAppMessageLink()}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xs transition-all shadow-md text-base"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Send Details via WhatsApp</span>
          </a>

          <button
            onClick={handleReset}
            className="w-full text-xs text-gray-400 font-mono hover:text-brand-primary transition-colors py-2"
          >
            ← Register New Request / Reset Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-xl overflow-hidden max-w-4xl mx-auto">
      {/* Wizard Header Progress Bar */}
      <div className="grid grid-cols-2 text-center text-xs font-mono tracking-wider border-b border-gray-100">
        <button
          onClick={() => setActiveStep(1)}
          className={`py-4 font-semibold transition-colors flex items-center justify-center gap-2 ${
            activeStep === 1 ? 'bg-amber-50/50 text-brand-secondary border-b-2 border-brand-secondary' : 'text-gray-400 bg-gray-50/30'
          }`}
        >
          <span className="w-5 h-5 rounded-full bg-brand-secondary text-white inline-flex items-center justify-center text-[10px] font-bold">1</span>
          SELECT LEGAL SERVICE
        </button>
        <button
          onClick={() => {
            if (activeStep === 1) setActiveStep(2);
          }}
          className={`py-4 font-semibold transition-colors flex items-center justify-center gap-2 ${
            activeStep === 2 ? 'bg-amber-50/50 text-brand-secondary border-b-2 border-brand-secondary' : 'text-gray-400 bg-gray-50/30'
          }`}
        >
          <span className="w-5 h-5 rounded-full bg-brand-primary text-white inline-flex items-center justify-center text-[10px] font-bold">2</span>
          CLIENT DETAILS & TIME
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        {activeStep === 1 ? (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase tracking-wilder mb-2.5">
                Service Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {SERVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`p-4 rounded-sm border text-center transition-all flex flex-col items-center justify-center gap-2 select-none ${
                      selectedCategoryId === cat.id
                        ? 'border-brand-secondary bg-amber-50/20 shadow-xs'
                        : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                    }`}
                  >
                    <span className="text-brand-secondary text-sm font-semibold truncate max-w-full block">
                      {cat.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="service-select" className="block text-xs font-mono text-gray-400 uppercase tracking-wilder mb-2">
                Specific Document / Legal Assistance
              </label>
              <select
                id="service-select"
                value={selectedServiceName}
                onChange={(e) => setSelectedServiceName(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-sm py-3 px-4 text-sm font-sans font-medium text-gray-800 bg-white focus:border-brand-primary outline-hidden"
              >
                {getSelectedCategory()?.services.map((srv) => (
                  <option key={srv.name} value={srv.name}>
                    {srv.name} {srv.isPopular ? '★ (Most Popular)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick documentation guidance banner */}
            <div className="bg-amber-50/40 p-5 rounded-sm border border-amber-100/50">
              <h4 className="text-xs font-mono text-brand-secondary uppercase tracking-wider font-bold mb-1">
                Estimated Service Timeline
              </h4>
              <p className="text-xs font-sans text-gray-600 leading-relaxed">
                The targeted system processing duration for <strong className="text-gray-900">{selectedServiceName}</strong> is generally <span className="text-brand-secondary font-semibold">{getSelectedCategory()?.services.find(s => s.name === selectedServiceName)?.completionTime || '5-10 Days'}</span>, subject to verification checkpoints opposite SDM.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="flex items-center gap-2 bg-brand-primary text-white font-semibold py-3 px-6 rounded-sm text-sm hover:bg-brand-secondary transition-colors"
              >
                <span>Proceed to Client Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="client-name-input" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-semibold">
                  Full Name of Applicant *
                </label>
                <input
                  id="client-name-input"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full border border-gray-200 rounded-sm py-2.5 px-3 text-sm focus:border-brand-primary outline-hidden font-sans placeholder:text-gray-300"
                />
              </div>

              <div>
                <label htmlFor="phone-input" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-semibold">
                  Active Mobile / WhatsApp *
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  required
                  placeholder="e.g. 98681XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-sm py-2.5 px-3 text-sm focus:border-brand-primary outline-hidden font-sans placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-1">
                <label htmlFor="email-input" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-semibold">
                  Email Address
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 rounded-sm py-2.5 px-3 text-sm focus:border-brand-primary outline-hidden font-sans placeholder:text-gray-300"
                />
              </div>

              <div>
                <label htmlFor="pref-date-input" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-semibold">
                  Preferred Date
                </label>
                <input
                  id="pref-date-input"
                  type="date"
                  value={prefDate}
                  onChange={(e) => setPrefDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-sm py-2 px-3 text-sm focus:border-brand-primary outline-hidden font-sans"
                />
              </div>

              <div>
                <label htmlFor="pref-time-input" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-semibold">
                  Desired Hour Slot
                </label>
                <select
                  id="pref-time-input"
                  value={prefTime}
                  onChange={(e) => setPrefTime(e.target.value)}
                  className="w-full border border-gray-200 rounded-sm py-2.5 px-3 text-sm focus:border-brand-primary outline-hidden bg-white-50 font-sans"
                >
                  <option value="11:00 AM">11:00 AM - Morning Desk</option>
                  <option value="01:00 PM">01:00 PM - Afternoon Desk</option>
                  <option value="03:00 PM">03:00 PM - Registry Slot</option>
                  <option value="05:30 PM">05:30 PM - General Advocacy</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="notes-area" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-1.5 font-semibold">
                Additional Instructions / Legacy Document Details / Case Background
              </label>
              <textarea
                id="notes-area"
                rows={3}
                placeholder="Brief details about any current corrections or urgency details..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-200 rounded-sm py-2.5 px-3 text-sm focus:border-brand-primary outline-hidden font-sans placeholder:text-gray-300 resize-none"
              />
            </div>

            {/* Form control buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className="text-xs font-sans text-gray-500 hover:text-brand-primary font-medium"
              >
                ← Back to Service Picker
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 bg-brand-primary text-white font-semibold py-3 px-8 rounded-sm text-sm hover:bg-brand-secondary transition-colors shadow-xs"
              >
                <Send className="w-4 h-4 text-brand-secondary animate-bounce" />
                <span>Submit Documentation Request</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
