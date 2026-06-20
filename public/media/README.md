# Hero media — drop your AI-generated clip here

This folder holds the hero visual produced by your
**Gemini → Whisk → Google Flow → ezgif** pipeline.

## 1. Export from your pipeline
- **Best:** a short seamless loop, **MP4 (H.264)**, 4–6 seconds, **muted**, under ~2.5 MB.
- Optionally also export a **WebM** (smaller/sharper) and a **poster** still (first frame).
- Avoid GIF if you can — MP4/WebM look better and load far lighter.

## 2. Drop the files here
Put them in this folder and name them:

```
public/media/hero.mp4          ← required (video)
public/media/hero.webm         ← optional (better compression)
public/media/hero-poster.jpg   ← optional (shown instantly while video loads)
```

(For a still image instead, drop e.g. `hero.png` / `hero.webp` / `hero.gif`.)

## 3. Turn it on
Open **`src/lib/constants.ts`**, find `HERO_MEDIA`, and set:

```ts
export const HERO_MEDIA = {
  type: "video",                  // "video" | "image" | "none"
  src: "/media/hero.mp4",
  webm: "/media/hero.webm",       // or "" if you didn't export one
  poster: "/media/hero-poster.jpg",
  alt: "Raahnex AI automating a clinic's front desk",
};
```

For an image instead:
```ts
type: "image",
src: "/media/hero.png",
```

Save — the hero will swap from the dashboard mockup to your clip automatically.
Set `type: "none"` anytime to go back to the dashboard mockup.
