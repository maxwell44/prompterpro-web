import { Scroll, SlidersHorizontal, Eye, MonitorSmartphone, Smartphone, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Scroll, SlidersHorizontal, Eye, MonitorSmartphone, Smartphone, Zap];

export default function FeaturesSection() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary/20 mb-5">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">{f.badge}</span>
          </div>
          <h2 className="text-display-md font-bold text-foreground mb-4 max-w-xl">{f.title}</h2>
          <p className="text-muted-foreground text-lg max-w-lg">{f.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {f.items.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <Icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground/50">0{i + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
