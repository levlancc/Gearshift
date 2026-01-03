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
          subtitle="Your satisfaction drives everything we do"
        />
        
        <ContentSection title="Contact Information">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 888-CARS</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-7PM EST<br />Sat: 10AM-5PM EST</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Email</h3>
              <p className="text-muted-foreground">sales@gearshiftauto.com</p>
              <p className="text-sm text-muted-foreground">Response within 2 hours</p>
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
                We partner with premium lenders to offer competitive financing rates. Our finance team can arrange terms from 24-84 months with rates as low as 3.9% APR for qualified buyers. We also work with luxury vehicle leasing programs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="delivery" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Do you offer nationwide delivery?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we provide enclosed transport delivery anywhere in the continental United States. Delivery is complimentary for purchases over $150,000. All vehicles are fully insured during transit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What warranty comes with pre-owned vehicles?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All GearShift vehicles undergo a rigorous 200-point inspection. We offer a 12-month/12,000-mile comprehensive warranty on all pre-owned vehicles, with extended warranty options available up to 5 years.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="trade-in" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Do you accept trade-ins?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. We offer competitive trade-in valuations for luxury and exotic vehicles. Submit your vehicle details online for a preliminary quote, or bring it to any of our showrooms for an in-person appraisal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="test-drive" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How do I schedule a test drive?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Test drives can be scheduled online through any vehicle listing page, by calling our sales team, or by visiting a showroom. We require a valid driver's license and proof of insurance. For high-value exotics, pre-approval may be required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="history" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I see a vehicle's history report?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Every vehicle in our inventory comes with a complete CARFAX and AutoCheck report. We also provide full service records, original window stickers when available, and documentation of any modifications or upgrades.
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
                  placeholder="Tell us about your dream car or any questions you have"
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