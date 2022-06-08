fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => displayPhoto(data));

const displayPhoto = (data) => {
    const showPhotoHere = document.getElementById('showPhotoHere');
    data.forEach(element => {
        console.log(element);
        const div = document.createElement('div')
        div.classList.add('photoCard')
        div.classList.add('text-center')
        div.innerHTML = `
        <div class="card">
        <img src="${element.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
        </div>
      </div>
        `;
        showPhotoHere.appendChild(div);
    });
}
