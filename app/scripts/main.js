
$(function () {
  var prefinery_form_url =
    'https://' + Prefinery.konfig.account +
    '.prefinery.com/betas/' + Prefinery.konfig.beta_id +
    '/testers/new?display=popup&version=' + Prefinery.konfig.version;

  $(document).on('click', '.show-prefinery-form', function () {
    Prefinery.show(url);
  });

  $('.dropdown ul li').click(function() {
    var text = $(this).html();
    $('#dLabel').html(text);
  });
})
