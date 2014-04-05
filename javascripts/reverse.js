(function() {
  var $body, $reverse;

  $body = $('body');

  $reverse = $body.find('.reverse-btn');

  $reverse.on('click', function() {
    var $item, $wrapper;

    $wrapper = $body.find('.reversible');
    $item = $wrapper.find(' > *');
    $wrapper.toggleClass('reversed').html($item.get().reverse());
    return $('img.lazy').lazyload({
      effect: 'fadeIn'
    });
  });

}).call(this);
