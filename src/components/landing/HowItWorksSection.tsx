import { FileText, Gauge, PlayCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [FileText, Gauge, PlayCircle];

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary/20 mb-5">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">{h.badge}</span>
          </div>
          <h2 className="text-display-md font-bold text-foreground mb-4">{h.title}</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">{h.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {h.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="relative p-7 rounded-3xl bg-card border border-border shadow-card text-center">
                {i < h.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 z-10">
                    <div className="w-6 h-0.5 bg-border" />
                  </div>
                )}
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
