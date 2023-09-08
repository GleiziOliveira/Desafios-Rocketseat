// Puxar informações do filme
// https://api.themoviedb.org/3/movie/{movie_id}
async function getMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVjNGUxZDk0NDg5MGFmMzAwYzMyNDk5ZTYwOTIxOCIsInN1YiI6IjY0ZTczYjg1ZTg5NGE2MDBjNzI3ZTBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eJx-lNGzVvzNPLWOE3b3drDkPryKrRiFiU1yPH2XN-s",
    },
  }
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    )
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

// Puxar API para informações extras
// https://api.themoviedb.org/3/movie/{movie_id}/videos
async function getMoreInfo(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVjNGUxZDk0NDg5MGFmMzAwYzMyNDk5ZTYwOTIxOCIsInN1YiI6IjY0ZTczYjg1ZTg5NGE2MDBjNzI3ZTBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eJx-lNGzVvzNPLWOE3b3drDkPryKrRiFiU1yPH2XN-s",
    },
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    )
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

// API para puxar o trailer do filme
async function watch(event) {
  const movie_id = event.currentTarget.dataset.id

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVjNGUxZDk0NDg5MGFmMzAwYzMyNDk5ZTYwOTIxOCIsInN1YiI6IjY0ZTczYjg1ZTg5NGE2MDBjNzI3ZTBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eJx-lNGzVvzNPLWOE3b3drDkPryKrRiFiU1yPH2XN-s",
    },
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      options
    )
    const data = await response.json()
    const { results } = data
    const youtubeVideo = results.find((video) => video.type === "Trailer")
    window.open(`https://youtube.com/watch?v=${youtubeVideo.key}`, "blank")
  } catch (error) {
    console.log(error)
  }
}

function createMovieLayout({ id, title, stars, image, time, year }) {
  return `
    <div class="movie">
      <div class="title">
        <span>${title}</span>
        <div class="nota">
          <img src="./assets/Star.svg" alt="estrela">
          <p>${stars}</p>
        </div>
      </div>
      <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${image}" alt="Imagem de ${title}">
      </div>
      <div class="info">
        <div class="duration">
          <img src="./assets/Clock.svg" alt="Relogio">
          <span>${time}</span>
        </div>
        <div class="year">
          <img src="./assets/CalendarBlank.svg" alt="calendário">
          <span>${year}</span>
        </div>
      </div>
      <button onclick="watch(event)" data-id="${id}">
        <img src="./assets/Play.svg" alt="">
        <span>Assistir Trailer</span>
      </button>
    </div>`
}

function select3Videos(results) {
  const random = () => Math.floor(Math.random() * results.length)

  let selectedVideos = new Set()
  while (selectedVideos.size < 3) {
    selectedVideos.add(results[random()].id)
  }
  return [...selectedVideos]
}

function minutesToHourMinutesAndSeconds(minutes) {
  const date = new Date(null)
  date.setMinutes(minutes)
  return date.toISOString().slice(11, 19)
}

async function start() {
  try {
    // Pegar as sugestões dos filmes via API
    const { results } = await getMovies()

    // Pegar randomicamente 3 filmes para sugestão
    const best3 = select3Videos(results).map(async (movie) => {
      // Pegar informações extras dos três filmes
      const info = await getMoreInfo(movie)

      // Organizar os dados
      const props = {
        id: info.id,
        title: info.title,
        stars: Number(info.vote_average).toFixed(1),
        image: info.poster_path,
        time: minutesToHourMinutesAndSeconds(info.runtime),
        year: info.release_date.slice(0, 4),
      }

      return createMovieLayout(props)
    })

    const output = await Promise.all(best3)

    // Substituir o conteúdo dos filmes no HTML
    document.querySelector(".movies").innerHTML = output.join("")
  } catch (error) {
    console.log(error)
  }
}

start()
