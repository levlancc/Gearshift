import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Our Commitment" 
          subtitle="Driving towards a sustainable future in luxury automotive"
        />
        
        <ContentSection title="Environmental Responsibility">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Electric & Hybrid Collection</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're proud to feature an expanding collection of electric and hybrid luxury vehicles. From the Porsche Taycan to the Ferrari SF90 Stradale, experience the future of performance with zero-emission and low-emission options.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Carbon Offset Program</h3>
              <p className="text-muted-foreground leading-relaxed">
                For every vehicle sold, Gearshift contributes to verified carbon offset programs. We partner with leading environmental organizations to neutralize the carbon footprint of transportation and delivery.
              </p>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-2xl font-light text-foreground mb-6">Our Sustainability Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-primary mb-2">50%</div>
                <p className="text-sm text-muted-foreground">Electric/hybrid vehicles in inventory by 2026</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Renewable energy in all showrooms</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">Zero</div>
                <p className="text-sm text-muted-foreground">Net carbon emissions by 2028</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Sustainable Operations">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment extends beyond the vehicles we sell. Every aspect of our operations is designed with environmental responsibility in mind.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Green Showrooms</h3>
                <p className="text-muted-foreground">
                  Our facilities feature solar panels, EV charging stations, LED lighting, and sustainable materials throughout.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Eco-Friendly Transport</h3>
                <p className="text-muted-foreground">
                  Vehicle deliveries utilize fuel-efficient routes and we're transitioning to electric transport trucks.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Industry Partnerships">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              We collaborate with manufacturers and industry leaders committed to advancing sustainable automotive technology.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">EV Alliance</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Carbon Trust</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Green Auto</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Clean Energy</span>
              </div>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sustainability;
