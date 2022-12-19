import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxRef = document.querySelector('.gallery');

function createElementList(params) {
return params.map((item) => {
    return `<a class="gallery__item" href="${item.original}">  
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
    </a>`})
    .join('');
};

boxRef.insertAdjacentHTML('afterbegin',createElementList(galleryItems)) ;

    const gallery = new SimpleLightbox('.gallery a');

    gallery.on('show.simplelightbox', function () {
    gallery.options.captionDelay = 250;
    });