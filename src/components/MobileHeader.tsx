'use client';
import { useGetWindowSize } from "@/hooks/useWindowsize";
import { useContext } from "react";
import HeaderContext from "@/context/HeaderContext";
import MenuItems from "./MenuItems";
export default function MobileHeader() {

    const windowSize = useGetWindowSize();
    const { menuOpen } = useContext(HeaderContext);

    return (
        <div>
            
            {windowSize == "sm" && menuOpen &&
                <div className="">
                    <div className="fixed top-10 w-full font-secondary p-10 bg-white flex flex-col gap-8  z-10">
                        <div className="w-full flex flex-col items-center">
                            <MenuItems link="/engagementring" text="Engagement Ring" />
                        </div>
                        <div className="w-full flex flex-col items-center">

                            <MenuItems link="/weddingband" text="Wedding Band" />
                        </div>
                        <div className="w-full flex flex-col items-center">

                            <MenuItems link="/customorders" text="Custom Orders" />
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <MenuItems link="/about" text="About" />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}