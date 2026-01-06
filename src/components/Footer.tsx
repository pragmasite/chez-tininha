import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-2">Chez Tininha</h3>
            <p className="text-background/80 text-sm">{t.footer.tagline}</p>
            <p className="text-background/70 text-xs mt-4">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about-us" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#hours" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.nav.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41796136194" className="text-background/80 hover:text-background transition-colors">
                  +41 79 613 61 94
                </a>
              </li>
              <li>
                <a href="mailto:cheztininha@hotmail.com" className="text-background/80 hover:text-background transition-colors">
                  cheztininha@hotmail.com
                </a>
              </li>
              <li className="text-background/80">Rue de Palud 7</li>
              <li className="text-background/80">1630 Bulle, CH</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.nav.hours}</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Lun: Fermé</li>
              <li>Mar-Ven: 07:00 - 19:00</li>
              <li>Sam: 07:00 - 16:00</li>
              <li>Dim: 08:00 - 13:00</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 text-sm">
            &copy; 2025 Chez Tininha. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
