import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function ToolNotFound() {
  return (
    <div className="min-h-screen circuit-bg py-20 px-4 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto text-center">
        <div className="glassmorphic-card-content p-8 rounded-xl border border-gray-700/50">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 mb-4 tech-title">
            Tool Not Found
          </h1>
          
          <p className="text-gray-300 mb-6">
            Sorry, we couldn&apos;t find the AI tool you&apos;re looking for. It may have been removed or the URL might be incorrect.
          </p>
          
          <div className="flex flex-col gap-4">
            <Link 
              href="/documentation"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <FiArrowLeft className="w-4 h-4" /> View All AI Tools
            </Link>
            
            <Link 
              href="/"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}