var setAccout = 'UA-28339293-1';

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', setAccount]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


  $('li, a').on('click', '.trueLink', function(event) {
  	analytics($(this));
  });


  function analytics(element){
  	_gaq.push(['_trackEvent', element.attr('data-category'), element.attr('data-action'), element.attr('data-label')]);
  }