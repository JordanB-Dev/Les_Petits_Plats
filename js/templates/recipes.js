// eslint-disable-next-line no-unused-vars
const RecipeTemplate = (data) => {
  const { image, name, ingredients, time, description } = data
  const picture = `assets/images/${image}`

  const getRecipeCardDOM = () => {
    const article = document.createElement('article')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const divTitleH4 = document.createElement('div')
    const h4 = document.createElement('h4')
    const divDesc = document.createElement('div')
    const pDesc = document.createElement('p')
    const divIngre = document.createElement('div')
    const h4Ingre = document.createElement('h4')
    const divContent = document.createElement('div')
    const divTime = document.createElement('div')
    const pTime = document.createElement('p')

    article.classList.add('recipes_content')

    img.setAttribute('src', picture)
    img.classList.add('recipes_img')
    img.title = name
    img.alt = `Photo: ${name}`
    img.setAttribute('aria-label', `Photo: ${name}`)
    article.appendChild(img)

    h3.textContent = name
    h3.classList.add('recipes_title')
    h3.setAttribute('aria-label', `Titre: ${name}`)
    article.appendChild(h3)

    divTitleH4.classList.add('recipes_title-h4')
    article.append(divTitleH4)

    h4.textContent = 'RECETTE'
    h4.setAttribute('aria-label', `Titre recette`)
    article.appendChild(h4)
    divTitleH4.appendChild(h4)

    divDesc.classList.add('recipes_desc')
    article.append(divDesc)

    pDesc.textContent = description
    pDesc.classList.add('recipes_desc-text')
    pDesc.setAttribute('aria-label', `Description recette`)
    article.appendChild(pDesc)
    divDesc.appendChild(pDesc)

    divIngre.classList.add('recipes_ingredients')
    article.append(divIngre)

    h4Ingre.textContent = 'INGREDIENTS'
    h4Ingre.setAttribute('aria-label', `Titre ingredients`)
    article.appendChild(h4Ingre)
    divIngre.appendChild(h4Ingre)

    divContent.classList.add('recipes_ingredients-content')
    article.append(divContent)

    ingredients.forEach((ingredient) => {
      const divContent2 = document.createElement('div')
      const pName = document.createElement('p')
      const pQuantity = document.createElement('p')

      divContent2.classList.add('recipes_ingredient-content')
      article.appendChild(divContent2)
      divContent.appendChild(divContent2)

      pName.textContent = ingredient.ingredient
      pName.classList.add('recipes_ingredient-name')
      pName.setAttribute('aria-label', `Ingrédient`)
      article.appendChild(pName)
      divContent2.appendChild(pName)

      pQuantity.innerText = `${ingredient.quantity || '-'} ${
        ingredient.unit || ''
      }`
      pQuantity.classList.add('recipes_ingredient-quantity')
      pQuantity.setAttribute('aria-label', `Ingrédient`)
      article.appendChild(pQuantity)
      divContent2.appendChild(pQuantity)
    })

    divTime.classList.add('recipes_time')
    article.append(divTime)

    pTime.innerText = `${time}min`
    pTime.classList.add('recipes_time-text')
    pTime.setAttribute('aria-label', `Temps`)
    article.appendChild(pTime)
    divTime.appendChild(pTime)

    return article
  }
  return { getRecipeCardDOM }
}

export { RecipeTemplate }
