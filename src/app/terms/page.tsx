'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiInfo, FiGlobe, FiCode, FiCpu, FiMail, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function TermsOfServicePage() {
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

  // Terms of service sections
  const termsSections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FiInfo />,
      content: [
        'Welcome to AI Central Station. These Terms of Service govern your use of our website located at aicentral.com ("the Service").',
        'By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.'
      ]
    },
    {
      id: 'use-license',
      title: 'Use License',
      icon: <FiCheckCircle />,
      content: [
        'AI Central Station is an open-source project. Permission is granted to temporarily download one copy of the materials on AI Central Station for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not:',
        '• Modify or copy the materials;',
        '• Use the materials for any commercial purpose or for any public display;',
        '• Attempt to reverse engineer any software contained on AI Central Station;',
        '• Remove any copyright or other proprietary notations from the materials;',
        '• Transfer the materials to another person or "mirror" the materials on any other server.'
      ]
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      icon: <FiAlertCircle />,
      content: [
        'The materials on AI Central Station are provided on an \'as is\' basis. AI Central Station makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'Further, AI Central Station does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.'
      ]
    },
    {
      id: 'limitations',
      title: 'Limitations',
      icon: <FiGlobe />,
      content: [
        'In no event shall AI Central Station or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AI Central Station, even if AI Central Station or an authorized representative has been notified orally or in writing of the possibility of such damage.'
      ]
    },
    {
      id: 'external-links',
      title: 'External Links',
      icon: <FiCode />,
      content: [
        'AI Central Station may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.'
      ]
    },
    {
      id: 'revisions',
      title: 'Revisions and Errata',
      icon: <FiCpu />,
      content: [
        'The materials appearing on AI Central Station could include technical, typographical, or photographic errors. AI Central Station does not warrant that any of the materials on its website are accurate, complete, or current. AI Central Station may make changes to the materials contained on its website at any time without notice.'
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications',
      icon: <FiFileText />,
      content: [
        'AI Central Station may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
      ]
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <FiMail />,
      content: [
        'If you have any questions about these Terms, please contact us:',
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
        <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-indigo-900/30 rounded-xl mb-4 border border-indigo-500/20">
              <FiFileText className="text-indigo-500 h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-6 tech-title">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Guidelines for using AI Central Station's open-source resources
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
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-6 tech-title">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {termsSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-3 rounded-lg hover:bg-indigo-900/20 transition-colors group"
                >
                  <div className="w-8 h-8 bg-indigo-900/30 rounded-full flex items-center justify-center mr-3 group-hover:bg-indigo-800/50 transition-colors">
                    <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      {section.icon}
                    </span>
                  </div>
                  <span className="text-gray-300 group-hover:text-indigo-300 transition-colors tech-text">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {termsSections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={itemVariants}
                className="glassmorphic-card-content p-6 md:p-8 rounded-xl scroll-mt-24"
              >
                <div className="flex items-start md:items-center mb-6">
                  <div className="w-10 h-10 bg-indigo-900/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-400">
                      {section.icon}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 tech-title">
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
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg shadow-indigo-500/20"
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
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-6 tech-title">
              Have Questions About Our Terms?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8 tech-text">
              If you have any questions or concerns about our terms of service, please don't hesitate to reach out to us.
            </p>
            <Link
              href="/about#connect"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg shadow-indigo-500/20"
            >
              Contact Us <FiMail className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
