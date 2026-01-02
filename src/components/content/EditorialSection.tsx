import teamImage from "@/assets/team.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-[630px]">
          <div>
            <p className="text-primary text-xs font-light uppercase tracking-widest mb-2">Our Legacy</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Driven By Passion, Defined By Excellence
            </h2>
          </div>
          <p className="text-sm font-light text-foreground/70 leading-relaxed">
            Founded by automotive enthusiasts with decades of experience in the luxury car market, 
            Gearshift represents a new standard in premium vehicle acquisition. We don't just sell cars — 
            we curate experiences, connecting discerning collectors with the world's finest automobiles.
          </p>
          <Link 
            to="/about/our-story" 
            className="inline-flex items-center gap-2 text-sm font-light text-primary hover:text-primary/80 transition-colors duration-200 uppercase tracking-wide"
          >
            <span>Discover Our Story</span>
            <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden">
            <img 
              src={teamImage} 
              alt="Gearshift team in luxury car showroom" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
