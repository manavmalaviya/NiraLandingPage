"use client";

import { useState } from "react";
import HeaderContext from "./HeaderContext";

const HeaderProvider = (props: any) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <HeaderContext.Provider value={{ menuOpen, setMenuOpen }}>
            {props.children}
        </HeaderContext.Provider>
    )
}

export default HeaderProvider;