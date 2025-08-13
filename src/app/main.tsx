'use client'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MobileHeader from "@/components/MobileHeader"
import { usePathname } from "next/navigation";

export default function MainPage({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()

    const noHeaderFooterRoutes = ['/socials']

    const hideHeaderFooter = noHeaderFooterRoutes.includes(pathname)
    return (
        <>
            {!hideHeaderFooter && <Header />}
            {!hideHeaderFooter && <MobileHeader />}
            <main>{children}</main>
            {!hideHeaderFooter && <Footer />}
        </>
    )
}