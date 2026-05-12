$(document).ready(function () {
  
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bauncein",
        },
        out:{
            effect: "baunceout",
        },
    });

});