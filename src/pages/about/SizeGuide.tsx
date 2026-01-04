import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Buying Guide" 
          subtitle="Everything you need to know about purchasing a luxury vehicle"
        />
        
        <ContentSection title="The Gearshift Process">
          <div className="space-y-8">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-6">Your Journey to Ownership</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Step 1: Explore</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Browse our curated inventory online</li>
                    <li>Filter by make, model, year, and price</li>
                    <li>View detailed photos and specifications</li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Step 2: Connect</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Schedule a consultation with our specialists</li>
                    <li>Discuss your preferences and requirements</li>
                    <li>Receive personalized recommendations</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/10 rounded-lg p-8">
                <h4 className="font-medium text-foreground mb-4">Step 3: Experience</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Schedule a test drive at your preferred location</li>
                  <li>Review vehicle history and inspection reports</li>
                  <li>Ask our experts any questions</li>
                </ol>
              </div>
              <div className="bg-muted/10 rounded-lg p-8">
                <h4 className="font-medium text-foreground mb-4">Step 4: Acquire</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Finalize financing or payment arrangements</li>
                  <li>Complete paperwork and registration</li>
                  <li>Arrange delivery or pickup</li>
                </ol>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Vehicle Categories">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Sports Cars</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Coupes</span>
                  <span className="text-foreground">2-door performance</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Convertibles</span>
                  <span className="text-foreground">Open-air driving</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Supercars</span>
                  <span className="text-foreground">Ultimate performance</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Luxury Vehicles</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Sedans</span>
                  <span className="text-foreground">Executive comfort</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">SUVs</span>
                  <span className="text-foreground">Versatile luxury</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Grand Tourers</span>
                  <span className="text-foreground">Long-distance elegance</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Electric</span>
                  <span className="text-foreground">Future of luxury</span>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Need Assistance?">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Our automotive specialists are ready to guide you through every step of the process. 
              Whether you're a first-time buyer or adding to your collection, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="rounded-none">
                Download Buyer's Guide
              </Button>
              <Button className="rounded-none">
                Speak with a Specialist
              </Button>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;
