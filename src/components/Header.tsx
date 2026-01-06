import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLanguages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col group">
          <img src="/images/logo.png" alt="Chez Tininha" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about-us"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.aboutUs}
          </a>
          <a
            href="#services"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#gallery"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#hours"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              <Globe className="h-4 w-4" />
              <span>Lang</span>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-background rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {otherLanguages.map((lang) => (
                <Link
                  key={lang.lang}
                  to={lang.path}
                  className="block px-4 py-2 text-sm hover:bg-primary/10 text-foreground first:rounded-t-lg last:rounded-b-lg"
                >
                  {lang.lang.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <Button asChild>
            <a href="tel:+41796136194" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#about-us" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.aboutUs}
            </a>
            <a href="#services" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.services}
            </a>
            <a href="#gallery" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.gallery}
            </a>
            <a href="#hours" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.hours}
            </a>
            <a href="#contact" className="block text-sm font-medium text-foreground hover:text-primary">
              {t.nav.contact}
            </a>

            <div className="border-t pt-4 space-y-2">
              {otherLanguages.map((lang) => (
                <Link
                  key={lang.lang}
                  to={lang.path}
                  className="block text-sm font-medium text-foreground hover:text-primary"
                >
                  {lang.lang.toUpperCase()}
                </Link>
              ))}
            </div>

            <Button asChild className="w-full">
              <a href="tel:+41796136194" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
