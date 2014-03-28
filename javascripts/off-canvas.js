var off_canvas = function (){

  $(".off-canvas-toggle-btn, .story.btn").on("click", function(event){
    $("body").toggleClass("open-menu");
  });
};

off_canvas();
