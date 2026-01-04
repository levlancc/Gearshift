import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const showrooms = [
    {
      name: "Gearshift Manhattan",
      address: "789 Park Avenue, New York, NY 10065",
      phone: "+1 (212) 555-0123",
      hours: "Mon-Sat: 9AM-7PM, Sun: 11AM-5PM",
      services: ["Test Drives", "Trade-Ins", "Financing", "Detailing"]
    },
    {
      name: "Gearshift Beverly Hills",
      address: "456 Rodeo Drive, Beverly Hills, CA 90210",
      phone: "+1 (310) 555-0456",
      hours: "Mon-Sat: 9AM-7PM, Sun: 11AM-5PM",
      services: ["Test Drives", "Consignment", "VIP Lounge", "Delivery"]
    },
    {
      name: "Gearshift Miami",
      address: "123 Ocean Drive, Miami, FL 33139",
      phone: "+1 (305) 555-0789",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
      services: ["Test Drives", "Trade-Ins", "International Shipping"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Showroom Locations" 
          subtitle="Visit our world-class showrooms for an exclusive automotive experience"
        />
        
        <ContentSection title="Find a Showroom">
          <StoreMap />
        </ContentSection>

        <ContentSection title="Our Showrooms">
          <div className="grid gap-8">
            {showrooms.map((showroom, index) => (
              <div key={index} className="bg-background rounded-lg p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-foreground">{showroom.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{showroom.address}</p>
                      <p>{showroom.phone}</p>
                      <p>{showroom.hours}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" className="rounded-none">
                        Get Directions
                      </Button>
                      <Button className="rounded-none">
                        Schedule Visit
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-light text-foreground">Available Services</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {showroom.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Private Viewings">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience our collection with a private viewing. Our automotive specialists will guide you through our inventory, arrange test drives, and provide expert consultation in an exclusive, personalized setting.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Personal Consultation</h4>
                <p className="text-muted-foreground text-sm">
                  One-on-one guidance to find the perfect vehicle for your lifestyle
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Extended Test Drives</h4>
                <p className="text-muted-foreground text-sm">
                  Experience the vehicle on your terms with extended driving opportunities
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Concierge Services</h4>
                <p className="text-muted-foreground text-sm">
                  Financing, insurance, and delivery coordination handled for you
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="rounded-none">
                Book a Private Viewing
              </Button>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Virtual Showroom">
          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-foreground mb-4">Can't visit in person?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a virtual tour with one of our specialists. We'll provide detailed walkarounds, 
              answer your questions, and help you explore our collection from anywhere in the world.
            </p>
            <Button variant="outline" className="rounded-none">
              Book Virtual Tour
            </Button>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;
