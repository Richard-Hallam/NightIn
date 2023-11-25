
function generateImageUrl(backdrop_path){
    const url = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    return url
}

export default generateImageUrl
