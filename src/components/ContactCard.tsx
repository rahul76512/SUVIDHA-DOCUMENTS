/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Share2, CornerDownRight, CheckCircle } from 'lucide-react';
import { OWNER_DETAILS } from '../data';

export const ContactCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-xl overflow-hidden">
      {/* Header Accent */}
      <div className="bg-brand-primary p-6 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 font-serif text-8xl -mr-10 -mt-10 select-none">
          §
        </div>
        <div className="relative z-10">
          <span className="text-xs bg-brand-secondary text-white font-mono px-2.5 py-1 rounded-xs uppercase tracking-wider font-semibold">
            In-Person Consultation
          </span>
          <h3 className="font-serif text-2xl font-bold mt-2.5">Visit Our Primary Office</h3>
          <p className="text-gray-300 text-xs mt-1.5 font-sans leading-relaxed">
            Conveniently positioned in Dwarka Sector 10 for direct walk-ins and document collection.
          </p>
        </div>
      </div>

      {/* Internal Details Block */}
      <div className="p-6 space-y-6">
        {/* Address */}
        <div className="flex gap-4">
          <div className="flex-none w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-brand-secondary">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-mono text-gray-400 tracking-wider uppercase font-semibold">Physical Location</h4>
            <p className="font-sans text-sm text-gray-800 font-medium mt-1 leading-relaxed">
              {OWNER_DETAILS.address}
            </p>
            <p className="text-xs text-brand-secondary font-medium mt-1.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full inline-block" />
              Directly opposite Sub-Registrar & SDM Office (Dwarka Sector 10)
            </p>
          </div>
        </div>

        {/* Timings */}
        <div className="flex gap-4">
          <div className="flex-none w-10 h-10 bg-blue-50/50 rounded-lg flex items-center justify-center text-brand-primary">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-mono text-gray-400 tracking-wider uppercase font-semibold">Office Schedule</h4>
            <p className="font-sans text-sm text-gray-800 mt-1 font-medium">
              {OWNER_DETAILS.timings}
            </p>
            <p className="text-xs text-green-600 font-medium mt-1.5">
              💡 Highly Recommended: 10:30 AM to 04:30 PM for SDM related works
            </p>
          </div>
        </div>

        {/* Support lines */}
        <div className="flex gap-4">
          <div className="flex-none w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
            <Phone className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-mono text-gray-400 tracking-wider uppercase font-semibold">Support Hotlines</h4>
            <div className="flex flex-col gap-1.5">
              <a href={`tel:${OWNER_DETAILS.primaryPhone}`} className="font-sans text-sm text-gray-900 font-bold hover:text-brand-secondary transition-colors inline-flex items-center gap-1.5">
                {OWNER_DETAILS.primaryPhone} <span className="text-[10px] bg-amber-100 text-brand-secondary px-1.5 py-0.2 rounded-xs">PRIMARY</span>
              </a>
              <a href={`tel:${OWNER_DETAILS.secondaryPhone}`} className="font-sans text-sm text-gray-800 font-medium hover:text-brand-secondary transition-colors">
                {OWNER_DETAILS.secondaryPhone} <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded-xs">REVENUE DESK</span>
              </a>
            </div>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex gap-4">
          <div className="flex-none w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-mono text-gray-400 tracking-wider uppercase font-semibold">Digital Desk (Email submissions)</h4>
            <a href={`mailto:${OWNER_DETAILS.email}`} className="font-sans text-sm text-gray-900 font-medium hover:text-brand-secondary transition-colors mt-1 block break-all font-mono">
              {OWNER_DETAILS.email}
            </a>
          </div>
        </div>

        {/* Verification and Legal Authority */}
        <div className="pt-5 border-t border-gray-100 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <Shield className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Advocate Yash Gupta (Bar Council ID: {OWNER_DETAILS.barRegistration})</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>Authorized Stamp Duty & Document Drafting Desk</span>
          </div>
        </div>

        {/* Action button: Maps route guidance */}
        <div className="pt-2">
          <a
            href={OWNER_DETAILS.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white py-3.5 text-sm rounded-sm font-semibold hover:bg-brand-secondary transition-all shadow-md group"
          >
            <span>Open in Google Maps</span>
            <CornerDownRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
