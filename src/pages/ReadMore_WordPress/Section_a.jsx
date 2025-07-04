import React from 'react';

const Section_a = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight text-center sm:text-left mb-8">
          The Ultimate Guide to WordPress Security: Tips and Best Practices
        </h1>

        <div className="mb-6">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/wordpress.webp"
            alt="WordPress Logo"
            className="w-full rounded-xl object-cover"
          />
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-10">
          WordPress stands as one of the most widely used content management systems (CMS) globally, fueling countless websites.
          Yet, its widespread popularity also paints a target on its back for hackers and malicious attacks. Fear not! In this guide,
          we will delve into some crucial tips and best practices to fortify your WordPress website and shield it from potential threats.
          Let’s dive in and safeguard your online presence!
        </p>

        <div className="mb-10">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/Wordpress.jpg"
            alt="Cyber Security"
            className="w-full rounded-xl object-cover"
          />
        </div>

        <div className="text-gray-800 text-sm sm:text-base space-y-6 leading-relaxed">
          <div>
            <strong>1. Keep WordPress Core, Themes, and Plugins Updated:</strong><br />
            Stay ahead of potential security threats by regularly updating your WordPress core, themes, and plugins. Enable automatic updates to ensure your site is always up-to-date and protected.
          </div>

          <div>
            <strong>2. Use Strong Passwords:</strong><br />
            Protect your WordPress admin area, FTP, and database with strong, unique passwords. Consider using a password manager for added security.
          </div>

          <div>
            <strong>3. Limit Login Attempts:</strong><br />
            Prevent unauthorized access by limiting login attempts from a single IP address and implementing two-factor authentication for an extra layer of protection.
          </div>

          <div>
            <strong>4. Enable HTTPS:</strong><br />
            Encrypt data transmitted between your server and users’ browsers by installing an SSL/TLS certificate to enable HTTPS on your website.
          </div>

          <div>
            <strong>5. Use Security Plugins:</strong><br />
            Defend your site against malware, brute-force attacks, and other threats by installing and configuring security plugins like Wordfence, Sucuri Security, or iThemes Security.
          </div>

          <div>
            <strong>6. Disable Directory Listing:</strong><br />
            Protect sensitive files by preventing directory listing with <code>Options -Indexes</code> in your site’s <code>.htaccess</code> file.
          </div>

          <div>
            <strong>7. Regular Backups:</strong><br />
            Ensure the safety of your website files and database by regularly backing them up to a secure location using a reliable backup plugin or service.
          </div>

          <div>
            <strong>8. Secure File Permissions:</strong><br />
            Restrict access to files and directories on your server by setting appropriate file permissions following the principle of least privilege.
          </div>

          <div>
            <strong>9. Disable XML-RPC:</strong><br />
            Prevent potential brute-force attacks by disabling XML-RPC if you’re not using it.
          </div>

          <div>
            <strong>10. Monitor Your Website:</strong><br />
            Stay vigilant by regularly monitoring your website for any suspicious activity and consider using a website security monitoring service to alert you of any security issues.
          </div>

          <div className="pt-2">
            Boost the security of your WordPress website by implementing these top tips and best practices! Safeguard your site from potential threats by staying alert and taking proactive measures to ensure a safe and secure online presence. Get better websites with us. Join our web development services today! Let’s keep your website protected and thriving!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_a;
