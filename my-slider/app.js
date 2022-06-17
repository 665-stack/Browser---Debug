const images = [
    'images/photo-1.jpg',
    'images/photo-2.jpg',
    'images/photo-3.jpg',
    'images/photo-4.jpg',
    'images/photo-5.jpg',
    'images/photo-6.jpg'
];
let imgIndex = 0;
const sliderImg = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    imgIndex++;
    sliderImg.setAttribute('src', imgUrl)
}, 1000);
