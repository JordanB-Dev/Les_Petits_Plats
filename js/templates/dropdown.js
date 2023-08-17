const DropdownLi = (el, option) => {
  const dropdownOption = document.querySelector(`.${option}_options`)
  const li = document.createElement('li')
  li.classList.add(`${option}_li`, 'dropdown_li')
  li.innerText = el.charAt(0).toUpperCase() + el.slice(1)
  dropdownOption.appendChild(li)
  return dropdownOption
}

export { DropdownLi }
