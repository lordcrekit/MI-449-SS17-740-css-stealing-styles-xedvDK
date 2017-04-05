// Set all elements with class 'ft' to flash every halfsecond.
setInterval(function () {
  var eles = document.getElementsByClassName('ft')
  for (var i = 0; i < eles.length; i++) {
    eles[i].style.color = getRandomColor()
  }
}, 500)

var colors = [
  '#98c379',
  '#56b6c2',
  '#c6ad00',
  '#b400b9',
  '#c62d48'
]
/**
 * Gets a random color.
 */
function getRandomColor () {
  return colors[Math.floor(Math.random() * colors.length)]
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
