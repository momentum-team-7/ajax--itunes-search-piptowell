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
        // fetch ('nonsense') to verify error catch
        fetch ('https://itunes.apple.com/search?term=' + searchInput + '&wrapperType="song"')
        .then(resp => resp.json())
        .then (data => {
            console.log(data)
            for (let music of data.results) {
                renderMusicItem(music)
            } 
            
        })
        .catch(error =>
            catchError() )
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


    const artistEl = document.createElement('p')
    const trackEl = document.createElement('p')
    const albumEl = document.createElement('p')
    const albumArtEl = document.createElement('img')
    const playButton = document.createElement('button')
    


    let playAudio = document.createElement('div')
    playAudio.className = 'play-button'

    


    playButton.innerText = 'Preview'
    trackEl.innerText = title
    artistEl.innerText = artist
    albumEl.innerText = album
    albumArtEl.src = albumArt
    
    
    playAudio.dataset.previewUrl = music.previewUrl // save attribute in the data set
    playAudio.appendChild(playButton)

    musicEl.appendChild(playAudio)
    
    
    musicEl.appendChild(albumArtEl)
    musicEl.appendChild(trackEl)
    musicEl.appendChild(artistEl)
    musicEl.appendChild(albumEl)

    searchResults.appendChild(musicEl)



    playButton.addEventListener('click', (event) => {
        playSong(event.target)



        
    })


}

function playSong(button){
    let audio = document.querySelector('audio')
    console.log(audio)
        audio.src = button.parentElement.dataset.previewUrl
        console.log(button.parentElement.dataset.previewUrl)
    } 



function clearSearch () {
    let musics = document.querySelectorAll('.music-card')
    console.log(document.querySelectorAll('.music-card'))
    for (let song of musics) {
        song.remove();
    }
}    

function catchError() {
    const errorEl = document.createElement('div')
    errorEl.innerText = 'You messed up'
    searchResults.appendChild(errorEl)

}