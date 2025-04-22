
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => {
        const sectionId = item.url.replace('#', '');
        const element = document.getElementById(sectionId);
        if (!element) return { id: sectionId, top: 0, height: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          id: sectionId,
          top: rect.top,
          height: rect.height
        };
      });

      const viewportHeight = window.innerHeight;
      const currentSection = sections.find(section => {
        return section.top <= viewportHeight / 3 && section.top > -section.height + viewportHeight / 3;
      });

      if (currentSection) {
        const activeItem = items.find(item => item.url === `#${currentSection.id}`);
        if (activeItem && activeItem.name !== activeTab) {
          setActiveTab(activeItem.name);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items, activeTab]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setActiveTab(item.name);
    
    const element = document.getElementById(item.url.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50",
        isMobile ? "bottom-4" : "top-4",
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2 bg-background/10 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative cursor-pointer text-xs font-semibold px-2 sm:px-4 py-1.5 rounded-full transition-colors",
                "text-white/80 hover:text-travel-gold",
                isActive && "bg-white/5 text-travel-gold",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-travel-gold/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-0.5 md:w-6 md:h-1 bg-travel-gold rounded-t-full">
                    <div className="absolute w-8 h-4 md:w-10 md:h-5 bg-travel-gold/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-4 h-4 md:w-6 md:h-5 bg-travel-gold/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-travel-gold/20 rounded-full blur-sm top-0 left-1 md:left-1.5" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
