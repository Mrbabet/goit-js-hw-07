import { galleryItems } from "./gallery-items.js";

// Change code below this line.

const createElement = function (tag) {
  const element = document.createElement(tag);
  return element;
};

const appendElement = function (parent, child) {
  return parent.append(child);
};

const createGaleryItem = function (item) {
  const galleryList = document.querySelector(".gallery");
  const galleryItem = createElement("li");
  const galleryLink = createElement("a");
  const galleryImage = createElement("img");

  appendElement(galleryList, galleryItem);
  appendElement(galleryItem, galleryLink);
  appendElement(galleryLink, galleryImage);

  galleryItem.classList = "gallery__item";
  galleryLink.classList = "gallery__link";
  galleryImage.classList = "gallery__image";

  galleryLink.setAttribute("href", item.original);
  galleryImage.setAttribute("src", item.preview);
  galleryImage.setAttribute("alt", item.description);

  galleryLink.addEventListener("click", (e) => {
    e.preventDefault();
    lightboxOpen(item.original);
  });
};

const lightboxOpen = function (src) {
  const instance = basicLightbox.create(`<img  src='${src}'>`);
  instance.show();

  document.addEventListener("keydown", closeLightboxOnEscape);
  function closeLightboxOnEscape(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeLightboxOnEscape);
    }
  }
};

galleryItems.forEach((item) => {
  createGaleryItem(item);
});
