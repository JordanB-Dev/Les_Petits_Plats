const NoRecipe = (search = '') => {
  const recipes = document.querySelector('.recipes')
  if (search) {
    recipes.innerHTML = `<div class="recipes_noRecipe"><h2>Aucune recette ne contient "${search}", vous pouvez chercher « tarte aux pommes », « poisson », etc. ..</h2></div>`
  }
}

export { NoRecipe }
