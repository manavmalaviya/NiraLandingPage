'use client';

import MenuItems from "./MenuItems";
import Link from "next/link";
import { useGetWindowSize } from "@/hooks/useWindowsize";
import { MenuIcon } from "lucide-react";
import { useContext } from "react";
import HeaderContext from "@/context/HeaderContext";
export default function Header() {

    const windowSize = useGetWindowSize();
    const { menuOpen, setMenuOpen } = useContext(HeaderContext);

    return (
        <div className="sticky top-0 p-3 flex min-[h-100] max-[h-100] items-center md:justify-between  bg-white border-b border-grey-100 z-100">


            {windowSize == "sm" &&
                <MenuIcon onClick={() => { setMenuOpen(!menuOpen); }} />
            }
            <div className="flex sm:flex-1 justify-center md:justify-start text-2xl font-light auto">
                <Link href="/">
                    NIRA
                </Link>
            </div>
            {windowSize == "md" &&
                <div className="font-secondary flex flex-1 justify-end gap-8 px-10 items-center">
                    <MenuItems link="/engagementring" text="Engagement Ring" />

                    <MenuItems link="/weddingband" text="Wedding Band" />

                    <MenuItems link="/customorders" text="Custom Orders" />

                    <MenuItems link="/about" text="About" />
                </div>
            }

        </div>
    );
}
