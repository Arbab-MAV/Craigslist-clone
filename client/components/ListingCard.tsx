import { Star } from "lucide-react";

interface ListingCardProps {
  image: string;
  price: string;
  title: string;
  description: string;
  rating?: number;
  company?: string;
}

export default function ListingCard({
  image,
  price,
  title,
  description,
  rating = 5,
  company,
}: ListingCardProps) {
  return (
    <div className="bg-white border-l-4 border-primary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="h-40 bg-gray-200 overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
            <span>Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {company && (
          <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
            {company}
          </div>
        )}

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-lg font-bold text-primary">{price}</span>
          <span className="text-xs text-muted-foreground">/hr</span>
        </div>

        <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>

        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{rating}</span>
        </div>
      </div>
    </div>
  );
}
