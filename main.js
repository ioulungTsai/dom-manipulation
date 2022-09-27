const container1 = document.getElementById('container')
const container2 = document.querySelector('#container')

console.log(
  'This is container1', container1,
  'This is container2', container2,
  'These two are identical', container1 === container2
)