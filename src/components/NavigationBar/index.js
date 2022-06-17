import React from "react"

import { Link } from "react-router-dom"

function NavigationBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={ "/" }>Home</Link>
                    </li>
                    <li>
                        <Link to={ "/movies" }>Movies</Link>
                    </li>
                    <li>
                        <Link to={ "tv-shows" }>TV Shows</Link>
                    </li>
                    <li>
                        <Link to={ "/animations" }>Animations</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar