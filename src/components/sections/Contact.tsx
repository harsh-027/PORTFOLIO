import React, { useState } from 'react';
import { SectionFrame } from '../ui/SectionFrame';
import { ArrowUpRight, CheckCircle2, Loader2, Send } from 'lucide-react';

const budgetOptions = [
  '< $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $20,000',
  '> $20,000',
];

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('$5,000 – $10,000');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <SectionFrame id="contact">
      <div className="w-full flex flex-col gap-6">
        
        {/* Contact Form Card Container */}
        <div className="w-full p-6 sm:p-10 md:p-12 rounded-3xl bg-[#191919] border border-white/10 card-inset-glow shadow-2xl">
          
          <div className="border-b border-white/10 pb-6 mb-8">
            <span className="font-rajdhani text-xs sm:text-sm font-semibold tracking-wider text-[#C2184B] uppercase">
              Contact Form
            </span>
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-normal text-white mt-1">
              Contact For Work
            </h2>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-black/60 border border-green-500/40 text-center space-y-4 my-6">
              <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-rajdhani text-2xl font-medium text-white">
                Request Sent Successfully!
              </h3>
              <p className="font-rajdhani text-base text-white/70 max-w-md mx-auto">
                Thank you for reaching out. I’ve received your inquiry and will respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail('');
                  setPhone('');
                  setMessage('');
                }}
                className="mt-4 px-6 py-2 rounded-full border border-white/20 text-sm font-rajdhani text-white hover:bg-white/10 transition-colors"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Email & Phone Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block font-rajdhani text-sm font-medium text-white/80">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full h-12 bg-transparent border-b border-white/20 focus:border-[#8A0D2E] text-white font-rajdhani text-base px-1 focus:outline-none transition-colors placeholder:text-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="block font-rajdhani text-sm font-medium text-white/80">
                    Phone / Telegram (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9044726301"
                    className="w-full h-12 bg-transparent border-b border-white/20 focus:border-[#8A0D2E] text-white font-rajdhani text-base px-1 focus:outline-none transition-colors placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="block font-rajdhani text-sm font-medium text-white/80">
                  Project Details & Goals *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, timeline, and expectations..."
                  className="w-full bg-transparent border-b border-white/20 focus:border-[#8A0D2E] text-white font-rajdhani text-base px-1 py-2 focus:outline-none transition-colors placeholder:text-white/30 resize-y min-h-[120px]"
                />
              </div>

              {/* Budget Radio Pills */}
              <div className="space-y-3">
                <span className="block font-rajdhani text-sm font-medium text-white/80">
                  Estimated Project Budget
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {budgetOptions.map((option) => {
                    const isSelected = selectedBudget === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedBudget(option)}
                        className={`px-4 py-2 rounded-full font-mono-plex text-xs font-medium border transition-all ${
                          isSelected
                            ? 'bg-[#6D001A]/30 border-[#8A0D2E] text-[#C2184B] shadow-md'
                            : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-[335px] inline-flex items-center justify-between gap-4 pl-8 pr-2 py-3 rounded-full bg-white text-black font-rajdhani font-semibold text-base hover:bg-white/90 disabled:opacity-60 transition-all shadow-xl group active:scale-98"
                >
                  <span className="flex items-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin text-black" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Request</span>
                      </>
                    )}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </SectionFrame>
  );
};
