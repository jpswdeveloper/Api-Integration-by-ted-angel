const Api = '271fad78dba25e0207fe675ccd6311cf'
const request = {
    highestRateMovie: `/discover/movie/?api_key=${Api}&{certification_country=US&certification=R&sort_by=vote_average.desc`,
    most_popular: ` /discover/movie?api_key=${Api}&sort_by=popularity.desc`,
    kids_movies: `/discover/movie?api_key=${Api}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
    best_dramas: `/discover/movie?api_key=${Api}&with_genres=18&primary_release_year=2014`,
    kids_movies: `/discover/movie?api_key=${Api}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
}
export default request;