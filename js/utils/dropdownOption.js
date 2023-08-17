import { DropdownLi } from '../templates/dropdown.js'

const DisplayOptions = (recipes, option) => {
  let filterOption = []
  const dropdownOptions = document.querySelector(`.${option} .dropdown_options`)
  dropdownOptions.innerHTML = ''
  recipes.forEach((recipe) => {
    switch (option) {
      case 'ingredients':
        recipe.ingredients.forEach((ingredient) => {
          if (!filterOption.includes(ingredient.ingredient.toLowerCase())) {
            filterOption.push(ingredient.ingredient.toLowerCase())
            filterOption = filterOption.sort((a, b) => {
              return a.localeCompare(b)
            })
          }
        })
        break
      case 'apparels':
        recipes.forEach((apparels) => {
          if (!filterOption.includes(apparels.appliance.toLowerCase())) {
            filterOption.push(apparels.appliance.toLowerCase())
            filterOption = filterOption.sort((a, b) => {
              return a.localeCompare(b)
            })
          }
        })
        break
      case 'ustensils':
        recipe.ustensils.forEach((ustensils) => {
          if (!filterOption.includes(ustensils.toLowerCase())) {
            filterOption.push(ustensils.toLowerCase())
            filterOption = filterOption.sort((a, b) => {
              return a.localeCompare(b)
            })
          }
        })
        break
    }
  })
  filterOption.forEach((el) => DropdownLi(el, option))
  return filterOption
}

export { DisplayOptions }
