import { Apple, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const SCREENSHOT_1 = "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/511e.PNG";

function IPhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative bg-[hsl(20,10%,12%)] rounded-[2.6rem] p-[8px] border border-black/10 shadow-mockup">
      <div className="absolute -left-[2.5px] top-16 w-[2.5px] h-6 bg-black/20 rounded-full" />
      <div className="absolute -left-[2.5px] top-24 w-[2.5px] h-8 bg-black/20 rounded-full" />
      <div className="absolute -left-[2.5px] top-36 w-[2.5px] h-8 bg-black/20 rounded-full" />
      <div className="absolute -right-[2.5px] top-24 w-[2.5px] h-10 bg-black/20 rounded-full" />
      <div className="rounded-[2.1rem] overflow-hidden aspect-[9/19.5]">
        <img src={src} alt={alt} crossOrigin="anonymous" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden bg-hero pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/6 blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light border border-primary/20 mb-7 animate-fade-up">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">{h.badge}</span>
            </div>

            <h1 className="text-display-lg font-bold text-foreground mb-5 animate-fade-up delay-100">
              {h.headline1}{" "}
              <span className="text-gradient-warm">{h.headlineHighlight}</span>{" "}
              {h.headline2}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg animate-fade-up delay-200">
              {h.subheadline}
            </p>

            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 max-w-lg animate-fade-up delay-300">
              {h.paragraph}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-400">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground rounded-2xl px-6 py-3 h-auto font-semibold shadow-button hover:shadow-button-hover transition-all duration-200 border-0 flex items-center gap-3"
                asChild
              >
                <a href="https://apps.apple.com/us/app/prompter/id6749378913" target="_blank" rel="noopener noreferrer">
                  <Apple size={20} className="shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] font-normal opacity-80 leading-none mb-0.5">{h.ctaStorePrefix}</div>
                    <div className="text-sm font-semibold leading-none">{h.ctaStore}</div>
                  </div>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-6 py-3 h-auto font-medium border-border text-foreground hover:bg-muted transition-all duration-200 flex items-center gap-2"
                asChild
              >
                <a href="#how-it-works">
                  {h.ctaHow}
                  <ChevronDown size={16} className="opacity-50" />
                </a>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-8 animate-fade-up delay-500">
              <div className="flex -space-x-2">
                {["F97316", "EA580C", "FB923C", "FDBA74"].map((color, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-background" style={{ backgroundColor: `#${color}` }} />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                {h.socialProof} <span className="text-foreground font-semibold">{h.socialProofSuffix}</span>
              </p>
            </div>
          </div>

          {/* iPhone Mockups */}
          <div className="flex justify-center lg:justify-end relative py-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/12 rounded-full blur-[70px]" />
            </div>
            <div className="relative">
              <div className="relative animate-float z-10 w-[200px] sm:w-[240px]">
                <IPhoneFrame src={SCREENSHOT_1} alt="Prompter teleprompter view" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature mini-badges */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-500">
          {h.badges.map((label, i) => (
            <div key={label} className="flex items-center gap-3 bg-card rounded-2xl px-4 py-3 border border-border shadow-card">
              <span className="text-xs font-bold text-primary">0{i + 1}</span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
