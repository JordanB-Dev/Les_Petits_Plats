import { RecipeTemplate } from './../templates/recipes.js'
import { FetchData } from './../../data/fetch.js'
import { SearchBar } from '../utils/searchBar.js'

const DisplayCard = (recipes) => {
  const recipesSection = document.querySelector('.recipes')
  recipesSection.textContent = ''
  recipes.forEach((recipe) => {
    const recipeModel = RecipeTemplate(recipe)
    const recipeCardDOM = recipeModel.getRecipeCardDOM()
    recipesSection.appendChild(recipeCardDOM)
  })
}

const init = async () => {
  const { recipes } = await FetchData()
  DisplayCard(recipes)
  SearchBar()
}

init()

export { DisplayCard }
