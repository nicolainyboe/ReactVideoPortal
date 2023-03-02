import React from "react";
import * as portals from "react-reverse-portal";
import { PortalContext } from "./PortalNodeContext";

function PortalBox() {
    const { portalNode, bool } = React.useContext(PortalContext);

    return (
        <div>
            <div id="portalBox">
                {!bool && (
                    <portals.OutPortal node={portalNode}></portals.OutPortal>
                )}
            </div>
        </div>
    );
}

export default PortalBox;
