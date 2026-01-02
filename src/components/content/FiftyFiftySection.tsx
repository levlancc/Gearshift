import sportsCarImage from "@/assets/sports-car.jpg";
import luxurySuvImage from "@/assets/luxury-suv.jpg";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/sports-cars" className="block group">
            <div className="w-full aspect-square mb-4 overflow-hidden relative">
              <img 
                src={sportsCarImage} 
                alt="Red Ferrari sports car" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
          <div className="">
            <p className="text-primary text-xs font-light uppercase tracking-widest mb-1">
              Performance
            </p>
            <h3 className="font-display text-2xl text-foreground mb-1">
              Sports Cars
            </h3>
            <p className="text-sm font-light text-foreground/70">
              Precision engineering meets unbridled power
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/suvs" className="block group">
            <div className="w-full aspect-square mb-4 overflow-hidden relative">
              <img 
                src={luxurySuvImage} 
                alt="Luxury Range Rover SUV" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
          <div className="">
            <p className="text-primary text-xs font-light uppercase tracking-widest mb-1">
              Luxury
            </p>
            <h3 className="font-display text-2xl text-foreground mb-1">
              Premium SUVs
            </h3>
            <p className="text-sm font-light text-foreground/70">
              Command the road with uncompromising luxury
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
