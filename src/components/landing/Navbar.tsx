import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t.navbar.features, href: "#features" },
    { label: t.navbar.useCases, href: "#use-cases" },
    { label: t.navbar.pricing, href: "#pricing" },
    { label: t.navbar.faq, href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/f744.png"
            alt="Prompter App Icon"
            crossOrigin="anonymous"
            className="w-8 h-8 rounded-xl shadow-sm object-cover"
          />
          <span className="font-semibold text-lg tracking-tight text-foreground">
            {t.appName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
            aria-label="Switch language"
          >
            <span className={lang === "en" ? "text-foreground font-semibold" : "opacity-50"}>EN</span>
            <span className="opacity-30 text-xs">/</span>
            <span className={lang === "zh" ? "text-foreground font-semibold" : "opacity-50"}>中</span>
          </button>

          <Button
            size="sm"
            className="bg-gradient-primary text-primary-foreground shadow-button hover:shadow-button-hover rounded-xl px-5 border-0 transition-all duration-200"
            asChild
          >
            <a href="https://apps.apple.com/us/app/prompter/id6749378913" target="_blank" rel="noopener noreferrer">
              {t.navbar.download}
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile lang switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center gap-0.5 px-2.5 py-1 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:bg-muted transition-all"
            aria-label="Switch language"
          >
            <span className={lang === "en" ? "text-foreground font-bold" : "opacity-50"}>EN</span>
            <span className="opacity-30">/</span>
            <span className={lang === "zh" ? "text-foreground font-bold" : "opacity-50"}>中</span>
          </button>
          <button
            className="p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              className="w-full bg-gradient-primary text-primary-foreground shadow-button border-0 rounded-xl"
              asChild
            >
              <a
                href="https://apps.apple.com/us/app/prompter/id6749378913"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {t.navbar.download}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
