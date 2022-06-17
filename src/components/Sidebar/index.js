import { ReactComponent as Logo } from "../../assets/mobiusflix-logo.svg"

import { Link } from "react-router-dom"

import "./sidebar.css"

function Sidebar() {
    return (
        <div className="bg-zinc-900 h-full">
            <div className="flex justify-center">
                <Link to={ "/" }>
                    <div className="logo">
                        <Logo />
                    </div>
                </Link>
            </div>
            <ul>
                <li>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar