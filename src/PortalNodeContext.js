import { useState } from "react";
import React from "react";
import * as portals from "react-reverse-portal";

export const PortalContext = React.createContext({});

export default function PortalNodeContext({ children }) {
    const portalNode = React.useMemo(() => portals.createHtmlPortalNode(), []);

    const [bool, setBool] = useState(true);

    const setBoolRender = (value) => {
        setBool(value);
    };

    return (
        <PortalContext.Provider value={{ portalNode, bool, setBoolRender }}>
            {children}
        </PortalContext.Provider>
    );
}
