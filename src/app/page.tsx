'use client';
import { useGetWindowSize } from "@/hooks/useWindowsize";

export default function Home() {
  const windowSize = useGetWindowSize();
  return (
    <div className={`${windowSize == 'sm' ? "relative w-full aspect-video" : "flex justify-center h-screen"}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src="./nira.webm" type="video/webm" />
      </video>
    </div>
  );
}
