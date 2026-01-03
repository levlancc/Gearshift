import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewProduct from "./ReviewProduct";

const CustomStar = ({ filled, className }: { filled: boolean; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={`w-3 h-3 ${filled ? 'text-foreground' : 'text-muted-foreground/30'} ${className}`}
  >
    <path 
      fillRule="evenodd" 
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" 
      clipRule="evenodd" 
    />
  </svg>
);

const ProductDescription = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  return (
    <div className="space-y-0 mt-8 border-t border-border">
      {/* Description */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Overview</span>
          {isDescriptionOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isDescriptionOpen && (
          <div className="pb-6 space-y-4">
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              The Ferrari 488 GTB is a masterpiece of Italian engineering, representing the evolution 
              of Ferrari's renowned mid-rear-engined V8 sports car lineage. Its twin-turbocharged 
              3.9-liter V8 engine delivers breathtaking performance while maintaining the visceral 
              driving experience Ferrari is celebrated for.
            </p>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              This particular example features the iconic Rosso Corsa finish, paired with a luxurious 
              nero leather interior. With only 1,250 miles on the odometer, this vehicle is in 
              exceptional condition and ready for its next custodian.
            </p>
          </div>
        )}
      </div>

      {/* Specifications */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Specifications</span>
          {isDetailsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isDetailsOpen && (
          <div className="pb-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">VIN</span>
              <span className="text-sm font-light text-foreground">ZFF79ALA8K0234XXX</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">Engine</span>
              <span className="text-sm font-light text-foreground">3.9L Twin-Turbo V8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">Horsepower</span>
              <span className="text-sm font-light text-foreground">661 HP @ 8,000 RPM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">Torque</span>
              <span className="text-sm font-light text-foreground">561 lb-ft @ 3,000 RPM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">Drivetrain</span>
              <span className="text-sm font-light text-foreground">Rear-Wheel Drive</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">Interior</span>
              <span className="text-sm font-light text-foreground">Nero Leather</span>
            </div>
          </div>
        )}
      </div>

      {/* Vehicle History */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsHistoryOpen(!isHistoryOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Vehicle History</span>
          {isHistoryOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isHistoryOpen && (
          <div className="pb-6 space-y-4">
            <ul className="space-y-2">
              <li className="text-sm font-light text-muted-foreground">• One owner from new</li>
              <li className="text-sm font-light text-muted-foreground">• Full Ferrari service history</li>
              <li className="text-sm font-light text-muted-foreground">• No accidents or damage reported</li>
              <li className="text-sm font-light text-muted-foreground">• Original window sticker included</li>
            </ul>
            <p className="text-sm font-light text-muted-foreground">
              A comprehensive vehicle history report is available upon request. Contact us for 
              detailed maintenance records and service documentation.
            </p>
          </div>
        )}
      </div>

      {/* Customer Reviews */}
      <div className="border-b border-border lg:mb-16">
        <Button
          variant="ghost"
          onClick={() => setIsReviewsOpen(!isReviewsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <div className="flex items-center gap-3">
            <span>Customer Reviews</span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <CustomStar
                  key={star}
                  filled={star <= 4.8}
                />
              ))}
              <span className="text-sm font-light text-muted-foreground ml-1">4.9</span>
            </div>
          </div>
          {isReviewsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isReviewsOpen && (
          <div className="pb-6 space-y-6">
            {/* Review Product Button */}
            <ReviewProduct />

            {/* Reviews List */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CustomStar
                        key={star}
                        filled={true}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-light text-muted-foreground">Michael R.</span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  "Exceptional buying experience from start to finish. The 488 GTB exceeded all my 
                  expectations. The team was professional and the vehicle was delivered in perfect condition."
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CustomStar
                        key={star}
                        filled={star <= 5}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-light text-muted-foreground">David L.</span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  "The attention to detail in presenting this Ferrari was remarkable. Every question was 
                  answered thoroughly, and the test drive convinced me immediately. Couldn't be happier!"
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CustomStar
                        key={star}
                        filled={star <= 4}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-light text-muted-foreground">James K.</span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  "A dream car delivered with white-glove service. The documentation was complete and 
                  the vehicle history was transparent. Highly recommend this dealership."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;