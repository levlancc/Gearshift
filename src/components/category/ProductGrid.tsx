import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import sportsCarImage from "@/assets/sports-car.jpg";
import mercedesCoupeImage from "@/assets/mercedes-coupe.jpg";
import astonMartinImage from "@/assets/aston-martin.jpg";
import maseratiImage from "@/assets/maserati.jpg";
import supercarYellowImage from "@/assets/supercar-yellow.jpg";
import electricCarImage from "@/assets/electric-car.jpg";
import luxurySuvImage from "@/assets/luxury-suv.jpg";
import classicCarImage from "@/assets/classic-car.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
  year?: string;
}

// Luxury car inventory
const products: Product[] = [
  {
    id: 1,
    name: "488 GTB",
    category: "Ferrari",
    price: "$285,000",
    image: sportsCarImage,
    isNew: true,
    year: "2024",
  },
  {
    id: 2,
    name: "AMG GT",
    category: "Mercedes-Benz",
    price: "$162,000",
    image: mercedesCoupeImage,
    year: "2024",
  },
  {
    id: 3,
    name: "DB11 V12",
    category: "Aston Martin",
    price: "$245,000",
    image: astonMartinImage,
    isNew: true,
    year: "2024",
  },
  {
    id: 4,
    name: "Quattroporte",
    category: "Maserati",
    price: "$125,000",
    image: maseratiImage,
    year: "2023",
  },
  {
    id: 5,
    name: "Huracán EVO",
    category: "Lamborghini",
    price: "$320,000",
    image: supercarYellowImage,
    isNew: true,
    year: "2024",
  },
  {
    id: 6,
    name: "Model S Plaid",
    category: "Tesla",
    price: "$108,000",
    image: electricCarImage,
    year: "2024",
  },
  {
    id: 7,
    name: "Cayenne Turbo",
    category: "Porsche",
    price: "$185,000",
    image: luxurySuvImage,
    year: "2024",
  },
  {
    id: 8,
    name: "Continental GT",
    category: "Bentley",
    price: "$245,000",
    image: classicCarImage,
    year: "2023",
  },
  {
    id: 9,
    name: "812 Superfast",
    category: "Ferrari",
    price: "$395,000",
    image: sportsCarImage,
    year: "2023",
  },
  {
    id: 10,
    name: "S-Class S580",
    category: "Mercedes-Benz",
    price: "$135,000",
    image: mercedesCoupeImage,
    year: "2024",
  },
  {
    id: 11,
    name: "Vantage",
    category: "Aston Martin",
    price: "$195,000",
    image: astonMartinImage,
    year: "2024",
  },
  {
    id: 12,
    name: "Ghibli Trofeo",
    category: "Maserati",
    price: "$98,000",
    image: maseratiImage,
    year: "2023",
  },
  {
    id: 13,
    name: "Aventador SVJ",
    category: "Lamborghini",
    price: "$575,000",
    image: supercarYellowImage,
    isNew: true,
    year: "2024",
  },
  {
    id: 14,
    name: "Model X Plaid",
    category: "Tesla",
    price: "$119,000",
    image: electricCarImage,
    year: "2024",
  },
  {
    id: 15,
    name: "911 GT3 RS",
    category: "Porsche",
    price: "$245,000",
    image: luxurySuvImage,
    year: "2024",
  },
  {
    id: 16,
    name: "Flying Spur",
    category: "Bentley",
    price: "$285,000",
    image: classicCarImage,
    year: "2024",
  },
  {
    id: 17,
    name: "SF90 Stradale",
    category: "Ferrari",
    price: "$625,000",
    image: sportsCarImage,
    year: "2024",
  },
  {
    id: 18,
    name: "G63 AMG",
    category: "Mercedes-Benz",
    price: "$195,000",
    image: mercedesCoupeImage,
    year: "2024",
  },
  {
    id: 19,
    name: "DBS Superleggera",
    category: "Aston Martin",
    price: "$325,000",
    image: astonMartinImage,
    year: "2023",
  },
  {
    id: 20,
    name: "MC20",
    category: "Maserati",
    price: "$225,000",
    image: maseratiImage,
    isNew: true,
    year: "2024",
  },
  {
    id: 21,
    name: "Urus Performante",
    category: "Lamborghini",
    price: "$285,000",
    image: supercarYellowImage,
    year: "2024",
  },
  {
    id: 22,
    name: "Roadster",
    category: "Tesla",
    price: "$215,000",
    image: electricCarImage,
    isNew: true,
    year: "2025",
  },
  {
    id: 23,
    name: "Taycan Turbo S",
    category: "Porsche",
    price: "$195,000",
    image: luxurySuvImage,
    year: "2024",
  },
  {
    id: 24,
    name: "Bentayga Speed",
    category: "Bentley",
    price: "$265,000",
    image: classicCarImage,
    year: "2024",
  },
];

const ProductGrid = () => {
  return (
    <section className="w-full px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`}>
              <Card 
                className="border-none shadow-none bg-transparent group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative">
                    <img
                      src={product.image}
                      alt={`${product.category} ${product.name}`}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm">
                        NEW
                      </div>
                    )}
                    {product.year && (
                      <div className="absolute top-2 right-2 px-2 py-1 text-xs font-light text-foreground bg-background/80 backdrop-blur-sm">
                        {product.year}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-light text-primary uppercase tracking-wider">
                      {product.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm font-light text-foreground/70">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      
      <Pagination />
    </section>
  );
};

export default ProductGrid;