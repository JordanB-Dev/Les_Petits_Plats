import { DisplayCard } from '../pages/index.js'
import { RecipesNumber } from './recipesNumber.js'

const ResetSearch = (recipes) => {
  const searchInput = document.querySelector('.search_input')
  const reset = document.querySelector('.search_reset')
  searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
      reset.style.opacity = 0
    } else {
      reset.style.opacity = 1
    }
  })

  reset.addEventListener('click', async () => {
    searchInput.value = ''
    DisplayCard(recipes.recipes)
    RecipesNumber(recipes.recipes)
    reset.style.opacity = 0
  })
}

export { ResetSearch }
