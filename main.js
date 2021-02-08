const url = 'https://itunes.apple.com/search?'
const form = document.querySelector('#search-form')
const resultList = document.querySelector('#result-list')
const searchInput = document.querySelector('#search-bar').value

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('searchInput is', searchInput)
    // search()
    // const noteText = document.querySelector('#note-text').value
    // const noteTitle = document.querySelector('#note-title').value
    // createNote(noteText, noteTitle)
})


function search() {
    fetch (`https://itunes.apple.com/search?${searchInput}`)
    .then(resp => resp.json())
    .then (data => {
        console.log(data)
        for (let music of data) {
            console.log(music)
            renderMusicItem(music)
        }
    })
}

function renderMusicItem(musicObj) {
    const musicEl = document.createEl('li')
    // need to get data rendered from data object
    resultList.appendChild(musicEl)
}