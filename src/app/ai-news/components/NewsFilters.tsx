interface NewsFiltersProps {
  selectedCategory: string;
  selectedRegion: string;
  onCategoryChange: (category: string) => void;
  onRegionChange: (region: string) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Research' },
  { id: 'industry', label: 'Industry' },
  { id: 'products', label: 'Products' },
  { id: 'startups', label: 'Startups' },
  { id: 'policy', label: 'Policy' },
];

const regions = [
  { id: 'all', label: 'Global' },
  { id: 'na', label: 'North America' },
  { id: 'eu', label: 'Europe' },
  { id: 'asia', label: 'Asia' },
  { id: 'other', label: 'Other Regions' },
];

export default function NewsFilters({
  selectedCategory,
  selectedRegion,
  onCategoryChange,
  onRegionChange,
}: NewsFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
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
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-400 mb-2">Region</label>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => onRegionChange(region.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedRegion === region.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 