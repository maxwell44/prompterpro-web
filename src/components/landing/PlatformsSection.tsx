import { useLanguage } from "@/contexts/LanguageContext";

const globalPlatforms = [
  { name: "YouTube" },
  { name: "TikTok" },
  { name: "Instagram Reels" },
  { name: "Twitch" },
  { name: "Zoom" },
];

const chinesePlatforms = [
  { name: "抖音", sub: "Douyin" },
  { name: "B站", sub: "Bilibili" },
  { name: "小红书", sub: "Xiaohongshu" },
  { name: "视频号", sub: "WeChat Channels" },
  { name: "快手", sub: "Kuaishou" },
];

export default function PlatformsSection() {
  const { t } = useLanguage();

  return (
    <section id="platforms" className="py-14 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          {t.platforms.label}
        </p>

        <div className="space-y-5">
          <div className="flex flex-wrap justify-center gap-2.5">
            {globalPlatforms.map((p) => (
              <div key={p.name} className="px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary-light transition-colors duration-150 cursor-default">
                {p.name}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{t.platforms.divider}</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {chinesePlatforms.map((p) => (
              <div key={p.name} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-light border border-primary/20 hover:border-primary/40 transition-colors duration-150 cursor-default">
                <span className="text-sm font-semibold text-primary">{p.name}</span>
                <span className="text-xs text-muted-foreground">{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
