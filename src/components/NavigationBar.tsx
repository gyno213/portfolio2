import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NavigationBarProps {
  language: "en" | "de";
  onLanguageChange: (lang: "en" | "de") => void;
}

export function NavigationBar({ language, onLanguageChange }: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const translations = {
    en: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    de: {
      about: "Über mich",
      projects: "Projekte",
      contact: "Kontakt",
    },
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      // Check if we're at the top
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initial check
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-neutral-900 transition-colors"
            style={{ 
              color: isScrolled ? '#00246B' : '#1a1a1a'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00246B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isScrolled ? '#00246B' : '#1a1a1a';
            }}
          >
            <span className="font-semibold flex items-center gap-1">
              <ImageWithFallback
                src="/images/logo.png"
                alt="TA Logo"
                className="w-auto"
                style={{ height: '35px' }}
              />
              <span>Trang Anh Nguyen</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-700 transition-all relative pb-1"
              style={{ 
                color: activeSection === "about" ? '#00246B' : '#525252'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== "about") {
                  e.currentTarget.style.color = '#00246B';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== "about") {
                  e.currentTarget.style.color = '#525252';
                }
              }}
            >
              {t.about}
              {activeSection === "about" && (
                <span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: '#00246B' }}
                />
              )}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-neutral-700 transition-all relative pb-1"
              style={{ 
                color: activeSection === "projects" ? '#00246B' : '#525252'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== "projects") {
                  e.currentTarget.style.color = '#00246B';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== "projects") {
                  e.currentTarget.style.color = '#525252';
                }
              }}
            >
              {t.projects}
              {activeSection === "projects" && (
                <span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: '#00246B' }}
                />
              )}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-neutral-700 transition-all relative pb-1"
              style={{ 
                color: activeSection === "contact" ? '#00246B' : '#525252'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== "contact") {
                  e.currentTarget.style.color = '#00246B';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== "contact") {
                  e.currentTarget.style.color = '#525252';
                }
              }}
            >
              {t.contact}
              {activeSection === "contact" && (
                <span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: '#00246B' }}
                />
              )}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 border-l border-neutral-300 pl-4">
              <Globe className="h-4 w-4 text-neutral-600" />
              <button
                onClick={() => onLanguageChange("de")}
                className={`px-2 py-1 rounded-full transition-colors ${
                  language === "de"
                    ? ""
                    : "text-neutral-600"
                }`}
                style={{
                  backgroundColor: language === "de" ? '#CADCFC' : 'transparent',
                  color: language === "de" ? '#00246B' : '#525252'
                }}
                onMouseEnter={(e) => {
                  if (language !== "de") {
                    e.currentTarget.style.color = '#00246B';
                  }
                }}
                onMouseLeave={(e) => {
                  if (language !== "de") {
                    e.currentTarget.style.color = '#525252';
                  }
                }}
              >
                DE
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-2 py-1 rounded-full transition-colors ${
                  language === "en"
                    ? ""
                    : "text-neutral-600"
                }`}
                style={{
                  backgroundColor: language === "en" ? '#CADCFC' : 'transparent',
                  color: language === "en" ? '#00246B' : '#525252'
                }}
                onMouseEnter={(e) => {
                  if (language !== "en") {
                    e.currentTarget.style.color = '#00246B';
                  }
                }}
                onMouseLeave={(e) => {
                  if (language !== "en") {
                    e.currentTarget.style.color = '#525252';
                  }
                }}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => onLanguageChange("de")}
                className={`px-2 py-1 rounded-full transition-colors ${
                  language === "de"
                    ? ""
                    : "text-neutral-600"
                }`}
                style={{
                  backgroundColor: language === "de" ? '#CADCFC' : 'transparent',
                  color: language === "de" ? '#00246B' : '#525252'
                }}
              >
                DE
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-2 py-1 rounded-full transition-colors ${
                  language === "en"
                    ? ""
                    : "text-neutral-600"
                }`}
                style={{
                  backgroundColor: language === "en" ? '#CADCFC' : 'transparent',
                  color: language === "en" ? '#00246B' : '#525252'
                }}
              >
                EN
              </button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-700"
              style={{ color: '#525252' }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-neutral-700 transition-colors text-left"
                style={{ color: '#525252' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00246B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#525252';
                }}
              >
                {t.about}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-neutral-700 transition-colors text-left"
                style={{ color: '#525252' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00246B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#525252';
                }}
              >
                {t.projects}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-neutral-700 transition-colors text-left"
                style={{ color: '#525252' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00246B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#525252';
                }}
              >
                {t.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}