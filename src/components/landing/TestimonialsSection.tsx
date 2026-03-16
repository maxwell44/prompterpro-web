import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className="text-primary fill-primary" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section id="testimonials" className="py-24 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary/20 mb-5">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">{tm.badge}</span>
          </div>
          <h2 className="text-display-md font-bold text-foreground mb-3">{tm.title}</h2>
          <p className="text-muted-foreground text-lg">{tm.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tm.items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <Stars />
              <p className="text-foreground text-sm leading-relaxed mt-4 mb-5">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <span className="text-primary text-xs font-bold">{item.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-primary fill-primary" />
            ))}
          </div>
          <p className="text-foreground font-semibold text-base">{tm.rating}</p>
          <p className="text-muted-foreground text-sm">{tm.ratingSource}</p>
        </div>
      </div>
    </section>
  );
}
