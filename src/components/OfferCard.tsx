
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  discount: string;
  delay?: number;
}

export default function OfferCard({ title, description, image, price, discount, delay = 0 }: OfferCardProps) {
  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parse the price to make sure it's properly formatted
  const priceValue = parseInt(price.replace(/[^0-9]/g, ''));
  const discountedPrice = Math.round(priceValue * (1 - parseInt(discount) / 100));

  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
      
      <img 
        src={image} 
        alt={title} 
        className="w-full h-60 md:h-80 object-cover" 
      />
      
      <div className="absolute top-0 right-0 bg-travel-gold text-black font-semibold px-4 py-2 rounded-bl-xl z-20">
        {discount}% OFF
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-3 max-w-md text-sm sm:text-base">{description}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="text-gray-400 line-through text-sm sm:text-base">${priceValue}</div>
          <div className="text-travel-gold font-semibold text-lg sm:text-xl">
            ${discountedPrice}
          </div>
        </div>
        
        <Button 
          className="bg-travel-gold hover:bg-travel-gold/90 text-black text-sm sm:text-base w-full sm:w-auto"
          onClick={handleBookNow}
        >
          Book Now <MoveRight size={16} className="ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}
