"use client";

import { ReactNode, useState } from "react";
import HeaderContext from "./HeaderContext";

interface HeaderProviderProps {
  children: ReactNode;
}

const HeaderProvider = ({children}: HeaderProviderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <HeaderContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </HeaderContext.Provider>
    )
}

export default HeaderProvider;