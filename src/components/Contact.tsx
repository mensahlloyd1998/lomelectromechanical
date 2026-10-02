import React, { useState } from "react";
import { contactDetails } from "../data";
import { Button } from "./Button";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  CheckCircle2,
  Building,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: contactDetails.serviceOptions[0],
    territory: contactDetails.territoryOptions[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMessage("Please fill in all required fields marked with *");
      return;
    }

    // PLUG-IN POINT FOR REAL API ENDPOINT:
    // e.g. Formspree, EmailJS, or custom backend POST /api/contact
    // Example:
    // await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    setErrorMessage("");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-[#e2e7ff] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-[#0088E8] uppercase font-semibold mb-3">
            — {contactDetails.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight mb-4">
            {contactDetails.title}
          </h2>
          <p className="text-sm sm:text-base text-[#404752] leading-relaxed">
            {contactDetails.subline}
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#faf8ff] border border-[#d2d9f4]/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2942] mb-3">
                  Thank you, we'll be in touch.
                </h3>
                <p className="text-sm sm:text-base text-[#404752] max-w-md mb-8">
                  Your project enquiry has been logged with our engineering directors. A designated project engineer will review your specifications and contact you shortly.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      service: contactDetails.serviceOptions[0],
                      territory: contactDetails.territoryOptions[0],
                      message: "",
                    });
                  }}
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-[#0F2942] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Kwg. Kwame Appiah"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#0F2942] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0088E8] focus:ring-2 focus:ring-[#0088E8]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#0F2942] mb-1.5"
                    >
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="k.appiah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#0F2942] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0088E8] focus:ring-2 focus:ring-[#0088E8]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-[#0F2942] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+233 24 000 0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#0F2942] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0088E8] focus:ring-2 focus:ring-[#0088E8]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-[#0F2942] mb-1.5"
                    >
                      Organization / Client Entity
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="e.g. Apex Industrial Developments"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#0F2942] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0088E8] focus:ring-2 focus:ring-[#0088E8]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Service & Territory */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-[#0F2942] mb-1.5"
                    >
                      Primary Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#0F2942] text-sm focus:outline-none focus:border-[#0088E8] focus:ring-2 focus:ring-[#0088E8]/20 transition-all"
                    >
                      {contactDetails.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="territory"
                      className="block text-xs font-semibold text-[#0F2942] mb-1.5"
                    >
                      Project Territory *
                    </label>
                    <select
                      id="territory"
                      name="territory"
                      value={formData.territory}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#0F2942] text-sm focus:outline-none focus:border-[#0088E8] focus:ring-2 focus:ring-[#0088E8]/20 transition-all"
                    >
                      {contactDetails.territoryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-[#0F2942] mb-1.5"
                  >
                    Project Brief & Key Specifications *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Outline scope, square meterage, target dates, or tender requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#0F2942] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0088E8] focus:ring-2 focus:ring-[#0088E8]/20 transition-all resize-y"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    <span>Send Engineering Enquiry</span>
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs text-[#49607c]">
                  <Shield className="w-4 h-4 text-[#0088E8] shrink-0" />
                  <span>
                    All design schematics and inquiries protected under our non-disclosure protocol.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Office Hubs & Map Placeholder */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Ghana HQ Card */}
            <div className="bg-[#faf8ff] border border-[#d2d9f4]/80 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#0088E8] mb-2 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0088E8]"></span>
                <span>{contactDetails.ghanaOffice.badge}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F2942] mb-2">
                {contactDetails.ghanaOffice.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#404752] mb-3 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0088E8] shrink-0 mt-0.5" />
                <span>{contactDetails.ghanaOffice.address}</span>
              </p>
              <div className="space-y-1.5 text-xs sm:text-sm font-mono text-[#49607c]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#0088E8]" />
                  <a
                    href={`tel:${contactDetails.ghanaOffice.phoneTel}`}
                    className="hover:text-[#0088E8] transition-colors"
                  >
                    {contactDetails.ghanaOffice.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#0088E8]" />
                  <a
                    href={`mailto:${contactDetails.ghanaOffice.email}`}
                    className="hover:text-[#0088E8] transition-colors"
                  >
                    {contactDetails.ghanaOffice.email}
                  </a>
                </div>
              </div>
            </div>

            {/* UK Design Hub Card */}
            <div className="bg-[#faf8ff] border border-[#d2d9f4]/80 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#0088E8] mb-2 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0088E8]"></span>
                <span>{contactDetails.ukOffice.badge}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F2942] mb-2">
                {contactDetails.ukOffice.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#404752] mb-3 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0088E8] shrink-0 mt-0.5" />
                <span>{contactDetails.ukOffice.address}</span>
              </p>
              <div className="space-y-1.5 text-xs sm:text-sm font-mono text-[#49607c]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#0088E8]" />
                  <a
                    href={`tel:${contactDetails.ukOffice.phoneTel}`}
                    className="hover:text-[#0088E8] transition-colors"
                  >
                    {contactDetails.ukOffice.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#0088E8]" />
                  <a
                    href={`mailto:${contactDetails.ukOffice.email}`}
                    className="hover:text-[#0088E8] transition-colors"
                  >
                    {contactDetails.ukOffice.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Stylized Map Placeholder */}
            <div className="relative rounded-xl overflow-hidden border border-[#CBD5E1] bg-[#e2e8f0] h-44 shadow-inner flex items-center justify-center">
              {/* Technical Schematic Vector Map */}
              <svg className="w-full h-full object-cover opacity-80" viewBox="0 0 500 200" fill="none">
                <rect width="500" height="200" fill="#e8edf5" />
                {/* Coastal line / geographic contour */}
                <path
                  d="M0,130 C120,120 180,140 260,110 C340,80 420,130 500,100 L500,200 L0,200 Z"
                  fill="#cddaf0"
                />
                {/* Grid / Roads */}
                <path d="M50,0 L50,200 M150,0 L150,200 M250,0 L250,200 M350,0 L350,200 M450,0 L450,200" stroke="#bccbde" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M0,50 L500,50 M0,100 L500,100 M0,150 L500,150" stroke="#bccbde" strokeWidth="1" strokeDasharray="3 3" />
                {/* Major routes */}
                <path d="M40,160 Q180,80 320,110 T480,70" stroke="#94a3b8" strokeWidth="3" />
                <path d="M260,30 L260,190" stroke="#94a3b8" strokeWidth="2.5" />
                
                {/* Tema Marker */}
                <circle cx="260" cy="110" r="10" fill="#0088E8" fillOpacity="0.2" />
                <circle cx="260" cy="110" r="5" fill="#0088E8" />
                <text x="275" y="114" fill="#0F2942" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  Tema HQ
                </text>
                
                {/* Accra / London corridor indication */}
                <circle cx="120" cy="95" r="4" fill="#005ea3" />
                <text x="75" y="85" fill="#49607c" fontSize="10" fontFamily="sans-serif">
                  Accra Design Studio
                </text>
              </svg>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono font-semibold text-[#005ea3] border border-[#CBD5E1]">
                DUAL HUB LOGISTICS
              </div>
            </div>

            {/* Operating Schedule Strip */}
            <div className="bg-[#eaedff] border border-[#d2d9f4] rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#0F2942] gap-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0088E8]" />
                <span>
                  <strong>Operating Schedule:</strong> {contactDetails.schedule}
                </span>
              </div>
              <div className="text-[#005ea3] font-semibold">
                {contactDetails.support}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
