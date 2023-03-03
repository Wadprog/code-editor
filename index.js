function update(text) {
  let result_element = document.querySelector('#highlighting-content')
  // Handle final newlines (see article)
  if (text[text.length - 1] == '\n') {
    text += ' '
  }
  // Update code
  result_element.innerHTML = text
  Prism.highlightElement(result_element)
}

function sync_scroll(element) {
  /* Scroll result to scroll coords of event - sync with textarea */
  let result_element = document.querySelector('#highlighting')
  // Get and set x and y
  result_element.scrollTop = element.scrollTop
  result_element.scrollLeft = element.scrollLeft
}
