import { 
    Link,
    useNavigate
} from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/mobiusflix_logo.svg";
import "./NavigationBar.css";


function NavigationBar() {
    const navigateTo = useNavigate();

    const handleButtonClick = (page: string) => {
        navigateTo(page);
    }

    return (
        <>
            <header id={ "header" } className={ "header h35r" }>
                <div className={ "kF3n" }>
                    <div className={ "Mb34" }>
                        <div className={"pxL0"}>
                            <Link className={ "lLk8" } to={ "/" }>
                                <Logo />
                            </Link>
                        </div>
                        <div className={ "Puq1" }>
                            <div className={"Wq3E"}>
                                <nav className={"mMG1"}>
                                    <ul className={"L9uy"}>
                                        <li className={ "L13K" }>
                                            <Link className={"m6N1"} to={"/"}>Home</Link>
                                        </li>
                                        <li className={ "L13K" }>
                                            <Link className={"m6N1"} to={"/about"}>About</Link>
                                        </li>
                                        <li className={ "L13K" }>
                                            <Link className={"m6N1"} to={"/movies"}>Movies</Link>
                                        </li>
                                        <li className={ "L13K" }>
                                            <Link className={"m6N1"} to={"/shows"}>TV Shows</Link>
                                        </li>
                                        <li className={ "L13K" }>
                                            <Link className={"m6N1"} to={"/animations"}>Animations</Link>
                                        </li>
                                        <li className={ "L13K" }>
                                            <Link className={"m6N1"} to={"/forums"}>Forums</Link>
                                        </li>
                                        <li className={ "L13K" }>
                                            <Link className={"m6N1"} to={"/blog"}>Blog</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <ul className={ "Kj7V" }>
                                    <li>
                                        <button 
                                            className={ "Lp97 v1" }
                                            onClick={ () => handleButtonClick("login") }
                                        >
                                            <span>Log in</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            className={ "Lp97 v2" }
                                            onClick={ () => handleButtonClick("signup") }
                                        >
                                            <span>Sign up</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"kJ13"}>
                        <svg viewBox="0 0 24 12">
                            <path d="M0 0h24v2H0zm0 5h24v2H0zm0 5h24v2H0z" />
                        </svg>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavigationBar;