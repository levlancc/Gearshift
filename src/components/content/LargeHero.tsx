import heroImage from "@/assets/hero-car.jpg";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/9] mb-4 overflow-hidden relative">
        <img 
          src={heroImage} 
          alt="Luxury car showroom with Porsche 911" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
          <p className="text-primary text-sm font-light uppercase tracking-widest mb-2">Featured</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            The Showroom Experience
          </h2>
        </div>
      </div>
      <div className="">
        <p className="text-sm font-light text-foreground/70">
          Step into our world-class facility and discover automotive excellence
        </p>
      </div>
    </section>
  );
};

export default LargeHero;
