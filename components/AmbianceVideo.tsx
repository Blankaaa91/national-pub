"use client";

import { useEffect, useRef } from "react";

export function AmbianceVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let loopStart = 0;

    const onMeta = () => {
      loopStart = Math.max(0, video.duration - 5);
      video.currentTime = loopStart;
      video.play().catch(() => {});
    };

    const onTime = () => {
      if (video.currentTime >= video.duration - 0.15) {
        video.currentTime = loopStart;
      }
    };

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("timeupdate", onTime);
    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("timeupdate", onTime);
    };
  }, []);

  return (
    <div
      className="relative rounded-sm overflow-hidden aspect-[4/3] group"
      aria-label="Vidéo d'ambiance du National Pub"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        muted
        playsInline
        preload="auto"
      >
        <source src="/images/ambiance.mp4" type="video/mp4" />
      </video>

      {/* Légère teinte chaude */}
      <div className="absolute inset-0" style={{ background: "rgba(10,5,0,0.15)" }} />

      {/* Coins décoratifs */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-pub-accent/60" aria-hidden="true" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-pub-accent/60" aria-hidden="true" />
    </div>
  );
}
