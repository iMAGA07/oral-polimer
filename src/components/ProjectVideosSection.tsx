import { useEffect, useRef, useState } from "react";
import { Play, Volume2, X } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  duration: string;
  src: string;
  poster: string;
}

const videos: VideoItem[] = [
  {
    id: "zhk-tur",
    title: "Экскурсия по жилому комплексу",
    description: "Дом, двор и гаражи глазами нашего менеджера",
    tag: "Жилой комплекс",
    duration: "0:37",
    src: "/videos/zhk-tur.mp4",
    poster: "/videos/zhk-tur.jpg",
  },
  {
    id: "kvartira-obzor",
    title: "Квартира изнутри",
    description: "Прогулка по готовой квартире: планировка, отделка и вид из окон",
    tag: "Квартира",
    duration: "2:00",
    src: "/videos/kvartira-obzor.mp4",
    poster: "/videos/kvartira-obzor.jpg",
  },
  {
    id: "ipoteka",
    title: "Покупка и ипотека",
    description: "Как приобрести квартиру в наших домах и какие программы доступны",
    tag: "Условия",
    duration: "0:30",
    src: "/videos/ipoteka.mp4",
    poster: "/videos/ipoteka.jpg",
  },
];

function VideoCard({ video, onOpen }: { video: VideoItem; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Preview plays muted only while the card is on screen
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Смотреть видео: ${video.title}`}
      className="group relative block w-full text-left"
    >
      <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/15 group-hover:ring-accent/50 transition-all duration-500 group-hover:-translate-y-2">
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

        {/* Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold backdrop-blur-md shadow-lg">
            {video.tag}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2.5 py-1 rounded-full bg-black/50 text-white/90 text-xs font-medium backdrop-blur-md">
            {video.duration}
          </span>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full border border-white/30 scale-100 group-hover:scale-125 transition-transform duration-500" />
            <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <Play className="h-6 w-6 text-white group-hover:text-accent-foreground fill-current ml-0.5 transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <h3 className="text-white font-semibold text-lg md:text-xl leading-tight mb-2">
            {video.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
            {video.description}
          </p>
          <div className="flex items-center gap-2 mt-3 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Volume2 className="h-3.5 w-3.5" />
            Нажмите, чтобы смотреть со звуком
          </div>
        </div>
      </div>
    </button>
  );
}

export function ProjectVideosSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // Close the player on Escape and lock background scroll while it is open
  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeVideo]);

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-primary via-primary to-primary/95 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='%23FDB913' stroke-opacity='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="absolute top-10 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30 shadow-lg">
            <span className="text-accent font-semibold text-sm tracking-wide">Видеообзоры</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
            Показ наших объектов
          </h2>
          <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
            Живые видео с наших жилых комплексов — дома, дворы и квартиры такими,
            какие они есть на самом деле, без рендеров и ретуши.
          </p>
          <div className="relative w-24 h-1 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-white/40 rounded-full blur-sm scale-125" />
            <div className="relative w-full h-full bg-gradient-to-r from-accent to-white/70 rounded-full" />
          </div>
        </AnimatedSection>

        <div className="flex lg:grid lg:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 -mx-4 px-4 lg:mx-auto lg:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {videos.map((video, index) => (
            <AnimatedSection
              key={video.id}
              animation="fade-up"
              delay={index * 120}
              className="flex-shrink-0 w-[80%] sm:w-[55%] lg:w-auto snap-center"
            >
              <VideoCard video={video} onOpen={() => setActiveVideo(video)} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={300}>
          <p className="text-center text-white/50 text-sm mt-8 lg:hidden">
            Листайте вбок, чтобы посмотреть все видео
          </p>
        </AnimatedSection>
      </div>

      {/* Fullscreen player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          <div
            className="relative z-10 w-full max-w-[420px] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="self-end mb-3 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            <video
              src={activeVideo.src}
              poster={activeVideo.poster}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[78vh] rounded-2xl shadow-2xl bg-black"
            />

            <div className="text-center mt-5">
              <p className="text-white font-semibold text-lg">{activeVideo.title}</p>
              <p className="text-white/60 text-sm mt-1">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
