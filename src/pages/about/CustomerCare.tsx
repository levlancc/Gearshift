import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import AboutSidebar from "../../components/about/AboutSidebar";

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Customer Care" 
          subtitle="We're here to assist you with all your automotive needs"
        />
        
        <ContentSection title="Contact Information">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Phone</h3>
              <p className="text-muted-foreground">+1 (888) 555-GEAR</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-8PM EST<br />Sat-Sun: 10AM-6PM EST</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Email</h3>
              <p className="text-muted-foreground">concierge@gearshift.com</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Live Chat</h3>
              <Button variant="outline" className="rounded-none">
                Start Chat
              </Button>
              <p className="text-sm text-muted-foreground">Available during business hours</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="financing" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What financing options are available?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We partner with premium lenders to offer competitive financing rates. Options include traditional auto loans, lease programs, and balloon financing. Our finance team will work with you to find the best solution for your situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tradein" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Do you accept trade-ins?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we accept trade-ins of luxury and exotic vehicles. Our appraisal team will evaluate your vehicle and provide a competitive offer. Trade-in value can be applied directly to your purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What warranty coverage do your vehicles have?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Coverage varies by vehicle. Many of our vehicles still carry manufacturer warranty. We also offer extended warranty programs through reputable providers. Ask our team for specific coverage details on any vehicle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="inspection" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Are vehicles inspected before sale?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Every vehicle undergoes a comprehensive multi-point inspection by certified technicians. We provide a detailed condition report and complete vehicle history. Independent pre-purchase inspections are also welcomed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="delivery" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Can you deliver vehicles nationwide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer enclosed transport delivery anywhere in the continental United States. International shipping is also available. Delivery costs are calculated based on distance and are provided upon request.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="testdrive" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How do I schedule a test drive?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Test drives can be scheduled online or by calling our showroom. A valid driver's license and proof of insurance are required. For high-performance vehicles, we may request additional documentation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentSection>

        <ContentSection title="Contact Form">
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">First Name</label>
                  <Input className="rounded-none" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">Last Name</label>
                  <Input className="rounded-none" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">Email</label>
                <Input type="email" className="rounded-none" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">Vehicle of Interest (Optional)</label>
                <Input className="rounded-none" placeholder="e.g., 2024 Ferrari 488 GTB" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">How can we help you?</label>
                <Textarea 
                  className="rounded-none min-h-[120px]" 
                  placeholder="Please describe your inquiry in detail"
                />
              </div>
              
              <Button type="submit" className="w-full rounded-none">
                Send Message
              </Button>
            </form>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerCare;
