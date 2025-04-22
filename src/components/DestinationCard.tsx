
import { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

interface DestinationCardProps {
  image: string;
  name: string;
  duration: string;
  price: string;
  delay?: number;
}

export default function DestinationCard({ image, name, duration, price, delay = 0 }: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      <div className="aspect-[4/5] w-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-300">{duration}</span>
          <span className="text-travel-gold font-semibold">From {price}</span>
        </div>
        
        <motion.div 
          className="flex items-center gap-2 text-travel-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Explore <MoveRight size={16} className="mt-[2px]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
