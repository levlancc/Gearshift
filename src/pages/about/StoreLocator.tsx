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
      name: "GearShift Manhattan",
      address: "789 Madison Avenue, New York, NY 10065",
      phone: "+1 (212) 555-0123",
      hours: "Mon-Sat: 10AM-7PM, Sun: 12PM-5PM",
      services: ["Test Drives", "Trade-In Appraisals", "Financing", "Vehicle Delivery"]
    },
    {
      name: "GearShift Beverly Hills",
      address: "456 Rodeo Drive, Beverly Hills, CA 90210",
      phone: "+1 (310) 555-0456",
      hours: "Mon-Sat: 10AM-7PM, Sun: 12PM-5PM",
      services: ["Test Drives", "Private Viewings", "Concierge Service", "Detailing"]
    },
    {
      name: "GearShift Miami",
      address: "123 Collins Avenue, Miami Beach, FL 33139",
      phone: "+1 (305) 555-0789",
      hours: "Mon-Sat: 10AM-8PM, Sun: 11PM-6PM",
      services: ["Test Drives", "Exotic Rentals", "Storage", "Maintenance"]
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
          subtitle="Experience automotive excellence in person"
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
              For our most discerning clients, we offer private viewing appointments. Experience our collection in an exclusive setting with dedicated attention from our automotive specialists.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">VIP Lounge Access</h4>
                <p className="text-muted-foreground text-sm">
                  Enjoy complimentary refreshments in our private client lounge
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Extended Test Drives</h4>
                <p className="text-muted-foreground text-sm">
                  Experience the full capability of your chosen vehicle
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Expert Consultation</h4>
                <p className="text-muted-foreground text-sm">
                  One-on-one guidance from our automotive specialists
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="rounded-none">
                Request Private Viewing
              </Button>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Virtual Showroom">
          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-foreground mb-4">Browse from anywhere</h3>
            <p className="text-muted-foreground mb-6">
              Explore our inventory through high-definition video tours and live virtual walkarounds. 
              Our team can showcase any vehicle in detail via video call, answering your questions in real-time.
            </p>
            <Button variant="outline" className="rounded-none">
              Schedule Virtual Tour
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