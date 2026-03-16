import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <section id="faq" className="py-24 bg-muted/40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary/20 mb-5">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">{f.badge}</span>
          </div>
          <h2 className="text-display-md font-bold text-foreground mb-3">{f.title}</h2>
          <p className="text-muted-foreground text-base">{f.subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {f.items.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-2xl overflow-hidden px-0 bg-card shadow-card data-[state=open]:border-primary/30 transition-all duration-200"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:text-primary hover:no-underline text-sm sm:text-base [&[data-state=open]]:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
