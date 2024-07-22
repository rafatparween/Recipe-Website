"use client"
import { useState } from 'react';

export default function Home() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [showPartnerOnboarding, setShowPartnerOnboarding] = useState(false);

  return (
    <div className="bg-[#37718e] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white text-center mb-8 mt-[60px]">
          Help & Support
        </h1>
        <p className="text-lg text-white text-center mb-16">
          Let's take a step ahead and help you better.
        </p>
        <div className="bg-white p-8 rounded-md shadow-md">
          <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setShowPartnerOnboarding(!showPartnerOnboarding)}>
            <h2 className="text-lg font-bold">Partner Onboarding</h2>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {showPartnerOnboarding && (
            <div className="ml-4">
              <div className="border-b py-2">
                <p className="text-gray-600">
                  I want to partner my restaurant with Swiggy
                </p>
              </div>
              <div className="border-b py-2">
                <p className="text-gray-600">
                  What are the mandatory documents needed to list my restaurant on Swiggy?
                </p>
              </div>
              <div className="border-b py-2">
                <p className="text-gray-600">
                  I want to opt-out from Google reserve
                </p>
              </div>
              <div className="border-b py-2">
                <p className="text-gray-600">
                  After I submit all documents, how long will it take for my restaurant to go live on Swiggy?
                </p>
              </div>
              <div className="border-b py-2">
                <p className="text-gray-600">
                  What is this one time Onboarding fees? Do I have to pay for it while registering?
                </p>
              </div>
              <div className="border-b py-2">
                <p className="text-gray-600">
                  Who should I contact if I need help & support in getting onboarded?
                </p>
              </div>
              <div className="border-b py-2">
                <p className="text-gray-600">
                  How much commission will I be charged by Swiggy?
                </p>
              </div>
              <div className="py-2">
                <p className="text-gray-600">
                  I don't have an FSSAI licence for my restaurant. Can it still be onboarded?
                </p>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setShowLegal(!showLegal)}>
            <h2 className="text-lg font-bold">Legal</h2>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {showLegal && (
            <div className="ml-4">
              {/* Add your legal content here */}
            </div>
          )}
          <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setShowFAQ(!showFAQ)}>
            <h2 className="text-lg font-bold">FAQs</h2>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {showFAQ && (
            <div className="ml-4">
              {/* Add your FAQ content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
