
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
}

export default function TestimonialCard({ name, location, text, avatar, rating }: TestimonialCardProps) {
  return (
    <motion.div 
      className="glass-panel p-6 md:p-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="h-14 w-14 rounded-full overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-travel-gold fill-travel-gold" : "text-gray-500"} 
          />
        ))}
      </div>
      
      <p className="text-gray-300 italic">{text}</p>
    </motion.div>
  );
}
