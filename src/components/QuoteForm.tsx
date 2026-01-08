"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    zipCode: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          projectType: "",
          timeline: "",
          zipCode: "",
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
        value={formData.projectType}
        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
      >
        <option value="">What project are you interested in?</option>
        <option value="bathroom">Bathroom Remodel</option>
        <option value="roofing">Roofing</option>
        <option value="painting">Exterior Painting</option>
        <option value="flooring">Flooring</option>
        <option value="other">Other</option>
      </select>
      <select
        required
        value={formData.timeline}
        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
      >
        <option value="">When do you want to start?</option>
        <option value="asap">As soon as possible</option>
        <option value="1-2weeks">Within 1-2 weeks</option>
        <option value="1month">Within a month</option>
        <option value="flexible">Flexible timeline</option>
      </select>
      <input
        type="text"
        placeholder="Zip Code"
        required
        value={formData.zipCode}
        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-4 rounded-lg text-lg font-semibold transition-colors"
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
