const getData = async () => {
  const errorApi = document.querySelector('.recipes')
  const recipes = await fetch('./data/recipes.json')
    .then((response) => response.json())
    .catch((error) => {
      errorApi.insertAdjacentHTML(
        'beforeend',
        `<center><h1>404 NOT FOUND</h1></center>`
      )
      console.log('Error api:' + ' ' + error)
    })

  return recipes
}

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
