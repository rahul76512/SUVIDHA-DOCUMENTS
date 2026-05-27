/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  name: string;
  description: string;
  requiredDocs: string[];
  completionTime: string;
  feeEstimate?: string;
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name representation
  services: ServiceItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number; // 1-5 stars
  avatarUrl?: string;
  initials: string;
  organization?: string;
}

export interface Consultation {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
}
