import axios from "axios";
import apiKeys from './apikey';


const api_key = apiKeys.key;
const request_token_url = 'https://api.themoviedb.org/3/authentication/token/new';

async function getRequestTokenFromTMDB(){
    try{
        const response = await axios.get(request_token_url, {
            params:{
                api_key:api_key,
            }
        })

        const request_token = response.data.request_token;
        console.log('Token:', request_token);

        }catch (error){
            console.log('error getting request_token')
        }}


async function queryMovieByID(movieId){
    const request_token = getRequestTokenFromTMDB()
}
// async function queryMovieByID(movieId){
// //make a request using the user ID
// const request_token = getRequestTokenFromTMDB()
// await axios
//     .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${request_token}&language=en-US`)

//     .then(function (response) {
//         // handle success
//         console.log(response)
//         return(response);
//     })
// ;        //handle error
//         console.log(error);
//         return(error)
//     });
// }




export default queryMovieByID()