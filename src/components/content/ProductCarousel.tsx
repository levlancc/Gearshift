import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import sportsCarImage from "@/assets/sports-car.jpg";
import mercedesCoupeImage from "@/assets/mercedes-coupe.jpg";
import astonMartinImage from "@/assets/aston-martin.jpg";
import maseratiImage from "@/assets/maserati.jpg";
import supercarYellowImage from "@/assets/supercar-yellow.jpg";
import electricCarImage from "@/assets/electric-car.jpg";

interface Vehicle {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  year: string;
}

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "488 GTB",
    category: "Ferrari",
    price: "$285,000",
    image: sportsCarImage,
    year: "2023",
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
    name: "DB11",
    category: "Aston Martin",
    price: "$245,000",
    image: astonMartinImage,
    year: "2023",
  },
  {
    id: 4,
    name: "Quattroporte",
    category: "Maserati",
    price: "$125,000",
    image: maseratiImage,
    year: "2024",
  },
  {
    id: 5,
    name: "Huracán EVO",
    category: "Lamborghini",
    price: "$320,000",
    image: supercarYellowImage,
    year: "2023",
  },
  {
    id: 6,
    name: "Model S Plaid",
    category: "Tesla",
    price: "$108,000",
    image: electricCarImage,
    year: "2024",
  },
];

const ProductCarousel = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-primary text-xs font-light uppercase tracking-widest mb-1">Featured</p>
          <h2 className="font-display text-3xl text-foreground">Latest Arrivals</h2>
        </div>
        <Link to="/category/new-arrivals" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">
          View All
        </Link>
      </div>
      <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {vehicles.map((vehicle) => (
               <CarouselItem
                 key={vehicle.id}
                 className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4"
               >
                 <Link to={`/category/${vehicle.category.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="border-none shadow-none bg-transparent group">
                    <CardContent className="p-0">
                      <div className="aspect-square mb-4 overflow-hidden bg-muted/10 relative">
                        <img
                          src={vehicle.image}
                          alt={`${vehicle.category} ${vehicle.name}`}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                        <div className="absolute top-3 left-3 px-2 py-1 text-xs font-light text-foreground bg-background/80 backdrop-blur-sm">
                          {vehicle.year}
                        </div>
                      </div>
                     <div className="space-y-1">
                       <p className="text-xs font-light text-primary uppercase tracking-wider">
                         {vehicle.category}
                       </p>
                       <div className="flex justify-between items-center">
                         <h3 className="text-sm font-medium text-foreground">
                           {vehicle.name}
                         </h3>
                         <p className="text-sm font-light text-foreground/70">
                           {vehicle.price}
                         </p>
                       </div>
                     </div>
                   </CardContent>
                 </Card>
                 </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </section>
  );
};

export default ProductCarousel;
