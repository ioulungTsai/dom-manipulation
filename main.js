const container = document.getElementById('container')
const pTag = document.createElement('p')

pTag.style.color = 'red'
pTag.textContent = `Hey I'm red!`

container.appendChild(pTag)