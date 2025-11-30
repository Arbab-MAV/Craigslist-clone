import { Twitter } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function Navigation({
  activeCategory = "jobs",
  onCategoryChange,
}: NavigationProps) {
  const [active, setActive] = useState(activeCategory);

  const categories = [
    { id: "jobs", label: "Jobs" },
    { id: "housing", label: "housing" },
    { id: "for-sale", label: "for sale" },
    { id: "services", label: "services" },
  ];

  const handleChange = (categoryId: string) => {
    setActive(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <nav className="bg-gray-300 border-b border-gray-400">
      <div className="flex items-center gap-6 px-6 py-3">
        <div className="flex items-center gap-2 text-primary">
          <Twitter className="w-5 h-5" />
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleChange(cat.id)}
            className={`text-sm font-semibold pb-2 px-1 transition-all border-b-2 ${
              active === cat.id
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
