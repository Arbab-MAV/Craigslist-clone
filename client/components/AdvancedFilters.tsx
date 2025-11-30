import { useState } from "react";

interface FiltersProps {
  category?: string;
}

export default function AdvancedFilters({ category = "jobs" }: FiltersProps) {
  const [priceRange, setPriceRange] = useState(75);
  const [filters, setFilters] = useState({
    priceRange: true,
    recentlyPosted: true,
    nearMe: true,
    remote: category === "jobs",
    forSale: category === "for-sale",
    rent: category === "housing",
  });

  const handleCheckChange = (key: string) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  const getFilterOptions = () => {
    switch (category) {
      case "jobs":
        return [
          { id: "priceRange", label: "price range" },
          { id: "recentlyPosted", label: "recently posted" },
          { id: "nearMe", label: "near me" },
          { id: "remote", label: "remote" },
        ];
      case "housing":
        return [
          { id: "priceRange", label: "price range" },
          { id: "recentlyPosted", label: "recently posted" },
          { id: "nearMe", label: "near me" },
          { id: "forSale", label: "for sale" },
          { id: "rent", label: "rent" },
        ];
      case "for-sale":
        return [
          { id: "priceRange", label: "price range" },
          { id: "recentlyPosted", label: "recently posted" },
          { id: "nearMe", label: "near me" },
          { id: "forSale", label: "for sale" },
        ];
      default:
        return [
          { id: "priceRange", label: "price range" },
          { id: "recentlyPosted", label: "recently posted" },
          { id: "nearMe", label: "near me" },
        ];
    }
  };

  return (
    <div className="w-full md:w-56 bg-white p-6 rounded-lg border border-border">
      <h2 className="text-lg font-bold text-foreground mb-6">
        Advanced Filters
      </h2>

      <div className="space-y-4">
        {getFilterOptions().map((option) => (
          <div key={option.id} className="space-y-2">
            {option.id === "priceRange" ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked={filters.priceRange}
                    onChange={() => handleCheckChange("priceRange")}
                    id={option.id}
                    className="w-4 h-4 accent-primary rounded"
                  />
                  <label
                    htmlFor={option.id}
                    className="text-sm font-medium text-foreground cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
                {filters.priceRange && (
                  <div className="ml-6 space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange}
                      onChange={(e) => setPriceRange(parseInt(e.target.value))}
                      className="w-full accent-primary"
                    />
                    <div className="text-xs text-muted-foreground">
                      $0 - ${priceRange}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={
                    filters[option.id as keyof typeof filters] as boolean
                  }
                  onChange={() => handleCheckChange(option.id)}
                  id={option.id}
                  className="w-4 h-4 accent-primary rounded"
                />
                <label
                  htmlFor={option.id}
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
