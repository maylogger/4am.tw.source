// 移動 dom
// $( ".main-nav ul" ).appendAround();


// scrollable
var scrollable = document.getElementById("scrollable");
new ScrollFix(scrollable);


// image lazyload
// $("img.lazy").lazyload();
$("img.lazy").lazyload({
    effect : "fadeIn"
});
