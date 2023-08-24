import { FetchData } from '../../data/fetch.js'
import { DisplayCard } from '../pages/index.js'
import { RecipesNumber } from './recipesNumber.js'
import { ResetSearch } from './resetSearch.js'
import { DisplayOptions } from './dropdownOption.js'
import { DropdownLi } from '../templates/dropdown.js'
import { NoRecipe } from './noRecipe.js'
import { ManageTags } from './tag.js'

let filterRecipes = []
let searchValue = ''
let filterIngredients = []
let filterApparels = []
let filterUstensils = []
let filterTags = []

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
  let recipesFilter = []

  for (let recipe of recipes.recipes) {
    if (
      recipe.description.toLowerCase().includes(searchValue) ||
      recipe.name.toLowerCase().includes(searchValue)
    ) {
      recipesFilter.push(recipe)
    } else {
      for (const ingredient of recipe.ingredients) {
        if (ingredient.ingredient.toLowerCase().includes(searchValue)) {
          recipesFilter.push(recipe)
          break
        }
      }
    }
  }
  return recipesFilter
}

const searchDropdowns = (el, option, recipes) => {
  filterTags = recipes
  const elDropdown = document.querySelector(`.${option} .dropdown_content`)
  const elSearch = elDropdown.querySelector('.dropdown_input')

  elSearch.addEventListener('keyup', async (e) => {
    let filterEl = []
    let searchValue = ''
    const elOptions = document.querySelector(`.${option} .dropdown_options`)

    if (e.target.value.length > 2) {
      searchValue = e.target.value.toLowerCase()
      filterEl = el.filter((el) => el.toLowerCase().includes(searchValue))
      elOptions.innerHTML = ''

      filterEl.forEach((el) => {
        DropdownLi(el, option)
      })
    } else {
      elOptions.innerHTML = ''
      el.forEach((el) => {
        DropdownLi(el, option)
      })
    }
    ManageTags()
    return el
  })
  const form = elDropdown.querySelector(`.${option} .dropdown_header-content`)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}

const SearchTag = (el, recipes) => {
  if (el.length > 0) {
    recipes = filterRecipes

    el.forEach((el) => {
      recipes = recipes.filter(
        (recipe) =>
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(el)
          ) ||
          recipe.appliance.toLowerCase().includes(el) ||
          recipe.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(el)
          )
      )
      if (recipes.length > 0) {
        DisplayCard(recipes)

        RecipesNumber(recipes)
      } else {
        NoRecipe()
      }
    })
  } else {
    recipes = filterRecipes

    DisplayCard(recipes)

    RecipesNumber(recipes)
  }
  filterIngredients = DisplayOptions(recipes, 'ingredients')

  filterApparels = DisplayOptions(recipes, 'apparels')

  filterUstensils = DisplayOptions(recipes, 'ustensils')

  return recipes
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
    NoRecipe(searchValue)
    RecipesNumber(filterRecipes)
  }
  filterIngredients = DisplayOptions(filterRecipes, 'ingredients')
  filterApparels = DisplayOptions(filterRecipes, 'apparels')
  filterUstensils = DisplayOptions(filterRecipes, 'ustensils')

  searchDropdowns(filterIngredients, 'ingredients', filterRecipes)
  searchDropdowns(filterApparels, 'apparels', filterRecipes)
  searchDropdowns(filterUstensils, 'ustensils', filterRecipes)

  ManageTags()
  return filterRecipes
}

export { InitSearchBar, SearchTag }
