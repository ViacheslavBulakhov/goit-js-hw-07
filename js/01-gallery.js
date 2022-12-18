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

boxRef.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName !== 'IMG') {
        return;
    }
    const imgRef = event.target.dataset.source;
    modalOpen(imgRef);
})


function modalOpen(ref) {
        const instance = basicLightbox.create(`
    <div class="modal">
    <img width="1110" height="700" src="${ref}">
    </div>
    `);
    instance.show();
    if (basicLightbox.visible()) {
        keyModalClose(instance)
    }
}
function keyModalClose(instance) {
    document.addEventListener("keydown", closeModal)
    
    function closeModal(event) {
    event.preventDefault();
        if (event.code === "Escape") {
            instance.close()
            document.removeEventListener('keydown', closeModal)
        }
    }
}







