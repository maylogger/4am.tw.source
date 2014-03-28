var off_canvas = function (){

  $(".toggle-menu-btn, .story.btn").on("click", function(event){
    $("body").toggleClass("open-menu");
    event.preventDefault();
  });
};

off_canvas();
