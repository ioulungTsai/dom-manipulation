const container = document.getElementById('container')
const div = document.createElement('div')
const h1Tag = document.createElement('h1')
const h3Tag = document.createElement('h3')

function createPTag(color, text) {
  const pTag = document.createElement('p')
  pTag.style.color = color
  pTag.textContent = text
  return pTag
}

const p1 = createPTag('red', `Hey I'm red!`)
const p2 = createPTag('black', `ME TOO!`)
const p3 = createPTag(
  'black',
  `Hint for this one: after creating the <div> with createElement,
  append the <h1> and <p> to it before adding it to the container.`
)

h3Tag.style.color = 'blue'
h3Tag.textContent = `I'm a blue h3!`

div.style.backgroundColor = 'pink'
div.style.border = '1px solid black'

h1Tag.textContent = `I'm in a div`

container.appendChild(p1)
container.appendChild(h3Tag)

div.appendChild(h1Tag)
div.appendChild(p2)
div.appendChild(p3)
container.appendChild(div)