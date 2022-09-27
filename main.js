const container = document.getElementById('container')
const pTag = document.createElement('p')
const h3Tag = document.createElement('h3')

pTag.style.color = 'red'
pTag.textContent = `Hey I'm red!`

h3Tag.style.color = 'blue'
h3Tag.textContent = `I'm a blue h3!`

container.appendChild(pTag)
container.appendChild(h3Tag)