import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 tech-title">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-300 max-w-xl tech-text">
          {subtitle}
        </p>
      )}
    </div>
  );
} 