import { RecipeTemplate } from './../templates/recipes.js'
import { FetchData } from './../../data/fetch.js'
import { InitSearchBar } from '../utils/searchBar.js'
import { InitDropDownArrow } from '../utils/dropdownArrow.js'

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
  InitSearchBar()
  InitDropDownArrow()
}

init()

export { DisplayCard }
