import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Section_b = () => {
    const [form, setForm] = useState({
        name: "",
        company_Name: "",
        phone: "",
        email: "",
        your_Messages: "",
    });

    const [errors, setErrors] = useState({});
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleCaptcha = (value) => {
        setCaptchaToken(value);
        setErrors({ ...errors, captcha: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === "phone" ? value.replace(/\D/g, '').slice(0, 10) : value;
        setForm({ ...form, [name]: updatedValue });
        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.company_Name.trim()) newErrors.company_Name = "Company name is required";
        if (!form.phone.trim()) newErrors.phone = "Phone number is required";
        else if (form.phone.length < 10) newErrors.phone = "Phone must be 10 digits";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
        if (!form.your_Messages.trim()) newErrors.your_Messages = "Message is required";
        if (!captchaToken) newErrors.captcha = "Please complete the reCAPTCHA";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully:", form, "CAPTCHA:", captchaToken);
        } else {
            console.log("Validation failed.");
        }
    };

    return (
        <div className="min-h-screen bg-[#f9fafb] px-4 py-12 md:px-16">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-6">
                <div>
                    <p className="text-red-500 font-medium mb-2">Contact Us</p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900 mb-4">
                        Excited About The Project? Please Get In Touch.
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Our dedicated team is committed to providing prompt and effective support to ensure your needs are met. We believe in open communication and are always ready to listen.
                    </p>
                    <div className="flex flex-wrap items-center justify-between max-w-full gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/callIcon.png" alt="call" className="h-10 w-10" />
                            <div>
                                <p className="text-gray-700 font-medium">Phone Number</p>
                                <p className="text-red-600 font-semibold text-sm">+91 90414 77720</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/mailIcon.png" alt="mail" className="h-10 w-10" />
                            <div>
                                <p className="text-gray-700 font-medium">Email Address</p>
                                <p className="text-red-600 font-semibold text-sm">hello@webblazesofttech.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <img src="/locationIcon.png" alt="location" className="h-10 w-10" />
                        <p className="text-sm text-gray-800 font-semibold">
                            WebBlaze Softtech, Cyber cube, C201-202, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055
                        </p>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Let’s Talk</h3>
                    <p className="text-gray-600 mb-6 text-sm">
                        We would be happy to hear from you, please fill in the form below or mail us your requirements.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border rounded-md px-4 py-2 w-full text-sm" />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <input type="text" name="company_Name" placeholder="Company Name" value={form.company_Name} onChange={handleChange} className="border rounded-md px-4 py-2 w-full text-sm" />
                                {errors.company_Name && <p className="text-red-500 text-sm mt-1">{errors.company_Name}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input type="text" name="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} className="border rounded-md px-4 py-2 w-full text-sm" maxLength={10} />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Company Email" value={form.email} onChange={handleChange} className="border rounded-md px-4 py-2 w-full text-sm" />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div>
                            <textarea name="your_Messages" value={form.your_Messages} onChange={handleChange} rows="4" placeholder="Your Messages / requirement" className="border rounded-md px-4 py-2 w-full text-sm resize-none" />
                            {errors.your_Messages && <p className="text-red-500 text-sm mt-1">{errors.your_Messages}</p>}
                        </div>

                        <div>
                            <ReCAPTCHA
                                sitekey="YOUR_SITE_KEY_HERE"
                                onChange={handleCaptcha}
                                className="mt-2"
                            />
                            {errors.captcha && <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>}
                        </div>

                        <button
                            type="submit"
                            className="mt-4 w-full md:w-auto px-6 py-2 font-semibold bg-white text-blue-500 border border-blue-600 text-sm hover:bg-blue-600 rounded-lg shadow-md hover:text-white transition"
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