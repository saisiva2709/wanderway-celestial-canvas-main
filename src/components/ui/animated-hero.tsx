
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["limitless", "exclusive", "unforgettable", "personalized", "extraordinary"], []);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/23232-333604632_small.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="flex gap-6 sm:gap-8 py-20 lg:py-0 items-center justify-center flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            
          </motion.div>
          <div className="flex gap-4 flex-col">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl max-w-3xl mx-auto tracking-tighter text-center font-bold" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="text-white">Explore the World, Your Way</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span 
                    key={index} 
                    className="absolute font-semibold text-travel-gold" 
                    initial={{ opacity: 0, y: "-100" }} 
                    transition={{ type: "spring", stiffness: 50 }} 
                    animate={
                      titleNumber === index 
                        ? { y: 0, opacity: 1 } 
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto text-center" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Custom itineraries, handpicked destinations, unbeatable prices. Let us create your dream journey.
            </motion.p>
          </div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button size="lg" className="gap-4 w-full sm:w-auto" variant="outline" onClick={handleContactClick}>
              Contact us <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 w-full sm:w-auto bg-travel-gold hover:bg-travel-gold/90 text-black" onClick={handleContactClick}>
              Plan my trip <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
