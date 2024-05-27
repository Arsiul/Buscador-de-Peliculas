//API: THEMOVIEDB
document.getElementById('searchButton').addEventListener('click', searchMovie)

let container_results = document.getElementById('container-results')
const api_key = 'bd04ee1c904b3485ec203bdc312db414'

const url = 'https://api.themoviedb.org/3/search/movie'

function searchMovie(){
    let query = document.getElementById('searchInput').value
    fetch(`${url}?query=${query}&api_key=${api_key}`)
        .then(response => response.json())
        .then(response => showMovies(response.results))

}

// function showMovies(movies){

//     container_results.innerHTML = ''
//     movies.forEach(movie =>{
//         let container = document.createElement('div')
//         container.classList.add('movie')
//         let url_poster = 'https://image.tmdb.org/t/p/w500'

//         let poster = document.createElement('img')
//         poster.src = `${url_poster}${movie.poster_path}`

//         let titulo = document.createElement('h2')
//         titulo.textContent = movie.title
//         let descripcion = document.createElement('p')
//         descripcion.textContent = movie.overview
//         let fecha = document.createElement('p')
//         fecha.textContent = movie.release_date

//         container_results.appendChild(container)
//         container.appendChild(poster)
//         container.appendChild(titulo)
//         container.appendChild(descripcion)
//         container.appendChild(fecha)


//     })
// }

function showMovies(movies){
    container_results.innerHTML = ''

    movies.forEach(movie => {

        let lista = document.createElement('li')
        let div_data = document.createElement('div')
        div_data.classList.add('movie-data')


        let titulo = document.createElement('h2')
        titulo.textContent = movie.title
        let popularidad = document.createElement('span')
        popularidad.textContent = movie.popularity
        let fecha_estreno = document.createElement('span')
        fecha_estreno.textContent = movie.release_date

        const url_poster = 'https://image.tmdb.org/t/p/w500'
        let poster = document.createElement('img')
        poster.src = `${url_poster}${movie.poster_path}`

        lista.appendChild(poster)
        lista.appendChild(div_data)
        div_data.appendChild(titulo)
        div_data.appendChild(popularidad)
        div_data.appendChild(fecha_estreno)
        container_results.appendChild(lista)
    });
}




// ul{li{Image, div{titulo,popularidad,fecha_de_estreno}}}

// ul(.container-results)
// div(.movie-data)
