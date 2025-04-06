'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Loader2, MessageSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const rotatingTexts = ['Chat', 'Ask', 'Learn', 'Search'];

// Default suggestions to help users get started
const defaultSuggestions = [
  "What AI tools do you have for writing?",
  "How do I access the documentation?",
  "Tell me about this website's features",
  "What are the most popular AI tools?",
  "How can I read AI news?",
  "How is this website useful for me?"
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome to AI Toolkit Hub! I can help you find the right AI tool for your needs, answer questions about our website, or discuss AI-related topics. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const pathname = usePathname();

  // Reset the open state when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Rotate through the texts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || input;
    if ((!messageToSend.trim() || isLoading) && !message) return;
    
    const userMessage: Message = { role: 'user', content: messageToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].filter(msg => msg.role !== 'system'),
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      
      if (data.response) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
        setErrorCount(0); // Reset error count on successful response
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorCount(prev => prev + 1);
      
      // Different error messages based on error count
      let errorMessage = 'I encountered a problem. Please try again.';
      
      if (errorCount > 1) {
        errorMessage = 'I apologize, but I seem to be having trouble connecting. You can still explore the website using the navigation menu.';
      }
      
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: errorMessage }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
      >
        <MessageSquare className="w-5 h-5" />
        <motion.span 
          key={currentTextIndex} 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="font-medium"
        >
          {rotatingTexts[currentTextIndex]}
        </motion.span>
      </button>

      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
            />
            
            {/* Chat container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-20 right-6 z-50 w-[95%] sm:w-[450px] max-w-full flex flex-col bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
              style={{ maxHeight: 'calc(100vh - 8rem)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-400" />
                  <h3 className="font-medium text-white">AI Tools Assistant</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : 'bg-gray-800 text-gray-200 rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 bg-gray-800 text-gray-200 rounded-2xl rounded-tl-none">
                      <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                    </div>
                  </div>
                )}
                
                {messages.length === 1 && !isLoading && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs text-gray-400">Try asking:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {defaultSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(suggestion)}
                          className="text-xs text-left bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-lg transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input */}
              <div className="p-3 border-t border-gray-800 bg-gray-900">
                <div className="flex items-center gap-2">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about AI tools, features, or help..."
                    className="flex-1 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-lg resize-none p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    rows={1}
                    style={{ maxHeight: '120px' }}
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim() || isLoading}
                    className={`p-3 rounded-lg ${
                      !input.trim() || isLoading
                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } transition-colors`}
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 