const Footer = () => {
  return (
    <footer className="w-full bg-card text-foreground pt-12 pb-4 px-6 border-t border-border mt-48">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand - Left side */}
          <div>
            <span className="font-display text-3xl tracking-wider text-primary mb-4 block">
              GEARSHIFT
            </span>
            <p className="text-sm font-light text-foreground/70 leading-relaxed max-w-md mb-6">
              Premium luxury vehicles curated for discerning collectors and enthusiasts
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm font-light text-foreground/70">
              <div>
                <p className="font-normal text-foreground mb-1 uppercase tracking-wide text-xs">Visit Our Showroom</p>
                <p>500 Park Avenue</p>
                <p>New York, NY 10022</p>
              </div>
              <div>
                <p className="font-normal text-foreground mb-1 mt-4 uppercase tracking-wide text-xs">Contact</p>
                <p>+1 (212) 555-0199</p>
                <p>inquiries@gearshift.com</p>
              </div>
            </div>
          </div>

          {/* Link lists - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Inventory */}
            <div>
              <h4 className="text-xs font-normal mb-4 uppercase tracking-wide">Inventory</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Sports Cars</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Supercars</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Luxury Sedans</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">SUVs</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Classics</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-normal mb-4 uppercase tracking-wide">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Financing</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Trade-In</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Consignment</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Delivery</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-normal mb-4 uppercase tracking-wide">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">YouTube</a></li>
                <li><a href="#" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - edge to edge separator */}
      <div className="border-t border-border -mx-6 px-6 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light text-foreground/60 mb-1 md:mb-0">
            © 2024 Gearshift Motors. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-sm font-light text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm font-light text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
