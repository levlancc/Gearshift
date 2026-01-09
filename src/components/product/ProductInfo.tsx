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
import { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
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
                <Link to={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`}>
                  {product.category}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Vehicle title and price */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-light text-primary uppercase tracking-wider mb-1">{product.category}</p>
            <h1 className="text-2xl md:text-3xl font-light text-foreground">{product.name}</h1>
          </div>
          <div className="text-right">
            <p className="text-xl font-light text-foreground">{product.price}</p>
          </div>
        </div>
      </div>

      {/* Key specs grid */}
      <div className="grid grid-cols-2 gap-4 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Calendar className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-light text-muted-foreground">Year</p>
            <p className="text-sm font-medium text-foreground">{product.year || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Gauge className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-light text-muted-foreground">Mileage</p>
            <p className="text-sm font-medium text-foreground">{product.mileage || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Fuel className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-light text-muted-foreground">Fuel Type</p>
            <p className="text-sm font-medium text-foreground">{product.fuelType || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Settings className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-light text-muted-foreground">Transmission</p>
            <p className="text-sm font-medium text-foreground">{product.transmission || 'N/A'}</p>
          </div>
        </div>
      </div>

      {/* Vehicle details */}
      <div className="space-y-4 py-4 border-b border-border">
        {product.engine && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Engine</h3>
            <p className="text-sm font-light text-muted-foreground">{product.engine}</p>
          </div>
        )}
        
        {product.performance && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Performance</h3>
            <p className="text-sm font-light text-muted-foreground">{product.performance}</p>
          </div>
        )}
        
        {product.exterior && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Exterior</h3>
            <p className="text-sm font-light text-muted-foreground">{product.exterior}</p>
          </div>
        )}
        
        {product.description && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Editor's notes</h3>
            <p className="text-sm font-light text-muted-foreground italic">"{product.description}"</p>
          </div>
        )}
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
