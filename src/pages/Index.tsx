import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import {
  X,
  Leaf,
  Mountain,
  Home,
  Star,
  ArrowRight,
  CheckCircle,
  Menu,
  Phone,
  Mail,
  MapPin,
  Heart,
  Wind,
  Sun,
  Moon,
  Waves,
  Bed,
  Building,
  Sparkles,
} from "lucide-react";
import {
  FaWifi,
  FaSnowflake,
  FaUtensils,
  FaCoffee,
  FaConciergeBell,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTree,
  FaWater,
  FaMountain,
  FaSpa,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

// Import images
import logoImg from "../assets/logo.jpeg";
import heroBannerImg from "../assets/heroBanner.png";
import img1 from "../assets/WhatsApp Image 2025-11-28 at 1.08.01 PM.jpeg";
import img2 from "../assets/WhatsApp Image 2025-11-28 at 1.08.02 PM.jpeg";
import img3 from "../assets/WhatsApp Image 2025-11-28 at 1.08.03 PM.jpeg";
import img4 from "../assets/WhatsApp Image 2025-11-28 at 1.08.04 PM.jpeg";
import img5 from "../assets/WhatsApp Image 2025-11-28 at 1.08.05 PM.jpeg";
import img6 from "../assets/WhatsApp Image 2025-11-28 at 1.08.06 PM.jpeg";
import img7 from "../assets/WhatsApp Image 2025-11-28 at 1.08.07 PM.jpeg";
import img8 from "../assets/WhatsApp Image 2025-11-28 at 1.08.08 PM.jpeg";
import templeImg from "../assets/Temple(1).png";
import gopuramImg from "../assets/Gopuram(1).png";
import mahalImg from "../assets/Mahal.jpg";

// Type definitions
type UseScrollRevealOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};

