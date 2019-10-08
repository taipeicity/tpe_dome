(function(Handlebars, jQuery) {
  var $ = jQuery, Handlebars = Handlebars;

  //var template = $('#template').html();
  //var templateScript = Handlebars.compile(template);

  //Handlebars.registerPartial('footer_partial', footer_str);
  //var data = { "test": "test template" };
  //var html = templateScript();
  //$(document.body).html(html);

  // auto fill seq. num
  $('.serial-table > tbody > tr').each(function(idx, elm) {
    $(elm).children('td').first().text(idx + 1);
  });

  $(document).ready(function () {
    // add gotop div
    $('.footer').after('<div class="scrollup"><span class="glyphicon glyphicon-arrow-up"></span></div>');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });

    $("body").on('click', '.scrollup', function () {
      var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
      if (iOS) {
        $("html, body", parent.document).animate({
          scrollTop: 0
        }, 800);
      }
      else {
        $("html, body").animate({
          scrollTop: 0
        }, 800);
      }
    });
  });
})(Handlebars, jQuery)

