import { galleryItems } from "./gallery-items.js";

// Change code below this line.

const galleryList = document.querySelector(".gallery");

for (const item of galleryItems) {
  const instance = basicLightbox.create(`<img  src='${item.original}'>`);

  const galleryItem = document.createElement("li");
  galleryItem.classList = "gallery__item";
  galleryList.append(galleryItem);

  const galleryLink = document.createElement("a");
  galleryItem.append(galleryLink);
  galleryLink.classList = "gallery__link";
  galleryLink.setAttribute("href", item.original);

  const galleryImage = document.createElement("img");
  galleryLink.append(galleryImage);
  galleryImage.classList = "gallery__image";
  galleryImage.setAttribute("src", item.preview);
  galleryImage.setAttribute("alt", item.description);

  galleryLink.addEventListener("click", (e) => {
    console.log(e);
    e.preventDefault();
    instance.show();
  });
}
