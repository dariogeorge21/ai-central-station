import React, { useState } from 'react';
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

  // Calculate popup position
  const getPopupStyle = () => {
    if (!buttonPosition) return {};

    const padding = 16; // Distance from the button
    const popupWidth = 320; // Approximate popup width
    const popupHeight = 280; // Approximate popup height
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Initial position (above the button)
    let x = buttonPosition.x - (popupWidth / 2);
    let y = buttonPosition.y - popupHeight - padding;

    // Adjust horizontal position if too close to screen edges
    if (x < padding) {
      x = padding;
    } else if (x + popupWidth > viewportWidth - padding) {
      x = viewportWidth - popupWidth - padding;
    }

    // If popup would go above viewport, position it below the button instead
    if (y < padding) {
      y = buttonPosition.y + padding;
    }

    return {
      position: 'fixed',
      left: `${x}px`,
      top: `${y}px`,
      width: `${popupWidth}px`,
    } as React.CSSProperties;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={getPopupStyle()}
            className="bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-700 z-50"
          >
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
} 