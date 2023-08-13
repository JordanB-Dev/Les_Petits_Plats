const displayData = async (recipes) => {
  const recipesSection = document.querySelector('.recipes')

  recipes.forEach((recipe) => {
    // eslint-disable-next-line no-undef
    const recipeModel = recipeTemplate(recipe)
    const recipeCardDOM = recipeModel.getRecipeCardDOM()
    recipesSection.appendChild(recipeCardDOM)
  })
}

const init = async () => {
  // Récupère les datas des photographes
  const { recipes } = await getData()
  displayData(recipes)
}

init()
