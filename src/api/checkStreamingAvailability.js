import axios from "axios";


async function getStreamingAvailability(imdbId){
    const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/get',
    params: {
        output_language: 'en',
        imdb_id: imdbId
    },
    headers: {
        'X-RapidAPI-Key': 'eadb126578msh42871ee75600775p1b38e0jsnf57596336beb',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }}

export default getStreamingAvailability