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

var banana =
  '' +
  '\n' +
  '🍌🍌🍌🍌🍌\n' +
  '❖2022\n' +
  '↓　黃國昌\n' +
  '↓\n' +
  '❖2023\n' +
  '↓　白國昌\n' +
  '↓\n' +
  '❖2024\n' +
  '↓　藍國昌\n' +
  '↓\n' +
  '❖2025\n' +
  '↓　紅國昌\n' +
  '↓\n' +
  '❖????\n' +
  '🍌🍌🍌🍌🍌\n' +
  '\n' +
  ''
console.log(banana)
