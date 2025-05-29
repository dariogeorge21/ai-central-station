import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  // Responsive page range
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav className="flex justify-center items-center gap-2 mt-6 select-none">
      <button
        className="px-2 py-1 rounded text-sm text-gray-300 hover:bg-blue-800/40 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        &lt;
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded text-sm font-medium ${page === currentPage ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-blue-800/40'}`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        className="px-2 py-1 rounded text-sm text-gray-300 hover:bg-blue-800/40 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        &gt;
      </button>
    </nav>
  );
};

export default Pagination;


