// $(document).ready(function(){

//     $('.offerItemTitle').click(function(){

//       $(this).parents('.offerslide').children('.offerItem').removeClass('active');
//       $(this).parents('.offerslide').children('.offerItem').children('.offerItemTitle').removeClass('hide');
//       $(this).parent('.offerItem').addClass('active');
//       $(this).addClass('hide');

//     });
// });


$(document).ready(function(){

  $('.offerItem').click(function(){

    $('.offerItem').removeClass('active');
    $('.offerItemTitle').removeClass('hide');
    $(this).addClass('active');
    $(this).children('.offerItemTitle').addClass('hide');
  });
});