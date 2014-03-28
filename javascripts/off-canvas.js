var off_canvas = function (){

  $(".off-canvas-toggle-btn").on("click", function(event){
    $("body").toggleClass("open-menu");
    event.preventDefault;
  });

  $(".outside a, .off-canvas-mask").on("click", function(){
    $("body").removeClass("open-menu");
  });
};

off_canvas();
