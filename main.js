const url = 'https://itunes.apple.com/search?term='
const form = document.querySelector('#search-form')
const searchResults = document.querySelector('.search-results')
const player = document.querySelector('audio-player')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    clearSearch()
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
    clearSearch()
    search()

})



function renderMusicItem(music) {
    const musicEl = document.createElement('div')
    musicEl.className = 'music-card'


    let title = music.trackName
    let artist = music.artistName
    let album = music.collectionName
    let albumArt = music.artworkUrl100
    // let trackId = music.trackId
    let previewUrl = music.previewUrl


    const artistEl = document.createElement('h3')
    const trackEl = document.createElement('h3')
    const albumEl = document.createElement('h4')
    const albumArtEl = document.createElement('img')
    const playButton = document.createElement('button')
    // not sure what's going on here. who are you to judge?
    playButton.innerText = 'play'

    trackEl.innerText = title
    artistEl.innerText = artist
    albumEl.innerText = album
    albumArtEl.src = albumArt
    // need to pass these below to the other renderAudio function
    // trackIdEl.innerHTML = trackId
    previewUrl.innerText = previewUrl


    console.log('trackEl is', trackEl)
    console.log('music is', music)

    musicEl.appendChild(playButton)
    musicEl.appendChild(albumArtEl)
    musicEl.appendChild(trackEl)
    musicEl.appendChild(artistEl)
    musicEl.appendChild(albumEl)
    musicEl.appendChild(trackIdEl)
    musicEl.appendChild(previewUrlEl)


    searchResults.appendChild(musicEl)


}


function clearSearch () {
    let musics = document.querySelectorAll('.music-card')
    console.log(document.querySelectorAll('.music-card'))
    for (let song of musics) {
        song.remove();
    }
}    


// function renderAudio (musicEl) {
//     playButton.addEventListener('click', (event) => {
    
//         player.src = previewUrl
    
//     })
// }