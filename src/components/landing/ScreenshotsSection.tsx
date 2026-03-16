import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SCREENSHOT_URLS = [
  "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/4625.png",
  "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/f7bc.png",
  "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/57f9.png",
  "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/c211.png",
  "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/65f7.png",
];

export default function ScreenshotsSection() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const s = t.screenshots;

  const prev = () => setActive((a) => (a === 0 ? SCREENSHOT_URLS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === SCREENSHOT_URLS.length - 1 ? 0 : a + 1));

  const getVisible = () =>
    [-1, 0, 1].map((i) => (active + i + SCREENSHOT_URLS.length) % SCREENSHOT_URLS.length);

  return (
    <section id="screenshots" className="py-24 bg-muted/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary/20 mb-5">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">{s.badge}</span>
          </div>
          <h2 className="text-display-md font-bold text-foreground mb-4">{s.title}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{s.subtitle}</p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Carousel */}
          <div className="relative flex items-center justify-center gap-4 w-full">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[hsl(32,20%,93%)] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[hsl(32,20%,93%)] to-transparent z-20 pointer-events-none" />

            {getVisible().map((idx, pos) => {
              const isCurrent = pos === 1;
              return (
                <div
                  key={idx}
                  onClick={() => !isCurrent && setActive(idx)}
                  className={`relative flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    isCurrent
                      ? "w-[240px] sm:w-[280px] md:w-[320px] opacity-100"
                      : "w-[160px] sm:w-[200px] md:w-[240px] opacity-40 hover:opacity-60"
                  }`}
                  style={isCurrent ? { boxShadow: "0 16px 48px -8px hsl(24 60% 30% / 0.18)" } : {}}
                >
                  <img
                    src={SCREENSHOT_URLS[idx]}
                    alt={s.items[idx].caption}
                    crossOrigin="anonymous"
                    className="w-full h-auto block"
                    style={{ aspectRatio: "9/19.5", objectFit: "cover" }}
                  />
                </div>
              );
            })}
          </div>

          {/* Caption */}
          <div className="text-center max-w-sm mx-auto min-h-[52px]">
            <p className="text-foreground font-semibold text-lg mb-1">{s.items[active].caption}</p>
            <p className="text-muted-foreground text-sm">{s.items[active].sub}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {SCREENSHOT_URLS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${i === active ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-muted-foreground/40"}`}
                  aria-label={`Screenshot ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
