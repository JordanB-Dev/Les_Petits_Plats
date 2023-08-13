const FetchData = async () => {
  const errorApi = document.querySelector('.recipes')
  const response = await fetch('./data/recipes.json')
  const recipes = await response.json().catch((error) => {
    errorApi.insertAdjacentHTML(
      'beforeend',
      `<center><h1>404 NOT FOUND</h1></center>`
    )
    console.log('Error api:' + ' ' + error)
  })

  return recipes
}

export { FetchData }
