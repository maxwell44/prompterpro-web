import { Apple, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const APP_ICON = "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/f744.png";
const SCREENSHOT_4 = "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/prompter_screenshot_4_78a4a2a4.png";
const APP_STORE_URL = "https://apps.apple.com/us/app/prompter/id6749378913";

export default function CtaSection() {
  const { t } = useLanguage();
  const c = t.cta;
  const appName = t.appName;

  return (
    <section className="py-10 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-cta-warm border border-primary/15 p-8 sm:p-12">
          <div className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">{c.badge}</span>
              </div>

              <h2 className="text-display-md font-bold text-foreground mb-4">{c.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">{c.subtitle}</p>

              <div className="flex items-center gap-4 mb-8">
                <img src={APP_ICON} alt="Prompter" crossOrigin="anonymous" className="w-14 h-14 rounded-2xl shadow-card" />
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-foreground">{appName}</p>
                  <p className="text-xs text-muted-foreground">{c.appMeta}</p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground rounded-2xl px-7 py-3.5 h-auto font-semibold shadow-button hover:shadow-button-hover transition-all duration-200 border-0 inline-flex items-center gap-3"
                asChild
              >
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Apple size={20} />
                  <div className="text-left">
                    <div className="text-[10px] font-normal opacity-80 leading-none mb-0.5">{c.ctaStorePrefix}</div>
                    <div className="text-sm font-semibold leading-none">{c.ctaStore}</div>
                  </div>
                </a>
              </Button>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
                {c.badges.map((b) => (
                  <div key={b} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float w-[180px] sm:w-[200px]">
                <div className="absolute inset-0 bg-primary/15 rounded-full blur-3xl scale-110" />
                <div className="relative bg-[hsl(20,10%,12%)] rounded-[2.6rem] p-[8px] border border-black/10 shadow-mockup">
                  <div className="absolute -left-[2.5px] top-14 w-[2.5px] h-5 bg-black/20 rounded-full" />
                  <div className="absolute -left-[2.5px] top-22 w-[2.5px] h-7 bg-black/20 rounded-full" />
                  <div className="absolute -right-[2.5px] top-18 w-[2.5px] h-9 bg-black/20 rounded-full" />
                  <div className="rounded-[2.1rem] overflow-hidden aspect-[9/19.5]">
                    <img src={SCREENSHOT_4} alt="Prompter in use" crossOrigin="anonymous" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
