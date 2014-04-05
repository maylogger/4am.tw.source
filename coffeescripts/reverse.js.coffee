$body     = $('body')
$reverse  = $body.find('.reverse-btn')

$reverse.on 'click', ->
  $wrapper = $body.find('.reversible')
  $item    = $wrapper.find(' > *')
  $wrapper.toggleClass('reversed').html $item.get().reverse()
  $('img.lazy').lazyload {effect: 'fadeIn'}