import './style.css'

const API_KEY = import.meta.env.VITE_NASA_API_KEY
const app = document.querySelector('#app')

function loadApod(date = '') {
  app.innerHTML = `
    <main class="loading-screen">
      <p class="eyebrow">NASA // DEEP SPACE NETWORK</p>
      <h1>ACQUIRING SIGNAL</h1>
    </main>
  `

  const datePart = date ? `&date=${date}` : ''

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${datePart}`)
    .then(response => response.json())
    .then(data => {
      const media =
        data.media_type === 'video'
          ? `<iframe src="${data.url}" title="${data.title}" allowfullscreen></iframe>`
          : `<img src="${data.hdurl || data.url}" alt="${data.title}">`

      app.innerHTML = `
        <main class="page">
          <section class="hero">
            <p class="eyebrow">NASA // ASTRONOMY PICTURE OF THE DAY</p>
            <h1>${data.title}</h1>
            <p class="date">${data.date}</p>

            <div class="time-control">
              <label for="date-picker">EXPLORE TIME</label>
              <input
                id="date-picker"
                type="date"
                value="${data.date}"
                max="${new Date().toISOString().split('T')[0]}"
              >
            </div>
          </section>

          <section class="viewer">
            <div class="media-frame">
              ${media}
            </div>
          </section>

          <section class="info">
            <h2>Mission Brief</h2>
            <p class="description">${data.explanation}</p>
          </section>
        </main>
      `

      document.querySelector('#date-picker').addEventListener('change', event => {
        loadApod(event.target.value)
      })
    })
    .catch(error => {
      console.error(error)
      app.innerHTML = `<h1>SIGNAL LOST</h1>`
    })
}

loadApod()