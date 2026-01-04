import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import heroCarImage from "../../assets/hero-car.jpg";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader 
            title="About Gearshift" 
            subtitle="Your premier destination for exceptional luxury automobiles"
          />
          
          <ContentSection>
            <div className="space-y-8">
              <img 
                src={heroCarImage} 
                alt="Luxury sports car showroom"
                className="w-full h-[500px] object-cover"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-foreground">
                  Driven by Passion
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gearshift was established with a singular vision: to connect discerning enthusiasts with the world's most exceptional automobiles. We specialize in curating an exclusive collection of luxury and exotic vehicles, each handpicked for its performance, heritage, and craftsmanship.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Heritage">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Automotive Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every vehicle in our collection undergoes rigorous inspection by our team of certified automotive experts. We partner with the world's most prestigious manufacturers—Ferrari, Lamborghini, Porsche, Aston Martin, and more—to bring you vehicles that represent the pinnacle of engineering and design.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Uncompromising Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment to quality extends beyond the vehicles themselves. From the moment you step into our showroom to long after you drive away, we provide a white-glove experience befitting the exceptional automobiles we represent.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Performance</h3>
                <p className="text-muted-foreground">
                  We source only vehicles that deliver extraordinary driving experiences and mechanical excellence.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Complete vehicle history, verified provenance, and transparent documentation for every automobile.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Service</h3>
                <p className="text-muted-foreground">
                  Personalized consultations, financing assistance, and ongoing support for our valued clients.
                </p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurStory;
