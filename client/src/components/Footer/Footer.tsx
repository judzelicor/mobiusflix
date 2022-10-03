import {
    Link
} from "react-router-dom";
import { ReactComponent as TheMovieDB } from "../../assets/images/themoviedb_att.svg";
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer id={"footer"} className={"fPl9"}>
                <div className={"Lm85"}>
                    <div className={"K0L1"}>
                        <div>
                            <h3 className={"j1H9"}>Mobiusflix</h3>
                            <ul className={"F9Uy"}>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/" }>Home</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/about" }>About</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/movies" }>Movies</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/shows" }>TV Shows</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/animations" }>Animations</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/forums" }>Forums</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/" }>Blog</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/login" }>Log in</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/signup" }>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={"j1H9"}>Legal</h3>
                            <ul className={"F9Uy"}>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/" }>FAQ</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <Link className={ "KLww" } to={ "/" }>Terms of Use</Link>
                                </li>
                                <li className={"j1K7"}>
                                    <a className={ "KLww" } href="/">Cookie Policy</a>
                                </li>
                                <li className={"j1K7"}>
                                    <a className={ "KLww" } href="/">Privacy Policy</a>
                                </li>
                                <li className={"j1K7"}>
                                    <a className={ "KLww" } href="/">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={"j1H9"}>Follow Us</h3>
                            <ul className={"F9Uy"}>
                                <li className={"j1K7"}>
                                    <div className={"D10r"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M15 0H5C2.2 0 0 2.2 0 5v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm3 15c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3z" />
                                            <path d="M10 5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                                            <circle cx="15" cy="5" r="1" />
                                        </svg>
                                    </div>
                                    <a className={ "KLww" } href="/" target={"_blank"}>Instagram</a>
                                </li>
                                <li className={"j1K7"}>
                                    <div className={"D10r"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                                        </svg>
                                    </div>
                                    <a className={ "KLww" } href="/" target={"_blank"}>Twitter</a>
                                </li>
                                <li className={"j1K7"}>
                                    <div className={"D10r"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M433.43 93.222a422.256 422.256 0 0 0-104.216-32.324 1.582 1.582 0 0 0-1.675.792c-4.501 8.005-9.486 18.447-12.977 26.655-39.353-5.892-78.505-5.892-117.051 0-3.492-8.39-8.658-18.65-13.179-26.655a1.643 1.643 0 0 0-1.675-.792c-36.568 6.298-71.562 17.33-104.216 32.324a1.49 1.49 0 0 0-.686.589c-66.376 99.165-84.56 195.893-75.64 291.421.04.467.303.914.666 1.198 43.793 32.161 86.215 51.685 127.848 64.627a1.656 1.656 0 0 0 1.796-.589c9.848-13.449 18.627-27.63 26.154-42.543.444-.873.02-1.909-.888-2.255-13.925-5.282-27.184-11.723-39.939-19.036-1.009-.589-1.09-2.032-.161-2.723a218.562 218.562 0 0 0 7.932-6.217 1.585 1.585 0 0 1 1.655-.224c83.792 38.257 174.507 38.257 257.31 0a1.578 1.578 0 0 1 1.675.203 204.307 204.307 0 0 0 7.952 6.237c.928.691.867 2.134-.141 2.723-12.755 7.456-26.014 13.754-39.959 19.016a1.633 1.633 0 0 0-.867 2.275c7.689 14.892 16.468 29.073 26.134 42.523.404.569 1.13.813 1.796.609 41.835-12.941 84.257-32.466 128.05-64.627a1.64 1.64 0 0 0 .666-1.178c10.676-110.441-17.881-206.376-75.7-291.421a1.299 1.299 0 0 0-.664-.608zM171.094 327.065c-25.227 0-46.014-23.16-46.014-51.604s20.383-51.604 46.014-51.604c25.831 0 46.417 23.364 46.013 51.604 0 28.444-20.384 51.604-46.013 51.604zm170.127 0c-25.226 0-46.013-23.16-46.013-51.604s20.383-51.604 46.013-51.604c25.832 0 46.417 23.364 46.014 51.604 0 28.444-20.181 51.604-46.014 51.604z" />
                                        </svg>
                                    </div>
                                    <a className={ "KLww" } href="/" target={"_blank"}>Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div className={ "Mg71" }>
                            <div className={ "kLg5" }>
                                <h3 className={"rEw2"}>Subscribe To Our Newsletter</h3>
                                <h4 className={"rEw1"}>Let's stay in touch and get the latest about your favourite shows directly from us!</h4>
                                <div className={"P0l1"}>
                                    <input className={"JaQ1"} type={"email"} placeholder={"Email address"} />
                                    <button className={"K8IP"}>Subscribe</button>
                                </div>
                            </div>
                            <div>
                                <div className={ "KiM1" }>
                                    <a href={ "https://www.themoviedb.org" } target={ "_blank" }>
                                        <TheMovieDB />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"OpL1"}>
                        <p>Copyright &copy; 2022 Mobiusflix, Inc. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;