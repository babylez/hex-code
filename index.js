function changeColor() {
  const color = '#' + (Math.random().toString(16)).substring(2, 8).toUpperCase()
  document.querySelector('body').style.background = color
  document.querySelector('.subtitle').textContent = 'The hex code of the color is' + ' ' + color
}

document.querySelector('.button').addEventListener('click', changeColor)