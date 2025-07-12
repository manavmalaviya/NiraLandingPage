"use client";
import { ArrowRight } from "lucide-react";
import MenuItems from "./MenuItems";
import { useGetWindowSize } from "@/hooks/useWindowsize";

export default function Footer() {
    const windowSize = useGetWindowSize();
    return (
        <footer className="bg-white p-5 flex-1 flex flex-col gap-10 ">
            <div className={`flex ${windowSize === 'sm' ? "flex-col" : ""} gap-5 justify-between `}>

                <div className="flex flex-col gap-3">
                    <div className="text-xl">
                        NIRA
                    </div>
                    <div className="text-sm font-secondary text-gray-500 ">
                        Crafting Timeless Elegance since 2020.
                    </div>
                </div>

                <div className="font-secondary flex flex-col gap-3 text-sm">
                    <div>
                        COLLECTIONS
                    </div>
                    <div className="flex flex-col font-secondary text-gray-500 gap-2">
                        <MenuItems animation={false} link="/collections/engagement-rings" text="Engagement Rings" />
                        <MenuItems animation={false} link="/collections/wedding-bands" text="Wedding Bands" />
                        <MenuItems animation={false} link="/collections/earrings" text="Earrings" />
                        <MenuItems animation={false} link="/collections/necklaces" text="Necklaces" />
                    </div>
                </div>
                <div className="font-secondary flex flex-col gap-3 text-sm">
                    <div >
                        CUSTOMER CARE
                    </div>
                    <div className="flex flex-col text-sm font-secondary text-gray-500 gap-2">
                        <MenuItems animation={false} link="/about" text="About Us" />
                        <MenuItems animation={false} link="/contact" text="Contact Us" />
                        <MenuItems animation={false} link="/faq" text="FAQ" />
                        <MenuItems animation={false} link="/shipping-and-returns" text="Shipping & Returns" />
                    </div>
                </div>
                <div className="font-secondary flex flex-col gap-3 text-sm">
                    <div >
                        NEWSLETTER
                    </div>
                    <div className="flex flex-col text-sm font-secondary text-gray-500 gap-2">
                        <div className="flex flex-col gap-2">
                            Subscribe to our newsletter for exclusive offers and updates.
                            <div className="flex">
                                <input type="email" placeholder="Your email" className="border border-transparent px-2 py-1 w-full" style={{ backgroundColor: "var(--primary)" }} />
                                <button onClick={(e)=> e.preventDefault()} className="cursor-pointer text-white px-4 py-1" style={{ backgroundColor: "var(--secondary)"}}><ArrowRight size={15} className="text-sm" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-secondary text-xs">
                &copy; {new Date().getFullYear()} Nira Diamond Jewelry. All rights reserved.
            </div>
        </footer>
    )
}