const recipes = [
  //    Vegetable soup
  {
    name: "Vegetable Soup",
    category: "Dinner",
    servings: 4,
    time: "30 minutes",
    ingredients: [
      "Water or vegetable stock",
      "Carrots",
      "Potatoes",
      "Onion",
      "Tomatoes",
      "Cabbage",
      "Green beans",
      "Green peas",
      "Garlic",
      "Celery",
      "Vegetable oil",
      "Salt",
      "Black pepper",
      "Ground cumin",
      "Paprika",
      "Fresh parsley/coriander",
      "Lemon juice",
    ],
    steps: [
      "Wash all vegetables thoroughly",
      "Peel and dice the potatoes",
      "Peel and dice the carrots",
      "Chop the onion and tomatoes",
      "Chop the cabbage, green beans, celery, and any other vegetables",
      "Mince the garlic",
      "If using fresh peas, remove them from their pods",
      "Place a large pot over medium heat and add 2 tablespoons of vegetable oil",
      "Add the chopped onion and cook for about 3 to 5 minutes, stirring occasionally, until it becomes soft and slightly transparent",
      "Add the minced garlic and cook for another 30 to 60 seconds",
      "Add the carrots and potatoes",
      "Stir them with the onion and garlic for about 2 to 3 minutes",
      "Add the cumin and paprika and stir briefly. This helps release the spices' aroma",
      "Add the chopped tomatoes and stir for about 2 minutes",
      "Pour in 6 cups of vegetable stock or water",
      "Add salt and black pepper",
      "Bring the soup to a boil",
      "Once boiling, reduce the heat to low or medium-low",
      "Cover the pot partially and simmer for approximately 15 minutes",
      "Add the cabbage, green beans, celery, and peas",
      "Continue cooking for another 10 to 15 minutes, or until the potatoes and carrots are tender but the vegetables are not completely mushy",
      "Taste the soup",
      "Add more salt or pepper if necessary. You can also add a little lemon juice for a fresh flavor",
      "Turn off the heat and add chopped parsley or coriander",
      "Let the soup rest for 2 to 3 minutes before serving",
    ],
  },

  //      Grilled Chicken Sandwich

  //   {
  //     name: "Grilled Chicken Sandwich",
  //     category: "Lunch",
  //     servings: 2,
  //     time: "20 minutes",
  //     ingredients: ["2 chicken breasts", "2 burger buns", "1 tomato (sliced)"],
  //     steps: [
  //       "Season and grill the chicken.",
  //       "Toast the buns.",
  //       "Assemble the sandwich.",
  //     ],
  //   },

  //      Doro Wat

  //   {
  //     name: "Doro Wat",
  //     category: "Dinner",
  //     servings: 6,
  //     time: "90 minutes",
  //     ingredients: [
  //       "1 whole chicken",
  //       "3 onions (chopped)",
  //       "4 tbsp berbere spice",
  //     ],
  //     steps: [
  //       "Cook onions until soft.",
  //       "Add berbere and chicken.",
  //       "Simmer until tender.",
  //     ],
  //   },
];

function isValidServings(servings) {
  if (servings <= 0) {
    return false;
  }
  return true;
}

console.log(isValidServings(4));
console.log(isValidServings(0));
console.log(isValidServings(-2));

for (let i = 0; i < recipes.length; i++) {
  console.log(recipes[i].name);
}

for (let i = 0; i < recipes.length; i++) {
  console.log(`${i + 1}. ${recipes[i].name} (${recipes[i].category})`);
}

function calculateScaledIngredient(
  originalAmount,
  originalServings,
  newServings,
) {
  const ratio = newServings / originalServings;
  const scaledAmount = originalAmount * ratio;
  return scaledAmount;
}

console.log(calculateScaledIngredient(2, 4, 8));
console.log(calculateScaledIngredient(2, 4, 2));
console.log(calculateScaledIngredient(3, 2, 5));

const soup = recipes[0];
console.log(soup.name, "originally serves", soup.servings);
console.log(
  "Scaled to 8 servings, an ingredient originally at 2 units becomes:",
  calculateScaledIngredient(2, soup.servings, 8),
);

function searchRecipes(keyword, recipesArray) {
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  for (let i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].name.toLowerCase().includes(lowerKeyword)) {
      results.push(recipesArray[i]);
    }
  }
  return results;
}

console.log(searchRecipes("soup", recipes));

console.log(searchRecipes("chick", recipes));

console.log(searchRecipes("doro", recipes));

console.log(searchRecipes("SOUP", recipes));

function calculateScaledIngredient(
  originalAmount,
  originalServings,
  newServings,
) {
  if (newServings <= 0) {
    console.log("Servings must be greater than zero.");
    return null;
  }
  const ratio = newServings / originalServings;
  return originalAmount * ratio;
}

function searchRecipes(keyword, recipesArray) {
  if (keyword.trim() === "") {
    return recipesArray;
  }
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  for (let i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].name.toLowerCase().includes(lowerKeyword)) {
      results.push(recipesArray[i]);
    }
  }
  return results;
}

// Scales a single ingredient amount from its original servings to a new servings count.
// Returns null and logs a message if newServings is zero or negative.
// function calculateScaledIngredient(originalAmount, originalServings, newServings) { ... }
// Returns all recipes whose name contains the given keyword (case-insensitive).
// Returns the full array unchanged if the keyword is empty.
// function searchRecipes(keyword, recipesArray) { ... }
