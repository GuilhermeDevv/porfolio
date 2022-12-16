import { createContext, useState } from "react";

export const Contexto = createContext()

import React from 'react';

export function ContextoMenu({ children }) {
    const [menu, setMenu] = useState(true)

    return (
        <Contexto.Provider value={{ menu, setMenu }}>
            {children}
        </Contexto.Provider>
    );
}


