import { galleryItems } from "./gallery-items.js";

// Change code below this line.

const galleryList = document.querySelector(".gallery");

// const createItem = function (element, type, child, parent, classList) {
//   element = document.createElement(type);
//   element.classList = classList;
//   parent.append(child);
// };

for (const item of galleryItems) {
  //   createItem(galleryItem, "li", galleryItem, galleryList, "gallery__item");
  const galleryItem = document.createElement("li");
  galleryItem.classList = "gallery__item";
  galleryList.append(galleryItem);
  //   createItem(galleryLink, "a", galleryLink, galleryItem, "gallery__link");

  const galleryLink = document.createElement("a");
  galleryItem.append(galleryLink);
  galleryLink.classList = "gallery__link";
  galleryLink.setAttribute("href", item.original);
  //   createItem(galleryImage, "img", galleryImage, galleryLink, "gallery__image");

  const galleryImage = document.createElement("img");
  galleryLink.append(galleryImage);
  galleryImage.classList = "gallery__image";
  galleryImage.setAttribute("src", item.preview);
  galleryImage.setAttribute("alt", item.description);

  galleryLink.addEventListener("click", (e) => {
    e.preventDefault();
    const instance = basicLightbox.create(`<img  src='${item.original}'>`);
    instance.show();
  });
}
