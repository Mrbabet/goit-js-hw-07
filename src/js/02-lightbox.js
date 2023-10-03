import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
// Change code below this line
for (const item of galleryItems) {
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
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(gallery);
