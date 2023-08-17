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

export { OpenDropDown, InitDropDownArrow }
