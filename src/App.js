import "./App.css";
import React from "react";
import Video from "./Video";
import PortalContainer from "./PortalContainer";

import PortalNodeContext from "./PortalNodeContext";

function App() {
    return (
        <div className="App" id="App">
            <PortalNodeContext>
                <header className="App-header">
                    <Video />
                    <div id="video">
                        <PortalContainer />
                    </div>
                </header>
            </PortalNodeContext>
        </div>
    );
}

export default App;
