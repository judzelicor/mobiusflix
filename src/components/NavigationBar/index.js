import React from "react"

import { Link } from "react-router-dom"

function NavigationBar() {
    return (
        <header>
            <nav>
                <ul className="flex">
                    <li className="mr-7">
                        <Link to={ "/" }>Home</Link>
                    </li>
                    <li className="mr-7">
                        <Link to={ "/movies" }>Movies</Link>
                    </li>
                    <li className="mr-7">
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