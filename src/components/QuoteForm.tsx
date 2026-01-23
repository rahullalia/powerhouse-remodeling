"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homeownerStatus: "",
    projectType: "",
    timeline: "",
    budget: "",
    zipCode: "",
    website: "", // Honeypot field
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: if website is filled, it's a bot
    if (formData.website) {
      // Fake success to fool the bot
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          homeownerStatus: "",
          projectType: "",
          timeline: "",
          budget: "",
          zipCode: "",
          website: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-400">
          We&apos;ll contact you within 24 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
      />

      {/* Honeypot Field - Hidden from humans */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
      />
      <select
        required
        value={formData.homeownerStatus}
        onChange={(e) => setFormData({ ...formData, homeownerStatus: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
      >
        <option value="" disabled>Are you the homeowner?</option>
        <option value="owner">Yes, I own this home</option>
        <option value="renter">No, I&apos;m renting</option>
        <option value="buying">I&apos;m buying soon</option>
      </select>
      <select
        required
        value={formData.projectType}
        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
      >
        <option value="" disabled>What bathroom project?</option>
        <option value="complete_remodel">Complete Bathroom Remodel</option>
        <option value="shower_replacement">Shower Replacement</option>
        <option value="tub_to_shower">Tub to Shower Conversion</option>
        <option value="walkin_tub">Walk-in Tub Installation</option>
        <option value="bathtub_replacement">Bathtub Replacement</option>
        <option value="other">Other</option>
      </select>

      <select
        required
        value={formData.timeline}
        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
      >
        <option value="" disabled>When do you want to start?</option>
        <option value="2_weeks">Within 2 weeks</option>
        <option value="30_days">Within 30 days</option>
        <option value="1_3_months">1-3 months</option>
        <option value="researching">Just researching</option>
      </select>
      <select
        required
        value={formData.budget}
        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
      >
        <option value="" disabled>Estimated budget?</option>
        <option value="under_3k">Under $3,000</option>
        <option value="3k_5k">$3,000 - $5,000</option>
        <option value="5k_10k">$5,000 - $10,000</option>
        <option value="10k_plus">$10,000+</option>
        <option value="not_sure">Not sure yet</option>
      </select>
      <input
        type="text"
        placeholder="Zip Code (e.g., 85035)"
        required
        maxLength={5}
        value={formData.zipCode}
        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-50 mt-2"
      >
        {status === "submitting" ? "Submitting..." : "Get My Free Quote"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="text-gray-500 text-sm text-center">
        No spam. We respect your privacy.
      </p>
    </form>
  );
}
