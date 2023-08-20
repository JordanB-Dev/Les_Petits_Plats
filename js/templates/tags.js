const DisplayTags = (el) => {
  const tags = document.querySelector('.tag')
  const div = document.createElement('div')
  div.classList.add(`tag_container`)
  tags.appendChild(div)

  const tag = document.createElement('p')
  tag.classList.add('tag_name')
  tag.innerText = el.charAt(0).toUpperCase() + el.slice(1)
  div.appendChild(tag)

  const close = document.createElement('span')
  close.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  close.classList.add('tag_delete')
  div.appendChild(close)

  return tags
}

export { DisplayTags }
