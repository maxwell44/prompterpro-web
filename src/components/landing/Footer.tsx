import { useLanguage } from "@/contexts/LanguageContext";

const APP_STORE_URL = "https://apps.apple.com/us/app/prompter/id6749378913";

const sectionHrefs: Record<string, string[]> = {
  Product: ["#features", "#use-cases", "#pricing", "#faq", APP_STORE_URL],
  Platforms: ["#platforms", "#platforms", "#platforms", "#platforms", "#platforms"],
  Legal: ["#", "#"],
};

const sectionExternals: Record<string, boolean[]> = {
  Product: [false, false, false, false, true],
  Platforms: [false, false, false, false, false],
  Legal: [false, false],
};

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const appName = t.appName;
  const sections = f.sections as Record<string, readonly string[]>;
  const sectionTitles = f.sectionTitles as Record<string, string>;

  return (
    <footer className="bg-foreground text-background/70">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000140/f744.png"
                alt="Prompter"
                crossOrigin="anonymous"
                className="w-9 h-9 rounded-xl object-cover"
              />
              <span className="text-background font-semibold text-lg">{appName}</span>
            </div>
            <p className="text-sm leading-relaxed text-background/50 mb-5 max-w-xs">{f.tagline}</p>
            <p className="text-xs text-background/30">{f.seoLine}</p>
          </div>

          {/* Links */}
          {Object.entries(sections).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-background text-sm font-semibold mb-4">{sectionTitles[section] ?? section}</h4>
              <ul className="space-y-2.5">
                {links.map((label, i) => {
                  const href = sectionHrefs[section]?.[i] ?? "#";
                  const external = sectionExternals[section]?.[i] ?? false;
                  return (
                    <li key={i}>
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-sm text-background/50 hover:text-background/90 transition-colors duration-150"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-7 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30">© {new Date().getFullYear()} {appName}. {f.copyright}</p>
          <p className="text-xs text-background/30">{f.available}</p>
        </div>

        {/* StartupFast Badge */}
        <div className="pt-4 flex items-center justify-center gap-2 border-t border-background/10">
          <span className="text-xs text-background/30">Listed on</span>
          <a
            href="https://www.startupfa.st"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-background/50 hover:text-background/80 transition-colors duration-150"
          >
            ⚡ StartupFast
          </a>
        </div>
      </div>
    </footer>
  );
}
