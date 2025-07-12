import { useEffect, useState } from "react"

export function useGetWindowSize(): "sm" | "md" {

    const [windowSize,setWindowSize]=useState<"md"|"sm">("sm");

    useEffect(()=>{
        const getSize =()=>{
            const width = window.innerWidth;
            const type  = width > 768 ? "md" : "sm";
            setWindowSize(type);
        }
        getSize();
        window.addEventListener("resize",getSize);
        return () => {
            window.removeEventListener("resize",getSize);
        }
    },[]);

    return  windowSize;
}