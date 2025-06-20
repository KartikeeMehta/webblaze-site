
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What does a Linux administrator do?',
    answer: 'Linux administrators manage Linux-based servers, ensuring security, performance, and system uptime.'
  },
  {
    question: 'What are the key skills for Linux administrators?',
    answer: 'Skills include shell scripting, system monitoring, network configuration, and knowledge of Linux distributions.'
  },
  {
    question: 'How much do Linux administrators earn in 2025?',
    answer: 'Salaries range from $60,000 to $120,000 annually, depending on experience and location.'
  },
  {
    question: 'What are the most common Linux distributions for servers?',
    answer: 'Popular distributions include Ubuntu Server, CentOS, Debian, and Red Hat Enterprise Linux (RHEL).'
  },
  {
    question: 'How do I secure a Linux server?',
    answer: 'Use firewalls, SSH key authentication, regular updates, and monitoring tools for enhanced security.'
  }
];

const Section_e = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-gray-900"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="text-blue-500 text-2xl">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
      <div className="mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[10px] shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_e;
