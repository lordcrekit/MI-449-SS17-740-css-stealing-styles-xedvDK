var start = 'https://lmgtfy.com?'
var engines = ['', 's=b&', 's=y&', 's=a&', 's=k&', 's=d&']
var searchterm = 'q='

var search = function search (e) {
  var engine = engines[Math.floor(Math.random() * engines.length)]
  var query = document.getElementById('searchbar').value
  if (!query || query.trim().length == 0) {
    window.alert('You must specify a search!')
    return
  } else {
    query = query.trim()
  }

  var s = start + engine + searchterm + query

  window.location.href = s
}
