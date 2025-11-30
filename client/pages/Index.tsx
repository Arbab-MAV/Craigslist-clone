import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import AdvancedFilters from "@/components/AdvancedFilters";
import ListingCard from "@/components/ListingCard";
import Footer from "@/components/Footer";

const LISTINGS = {
  jobs: [
    {
      id: 1,
      company: "DEVSINC",
      price: "$5",
      title: "UI/UX",
      description: "Vacancy for a UI UX Designer with tools of figma",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 2,
      company: "systems",
      price: "$9",
      title: "Flutter",
      description: "Vacancy for a Flutter Developer",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 3,
      company: "NETOOL",
      price: "$6",
      title: "UI/UX",
      description: "Vacancy for a UI UX Designer with tools of figma",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 4,
      company: "KOMATSU",
      price: "$15",
      title: "QA Tester",
      description: "Vacancy for Automated QA Tester",
      image:
        "https://images.unsplash.com/photo-1516534775068-bb57fe5e5eb3?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 5,
      company: "CREATIVE",
      price: "$5",
      title: "UI/UX",
      description: "Vacancy for a UI UX Designer with tools of figma",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 6,
      company: "SAZGAR",
      price: "$8",
      title: "Full Stack",
      description: "Vacancy for a Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      rating: 5,
    },
  ],
  housing: [
    {
      id: 1,
      price: "$10k",
      title: "2 BHK",
      description: "Fully Furnished 2 BHK flat in heart of city",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 2,
      price: "$50",
      title: "VILLA",
      description: "Fully Furnished villa for rent",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c9c895?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 3,
      price: "$60k",
      title: "Home",
      description: "For sale home",
      image:
        "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 4,
      price: "$15",
      title: "2 Story",
      description: "Double story home for rent",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 5,
      price: "$30",
      title: "Banglo",
      description: "For sale in Islamabad prime location",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 6,
      price: "$200",
      title: "Mansion",
      description: "For rent in GOA",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      rating: 5,
    },
  ],
  "for-sale": [
    {
      id: 1,
      price: "$55k",
      title: "H2R",
      description: "2018 kawasaki ninja h2r all documents clear",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 2,
      price: "$120k",
      title: "Nissan GTR R35",
      description: "Japan imported nissan gtr r35 bills seller",
      image:
        "https://images.unsplash.com/photo-1537821552453-74e7b1265169?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 3,
      price: "$5.5k",
      title: "CBR 600F",
      description: "Vacancy for a UI UX Designer with tools of figma",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 4,
      price: "$7k",
      title: "Hayabusa",
      description: "2012 Suzuki Hayabusa excellent machine for sale",
      image:
        "https://images.unsplash.com/photo-1554630584-5e69a8ee9d76?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 5,
      price: "$6.3K",
      title: "Goldwing",
      description: "2023 Honda Goldwing for sale",
      image:
        "https://images.unsplash.com/photo-1579287789401-3e66cc67ca5f?w=400&h=300&fit=crop",
      rating: 5,
    },
    {
      id: 6,
      price: "$100K",
      title: "G Wagon",
      description: "Dubai imported Brabus G Wagon",
      image:
        "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
      rating: 5,
    },
  ],
};

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("jobs");

  const currentListings =
    LISTINGS[activeCategory as keyof typeof LISTINGS] || LISTINGS.jobs;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="flex flex-col md:flex-row gap-6 px-6 py-8 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-full md:w-56 flex-shrink-0">
          <AdvancedFilters category={activeCategory} />
        </div>

        {/* Listings Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentListings.map((listing) => (
              <ListingCard
                key={listing.id}
                image={listing.image}
                price={listing.price}
                title={listing.title}
                description={listing.description}
                rating={listing.rating}
                company={(listing as any).company}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
