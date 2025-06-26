

import React, { useState } from "react";

const Section_a = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        website: "",
        phone: "",
        services: [],
        message: "",
    });

    const servicesList = [
        "Free SEO Audit",
        "Content Writing",
        "Pay Per Click(PPC)",
        "SEO service",
        "Google Ads",
        "Any other service",
        "Web design",
        "Social media marketing",
    ];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        const updated = checked
            ? [...form.services, value]
            : form.services.filter((s) => s !== value);
        setForm({ ...form, services: updated });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", form);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold mb-2">Get A Free SEO Audit Report</h1>
            <p className="text-lg font-semibold mb-1">
                Wondering why your website is not on the 1st page of Google?
            </p>
            <p className="text-red-500 font-semibold mb-8">
                Book a free consultation with our SEO expert’s today
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className="border rounded-md px-4 py-2 w-full"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border rounded-md px-4 py-2 w-full"
                />
                <input
                    type="text"
                    name="website"
                    placeholder="Website URL"
                    value={form.website}
                    onChange={handleChange}
                    className="border rounded-md px-4 py-2 w-full"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Your phone number"
                    maxLength={10}
                    value={form.phone}
                    onChange={handleChange}
                    className="border rounded-md px-4 py-2 w-full"
                />
            </div>

            <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-y-4 mb-8">
                <div className="col-span-full font-semibold text-lg">What service do you need ?</div>
                {servicesList.map((service) => (
                    <label key={service} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            value={service}
                            onChange={handleCheckbox}
                            checked={form.services.includes(service)}
                            className="h-4 w-4"
                        />
                        {service}
                    </label>
                ))}
            </div>

            <div className="text-left mb-4 font-semibold text-lg">Additional information</div>
            <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full border rounded-md p-3 mb-8"
                placeholder="Enter additional details here..."
            ></textarea>

            <button
                type="submit"
                className="bg-yellow-200 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow-md transition"
            >
                Send Your Inquiry
            </button>
        </form>
    );
};

export default Section_a;
