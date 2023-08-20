const InitDropDownArrow = () => {
  OpenDropDown('ingredients')
  OpenDropDown('apparels')
  OpenDropDown('ustensils')
}

const OpenDropDown = (option) => {
  const li = document.querySelector(`.${option} .dropdown_list`)
  const btn = document.querySelector(`.${option} .dropdown_buttom`)
  if (btn) {
    btn.addEventListener('click', () => {
      const content = document.querySelector(`.${option} .dropdown_content`)
      if (li.classList.contains('dropdown_open')) {
        content.querySelector('i').classList.toggle('fa-chevron-up')
        content.querySelector('i').classList.toggle('fa-chevron-down')
        li.classList.toggle('dropdown_close')
        li.classList.toggle('dropdown_open')
      } else {
        content.querySelector('i').classList.toggle('fa-chevron-down')
        content.querySelector('i').classList.toggle('fa-chevron-up')
        li.classList.toggle('dropdown_close')
        li.classList.toggle('dropdown_open')
      }
    })
  }
}

const CloseDropDown = (e) => {
  const li = e.target.parentElement.parentElement
  const i = e.target.parentElement.parentElement.parentElement
  i.querySelector('i').classList.toggle('fa-chevron-up')
  i.querySelector('i').classList.toggle('fa-chevron-down')
  li.classList.add('dropdown_close')
  li.classList.remove('dropdown_open')
}

export { OpenDropDown, CloseDropDown, InitDropDownArrow }
