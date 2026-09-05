import React, { useState } from 'react';
import { BusinessPage } from '../components/common/BusinessPage';

export const EnquiryFormPage: React.FC = () => {
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Owner's WhatsApp number
    // Country code + number, WITHOUT + or spaces
    const ownerWhatsApp = '919949900434';

    const message = `
New Jewellery Enquiry

Name: ${formData.name}
Phone / WhatsApp: ${formData.phone}
Email: ${formData.email || 'Not provided'}

Jewellery Requirement:
${formData.requirement}
    `.trim();

    const whatsappURL =
      `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(message)}`;

    setSent(true);

    // Open WhatsApp directly
    window.location.href = whatsappURL;
  };

  return (
    <BusinessPage
      eyebrow="Contact Us"
      title="Let's Discuss Your Requirement"
      intro="Send your jewellery requirement and we'll get back to you directly."
    >
      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-16 md:grid-cols-[1fr_0.7fr]">

        {/* ENQUIRY FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#9b783d]/15 bg-white p-6 shadow-sm sm:p-8"
        >

          <div className="grid gap-5 sm:grid-cols-2">

            {/* NAME */}
            <label className="text-xs font-semibold">
              Name

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-black/10 bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99755]"
                placeholder="Your name"
              />
            </label>

            {/* PHONE */}
            <label className="text-xs font-semibold">
              Phone / WhatsApp

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-black/10 bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99755]"
                placeholder="Your phone number"
              />
            </label>

          </div>

          {/* EMAIL */}
          <label className="mt-5 block text-xs font-semibold">
            Email
            <span className="ml-1 font-normal text-black/45">
              (Optional)
            </span>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-black/10 bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99755]"
              placeholder="your@email.com"
            />
          </label>

          {/* REQUIREMENT */}
          <label className="mt-5 block text-xs font-semibold">
            Jewellery requirement

            <textarea
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              rows={5}
              className="mt-2 w-full rounded-lg border border-black/10 bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#b99755]"
              placeholder="Tell us what you are looking for..."
            />
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-6 rounded-full bg-[#0b0a08] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f6f1e7] transition hover:bg-[#9b783d]"
          >
            Send Enquiry
          </button>

          {sent && (
            <p className="mt-4 text-sm text-[#6f5b32]">
              Opening WhatsApp with your enquiry...
            </p>
          )}

        </form>

        {/* BUSINESS CONTACT */}
        <aside className="rounded-2xl bg-[#0b0a08] p-7 text-[#f6f1e7]">

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d7b86e]">
            Business Contact
          </p>

          <h2 className="mt-3 font-cinzel text-2xl">
            Kanchi Kamakshi
          </h2>

          <p className="mt-2 text-sm text-[#f6f1e7]/60">
            3D Jewellery Works
          </p>

          <div className="mt-8 space-y-4 text-sm text-[#f6f1e7]/70">
            <p>Phone: +91 99499 00434</p>
            <p>WhatsApp: +91 99499 00434</p>
            <p>Email: kanchikamakshi@gmail.com</p>
            <p>
              Address: Champagalli veedhi, Srikakulam, Andhra Pradesh
            </p>
          </div>

        </aside>

      </section>
    </BusinessPage>
  );
};