const categoriesList = document.getElementById("categories");
const categoryItems = document.querySelectorAll(".item");
const categoryItemsArr = [...categoryItems];

const categories = categoryItemsArr.map((item) => {
  let category = item.childNodes;

  return category;
});

const numberOfCategories = categoryItems.length;

console.log(`Number of categories: ${numberOfCategories}`);

for (const category of categories) {
  console.log(`Category: ${category[1].innerText}`);
  console.log(`Elements: ${category[3].children.length}`);
}
