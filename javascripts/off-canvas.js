var off_canvas = function (){

  $(".off-canvas-toggle-btn, .main-nav a").on("click", function(event){
    $("body").toggleClass("open-menu");
  });
};

off_canvas();