const useScrollReveal = (options?: UseScrollRevealOptions) => {
  const { threshold = 0.15, root = null, rootMargin = "0px" } = options || {};
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin]);

  return {
    elementRef: elementRef as React.RefObject<HTMLDivElement>,
    isVisible,
  };
};

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Simplified Preloader
  const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }, [onComplete]);

    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="flex flex-col items-center space-y-8">
          <motion.div className="relative">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg p-2">
              <img
                src={logoImg}
                alt="Subramaniyam Residency Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </motion.div>

          <motion.div className="text-center">
            <h1 className="text-3xl font-bold gradient-text mb-2">
              Subramaniyam Residency
            </h1>
            <p className="text-lg text-gray-600">Residental Comfort Awaits</p>
          </motion.div>

          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gray-600 to-gray-800 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm text-gray-500">
            {progress < 50 && "Preparing your experience..."}
            {progress >= 50 && progress < 100 && "Almost ready..."}
            {progress === 100 && "Welcome to paradise!"}
          </p>
        </div>
      </motion.div>
    );
  };

  // Modern Navigation
  const Navigation: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
      { label: "About", id: "hero" },
      { label: "Rooms", id: "spaces" },
      { label: "Amenities", id: "amenities" },
      { label: "Explore", id: "tours" },
      { label: "Gallery", id: "gallery" },
      { label: "Contact", id: "contact" },
    ];

    return (
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img
                src={logoImg}
                alt="Logo"
                className="w-8 h-17 rounded-full object-contain"
              />
              <span
                className={`text-xl font-semibold ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                SIVA SUBRAMANIYAR
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`${
                    scrolled ? "text-gray-900" : "text-white"
                  } hover:text-green-600 transition-colors duration-300 relative group font-medium`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
                </motion.button>
              ))}

             <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = "https://jkglobalitsolutions.github.io/Subramaniyam-website-dynamic-link/"}
  className="btn-primary shadow-lg hover:shadow-xl"
>
  Book Now
</motion.button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 hover:text-green-600 transition-colors font-medium text-gray-900"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    document
                      .getElementById("spaces")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full btn-primary mt-4"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  };

  // Unique Hero Section
  const Hero: React.FC = () => {
    return (
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={heroBannerImg}
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gray-500 bg-opacity-20"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 text-white text-shadow"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Welcome to <br /> Siva Subramaniyar <br />
              <span className="text-yellow-400">Residency</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Experience comfort and convenience in the heart of Tiruvannamalai
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("spaces")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary text-lg px-8 py-4 shadow-2xl"
              >
                Explore Rooms
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("amenities")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-secondary text-lg px-8 py-4"
              >
                Our Amenities
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>
    );
  };

  // Elegant About Section
  const About: React.FC = () => {
    const { elementRef: ref, isVisible } = useScrollReveal();

    return (
      <section className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="animate-slide-in-left"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Luxury Hospitality
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Where Luxury Meets{" "}
                  <span className="gradient-text">Comfort</span>
                </h2>

                <p className="text-lg text-gray-200 leading-relaxed">
                  Subramaniyam Residency embodies the perfect balance between
                  modern comfort and tranquil environment. Our thoughtfully
                  designed spaces invite you to relax and enjoy contemporary
                  amenities.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white-900">
                      500+
                    </div>
                    <div className="text-gray-200">Happy Guests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white-900">98%</div>
                    <div className="text-gray-200">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative animate-slide-in-right"
            >
              <div className="relative">
                <div className="grid grid-cols-1 gap-4">
                  <motion.div
                    className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={img1}
                      alt="Luxury room"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <img
                      src={img8}
                      alt="Modern amenities"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Floating Card */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl"
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-sm font-medium mt-1 text-gray-900">
                    Exceptional Experience
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Interactive Spaces Section
  const Spaces: React.FC = () => {
    const { elementRef: headerRef, isVisible: headerVisible } =
      useScrollReveal();
    const { elementRef: spacesRef, isVisible: spacesVisible } =
      useScrollReveal();

    const spaces = [
      {
        id: 1,
        name: "Family Room",
        icon: Heart,
        features: ["King Size Bed (2)", "AC Available", "TV Included","Room Heater", "Sofa"],
        price: "₹5,000 (AC) / ₹4,000 (Non-AC)",
        description: "Perfect for families (4 adults + 2 children)",
        extraBed: "₹500 extra for additional bed",
        available: 2,
      },
      {
        id: 2,
        name: "Suite Room",
        icon: Home,
        features: [
          "King + Single Bed",
          "AC Available",
          "TV Included",
          "Room Heater",
          "Sofa",
        ],
        price: "₹4,500 (AC) / ₹4,000 (Non-AC)",
        description: "Comfort for 3 adults + 1 child",
        available: 2,
      },
      {
        id: 3,
        name: "Standard Room",
        icon: Bed,
        features: [
          "King Size Bed",
          "AC Available",
          "TV Included",
          "Room Heater",
          "Sofa"
        ],
        price: "₹3,000 (AC) / ₹2,500 (Non-AC)",
        description: "Cozy space for 2 adults + 1 child",
        available: 18,
      },
    ];

    return (
      <section id="spaces" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: headerVisible ? 1 : 0,
              y: headerVisible ? 0 : 30,
            }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 animate-slide-up"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Home className="w-4 h-4 mr-2" />
              Signature Spaces
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your <span style={{color:"grey"}}>Room</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each room is thoughtfully designed to offer comfort and
              convenience with modern amenities and hospitable service.
            </p>
          </motion.div>

          {/* Spaces Grid */}
          <div ref={spacesRef} className="grid md:grid-cols-3 gap-8">
            {spaces.map((space, index) => {
              const Icon = space.icon;
              const roomColors = [
                "from-blue-500 to-blue-600",
                "from-green-500 to-green-600",
                "from-purple-500 to-purple-600"
              ];
              return (
                <motion.div
                  key={space.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: spacesVisible ? 1 : 0,
                    y: spacesVisible ? 0 : 50,
                  }}
                  transition={{ delay: index * 0.2, duration: 0.2 }}
                  whileHover={{ y: -10 }}
                  className="card-hover group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-500 shadow-lg hover:shadow-2xl"
                >
                  <div className="text-center mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${roomColors[index]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {space.name}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900 mb-4">
                      {space.price}
                    </p>
                    <p className="text-gray-600 mb-6">{space.description}</p>
                  </div>

                  <div className="space-y-3">
                    {space.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      (window.location.href =
                        "https://jkglobalitsolutions.github.io/Subramaniyam-website-dynamic-link/")
                    }
                    className="w-full mt-6 btn-primary"
                  >
                    Reserve Now
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // Modern Amenities Section
  const Amenities: React.FC = () => {
    const { elementRef: ref, isVisible } = useScrollReveal();

    const amenities = [
      {
        icon: FaConciergeBell,
        title: "24/7 Service Desk",
        description: "Round-the-clock assistance and concierge",
      },
      {
        icon: FaSnowflake,
        title: "AC/Non-AC Options",
        description: "Choose comfortable climate control",
      },
      {
        icon: FaMountain,
        title: "TV in Rooms",
        description: "Entertainment and local channels",
      },
      {
        icon: FaCoffee,
        title: "Car Parking",
        description: "Dedicated Parking for Every Guest -<strong>5000sq.ft</strong>",
      },
      {
        icon: FaWifi,
        title: "Free Wi-Fi",
        description: "High-speed internet throughout property",
      },
      {
        icon: FaSpa,
        title: "Room Heater",
        description: "Warm comfort during cool evenings",
      },
    ];

    return (
      <section
        id="amenities"
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Waves className="w-4 h-4 mr-2" />
              Living Essence
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Amenities</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail is thoughtfully designed to enhance your comfort and
              provide convenient services.
            </p>
          </motion.div>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const amenityColors = [
                "from-blue-500 to-blue-600",
                "from-green-500 to-green-600",
                "from-purple-500 to-purple-600",
                "from-orange-500 to-orange-600",
                "from-pink-500 to-pink-600",
                "from-teal-500 to-teal-600"
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    y: { duration: 3, repeat: Infinity, delay: index * 0.2 },
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${amenityColors[index]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 15 }}
                    >
                      <amenity.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {amenity.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: amenity.description }} />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // Important Aspects Cards with Auto-Scroll
  const ImportantAspects: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const aspects = [
      {
        title: "Arunachaleshwarar Temple",
        content: "It's 400m away from the property and it is walkable distance only",
        image: templeImg
      },
      {
        title: "Car Parking - 5000 sq. ft (Free)",
        content: "Ample free parking space available for all our guests with 5000 sq. ft dedicated area",
        icon: "🚗"
      },
      {
        title: "Mountain View",
        content: "Breathtaking panoramic mountain views from select rooms overlooking the sacred Arunachala",
        icon: "🏔️"
      },
      {
        title: "Gopuram View",
        content: "Stunning temple gopuram views adding spiritual ambiance to your stay",
        image: gopuramImg
      },
      {
        title: "Amirtham Mini Mahal",
        content: "Experience palace-like luxury in our premium mini mahal accommodation",
        image: mahalImg
      }
    ];

    // Duplicate aspects for seamless infinite scroll
    const duplicatedAspects = [...aspects, ...aspects, ...aspects];

    useEffect(() => {
      if (isPaused) return;

      const scrollSpeed = 2; // Increased speed: 2 pixels per frame
      const interval = setInterval(() => {
        setScrollPosition((prev) => {
          const newPos = prev + scrollSpeed;
          const maxScroll = (duplicatedAspects.length / 3) * 336; // 320px card + 16px gap
          return newPos >= maxScroll ? 0 : newPos;
        });
      }, 30); // Faster interval: 30ms instead of 50ms

      return () => clearInterval(interval);
    }, [isPaused, duplicatedAspects.length]);

    const handleCardClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsPaused(true);
    };

    const handleOutsideClick = () => {
      setIsPaused(false);
    };

    return (
      <section className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-amber-800 mb-6">
              Important <span className="text-orange-600">Aspects</span>
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto font-medium">
              Discover what makes our residency truly special
            </p>
          </motion.div>

          {/* Scrolling Container */}
          <div
            className="relative overflow-hidden cursor-pointer"
            onClick={handleOutsideClick}
            style={{ height: '420px' }}
          >
            <div
              className="flex gap-8 py-8"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: 'none',
                width: 'max-content',
              }}
            >
              {duplicatedAspects.map((aspect, index) => (
                <motion.div
                  key={`${aspect.title}-${index}`}
                  onClick={handleCardClick}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 border-2 border-amber-200 hover:border-orange-400 transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  <div className="text-center">
                    {aspect.image ? (
                      <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={aspect.image}
                          alt={aspect.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {aspect.icon}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-orange-700 transition-colors">
                      {aspect.title}
                    </h3>
                    <p className="text-amber-800 leading-relaxed font-medium">
                      {aspect.content}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-amber-600 font-medium">
              {isPaused ? 'Click outside to resume auto-scroll' : 'Click any card to pause auto-scroll'}
            </p>
          </div>
        </div>
      </section>
    );
  };

  // Exploration Section with Circular Layout
  const Tours: React.FC = () => {
    const { elementRef: ref, isVisible } = useScrollReveal();

    const destinations = [
      {
        name: "Arunachaleshwarar Temple",
        distance: "400 meters",
        difficulty: "Easy",
        highlights: [
          "Ancient temple",
          "Spiritual significance",
          "Cultural heritage",
          "Walkable distance only",
        ],
      },
      {
        name: "Yogi Ram Ashramam",
        distance: "2.5 kms",
        difficulty: "Easy",
        highlights: [
          "Spiritual sanctuary",
          "Meditation center",
          "Peaceful environment",
        ],
      },
      {
        name: "Ramanashram",
        distance: "2 km",
        difficulty: "Easy",
        highlights: [
          "Spiritual retreat",
          "Ramana Maharshi teachings",
          "Peaceful meditation",
        ],
      },
      {
        name: "Gingee Fort",
        distance: "35 kms",
        difficulty: "Moderate",
        highlights: [
          "Historical monument",
          "Architectural marvel",
          "Scenic views",
        ],
      },
      {
        name: "Melmalayanur Angalamman Temple",
        distance: "38 kms",
        difficulty: "Easy",
        highlights: [
          "Religious significance",
          "Cultural heritage",
          "Festive celebrations",
        ],
      },
      {
        name: "Parvathamalai",
        distance: "22 kms",
        difficulty: "Moderate",
        highlights: [
          "Hill station",
          "Nature trails",
          "Fresh air",
        ],
      },
      {
        name: "Thirukovilur Brindavana",
        distance: "35 kms",
        difficulty: "Easy",
        highlights: [
          "Sacred site",
          "Spiritual importance",
          "Serene atmosphere",
        ],
      },
      {
        name: "Manalurpet Thiruvarangam",
        distance: "38 kms",
        difficulty: "Easy",
        highlights: [
          "Temple complex",
          "Religious destination",
          "Cultural significance",
        ],
      },
    ];

    return (
      <section id="tours" className="py-24 px-6 bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          {/* Exploration Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Explore Around Us
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover the <span className="gradient-text">Wonders</span> Around
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the spiritual and natural treasures that surround our residency
            </p>
          </motion.div>

          {/* Circular Layout - Desktop / Grid Layout - Mobile */}
          <div ref={ref} className="relative">
            {/* Desktop Circular Layout */}
            <div className="hidden md:flex items-center justify-center min-h-[800px] relative">
              {/* Central Element */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute z-10 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full w-48 h-48 flex items-center justify-center shadow-2xl border-8 border-white"
              >
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🏛️</div>
                  <h3 className="text-lg font-bold leading-tight">
                    Siva Subramaniyar
                  </h3>
                  <p className="text-sm opacity-90">Residency</p>
                </div>
              </motion.div>

              {/* Circular Destinations */}
              {destinations.map((dest, index) => {
                const angle = (360 / destinations.length) * index;
                const radius = 300; // Distance from center
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      x: 0,
                      y: 0,
                      scale: 0,
                      opacity: 0
                    }}
                    animate={isVisible ? {
                      x: x,
                      y: y,
                      scale: 1,
                      opacity: 1
                    } : {}}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.1 + 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.1,
                      zIndex: 20,
                    }}
                    className="absolute w-64 bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-400 transition-all duration-500 shadow-lg hover:shadow-2xl"
                    style={{
                      transform: `translate(-50%, -50%)`,
                    }}
                  >
                    <div className="text-center">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                          dest.difficulty === "Easy"
                            ? "bg-green-100 text-green-700"
                            : dest.difficulty === "Moderate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {dest.difficulty}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                        {dest.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 font-medium">
                        {dest.distance}
                      </p>

                      <div className="space-y-2">
                        {dest.highlights.slice(0, 2).map((highlight, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 text-xs text-gray-700 justify-center"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connecting Line */}
                    <div
                      className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-blue-400 to-transparent transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: `${radius - 100}px`,
                        transform: `translateX(-50%) translateY(-50%) rotate(${angle}deg)`,
                        transformOrigin: 'left center',
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Compact Layout */}
            <div className="md:hidden space-y-6">
              {/* Central Element - Compact */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-xl p-4 flex items-center justify-center shadow-2xl mx-auto max-w-xs"
              >
                <div className="text-center text-white">
                  <div className="text-3xl mb-1">🏛️</div>
                  <h3 className="text-lg font-bold leading-tight">
                    Siva Subramaniyar
                  </h3>
                  <p className="text-xs opacity-90">Residency</p>
                </div>
              </motion.div>

              {/* Mobile Wrapped Destinations */}
              <div className="flex flex-wrap justify-center gap-3">
                {destinations.map((dest, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      scale: 0,
                      opacity: 0
                    }}
                    animate={isVisible ? {
                      scale: 1,
                      opacity: 1
                    } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08 + 0.8,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-400 transition-all duration-500 shadow-lg hover:shadow-2xl min-w-[160px] max-w-[180px] flex-shrink-0"
                  >
                    <div className="text-center">
                      <div
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mb-2 ${
                          dest.difficulty === "Easy"
                            ? "bg-green-100 text-green-700"
                            : dest.difficulty === "Moderate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {dest.difficulty}
                      </div>

                      <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight line-clamp-2">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2 font-medium">
                        {dest.distance}
                      </p>

                      <div className="space-y-1">
                        {dest.highlights.slice(0, 2).map((highlight, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-1 text-xs text-gray-700 justify-center"
                          >
                            <div className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-center leading-tight">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-16"
          >
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Easy Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">Moderate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  // Contact Details Section
  const ContactDetails: React.FC = () => {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start justify-center">
            {/* Map */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Location
              </h3>
              <div className="rounded-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.8010846062!2d79.07197797469352!3d12.229460588021807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc177aa9554ab%3A0xcf9414977c2c1018!2sSiva%20Subramaniyar%20Residency!5e1!3m2!1sen!2sin!4v1763541794615!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 px-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-center">
                  Address
                </h4>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  107, Ramalinganar St, Tiruvennanallur,
                  <br />
                  Tiruvannamalai, Tamil Nadu 606601
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                />

                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors">
                  <option>Select Room Type</option>
                  <option>Family Room</option>
                  <option>Suite Room</option>
                  <option>Standard Room</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors resize-none"
                />

                <button type="submit" className="w-full btn-primary py-3">
                  Send Message
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center mb-3">
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    subramaniresidency@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Gallery Section
  const Gallery: React.FC = () => {
    // Gallery with actual images
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
      <section
        id="gallery"
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Moments <span className="gradient-text">Captured</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section
  const Contact: React.FC = () => {
    const [showContact, setShowContact] = useState(false);

    return (
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Begin Your <span className="gradient-text">Journey</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Ready to experience comfortable hospitality? Let's connect and
              make your stay memorable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContact(!showContact)}
                className="btn-primary px-8 py-4 text-lg"
              >
                Connect With Us
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence>
            {showContact && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">
                    Reach out to us through any of these channels
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {/* Address */}
                  <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-3 text-blue-600">Address</h4>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=107,+Ramalinganar+St,+Tiruvennanallur,+Tiruvannamalai,+Tamil+Nadu+606601"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm break-words hover:underline transition-colors"
                    >
                      107, Ramalinganar St,
                      <br />
                      Tiruvennanallur,
                      <br />
                      Tiruvannamalai,
                      <br />
                      Tamil Nadu 606601
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      Click to get directions
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-3 text-green-600">Phone Number</h4>
                    <a
                      href="tel:9585052446"
                      className="text-blue-600 hover:text-blue-800 text-lg font-medium hover:underline transition-colors"
                    >
                      9894550257
                    </a>
                    <p className="text-xs text-gray-500 mt-2">Click to call</p>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-3 text-purple-600">Email</h4>
                    <a
                      href="mailto:subramaniresidency@gmail.com"
                      className="text-blue-600 hover:text-blue-800 text-sm break-words hover:underline transition-colors"
                    >
                      subramaniresidency
                      <br />
                      @gmail.com
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      Click to send email
                    </p>
                  </div>
                </div>

                {/* Additional Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div>
                      <p className="text-gray-600 mb-2">
                        For reservations and inquiries:
                      </p>
                      <p className="text-sm text-gray-800">24/7 available</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">Response time:</p>
                      <p className="text-sm text-gray-800">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen">
          <Navigation />
          <Hero />
          <ImportantAspects />
          <Spaces />
          <Tours />
          <About />
          <Amenities />
          <Gallery />
          <ContactDetails />
          <Contact />

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        {/* <Home className="w-5 h-5 text-gray-900" /> */}
                        <img
                          src={logoImg}
                          alt="Logo"
                          className="w-5 h-17 text-gray-900"
                        />
                      </div>
                    <span className="text-2xl font-bold" style={{background: "linear-gradient(to right, #FFD700, #FF69B4, #9400D3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
                      Siva Subramaniyar Residency
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Your comfortable home away from home in the heart of
                    Tiruvannamalai. Experience quality hospitality and modern
                    conveniences.
                  </p>
                  <div className="flex space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                      title="Facebook"
                    >
                      <FaFacebook className="w-5 h-5 text-white" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-colors"
                      title="Instagram"
                    >
                      <FaInstagram className="w-5 h-5 text-white" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    {[
                      "Discover",
                      "Spaces",
                      "Essence",
                      "Exploration",
                      "Gallery",
                      "Connect",
                    ].map((link) => (
                      <li key={link}>
                        <a
                          href={`#${link.toLowerCase()}`}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Need to delete this entire support stuffs */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Support</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Contact Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8 text-center mt-12">
                <p className="text-gray-400">
                  © 2025 Subramaniyam Residency. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Index;
