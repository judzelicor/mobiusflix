import axios from "axios";
import { generateRandomNumber } from "../util/utils.js";

let api_base_uri;
let api_key;

function featuredController(request, response) {
    api_base_uri = process.env.TMDB_BASE_URI;
    api_key = process.env.TMDB_API_KEY;

    // TODO
    axios({
        method: "GET",
        url: `${ api_base_uri }/trending/all/day?api_key=${ api_key }`
    })
    .then(result => {
        const data_length = result.data.results.length;
        const index = generateRandomNumber(data_length);
        const films = result.data.results;
        
        response.json({ featured: films[index] });
    })

    // response.json({ featured: {"adult":false,"backdrop_path":"/zNugnnR5KEmq9EzLcl0Me1UmHYk.jpg","id":120089,"name":"SPY x FAMILY","original_language":"ja","original_name":"SPY×FAMILY","overview":"Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the ultimate impossible assignment—get married and have a kid—he may finally be in over his head! Not one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school. What he doesn't know is that the wife he's chosen is an assassin and the child he's adopted is a telepath!","poster_path":"/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg","media_type":"tv","genre_ids":[16,35,10759],"popularity":934.665,"first_air_date":"2022-04-09","vote_average":8.7,"vote_count":770,"origin_country":["JP"]}})

}

export default featuredController;