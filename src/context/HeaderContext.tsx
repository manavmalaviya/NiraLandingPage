"use client";
import { createContext } from "react";

export interface HeaderContextType {
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
}
const HeaderContext = createContext<HeaderContextType>({menuOpen:false, setMenuOpen:()=>{}});
export default HeaderContext;