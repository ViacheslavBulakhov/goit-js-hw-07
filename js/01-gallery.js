import { galleryItems } from './gallery-items.js';
// Change code below this line
const boxRef = document.querySelector('.gallery');

function createElementList(params) {
const itemList =  params.map((item) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="">
    <img
    class="gallery__image"
    src="${item. preview}"
    data-source="${item. original}"
    alt="${item.description}"
    />
    </a>
</div>
`}).join('');
    return itemList;
};

boxRef.insertAdjacentHTML('afterbegin',createElementList(galleryItems)) ;

boxRef.addEventListener('click', openModal)

const htmlModal = `<div class="modal">  <img width="1110" height="700" src=""> </div>`;
const modal = basicLightbox.create(htmlModal,
{
    onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', closeModal);
    },
})

function closeModal(event) {
    event.preventDefault();
        if (event.code === "Escape") {
        modal.close();
    }
}
    
function openModal(event) {

    event.preventDefault();
        if (event.target.tagName !== 'IMG') {
            return;
        }

        const modalImageEl = modal.element().querySelector('.modal img')
        const originImageRef = event.target.dataset.source;

        modalImageEl.src = originImageRef;
    
        modal.show();
}

    

