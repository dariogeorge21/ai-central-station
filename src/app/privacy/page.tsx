'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiInfo, FiUser, FiDatabase, FiGlobe, FiMail, FiRefreshCw } from 'react-icons/fi';
import { BiCookie } from 'react-icons/bi';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  // Last updated date
  const lastUpdated = 'April 10, 2025';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Privacy policy sections
  const policySections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FiInfo />,
      content: [
        'Welcome to AI Central Station. This is an open-source project that provides information about AI tools and resources. This privacy policy explains our approach to data collection and privacy.',
        'As an open-source project with no user accounts or login functionality, we prioritize your privacy and minimize data collection.'
      ]
    },
    {
      id: 'no-personal-data',
      title: 'No Personal Data Collection',
      icon: <FiUser />,
      content: [
        'AI Central Station does not collect, store, or process any personal information from visitors. We do not have user registration, login functionality, or any features that would require the collection of personal data.',
        'We do not track individual users or collect information such as names, email addresses, or other identifying information.'
      ]
    },
    {
      id: 'open-source',
      title: 'Open Source Contributions',
      icon: <FiDatabase />,
      content: [
        'As an open-source project, we welcome contributions from the community. If you choose to contribute to the project, any information you provide in your contributions (such as your name or email in commit messages) will be publicly available as part of the project\'s repository.',
        'Please be mindful of the information you include in your contributions.'
      ]
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: <FiGlobe />,
      content: [
        'Our website may include links to external websites or services. We are not responsible for the privacy practices of these external sites.',
        'When you leave our website, we encourage you to read the privacy policy of each website you visit.'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Analytics',
      icon: <BiCookie />,
      content: [
        'Our website uses minimal cookies that are necessary for the website to function properly. These cookies do not track you across websites and do not collect personal information.',
        'We may use anonymous analytics to understand general usage patterns and improve the website experience. This data is aggregated and cannot be used to identify individual users.'
      ]
    },

    {
      id: 'changes',
      title: 'Changes to This Privacy Policy',
      icon: <FiRefreshCw />,
      content: [
        'We may update our privacy policy from time to time. Any changes will be posted on this page with an updated revision date.',
        'We encourage you to periodically review this page for the latest information on our privacy practices.'
      ]
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <FiMail />,
      content: [
        'If you have any questions about this privacy policy or our practices, please contact us:',
        '• By email: edu.dariogeorge21@gmail.com',
        '• By visiting the contact section on our website: https://aicentral.com/about#connect'
      ]
    }
  ];

  return (
    <main className="min-h-screen circuit-bg pt-24">
      {/* Hero Section */}
      <section className="relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-blue-900/30 rounded-xl mb-4 border border-blue-500/20">
              <FiShield className="text-blue-500 h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6 tech-title">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Our approach to privacy for this open-source project with no user accounts
            </p>
            <div className="text-gray-400 text-sm">
              Last Updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 md:py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glassmorphic-card-content p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6 tech-title">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {policySections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-3 rounded-lg hover:bg-blue-900/20 transition-colors group"
                >
                  <div className="w-8 h-8 bg-blue-900/30 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-800/50 transition-colors">
                    <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {section.icon}
                    </span>
                  </div>
                  <span className="text-gray-300 group-hover:text-blue-300 transition-colors tech-text">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {policySections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={itemVariants}
                className="glassmorphic-card-content p-6 md:p-8 rounded-xl scroll-mt-24"
              >
                <div className="flex items-start md:items-center mb-6">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-400">
                      {section.icon}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 tech-title">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300 pl-14">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="tech-text">{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg shadow-blue-500/20"
            >
              Back to Top
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glassmorphic-card-content p-6 md:p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-6 tech-title">
              Have Questions About Our Privacy Policy?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8 tech-text">
              If you have any questions or concerns about our privacy practices, please don&apos;t hesitate to reach out to us.
            </p>
            <Link
              href="/about#connect"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg shadow-blue-500/20"
            >
              Contact Us <FiMail className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
