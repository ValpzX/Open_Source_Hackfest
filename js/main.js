//Variables

const recipes = document.querySelectorAll(".recipe-con a"),
    recipesLightbox = document.querySelector(".recipes-lightbox"),
    lightboxClose = document.querySelector("#lightbox-close"),
    lightboxRecipeName = document.querySelector("#lightbox-recipe"),
    lightboxDescription = document.querySelector("#lightbox-description"),
    lightboxIngredients = document.querySelector("#lightbox-ingredients"),
    lightboxNutritionalFacts = document.querySelector("#lightbox-nutritional-facts"),
    lightboxImage = document.querySelector("#lightbox-image");

let recipesArray = [
    {
        name: "Breakfast Toast",
        description: "Rustic slice of toasted artisanal bread, warm and crunchy on the outside. This recipe is perfect for breakfast, you'll be able to savour three different types of breakfast toasts: avocado toast, banana & blueberry toast, and tomato toast.",
        ingredients: "Avocado Toast: sweet potato spread, sliced avocados, hemp seeds, sesame seeds, and cilantro. Banana & Blueberry Toast: sliced bananas, blueberries, chia seeds, crushed walnuts. Tomato Toast: sweet potato spread, sliced tomatoes, sunflower seeds, hemp seeds, and cilantro.",
        nutritionFacts: "[Nutritional Facts Table]",
        image: "images/breakfast-toast.png",
    },

    {
        name: "Mexican Fiesta Bowl",
        description: "Vibrant and delectable culinary creation that embodies the rich and diverse flavors of Mexican cuisine. This mouthwatering dish is a celebration of bold colors, spicy ingredients, and a harmonious fusion of textures.",
        ingredients: "Guacamole (avocados, onion, tomato, cilantro, jalapeño pepper, lime juice, garlic, and salt), oven baked potato chips, spicy red bean and tomato sauce, vegan mayo.",
        nutritionFacts: "[Nutritional Facts Table]",
        image: "images/mexican-fiesta-lunch-bowl.png",
    },

    {
        name: "Chickpea Quinoa Bowl",
        description: "Wholesome and nutritious dish that brings together the goodness of two superfoods in a delightful, flavorful ensemble. This bowl is a testament to the marriage of protein-packed chickpeas and nutrient-rich quinoa, creating a balanced and satisfying meal.",
        ingredients: "Chickpeas, quinoa, avocado, sliced onion, cauliflower, roasted sweet potato, arugula, lime dressing.",
        nutritionFacts: "[Nutritional Facts Table]",
        image: "images/chickpea-quinoa-dinner-bowl.png",
    },
]


//Functions

function openRecipesLightbox() {
    recipesLightbox.style.visibility = "visible";

    lightboxRecipeName.textContent = recipesArray[this.dataset.recipe].name;
    lightboxDescription.textContent = recipesArray[this.dataset.recipe].description;
    lightboxIngredients.textContent = recipesArray[this.dataset.recipe].ingredients;
    lightboxNutritionalFacts.textContent = recipesArray[this.dataset.recipe].nutritionFacts;
    lightboxImage.src = recipesArray[this.dataset.recipe].image;
}

function closeRecipesLightbox() {
    recipesLightbox.style.visibility = "hidden";
}


//Event Listeners

if (recipes && recipesLightbox) {
    recipes.forEach(recipe => recipe.addEventListener("click", openRecipesLightbox));
    lightboxClose.addEventListener("click", closeRecipesLightbox);
}