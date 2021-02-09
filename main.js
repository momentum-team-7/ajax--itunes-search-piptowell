const url = 'https://itunes.apple.com/search?term='
const form = document.querySelector('#search-form')
const searchResults = document.querySelector('.search-results')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let searchInput = document.querySelector('.search-bar').value
    console.log('searchInput is', searchInput)

    function search() {
        fetch ('https://itunes.apple.com/search?term=' + searchInput + '&wrapperType="song"')
        .then(resp => resp.json())
        .then (data => {
            console.log(data)
            for (let music of data.results) {
                renderMusicItem(music)
            } 
            
        })
    }

    search()

    // const noteText = document.querySelector('#note-text').value
    // const noteTitle = document.querySelector('#note-title').value
    // createNote(noteText, noteTitle)
})



// fetch(urlBase + from)
// .then(response => response.json())
// .then(data => {
//   let rates = data.rates
//   console.log(rates[to]) 
//   calculate(rates[to], amount)
// })
// }

// function search() {
//     fetch ('https://itunes.apple.com/search?term='+ searchInput)
//     // fetch('https://itunes.apple.com/search?term=owen')
//     .then(resp => resp.json())
//     .then (data => {
//         console.log(data)
//     })
// }
        // for (let music of data) {
        //     console.log(music)
        //     renderMusicItem(music)
//         }
//     })
// }

function renderMusicItem(music) {
    const musicEl = document.createElement('div')
    musicEl.className = 'music-card'

    let title = music.trackName
    let artist = music.artistName
    let album = music.collectionName
    // set div class?
    const artistEl = document.createElement('h3')
    const trackEl = document.createElement('h3')
    const albumEl = document.createElement('h4')

    trackEl.innerText = title
    artistEl.innerText = artist
    albumEl.innerText = album

    console.log('trackEl is', trackEl)
    // need to get data rendered from data object
    console.log('music is', music)
    // data.results.artistName = 
    musicEl.appendChild(trackEl)
    musicEl.appendChild(artistEl)
    musicEl.appendChild(albumEl)
    searchResults.appendChild(musicEl)
}

// format for getting data from json results
// data.results[].artistName