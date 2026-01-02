import classicCarImage from "@/assets/classic-car.jpg";
import electricCarImage from "@/assets/electric-car.jpg";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/classics" className="block group">
            <div className="w-full h-[500px] lg:h-[800px] mb-4 overflow-hidden relative">
              <img 
                src={classicCarImage} 
                alt="Classic Bentley luxury car" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </Link>
          <div className="">
            <p className="text-primary text-xs font-light uppercase tracking-widest mb-1">
              Heritage
            </p>
            <h3 className="font-display text-2xl text-foreground mb-1">
              Classic Collection
            </h3>
            <p className="text-sm font-light text-foreground/70">
              Timeless elegance, meticulously preserved
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/electric" className="block group">
            <div className="w-full h-[500px] lg:h-[800px] mb-4 overflow-hidden relative">
              <img 
                src={electricCarImage} 
                alt="Electric luxury sedan" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </Link>
          <div className="">
            <p className="text-primary text-xs font-light uppercase tracking-widest mb-1">
              Future
            </p>
            <h3 className="font-display text-2xl text-foreground mb-1">
              Electric Performance
            </h3>
            <p className="text-sm font-light text-foreground/70">
              The next generation of luxury motoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;
