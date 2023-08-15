const RecipesNumber = (recipes) => {
  const recipeNumber = document.querySelector('.recipes_number')
  recipeNumber.textContent = ''
  if (recipes) {
    if (recipes.length < 2) {
      recipeNumber.textContent = `${recipes.length} recette`
    } else {
      recipeNumber.textContent = `${recipes.length} recettes`
    }
  } else {
    recipeNumber.textContent = '0 recette'
  }
}

export { RecipesNumber }
