// Placeholder hero — replace <div> with next/image once you have real photos.
// Image: dark, warm pub interior. Suggested size: 1920x1080.
// Place photo at: public/images/hero.jpg

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className = "" }: HeroImageProps) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      {/*
        TODO: Replace this placeholder with:
        <Image
          src="/images/hero.jpg"
          alt="Intérieur chaleureux du National Pub à Bevaix"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      */}

      {/* Warm gradient placeholder simulating pub lighting */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 30% 40%, rgba(120, 60, 10, 0.55) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 70% 60%, rgba(80, 35, 5, 0.4) 0%, transparent 55%),
            linear-gradient(160deg, #3D2210 0%, #241408 50%, #1A0E06 100%)
          `,
        }}
      />

      {/* Subtle warm vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
