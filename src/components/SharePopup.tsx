import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Copy, 
  Facebook, 
  Twitter, 
  Linkedin,
  Mail,
  X,
  MessageCircle,
  Check
} from 'lucide-react';

interface SharePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
  buttonPosition: { x: number; y: number } | null;
}

export default function SharePopup({ isOpen, onClose, title, url, buttonPosition }: SharePopupProps) {
  const [copySuccess, setCopySuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before creating portal (for SSR compatibility)
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // For HTTPS or localhost
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback for HTTP
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          textArea.remove();
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
          textArea.remove();
          throw new Error('Copy failed');
        }
      }
      
      // Show success state
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Show error in UI
      alert('Failed to copy link. Please try again.');
    }
  };

  const shareButtons = [
    {
      icon: copySuccess ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />,
      label: copySuccess ? 'Copied!' : 'Copy Link',
      onClick: handleCopyLink,
      bgColor: copySuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`,
      bgColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      bgColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <X className="w-5 h-5" />,
      label: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      bgColor: 'bg-black hover:bg-gray-900'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      bgColor: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`,
      bgColor: 'bg-red-600 hover:bg-red-700'
    }
  ];

  // Content to be rendered through the portal
  const content = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-700 z-[9999] w-[320px]"
            style={{ position: 'fixed', marginLeft: 'auto', marginRight: 'auto' }}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700/50 transition-colors"
              aria-label="Close share dialog"
            >
              <X size={16} />
            </button>
            
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gray-100 mb-2">Share Article</h3>
              <p className="text-gray-400 text-xs line-clamp-1">{title}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {shareButtons.map((button) => (
                button.onClick ? (
                  <button
                    key={button.label}
                    onClick={button.onClick}
                    className={`${button.bgColor} text-white p-2 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-all duration-300`}
                  >
                    {button.icon}
                    <span className="text-xs font-medium">{button.label}</span>
                  </button>
                ) : (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${button.bgColor} text-white p-2 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-all duration-300`}
                  >
                    {button.icon}
                    <span className="text-xs font-medium">{button.label}</span>
                  </a>
                )
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Return null during SSR, and use portal after mounting
  return mounted ? createPortal(content, document.body) : null;
} 