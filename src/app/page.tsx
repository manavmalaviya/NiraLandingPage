'use client';
import { useGetWindowSize } from "@/hooks/useWindowsize";
import Image from "next/image";

export default function Home() {
  const windowSize = useGetWindowSize();
  return (
    <div className={`mx-1 ${windowSize=='sm'? "relative w-full aspect-video":"flex justify-center h-screen"}`}>
      <Image unoptimized fill src="/nira-1.gif" className={"object-cover"} alt="Nira Diamond Jewelry" />
    </div>
  );
}
