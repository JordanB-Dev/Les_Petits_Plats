import { FetchData } from '../../data/fetch.js'
import { DisplayCard } from '../pages/index.js'
import { RecipesNumber } from './recipesNumber.js'
import { ResetSearch } from './resetSearch.js'
import { DisplayOptions } from './dropdownOption.js'

let filterRecipes = []
let searchValue = ''
let filterIngredients = []
let filterApparels = []
let filterUstensils = []

const InitSearchBar = async () => {
  let recipes = await FetchData()
  filterRecipes = mainSearch(recipes, '')

  const searchBar = document.querySelector('.search_bar')
  const searchInput = document.querySelector('.search_input')
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault()
    searchValue = searchInput.value.toLowerCase()
    if (searchValue) {
      filterRecipes = mainSearch(recipes, searchValue)
    }
  })

  searchInput.addEventListener('keyup', async (e) => {
    searchValue = e.target.value.toLowerCase()
    if (searchValue) {
      filterRecipes = mainSearch(recipes, searchValue)
    }
  })
  ResetSearch(recipes)
}

const getFilterRecipes = (recipes, searchValue) => {
  recipes = recipes.recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchValue) ||
      recipe.description.toLowerCase().includes(searchValue) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(searchValue)
      )
  )
  return recipes
}

const noRecipe = (search = '') => {
  const recipes = document.querySelector('.recipes')
  if (search) {
    recipes.innerHTML = `<div class="recipes_noRecipe"><h2>Aucune recette ne contient "${search}", vous pouvez chercher « tarte aux pommes », « poisson », etc. ..</h2></div>`
  }
}

const mainSearch = (recipes, searchValue) => {
  if (searchValue.length > 2 && searchValue) {
    filterRecipes = getFilterRecipes(recipes, searchValue)
  } else {
    filterRecipes = getFilterRecipes(recipes, '')
  }
  if (filterRecipes.length > 0) {
    DisplayCard(filterRecipes)
    RecipesNumber(filterRecipes)
  } else {
    noRecipe(searchValue)
    RecipesNumber(filterRecipes)
  }
  filterIngredients = DisplayOptions(filterRecipes, 'ingredients')
  filterApparels = DisplayOptions(filterRecipes, 'apparels')
  filterUstensils = DisplayOptions(filterRecipes, 'ustensils')

  return filterRecipes
}

export { InitSearchBar }
