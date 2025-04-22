
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Smoother rotation values
  const randomRotateY = () => {
    return Math.floor(Math.random() * 7) - 3; // Reduced range for subtler rotation
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-12", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.95,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                    y: isActive(index) ? 0 : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 },
                  }}
                  className={`absolute inset-0 origin-center ${isActive(index) ? "z-20" : "z-10"}`}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <h3 className="text-2xl font-bold text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-400">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-lg text-gray-300 mt-8">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 5,
                      filter: "blur(2px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: index * 0.01, // Faster word animation
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group/button hover:bg-travel-gold/20 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5 text-travel-gold group-hover/button:translate-x-[-2px] transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group/button hover:bg-travel-gold/20 transition-colors duration-300"
            >
              <ArrowRight className="h-5 w-5 text-travel-gold group-hover/button:translate-x-[2px] transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
