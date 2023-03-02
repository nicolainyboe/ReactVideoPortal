import React, { useContext } from "react";
import video from "./88.MP4";
import * as portals from "react-reverse-portal";
import { PortalContext } from "./PortalNodeContext";

function Video({ id }) {
    const { portalNode } = useContext(PortalContext);

    return (
        <div>
            <portals.InPortal node={portalNode}>
                <div>
                    <video
                        id="video"
                        controls
                        width="300"
                        height="800"
                        className="video__player"
                        loop
                        autoPlay
                        src={video}
                    ></video>
                </div>
            </portals.InPortal>
        </div>
    );
}

export default Video;
