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
          title="Why GearShift" 
          subtitle="The premier destination for luxury and exotic automobiles"
        />
        
        <ContentSection title="The GearShift Difference">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Curated Selection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every vehicle in our inventory is hand-selected by our team of automotive experts. We accept only the finest examples of luxury and exotic automobiles, ensuring our clients have access to exceptional quality.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Transparent History</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complete transparency is our promise. Every vehicle comes with comprehensive documentation including full service history, CARFAX reports, and detailed condition assessments.
              </p>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-2xl font-light text-foreground mb-6">By The Numbers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Luxury vehicles delivered annually</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Customer satisfaction rating</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Years of automotive excellence</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Our Commitment">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At GearShift, we believe acquiring a luxury automobile should be an experience as refined as the vehicles we offer.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">White-Glove Service</h3>
                <p className="text-muted-foreground">
                  From your first inquiry to delivery and beyond, our dedicated team provides personalized attention at every step of your journey.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Nationwide Delivery</h3>
                <p className="text-muted-foreground">
                  We deliver your dream car directly to your door with enclosed transport, fully insured and handled with the utmost care.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Our Partners">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              We maintain relationships with the world's most prestigious automotive brands and their authorized service centers to ensure our vehicles meet the highest standards.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Ferrari</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Lamborghini</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Porsche</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Bentley</span>
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