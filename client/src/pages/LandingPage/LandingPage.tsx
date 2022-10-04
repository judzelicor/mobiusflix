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
                setFeaturedFilm(_featuredFilm);
                setFeaturedFilmHasBeenFetched(true);
            })
    }, [])

    if (featuredFilmHasBeenFetched) {
        return (
            <>
                <section>
                    <div className={ "hero_image_container__kL90" }>
                        <div className={ "hero_image_backdrop__kL90" }>
                            <img src={ `https://image.tmdb.org/t/p/original/${ featuredFilm.backdrop_path }` } />
                        </div>
                        <div className={ "hero_image_backdrop_overlay" }></div>
                    </div>
                </section>
            </>
        )
    }

}

export default LandingPage;