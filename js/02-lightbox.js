import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxRef = document.querySelector('.gallery');

function createElementList(params) {
const itemList =  params.map((item) => {
    return `<a class="gallery__item" href="${item.original}">  
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
    </a>`})
    .join('');
    return itemList;
};

boxRef.insertAdjacentHTML('afterbegin',createElementList(galleryItems)) ;

boxRef.addEventListener('click', openModal)

function openModal(event){
    event.preventDefault();
    if (event.target.tagName !== 'IMG') {
        return;
    }
    boxRef.removeEventListener('click', openModal);
    
    const gallery = new SimpleLightbox('.gallery a');

    gallery.on('show.simplelightbox', function () {
    gallery.options.captionDelay = 250;
    });

}
