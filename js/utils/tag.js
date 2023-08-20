import { FetchData } from '../../data/fetch.js'
import { CloseDropDown } from './dropdownArrow.js'
import { DisplayTags } from '../templates/tags.js'
import { SearchTag } from './searchBar.js'

let filterTags = []
let selectEls = []

const ManageTags = async () => {
  const elLi = document.querySelectorAll('.dropdown_li')

  elLi.forEach((el) => {
    el.addEventListener('click', async (e) => {
      const dropdown = e.target.parentElement.parentElement
      const input = dropdown.querySelector('.dropdown_input')

      if (!selectEls.includes(el.innerText.toLowerCase())) {
        selectEls.push(el.innerText.toLowerCase())
      }

      displayTag(selectEls)

      selectEls = deleteTag(selectEls)
      CloseDropDown(e)
      let recipes = await FetchData()

      filterTags = SearchTag(selectEls, recipes)

      input.value = ''

      ManageTags()
    })
  })
  return filterTags
}

const displayTag = (elArray) => {
  const tag = document.querySelector('.tag')
  tag.innerHTML = ''
  elArray.forEach((el) => DisplayTags(el))
}

const deleteTag = (elArray) => {
  const tags = document.querySelector('.tags')
  const deleteBtn = tags.querySelectorAll('.fa-xmark')

  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const tag = e.target.parentElement.parentElement
      const el = btn.parentElement.parentElement
        .querySelector('.tag_name')
        .innerText.toLowerCase()
      const index = elArray.indexOf(el)
      elArray.splice(index, 1)
      let recipes = await FetchData()
      filterTags = SearchTag(selectEls, recipes)
      tag.remove()

      ManageTags()
    })
  })
  return elArray
}

export { ManageTags }
