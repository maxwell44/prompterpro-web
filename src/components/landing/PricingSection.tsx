import { Check, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const APP_STORE_URL = "https://apps.apple.com/us/app/prompter/id6749378913";

export default function PricingSection() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary/20 mb-5">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">{p.badge}</span>
          </div>
          <h2 className="text-display-md font-bold text-foreground mb-4">{p.title}</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">{p.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {p.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-7 rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-primary border-primary shadow-button scale-[1.02]"
                  : "bg-card border-border shadow-card hover:shadow-card-hover hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {p.bestValue}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold mb-3 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-7">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                      plan.popular ? "bg-primary-foreground/20" : "bg-primary-light"
                    }`}>
                      <Check size={10} className={plan.popular ? "text-primary-foreground" : "text-primary"} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-foreground/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-2xl py-3 h-auto font-semibold flex items-center justify-center gap-2 border-0 transition-all duration-200 ${
                  plan.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-sm"
                    : "bg-gradient-primary text-primary-foreground shadow-button hover:shadow-button-hover"
                }`}
                asChild
              >
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Apple size={16} />
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          {p.note}{" "}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {p.learnMore}
          </a>
        </p>
      </div>
    </section>
  );
}
