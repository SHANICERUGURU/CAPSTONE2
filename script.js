const searchicon = document.querySelector(".searchicon");
const searchform = document.querySelector(".searchform");

searchicon.addEventListener("click", () => {
  searchform.classList.add("active");
  cartitemscontainer.classList.remove("active");

});
const carticon = document.querySelector(".carticon");
const cartitemscontainer = document.querySelector(".cartitemscontainer");
const close=document.querySelector("#close")

carticon.addEventListener("click", () => {
  cartitemscontainer.classList.add("active");
  searchform.classList.remove("active");
});
close.addEventListener("click",() =>{
    cartitemscontainer.classList.remove("active")
})


document.addEventListener('DOMContentLoaded', () => {
    const recipe = JSON.parse(localStorage.getItem('selectedRecipe'));
    if (recipe) {
        const detailContainer = document.getElementById('details');
        detailContainer.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.label}" />
            <h3>${recipe.label}</h3>
            <p><strong>Source:</strong> ${recipe.source}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>${(recipe.ingredientLines || []).map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
            <p><strong>Calories:</strong> ${recipe.calories ? recipe.calories.toFixed(2) : 'N/A'}</p>
            <p><strong>Diet Labels:</strong> ${recipe.dietLabels.join(', ') || 'None'}</p>
            <p><strong>Health Labels:</strong> ${recipe.healthLabels.join(', ')}</p>
            <p><strong>Cautions:</strong> ${recipe.cautions.join(', ') || 'None'}</p>
            <p><strong>Total Weight:</strong> ${recipe.totalWeight ? recipe.totalWeight.toFixed(2) : 'N/A'} grams</p>
            <p><strong>Total Time:</strong> ${recipe.totalTime ? recipe.totalTime + ' minutes' : 'N/A'}</p>
            <button id="favoritebutton">Add to Favorites</button>
            <button id="backbutton">Back to Search Results</button>
            
        `;

    // Back button event listener
    document.getElementById('backbutton').addEventListener('click', () => {
        window.history.back();
    });

    // add to favorites button event listener
    document.getElementById('favoritebutton').addEventListener('click', () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(recipe)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        alert('Recipe added to favorites')
    })

    } else {
        console.error('No recipe details found in local storage');
    }

   
});