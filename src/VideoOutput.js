import React from "react";
import * as portals from "react-reverse-portal";
import { PortalContext } from "./PortalNodeContext";

function VideoOutput() {
    const { portalNode } = React.useContext(PortalContext);

    if (!portalNode) {
        return null;
    }
    return (
        <div>
            <portals.OutPortal node={portalNode}></portals.OutPortal>
        </div>
    );
}

export default VideoOutput;
