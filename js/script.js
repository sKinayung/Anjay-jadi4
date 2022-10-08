// event pada saat link di klik 

 $('.page-scroll').on('click', function(e) {

// ambil isi href

 var tujuan = $(this).attr('href');

// tangkap elemen ybs
 var elemenTujuan = $(tujuan);
// pindahkan scroll
 $('html, body').animate({
  scrollTop: elemenTujuan.offset().top -50
 });

 e.preventDefault();

});

// parallax effect

// about

 $(window).on('load', function() {
  $('.pl').addClass('satset');
  $('.pr').addClass('satset');
 });

// jumbotron

 $(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
   'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  })

  $('.jumbotron h1').css({
   'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
  })

  $('.jumbotron p').css({
   'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
  })

// portfolio (landing elements)

  if( wScroll > $('.portfolio').offset().top - 250) {
   $('.portfolio .thumbnail').each(function(i) {
    setTimeout(function() {

    $('.portfolio .thumbnail').eq(i).addClass('un-hide');
    }, 500 * (i+1));
   });
   
   
  }
 });