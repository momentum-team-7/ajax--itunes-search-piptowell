const url = 'https://itunes.apple.com/search?term='
const form = document.querySelector('#search-form')
const resultList = document.querySelector('#result-list')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let searchInput = document.querySelector('.search-bar').value
    console.log('searchInput is', searchInput)

    function search() {
        fetch ('https://itunes.apple.com/search?term=' + searchInput)
        .then(resp => resp.json())
        .then (data => {
            console.log(data)
            let artistName = data.artistName
            console.log(artistName)
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

// function renderMusicItem(musicObj) {
//     const musicEl = document.createEl('li')
//     // need to get data rendered from data object
//     resultList.appendChild(musicEl)
// }