import React from "react"

import { useDocumentTitle } from "../hooks"

function Homepage() {
    useDocumentTitle("Mobiusflix: Movies | TV Shows | Animations | Reviews | Trailers")
    return (
        <div>
            This is the homepage
        </div>
    )
}

export default Homepage