const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");

const createIngredientItem = function (ingredients) {
  for (const ingredient of ingredients) {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    ingredientsList.append(listItem);
  }
};

createIngredientItem(ingredients);
