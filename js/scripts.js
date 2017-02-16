(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function() {
  var body = $('body');
 
  var btnSearch = $('#button-search');

    btnSearch.on('click', function(e) {
     if(!body.hasClass('search-open')) {
          e.preventDefault();
          body.addClass('search-open');
      }
    });

    $(document).click(function(event) {
      if(body.hasClass('search-open')) {
        if (!$(event.target).closest('.search-form').length) {
          body.removeClass('search-open');
        }
      }
    });
    

  $("#main_carousel").owlCarousel({
      thumbs: false,
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1, 
      loop: true,
      nav: true,
      navText: ['<span class="glyphicon glyphicon-chevron-left nav_left"></span>','<span class="glyphicon glyphicon-chevron-right nav_right"></span>'],
      responsive : {
        // breakpoint from 0 up
        0 : {
            autoplay: false,
            nav: false,
        },

        // breakpoint from 768 up
        768 : {
            autoplay: true,
        }
      }
  });

  var owl;

  owl = $("#sub_carousel");

  owl.owlCarousel({
      slideSpeed: 300,
      paginationSpeed: 400,
      items: 1,
      loop: true,
      nav: true,
      navText: ['<span class="glyphicon glyphicon-chevron-left nav_left"></span>','<span class="glyphicon glyphicon-chevron-right nav_right"></span>'],
      thumbs: true,
      thumbsPrerendered: true
  });

  $('#carousel-thumbs').owlCarousel({
    thumbs: false,
    thumbsPrerendered: false,
    dots : false,
    nav: false,
    items : 7,
  });


  $('#sub_carousel .item a').on('click', function() {
   

    var theSrc = $(this).find('img').attr('src');
    var owlModal = $('#owl-modal');
    owlModal.empty();
    var item = $('<div>', {'class' : 'item'}).appendTo(owlModal);
    $('<img>', {'src' : theSrc}).appendTo(item);
  });

  var newsnav = $(".customNavigation-news");

  $('#news-carousel-js').owlCarousel({
    thumbs: false,
    loop:true,
    margin:10,
    nav:true,
    navContainer: newsnav,
    navText: ['<img src="assets/images/arrow-left-yellow.png">','<img src="assets/images/arrow-right-yellow.png">'],
    responsive : {
        // breakpoint from 0 up
        0 : {
            items: 1,
        },

        // breakpoint from 768 up
        480 : {
            items: 2,
        }
      }
  });

  var edinav = $(".customNavigation-edi");

  $('#editorials-carousel-js').owlCarousel({
    thumbs: false,
    loop:true,
    margin:10,
    nav:true,
    navContainer: edinav,
    navText: ['<img src="assets/images/arrow-left-brown.png">','<img src="assets/images/arrow-right-brown.png">'],
    items: 1,
  });

   var localnav = $(".customNavigation-loc");

  $('#local-news-carousel-js').owlCarousel({
    thumbs: false,
    loop:true,
    margin:10,
    nav:true,
    navContainer: localnav,
    navText: ['<img src="assets/images/arrow-left-brown.png">','<img src="assets/images/arrow-right-brown.png">'],
    items: 1,
  });

    /* Mobile nav */
   $('.nav-icon-js').click(function() {
        var nav = $('.navbar-nav-js');
        var icon = $('.nav-icon-js i');
        
        body.toggleClass("nav-xs-open");
        
        if (icon.hasClass('glyphicon-menu-hamburger')) {
            icon.addClass('glyphicon-remove');
            icon.removeClass('glyphicon-menu-hamburger');
        } else {
            icon.addClass('glyphicon-menu-hamburger');
            icon.removeClass('glyphicon-remove');
        }
        
    });

});
 
