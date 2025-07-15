import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Section_b = () => {
  const [form, setForm] = useState({
    name: '',
    company_Name: '',
    phone: '',
    email: '',
    your_Messages: '',
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptcha = (value) => {
    setCaptchaToken(value);
    setErrors((prev) => ({ ...prev, captcha: '' }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setForm({ ...form, [name]: val });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Required';
    if (!form.company_Name.trim()) newErrors.company_Name = 'Required';
    if (!form.phone.trim()) newErrors.phone = 'Required';
    else if (form.phone.length !== 10) newErrors.phone = 'Phone must be 10 digits';
    if (!form.email.trim()) newErrors.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid Email';
    if (!form.your_Messages.trim()) newErrors.your_Messages = 'Required';
    if (!captchaToken) newErrors.captcha = 'Please complete the reCAPTCHA';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', form, 'CAPTCHA:', captchaToken);
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <div className="bg-[#f9fafb] px-4 py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <p className="text-red-500 font-semibold mb-1">Contact Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Excited About The Project? <br className="hidden sm:block" />
              Please Get In Touch.
            </h2>
            <p className="text-gray-600 max-w-md text-sm sm:text-base">
              Our dedicated team is committed to providing prompt and effective support.
              Reach out to us via phone, email, or visit our office.
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <img src="/callIcon.png" alt="Phone" className="h-10 w-10 object-contain" />
              <div>
                <p className="text-gray-700 text-sm">Phone Number</p>
                <p className="text-red-600 font-semibold text-sm">+91 90414 77720</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <img src="/mailIcon.png" alt="Email" className="h-10 w-10 object-contain" />
              <div>
                <p className="text-gray-700 text-sm">Email Address</p>
                <p className="text-red-600 font-semibold text-sm">hello@webblazesofttech.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <img src="/locationIcon.png" alt="Location" className="h-10 w-10 object-contain" />
              <p className="text-sm text-gray-800 font-semibold leading-snug max-w-md">
                WebBlaze Softtech, Cyber cube, C201-202, Phase 8B, Industrial Area, Sector 74,
                Sahibzada Ajit Singh Nagar, Punjab 160055
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Let’s Talk</h3>
          <p className="text-gray-600 mb-6 text-sm">
            We’d love to hear from you. Please fill out the form below or email us your requirements.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="company_Name"
                  placeholder="Company Name"
                  value={form.company_Name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.company_Name && <p className="text-red-500 text-xs mt-1">{errors.company_Name}</p>}
              </div>
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Company Email"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="your_Messages"
                placeholder="Your Messages / Requirement"
                value={form.your_Messages}
                onChange={handleChange}
                rows="4"
                className="border border-gray-300 rounded-md px-4 py-2 w-full text-sm resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.your_Messages && <p className="text-red-500 text-xs mt-1">{errors.your_Messages}</p>}
            </div>

            {/* Captcha */}
            <div>
              <ReCAPTCHA
                sitekey="6LcZkHIrAAAAAIgl9kwtye7u7H53n2w7xKQMBxUb"
                onChange={handleCaptcha}
              />
              {errors.captcha && <p className="text-red-500 text-xs mt-2">{errors.captcha}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 px-6 py-2 text-sm font-semibold border border-blue-500 text-blue-600 bg-white rounded-md hover:bg-blue-600 hover:text-white shadow-sm transition"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section_b;
