import axios from "axios";
import apiKeys from './apiKey';


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


export default getRequestTokenFromTMDB