interface NewsFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Research' },
  { id: 'industry', label: 'Industry' },
  { id: 'products', label: 'Products' },
  { id: 'startups', label: 'Startups' },
  { id: 'policy', label: 'Policy' },
  { id: 'ethics', label: 'Ethics' },
  { id: 'education', label: 'Education' },
];

export default function NewsFilters({
  selectedCategory,
  onCategoryChange,
}: NewsFiltersProps) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-400 mb-2">Filter by Category</label>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
} 