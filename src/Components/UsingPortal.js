import { createPortal } from "react-dom";

export default function UsingPortal(){

    return createPortal(
        <div>
            <h1>How to use portal to loaded data outside of root element</h1>
            Modal
        </div>,
        document.getElementById("modal")
    );
}