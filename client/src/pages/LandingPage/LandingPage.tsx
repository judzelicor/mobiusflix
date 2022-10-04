import { useEffect, useState } from "react";
import {
    Footer
} from "../../components";
import axios from "axios";
import "./LandingPage.css";

function LandingPage() {
    const [featuredFilm, setFeaturedFilm] = useState({});
    const [featuredFilmHasBeenFetched, setFeaturedFilmHasBeenFetched] = useState(false);

    useEffect(() => {
        axios({
            method: "GET",
            url: `/api/v1/featured`
        })
            .then(result => {
                const _featuredFilm = result.data.featured;
                console.log(_featuredFilm)
                setFeaturedFilm(_featuredFilm);
                setFeaturedFilmHasBeenFetched(true);
            })
    }, [])

    if (featuredFilmHasBeenFetched) {
        return (
            <>
                <section id={ "landingPage" }>
                    <div className={ "hero_image_container__kL90" }>
                        <div className={ "hero_image_backdrop__kL90" }>
                            <img src={ `https://image.tmdb.org/t/p/original/${ featuredFilm.backdrop_path }` } />
                        </div>
                        <div className={ "hero_image_backdrop_overlay" }></div>
                    </div>
                    <div className={ "heroContentWrapper__kL90" }>
                        <div className={ "heroTextContent__kL90" }>
                            <div>
                                <h2 className={ "featuredFilmTitle__kL90" }>{ featuredFilm.name ? featuredFilm.name : featuredFilm.original_title }</h2>
                            </div>
                            <div>
                                <p className={ "featuredFilmDescription__kL90" }>{ featuredFilm.overview }</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            <>
                <section id={ "landingPage" }>

                </section>
            </>
        )
    }

}

export default LandingPage;