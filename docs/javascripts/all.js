// 移動 dom
// $( ".main-nav ul" ).appendAround();

// scrollable
var scrollable = document.getElementById('scrollable')
new ScrollFix(scrollable)

// image lazyload
// $("img.lazy").lazyload();
$('img.lazy').lazyload({
  effect: 'fadeIn',
})

$(document).on('click', '.copy-share-btn', function (e) {
  e.preventDefault()
  var btn = $(this)
  var text = btn.data('share')
  var copiedLabel = btn.data('copied')
  var originalLabel = btn.text()
  navigator.clipboard.writeText(text).then(function () {
    btn.text(copiedLabel)
    setTimeout(function () {
      btn.text(originalLabel)
    }, 3000)
  })
})
