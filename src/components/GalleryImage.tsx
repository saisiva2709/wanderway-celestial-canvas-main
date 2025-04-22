
import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

interface GalleryImageProps {
  src: string;
  alt: string;
  delay?: number;
}

export default function GalleryImage({ src, alt, delay = 0 }: GalleryImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl img-hover-zoom cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      
      <motion.div 
        className="absolute inset-0 bg-black/40 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Maximize2 size={16} className="text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}
