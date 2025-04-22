import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Compass, Users, HeadphonesIcon, Wallet, 
  MapPin, Calendar, Send, Mail, Phone, 
  Instagram, Facebook, Twitter, Linkedin,
  Package, Globe as GlobeIcon, Route,
  Clock as ClockIcon, Home, User, Briefcase, FileText
} from "lucide-react";

import { NavBar } from "@/components/ui/tubelight-navbar";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import GalleryImage from "@/components/GalleryImage";
import OfferCard from "@/components/OfferCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Hero } from "@/components/ui/animated-hero";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    dates: "",
    requests: ""
  });

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Destinations', url: '#destinations', icon: GlobeIcon },
    { name: 'About', url: '#about', icon: User },
    { name: 'Gallery', url: '#gallery', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Phone }
  ];

  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Santorini, Greece",
      duration: "7-10 Days",
      price: "$1,899"
    },
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Bali, Indonesia",
      duration: "10-14 Days",
      price: "$2,199"
    },
    {
      image: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Swiss Alps",
      duration: "5-7 Days",
      price: "$2,499"
    },
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Dubai, UAE",
      duration: "6-8 Days",
      price: "$2,899"
    },
    {
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Maldives",
      duration: "7-10 Days",
      price: "$3,499"
    },
    {
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Paris, France",
      duration: "5-7 Days",
      price: "$1,999"
    }
  ];
  
  const testimonials = [
    {
      quote: "Our trip to Bali was absolutely perfect thanks to WanderWay. The personalized itinerary hit all our must-see spots while introducing us to hidden gems we would have never found on our own!",
      name: "Emma Thompson",
      designation: "London, UK",
      src: "/1.jpg",
    },
    {
      quote: "This was our third time booking with WanderWay and they never disappoint. Their attention to detail and 24/7 support made our family trip to Japan stress-free and memorable.",
      name: "Michael Chen",
      designation: "Toronto, Canada",
      src: "/2.jpg",
    },
    {
      quote: "The European tour planned by WanderWay exceeded all expectations! Luxury accommodations, private transfers, and incredible local guides. Worth every penny!",
      name: "Sophia Rodriguez",
      designation: "Miami, USA",
      src: "/3.jpg",
    },
    {
      quote: "We were hesitant about booking an adventure trip online, but WanderWay made everything seamless. The local guides they arranged were knowledgeable and passionate.",
      name: "David Johnson",
      designation: "Sydney, Australia",
      src: "/4.jpg",
    },
    {
      quote: "The attention to detail in our honeymoon planning was extraordinary. Every special request was accommodated, and the surprise upgrades made our trip unforgettable.",
      name: "Olivia Williams",
      designation: "Edinburgh, Scotland",
      src: "/5.jpg",
    }
  ];

  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mountain view"
    },
    {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beach sunset"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tropical island"
    },
    {
      src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ancient ruins"
    },
    {
      src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Local cuisine"
    },
    {
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "City skyline"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Trip planning initiated!",
      description: "We'll contact you within 24 hours to discuss your dream vacation.",
    });
    setFormData({
      name: "",
      email: "",
      destination: "",
      dates: "",
      requests: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-travel-dark text-white overflow-x-hidden">
      <NavBar items={navItems} />
      
      <section id="home" className="relative min-h-screen overflow-hidden">
        <Hero />
      </section>
      
      <section id="destinations" className="section-container">
        <ScrollReveal>
          <h2 className="section-title text-white">
            Popular <span className="text-travel-gold">Destinations</span>
          </h2>
          <p className="section-subtitle">
            Handpicked destinations that offer extraordinary experiences for the discerning traveler.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={index}
              {...destination}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
      
      <section id="features" className="section-container relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-travel-accent/20 via-transparent to-transparent opacity-30"></div>
        
        <ScrollReveal>
          <h2 className="section-title text-white">
            Why Choose <span className="text-travel-gold">Us</span>
          </h2>
          <p className="section-subtitle">
            We go above and beyond to ensure your travel experiences are nothing short of extraordinary.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 relative z-10">
          <FeatureCard 
            icon={Compass}
            title="Custom Trips"
            description="Tailored itineraries designed specifically for your preferences and interests."
            delay={0}
          />
          <FeatureCard 
            icon={HeadphonesIcon}
            title="24/7 Support"
            description="Around-the-clock assistance wherever you are in the world."
            delay={0.1}
          />
          <FeatureCard 
            icon={Wallet}
            title="Best Price Guarantee"
            description="We match or beat any comparable quote from other travel agencies."
            delay={0.2}
          />
          <FeatureCard 
            icon={Users}
            title="Trusted by 10,000+"
            description="Join thousands of satisfied travelers who choose us year after year."
            delay={0.3}
          />
        </div>
      </section>
      
      <section id="testimonials" className="section-container relative bg-testimonial-bg bg-cover bg-center">
        <div className="absolute inset-0 bg-travel-dark/70"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="section-title text-white">
              What Our <span className="text-travel-gold">Clients Say</span>
            </h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from travelers who've experienced our service firsthand.
            </p>
          </ScrollReveal>
          
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>
      
      <section id="gallery" className="section-container">
        <ScrollReveal>
          <h2 className="section-title text-white">
            Gallery <span className="text-travel-gold">Highlights</span>
          </h2>
          <p className="section-subtitle">
            Glimpses of the incredible moments and places that await on your journey.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {gallery.map((image, index) => (
            <GalleryImage 
              key={index}
              {...image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
      
      <section id="contact" className="section-container relative bg-form-bg bg-cover bg-center">
        <div className="absolute inset-0 bg-travel-dark/80"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-title text-white">
              Start <span className="text-travel-gold">Planning</span> Your Dream Trip
            </h2>
            <p className="section-subtitle">
              Tell us what you're looking for, and our travel experts will craft the perfect itinerary for you.
            </p>
          </ScrollReveal>
          
          <form onSubmit={handleSubmit} className="glass-panel p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-300">
                  Desired Destination
                </label>
                <Input
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Paris, Bali, etc."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="dates" className="block mb-2 text-sm font-medium text-gray-300">
                  Travel Dates
                </label>
                <Input
                  id="dates"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  placeholder="MM/DD/YYYY - MM/DD/YYYY"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="requests" className="block mb-2 text-sm font-medium text-gray-300">
                Special Requests
              </label>
              <Textarea
                id="requests"
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                placeholder="Tell us about your preferences, interests, or any special requirements..."
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 min-h-[120px]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-travel-gold hover:bg-travel-gold/90 text-black font-medium"
            >
              Start Planning <Send size={16} className="ml-2" />
            </Button>
          </form>
        </div>
      </section>
      
      <section id="offers" className="section-container">
        <ScrollReveal>
          <h2 className="section-title text-white">
            Special <span className="text-travel-gold">Offers</span>
          </h2>
          <p className="section-subtitle">
            Limited-time deals on some of our most popular destinations. Book now to secure these exclusive rates.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <OfferCard 
            title="Summer in Europe"
            description="Experience the charm and beauty of Europe's historic cities with our special summer package."
            image="https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            price="$3,499"
            discount="20%"
          />
          <OfferCard 
            title="Tropical Paradise"
            description="Escape to the crystal-clear waters and white sand beaches of the Maldives with our all-inclusive package."
            image="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            price="$4,299"
            discount="15%"
            delay={0.2}
          />
        </div>
      </section>
      
      <section id="about" className="section-container relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-travel-accent/10 via-transparent to-transparent opacity-30"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="section-title text-white">
              About <span className="text-travel-gold">WanderWay</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
            <ScrollReveal className="order-2 md:order-1">
              <div className="text-gray-300 space-y-4">
                <p>
                  For over 15 years, WanderWay Travels has been crafting extraordinary journeys for travelers seeking authentic, immersive experiences around the world.
                </p>
                <p>
                  Our team of experienced travel consultants has personally visited over 120 countries, allowing us to provide firsthand knowledge and insider tips for each destination we offer.
                </p>
                <p>
                  We believe travel should be transformative, creating memories that last a lifetime while respecting local cultures and environments.
                </p>
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="border-travel-gold text-travel-gold hover:bg-travel-gold/10"
                  >
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Travel planning team" 
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Travel planning" 
                  className="rounded-lg shadow-lg w-full h-40 object-cover mt-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Travel destination" 
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Happy travelers" 
                  className="rounded-lg shadow-lg w-full h-40 object-cover mt-4"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section id="faq" className="section-container">
        <ScrollReveal>
          <h2 className="section-title text-white">
            Frequently <span className="text-travel-gold">Asked Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about booking your perfect trip with WanderWay Travels.
          </p>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-travel-gold">
                How do I book a trip with WanderWay?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Booking with WanderWay is easy! You can fill out our trip planning form on this website, call us directly, or visit our office in person. One of our travel consultants will then work with you to design your perfect itinerary based on your preferences, budget, and travel dates.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-travel-gold">
                What is included in your travel packages?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Our packages typically include accommodation, transportation (flights, transfers, etc.), select meals, guided tours, and 24/7 travel support. The exact inclusions vary by package and can be customized to your needs. We clearly outline all inclusions in your itinerary before booking.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-travel-gold">
                How far in advance should I book my trip?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                For the best availability and rates, we recommend booking 3-6 months in advance for most destinations. For peak season travel (summer in Europe, December holidays, etc.) or special events, 6-12 months advance booking is advised. However, we also offer last-minute deals for spontaneous travelers!
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-travel-gold">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Our standard cancellation policy allows for full refunds up to 60 days before departure, 50% refund for cancellations 30-59 days before departure, and no refunds for cancellations less than 30 days before departure. We highly recommend travel insurance which can provide coverage for unexpected cancellations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-travel-gold">
                Do you offer travel insurance?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Yes, we partner with top travel insurance providers to offer comprehensive coverage options. We strongly recommend travel insurance for all trips to protect against unexpected events, medical emergencies, and trip cancellations. Our consultants can help you select the right policy for your journey.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      <footer className="bg-black/50 border-t border-white/10 pt-12 pb-6 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Wander<span className="text-travel-gold">Way</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Crafting extraordinary journeys for discerning travelers since 2010.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Destinations</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">Europe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">Asia</a></li>
                <li><a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">Africa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">North America</a></li>
                <li><a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">South America</a></li>
                <li><a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">Oceania</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-travel-gold transition-colors">Home</a></li>
                <li><a href="#destinations" className="text-gray-400 hover:text-travel-gold transition-colors">Destinations</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-travel-gold transition-colors">About Us</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-travel-gold transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-travel-gold transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-travel-gold transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-travel-gold flex-shrink-0" />
                  <span className="text-gray-400">123 Travel Lane, New York, NY 10001</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-travel-gold flex-shrink-0" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-travel-gold flex-shrink-0" />
                  <span className="text-gray-400">info@wanderway.com</span>
                </li>
                <li className="flex gap-3">
                  <ClockIcon size={18} className="text-travel-gold flex-shrink-0" />
                  <span className="text-gray-400">Mon-Fri: 9 AM - 6 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} WanderWay Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
