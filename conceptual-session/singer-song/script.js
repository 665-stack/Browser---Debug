
const elementById = (id) => {
    const inputField = document.getElementById(id);
    return inputField;

}
const handleSearch = () => {
    const keyword = elementById('keyword');
    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showArtist(data.artists))

}
const showArtist = (data) => {
    const artistsContainer = elementById('artists')
    data.forEach(artist => {
        console.log(artist);
        const div = document.createElement('div');
        div.innerHTML = `
           <p>${artist.strArtist}</p>
         `;
        artistsContainer.appendChild(div)
    });
}

