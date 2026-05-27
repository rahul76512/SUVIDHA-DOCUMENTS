/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceCategory, FAQItem, Testimonial } from './types';

export const OWNER_DETAILS = {
  name: "Advocate Yash Gupta",
  role: "Owner & Principal Advocate",
  barRegistration: "D/1092/2018", // Realistic bar council ID for Advocate
  about: "Specializing in revenue law, civil litigation, documentation, and property validation with over 8 years of trusted legal advisory experience at the Dwarka Court and SDM Office Sector 10. Committed to delivering seamless documentation services to the citizens of Delhi and beyond.",
  address: "Shop No-35, DDA Market, opposite SDM Office, Sector 10 Dwarka, Delhi, 110075",
  primaryPhone: "+91 9868180800",
  secondaryPhone: "+91 7669883030",
  whatsApp: "+91 9868180800",
  email: "suvidhalegals35@gmail.com",
  mapsLink: "https://maps.app.goo.gl/Hp8pUzmPpBZeFUBv6",
  timings: "Monday to Saturday: 10:00 AM - 07:30 PM (Sunday Closed)"
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "aadhaar",
    title: "Aadhaar Services",
    description: "Official UIDAI services for new enrollment, information updates, and biometric authentication.",
    icon: "Fingerprint",
    services: [
      {
        name: "New Aadhaar Enrollment",
        description: "Fresh enrollment for children or adults who do not already possess an Aadhaar card.",
        requiredDocs: ["Birth Certificate / School TC", "Valid Identity Proof (PAN/Passport/Voter ID)", "Address Proof (Electricity Bill/Water Bill)"],
        completionTime: "15 to 30 Working Days",
        isPopular: true
      },
      {
        name: "Aadhaar Card Update",
        description: "Correction of name, father's name, Date of Birth, gender, address, language, or phone number/email.",
        requiredDocs: ["Valid supporting document (e.g., Gazette Notification for name change, Matriculation Certificate for DOB)", "Original Address Proof document with matching name", "Active Mobile Number for OTP OTP verification"],
        completionTime: "5 to 7 Working Days",
        isPopular: true
      },
      {
        name: "Biometric Update",
        description: "Mandatory biometric update for children (at age 5 and 15) or fingerprint re-verification for facial/iris issues.",
        requiredDocs: ["Original Aadhaar Card", "Physical presence of the applicant is mandatory at the center"],
        completionTime: "5 to 10 Working Days"
      },
      {
        name: "Aadhaar PVC Card",
        description: "Order high-quality, durable pocket-sized PVC Aadhaar card with secure holographic printing from UIDAI.",
        requiredDocs: ["Aadhaar Number or Enrolment ID", "Mobile number linked with Aadhaar or Alternate mobile for OTP"],
        completionTime: "10 to 14 Days (Home Delivery)"
      },
      {
        name: "E-Aadhaar Download",
        description: "Instant download, verification, and print of authenticated digitally signed e-Aadhaar copies.",
        requiredDocs: ["Aadhaar Card Number / Enrolment ID", "OTP sent to the registered mobile number"],
        completionTime: "Within 1 Hour"
      },
      {
        name: "Aadhaar Verification",
        description: "Verify that an Aadhaar card is active, valid, and matches status, state, age, and phone number parameters.",
        requiredDocs: ["Aadhaar Card Number to verify"],
        completionTime: "Instant"
      }
    ]
  },
  {
    id: "certificates",
    title: "Certificate Services",
    description: "Authorized application support for government-issued status and income certificates in Delhi NCT.",
    icon: "Award",
    services: [
      {
        name: "Income Certificate",
        description: "Official certificate issued by the Tehsildar as proof of the combined annual income of family members.",
        requiredDocs: ["Address Proof of Delhi (Electricity bill/Gas connection etc.)", "Salary Slips / ITR / Form 16", "Affidavit declaring yearly income sources", "Aadhaar Card and Voter ID Card of applicant"],
        completionTime: "14 to 21 Working Days",
        isPopular: true
      },
      {
        name: "Domicile Certificate",
        description: "Delhi domicile certificate ensuring permanent residence proof for school admissions, benefits, or recruitments.",
        requiredDocs: ["Proof of living in Delhi continuously for the last 3 years", "Aadhaar Card & Voter ID card", "School certificate of continuous study (if student)", "Land ownership/Rent document"],
        completionTime: "15 to 20 Working Days"
      },
      {
        name: "SC/ST/OBC Certificate",
        description: "Caste verification certificate required to claim state-sponsored reservation or benefit quotas.",
        requiredDocs: ["Caste proof from paternal relatives (e.g., father's caste certificate)", "Delhi residency proof", "Affidavit declaring caste lineage", "School certificate showing caste category if any"],
        completionTime: "21 to 30 Working Days"
      },
      {
        name: "EWS Certificate",
        description: "Economically Weaker Section certificate for general category candidates seeking reservation benefits.",
        requiredDocs: ["ITR filings / Form 16 for all family members", "Property holding papers (Agricultural, Residential flat or Plot)", "Delhi residential proof", "Income declaration affidavit"],
        completionTime: "21 to 30 Working Days"
      },
      {
        name: "Birth Certificate",
        description: "Fresh certificate issuance or addition of child's name in MCD/DDA records.",
        requiredDocs: ["Hospital Discharge Summary / Birth Record slip", "Aadhaar card of both father and mother", "Marriage Certificate of parents", "Affidavit with child's name for late entry"],
        completionTime: "7 to 14 Working Days",
        isPopular: true
      },
      {
        name: "Death Certificate",
        description: "Official notification registration of death with Municipal Corporation of Delhi (MCD).",
        requiredDocs: ["Hospital Death Report/Cremation ground receipt", "Aadhaar and Identity Proof of the deceased", "Identity proof of the applicant relative"],
        completionTime: "7 to 14 Working Days"
      },
      {
        name: "Marriage Certificate",
        description: "Legal record of marriage registration under Delhi Hindu Marriage Act or Special Marriage Act.",
        requiredDocs: ["Age proof of both Husband and Wife (10th pass/Birth Certificate)", "Address proof (Aadhaar or Passport)", "04 Joint Photographs of marriage custom", "02 Wedding Witnesses with Address Cards", "Wedding invitation card and Mandir registration"],
        completionTime: "15 to 30 Working Days",
        isPopular: true
      },
      {
        name: "SMC Certificate",
        description: "Service Marriage Certificate and MCD related documentation verification support.",
        requiredDocs: ["Delhi residential address proof", "Marriage details and sworn affidavit", "Identity proof cards"],
        completionTime: "10 to 15 Days"
      }
    ]
  },
  {
    id: "id_gov",
    title: "ID & Government Services",
    description: "Hassle-free application assistance for crucial primary ID proofs and official gazette publications.",
    icon: "FileText",
    services: [
      {
        name: "PAN Card Services",
        description: "Application for fresh Permanent Account Number (Individual/Firm/Company) or structural corrections.",
        requiredDocs: ["Aadhaar Card (For instant e-PAN verification)", "Color passport sized photographs (for manual sign process)", "Existing PAN Card (if correction)"],
        completionTime: "7 to 10 Working Days",
        isPopular: true
      },
      {
        name: "Voter ID Card",
        description: "Registration of fresh voter card, address replacement, or deletion of old electors inside Delhi NCT.",
        requiredDocs: ["Aadhaar Card / Age proof document", "Address Proof indicating local constituency match", "One clear Passport sized portrait"],
        completionTime: "15 to 25 Working Days"
      },
      {
        name: "Driving License Services",
        description: "Support for Learner's License, Permanent License booking, renewal, and state-transfer NOC filings.",
        requiredDocs: ["Age proof & Address proof", "Medical fitness certificate Form 1-A (for transport/above age 40)", "Existing LL card / DL folder"],
        completionTime: "7 to 15 Working Days"
      },
      {
        name: "Passport Assistance",
        description: "Complete form filing, documentation check, and appointment booking at PSK Dwarka / RK Puram.",
        requiredDocs: ["Aadhaar Card showing complete match with DOB", "10th Class mark sheet (for Non-ECR status)", "Active bank statement passbook with photo / utility bills"],
        completionTime: "15 to 30 Days (Direct government process)",
        isPopular: true
      },
      {
        name: "Gazette Notification Work",
        description: "Government of India Gazette printing process for Name correction, religion conversion, or spelling updates.",
        requiredDocs: ["Original signed SDM/Notary Name Change Affidavit", "News advertisement copies (01 English + 01 Hindi Paper)", "Request letter and demand draft formatting", "Digital CD compilation form"],
        completionTime: "30 to 45 Working Days"
      }
    ]
  },
  {
    id: "legal",
    title: "Legal Services",
    description: "Expert civil documentation drafting, affidavits, registrations, and consultation with Advocate Yash Gupta.",
    icon: "ShieldAlert",
    services: [
      {
        name: "Rent Agreement Preparation",
        description: "Drafting and notarization of valid, bulletproof 11-month tenancy agreements for residential or commercial properties.",
        requiredDocs: ["Landlord Aadhaar and PAN Card proof", "Tenant Aadhaar and corporate/ID proof", "Ownership Proof (latest registry copy, DDA allotment letter or property tax receipt)"],
        completionTime: "1 to 2 Working Days",
        isPopular: true
      },
      {
        name: "Legal Affidavit Drafting",
        description: "Drafting of precise, non-ambiguous affidavits (Name change, income, gaps, address correction, marriage declaration).",
        requiredDocs: ["Specific details of the declaration and stamp requirement", "Aadhaar Card or Voter ID of the deponent"],
        completionTime: "1 Working Day",
        isPopular: true
      },
      {
        name: "Legal Consultation",
        description: "Direct legal consultation with Advocate Yash Gupta on civil matters, estate drafting, or SDM revenue legalities.",
        requiredDocs: ["All related documents, court notes, or property papers", "Case brief or summary questions"],
        completionTime: "Scheduled Appointment"
      },
      {
        name: "Marriage Registration Consultancy",
        description: "Drafting documentation and securing registrar date slots at District Court Dwarka.",
        requiredDocs: ["Full set of age, residency, and marriage rituals photos", "MCD marriage registration slips", "WITNESS complete local credentials"],
        completionTime: "15 to 20 Days"
      },
      {
        name: "Legal Heir Certificate",
        description: "Application for Surviving Member Certificate or Legal Heirship at SDM revenue division.",
        requiredDocs: ["Death Certificate of deceased", "LOD / Surviving member details with self-declaration", "Joint affidavit from all survivors", "Family structure proofs"],
        completionTime: "30 to 60 Days"
      }
    ]
  },
  {
    id: "property",
    title: "Property & Land Registry",
    description: "End-to-end guidance for property sale deed registry, stamping, DDA liaison work, and Mutation clearances.",
    icon: "Home",
    services: [
      {
        name: "Property Registration / Registry",
        description: "Meticulous draftsmanship of Sale Deeds, Gift Deeds, Relinquishment Deeds, and direct registration at Dwarka Sub-Registrar's Office.",
        requiredDocs: ["Prior Mother Registry Documents", "PAN Card and Aadhaar cards of Buyer and Seller", "Two local Witnesses with valid Delhi NCT ID proofs", "Latest e-stamp payments receipt & MCD mutation bills"],
        completionTime: "3 to 7 Days",
        isPopular: true
      },
      {
        name: "DDA Flat Documentation Work",
        description: "Complete DDA flat allotment compliance, conversion from Leasehold to Freehold, conveyance deeds.",
        requiredDocs: ["Original DDA Allotment and possession letter", "Challan payments for land costs", "Continuous chain of prior power of attorneys (if any)"],
        completionTime: "30 to 60 Days"
      },
      {
        name: "Mutation / NOC / Stampings",
        description: "Property Mutation application inside MCD/DDA offices, NOC extraction from fire/municipal boards, and stamp duty optimization.",
        requiredDocs: ["Registered Sale Deed in name of current buyer", "Application form with land map layout", "Copy of up-to-date Paid Property Tax receipts"],
        completionTime: "20 to 45 Days"
      }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Where is the Suvidha Documents office located exactly in Delhi?",
    answer: "Our registered office is Shop No-35, DDA Market, directly opposite the SDM Office in Sector 10 Dwarka, Delhi, 110075. Being placed exactly opposite the SDM Office makes it quick and easy to get affidavits signed, certificates cross-checked, or registry documents presented to SDM/Tehsildar officers.",
    category: "General"
  },
  {
    question: "Do I need to carry original documents when visiting Shop No-35 opposite SDM office?",
    answer: "Yes, for verification purposes by Delhi government portal applications and Aadhaar updates, carrying original documents (such as marksheets, old passports, registry chain documents) with matching spelling is highly recommended.",
    category: "General"
  },
  {
    question: "Can Advocate Yash Gupta help with complex property registry legal disputes?",
    answer: "Absolutely! Advocate Yash Gupta specializes in revenue and property law. He can represent clients for registry, mutation procedures, DDA validation checks, title verification, or draft complex custom partnership deeds and court affidavits.",
    category: "Legal Services"
  },
  {
    question: "How long does it take to prepare and notarize a Rent Agreement in Dwarka Sector 10?",
    answer: "For standard residential/commercial 11-month Agreements, we draft them in 15 to 30 minutes. Once vetted by the landlord and tenant, you can get it notarized or e-registered on the same day during our active working hours.",
    category: "Rent Agreements"
  },
  {
    question: "Is online filing support available, or do I have to visit the office physically?",
    answer: "We support both online and hybrid models. For online services like E-Aadhaar, instant PAN, or initial certificate applications, you can securely email documents to suvidhalegals35@gmail.com or send copies via WhatsApp (+91 9868180800). For final registry biometric signatures or notarization, a quick office visit is required.",
    category: "General"
  },
  {
    question: "What are the government portal charges for SC/OBC or Income Certificate?",
    answer: "The government fee itself is nominal, but structural documentation formulation, affidavits drafting, MCD e-portal formatting, verification coordination, and stamp paper costs depend on individual certificate complexity. We provide an exact, highly transparent estimate with no hidden costs.",
    category: "Certificates"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh K. Sehrawat",
    role: "Local Business Owner, Dwarka Sector 12",
    text: "Getting our commercial rent agreement along with the stamp verification was smooth. Since they are positioned exactly opposite the SDM Office in Dwarka Sector 10, the coordination with the registry officer took less than an hour. Highly recommended for accurate legal drafting!",
    rating: 5,
    initials: "RS"
  },
  {
    name: "Dr. Ananya Iyer",
    role: "Consultant, Manipal Hospital Dwarka",
    text: "I contacted Advocate Yash Gupta for name correction services in the official Indian Gazette. He compiled the newspaper advertisement cutting, prepared the SDM verified affidavit, and finalized the CD within days. Meticulous paperwork and absolute transparency.",
    rating: 5,
    initials: "AI"
  },
  {
    name: "Sunil Gahlot",
    role: "Resident, Palam Colony, Delhi",
    text: "Very reliable place inside Sector 10 DDA market. Suvidha Documents resolved a composite error on my biometric Aadhaar that UIDAI had rejected twice before. Friendly staff and fast follow-up.",
    rating: 5,
    initials: "SG"
  },
  {
    name: "Meenakshi Sharma",
    role: "Property Owner, Dwarka DDA Flats Sector 11",
    text: "Advocate Yash Gupta's guidance on freehold conversion and mutation of our family flat saved us from a complex broker scam. He did a thorough documentation title trace for 30 years and completed the registers legally. Exceptionally professional in property matters.",
    rating: 5,
    initials: "MS"
  }
];
