import React from "react"

import { useDocumentTitle } from "../hooks"

function MoviesPage() {
    useDocumentTitle("Movies | Mobiusflix")

    return (
        <div>
            This is the movies page!
        </div>
    )
}

export default MoviesPage