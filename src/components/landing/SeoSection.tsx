import { useLanguage } from "@/contexts/LanguageContext";

export default function SeoSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <section className="py-12 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-base font-semibold text-foreground mb-1">
            {isZh
              ? "关于灵感提词器 — 专为视频创作者打造的提词器应用"
              : "About Prompter Pro — Teleprompter App for Video Creators"}
          </h2>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            灵感提词器 · 提词器 · Teleprompter · 视频提词器
          </p>
        </div>
        <div className="text-muted-foreground text-sm leading-relaxed space-y-3 text-center">
          {isZh ? (
            <>
              <p>
                灵感提词器（Prompter Pro）是一款专为视频创作者、直播主持人、在线教育者和演讲者设计的现代提词器应用。它帮助你在录制视频或直播时自然阅读稿件，同时始终保持与镜头的眼神接触。
              </p>
              <p>
                无论你是在 YouTube、TikTok、Instagram 发布内容，还是在抖音、B站、小红书、微信视频号等中文平台创作，灵感提词器都能帮助你流畅地表达稿件内容。
              </p>
              <p>
                来自美国、中国大陆、台湾、香港、新加坡和马来西亚的创作者，都在使用灵感提词器录制更好的视频。
              </p>
              <p className="text-xs text-muted-foreground/60">
                灵感提词器 · 提词器 · 视频提词器 · 直播提词器 · 手机提词器 · 抖音提词器 · teleprompter app · iphone teleprompter · teleprompter for youtube · teleprompter for tiktok · teleprompter for livestream · video script reader
              </p>
            </>
          ) : (
            <>
              <p>
                Prompter Pro (灵感提词器) is a modern teleprompter app designed for video creators, livestream hosts, educators, and presenters. It helps you read scripts naturally while recording videos or livestreams without losing eye contact with the camera.
              </p>
              <p>
                Whether you're creating content for YouTube, TikTok, Instagram, or Chinese platforms like Douyin (抖音), Bilibili (B站), Xiaohongshu (小红书), and WeChat Channels (微信视频号), Prompter Pro helps you deliver scripts smoothly.
              </p>
              <p>
                Creators across the United States, China, Taiwan, Hong Kong, Singapore, and Malaysia use Prompter Pro to produce better videos faster.
              </p>
              <p className="text-xs text-muted-foreground/60">
                teleprompter app · iphone teleprompter · teleprompter for youtube · teleprompter for tiktok · teleprompter for livestream · video script reader · creator teleprompter · 灵感提词器 · 提词器 · 视频提词器 · 直播提词器 · 手机提词器 · 抖音提词器
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
