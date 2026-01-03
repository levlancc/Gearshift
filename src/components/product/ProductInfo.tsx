import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Calendar, Fuel, Gauge, Settings } from "lucide-react";

const ProductInfo = () => {
  return (
    <div className="space-y-6">
      {/* Breadcrumb - Show only on desktop */}
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/category/sports-cars">Sports Cars</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>488 GTB</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Vehicle title and price */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-light text-primary uppercase tracking-wider mb-1">Ferrari</p>
            <h1 className="text-2xl md:text-3xl font-light text-foreground">488 GTB</h1>
          </div>
          <div className="text-right">
            <p className="text-xl font-light text-foreground">$285,000</p>
          </div>
        </div>
      </div>

      {/* Key specs grid */}
      <div className="grid grid-cols-2 gap-4 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Calendar className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-light text-muted-foreground">Year</p>
            <p className="text-sm font-medium text-foreground">2024</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Gauge className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-light text-muted-foreground">Mileage</p>
            <p className="text-sm font-medium text-foreground">1,250 mi</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Fuel className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-light text-muted-foreground">Fuel Type</p>
            <p className="text-sm font-medium text-foreground">Gasoline</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Settings className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-light text-muted-foreground">Transmission</p>
            <p className="text-sm font-medium text-foreground">7-Speed DCT</p>
          </div>
        </div>
      </div>

      {/* Vehicle details */}
      <div className="space-y-4 py-4 border-b border-border">
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Engine</h3>
          <p className="text-sm font-light text-muted-foreground">3.9L Twin-Turbo V8 • 661 HP</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Performance</h3>
          <p className="text-sm font-light text-muted-foreground">0-60 mph in 3.0s • Top Speed 205 mph</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Exterior</h3>
          <p className="text-sm font-light text-muted-foreground">Rosso Corsa (Racing Red)</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Editor's notes</h3>
          <p className="text-sm font-light text-muted-foreground italic">"The 488 GTB represents the pinnacle of Ferrari engineering, blending raw power with refined elegance for an unforgettable driving experience."</p>
        </div>
      </div>

      {/* Inquiry Button */}
      <div className="space-y-4">
        <Button 
          className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-light rounded-none"
        >
          Schedule Test Drive
        </Button>
        <Button 
          variant="outline"
          className="w-full h-12 font-light rounded-none"
        >
          Request More Information
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;