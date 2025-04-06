import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // EmailJS template ID
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // EmailJS public key
      );
      toast.success('Message sent successfully');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Failed to send message', error);
      toast.error('Failed to send message');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <Toaster />

      {/* Header */}
      <div className="max-w-3xl mx-auto my-20">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">📞 Contact Page</h2>
          <p className="mb-4">
            Get in Touch with <span className="font-bold">LearnSphere</span>
          </p>
          <p>
            Have questions? Want to enroll in DataSprint? Fill out the form, and our team will get back to you!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">📑 Contact Form</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="📌 Name"
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-white"
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="📌 Email"
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-white"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="📌 Phone Number"
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-white"
              />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="📌 Message"
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-white"
              ></textarea>
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className={`cursor-pointer w-full py-3 rounded-lg font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-all ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Location & Map */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col space-y-6">
          <h3 className="text-2xl font-bold">📍 Our Location</h3>
          <div className="space-y-2">
            <p className="flex items-center"><span className="mr-2">📌</span> LearnSphere HQ</p>
            <p className="flex items-center">
              <span className="mr-2">📍</span> 275, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh 452011
            </p>
            <p className="flex items-center"><span className="mr-2">📧</span> support@learnsphere.com</p>
            <p className="flex items-center"><span className="mr-2">📞</span> +91-9876543210</p>
          </div>
          <div className="w-full h-64">
            <iframe
              title="LearnSphere HQ Location"
              src="https://www.google.com/maps?q=275%2C%20AB%20Rd%2C%20Scheme%2054%20PU4%2C%20Indore%2C%20Madhya%20Pradesh%20452011&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
