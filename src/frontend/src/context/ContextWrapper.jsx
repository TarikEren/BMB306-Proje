import React from "react";
import GlobalContext from "./GlobalContext";

function ContextWrapper(props) {
    return (
        <GlobalContext.Provider>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default ContextWrapper;