import React from "react";
import PortalBox from "./PortalBox";
import { PortalContext } from "./PortalNodeContext";
import * as portals from "react-reverse-portal";

export default function PortalContainer() {
    const { bool, setBoolRender, portalNode } = React.useContext(PortalContext);

    const buttonPortalBox = () => {
        setBoolRender(false);
    };

    const buttonPortalContainer = () => {
        setBoolRender(true);
    };

    return (
        <div>
            <div id="portalContainer">
                <button onClick={buttonPortalContainer}>
                    Move to portalContainer
                </button>
                <button onClick={buttonPortalBox}>Move to portalBox</button>

                {bool && (
                    <portals.OutPortal node={portalNode}></portals.OutPortal>
                )}
                <PortalBox />
            </div>
        </div>
    );
}
