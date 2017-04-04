

setInterval(function() {
  var eles = document.getElementsByClassName('cb')
  for (var i = 0; i < eles.length; i++) {
    var c = getRandomColor()
    var w = 3
    var ed = '-'+w+'px 0 '+c+', 0 '+w+'px '+c+', '+w+'px 0 '+c+', 0 -'+w+'px '+c
    eles[i].style["text-shadow"]=ed
  }
}, 500)
