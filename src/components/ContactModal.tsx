import React, { useState } from 'react';
import { X, Send, CheckCircle, Mail, MapPin, Building2, User } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    location: '',
    binCount: '1-5 stations',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Optional auto-close or reset
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors focus:outline-none cursor-pointer"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 text-[#2EB551] flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={36} />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#181818]">
              Thank You!
            </h3>
            <p className="mt-2 font-['Poppins'] text-slate-600 max-w-md mx-auto">
              We received your message. Our team at Sortla will get back to you shortly with deployment hardware guides & pilot details.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#181818] text-white rounded-xl font-['Poppins'] font-medium text-sm hover:bg-black transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="font-serif text-3xl font-bold text-[#181818]">
                Get in Touch with Sortla
              </h3>
              <p className="mt-1 font-['Poppins'] text-sm text-slate-500">
                Deploy on-device waste sorting at your office, campus, café, or event.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-['Poppins']">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2EB551] focus:ring-2 focus:ring-[#2EB551]/20 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2EB551] focus:ring-2 focus:ring-[#2EB551]/20 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Organization
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Company / University"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2EB551] focus:ring-2 focus:ring-[#2EB551]/20 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Location / City
                  </label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Bali, Indonesia"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2EB551] focus:ring-2 focus:ring-[#2EB551]/20 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Estimated Stations
                  </label>
                  <select
                    value={formData.binCount}
                    onChange={(e) => setFormData({ ...formData, binCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2EB551] focus:ring-2 focus:ring-[#2EB551]/20 outline-none text-sm bg-white"
                  >
                    <option value="1-5 stations">1 - 5 stations</option>
                    <option value="6-20 stations">6 - 20 stations</option>
                    <option value="20+ stations">20+ stations (Campus/Site)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  How can we help?
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your waste sorting setup or pilot requirements..."
                  className="w-full p-3 rounded-xl border border-slate-200 focus:border-[#2EB551] focus:ring-2 focus:ring-[#2EB551]/20 outline-none text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#2EB551] hover:bg-[#259b44] text-white font-['Poppins'] font-bold text-base shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={18} />
                <span>Send Pilot Inquiry</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
