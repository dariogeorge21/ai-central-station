import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
} 