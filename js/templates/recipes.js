// eslint-disable-next-line no-unused-vars
const recipeTemplate = (data) => {
  const { image, name, ingredients, time, description, appliance, ustensils } =
    data
  const picture = `assets/images/${image}`

  const getRecipeCardDOM = () => {
    const article = document.createElement('article')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const divTitleH4 = document.createElement('div')
    const h4 = document.createElement('h4')
    const divDesc = document.createElement('div')
    const pDesc = document.createElement('p')

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

    return article
  }
  return { getRecipeCardDOM }
}
