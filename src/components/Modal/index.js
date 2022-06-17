import React from "react"

import {
    LoginModal
} from "../Modals"

function Modals() {
    if (modal == "Login") {
        return (
            <LoginModal />
        )
    }
}

export default Modals