import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center mx-1 h-screen">
      <Image fill src="/nira-1.gif" className="object-cover" alt="Nira Diamond Jewelry" />
    </div>
  );
}
