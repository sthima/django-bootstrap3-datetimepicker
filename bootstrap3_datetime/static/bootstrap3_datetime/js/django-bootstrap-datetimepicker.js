(function($) {
  if($.djangoBootstrapDatetimepickerInitialized){
    return;
  }
  var initialize = function (i, elem) {
    var options = $('script[datetimepicker-options]', elem)[0].innerHTML;
    options = JSON.parse(options);
    console.log(options);
    console.log(elem);
    $(elem).datetimepicker(options);
  }
  var callback = function() {
    $("[django-bootstrap-datetimepicker]:has(input:not([readonly],[disabled]))").each(initialize);
    return true;
  };
  $(document).ready(callback);
  $(document).bind('shown.bs.modal', callback);
  $(document).bind('DOMNodeInserted', function(e){
    $(e.target).find('[django-bootstrap-datetimepicker]:has(input:not([readonly],[disabled]))').each(initialize);
  });
  $.djangoBootstrapDatetimepickerInitialized = true;
})(jQuery);
