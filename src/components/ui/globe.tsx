
"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// Since we're not using the actual cobe library for this demo, we'll create a mock implementation
// that renders a spinning globe using CSS

export function Globe({
  className,
}: {
  className?: string
}) {
  const globeRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[700px]",
        className,
      )}
    >
      <div 
        ref={globeRef}
        className={cn(
          "relative size-full rounded-full bg-travel-dark opacity-0 transition-opacity duration-500",
          isLoaded && "opacity-100"
        )}
        style={{
          background: "radial-gradient(circle at 50% 50%, #2b3851 0%, #1A1F2C 60%)",
          boxShadow: "0 0 60px rgba(139, 92, 246, 0.4), inset 0 0 60px rgba(139, 92, 246, 0.2)",
        }}
      >
        {/* Globe grid lines */}
        <div className="absolute inset-0 rounded-full border border-white/5"></div>
        <div className="absolute inset-0 rounded-full border-t border-b border-white/5" style={{ transform: "rotateX(70deg)" }}></div>
        <div className="absolute inset-0 rounded-full border-t border-b border-white/5" style={{ transform: "rotateX(-70deg)" }}></div>
        <div className="absolute inset-0 rounded-full border-t border-b border-white/5" style={{ transform: "rotateY(70deg)" }}></div>
        <div className="absolute inset-0 rounded-full border-t border-b border-white/5" style={{ transform: "rotateY(-70deg)" }}></div>
        
        {/* Globe dots for destinations */}
        <div className="absolute w-3 h-3 rounded-full bg-travel-gold" style={{ top: "30%", left: "60%", boxShadow: "0 0 10px #D5A021" }}></div>
        <div className="absolute w-2 h-2 rounded-full bg-travel-gold" style={{ top: "40%", left: "30%", boxShadow: "0 0 8px #D5A021" }}></div>
        <div className="absolute w-2 h-2 rounded-full bg-travel-gold" style={{ top: "60%", left: "45%", boxShadow: "0 0 8px #D5A021" }}></div>
        <div className="absolute w-1.5 h-1.5 rounded-full bg-travel-gold" style={{ top: "50%", left: "70%", boxShadow: "0 0 6px #D5A021" }}></div>
        <div className="absolute w-1.5 h-1.5 rounded-full bg-travel-gold" style={{ top: "70%", left: "55%", boxShadow: "0 0 6px #D5A021" }}></div>
        
        {/* Animated orbit */}
        <div className="absolute inset-0 rounded-full border border-travel-accent/20" 
          style={{ 
            animation: "spin 30s linear infinite",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),rgba(26,31,44,0)_70%)]"></div>
      
      {/* Add CSS animation for the orbit */}
      <style>{`
        @keyframes spin {
          from { transform: rotateY(0deg) rotateX(23deg); }
          to { transform: rotateY(360deg) rotateX(23deg); }
        }
      `}</style>
    </div>
  )
}
