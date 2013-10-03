$.fn.janalytics = function( options ) {
  var settings = $.extend({
          setAccount: "",
          tag: "body",
          selector : ".trueLink",
          newRelease : true
        }, options );

  function analytics(category, action, label){
    if(!settings.newRelease){
      _gaq.push(['_trackEvent', category, action, label]);
    }else{
      ga('send', 'event', category, action, label);
    }
  }

  //if you have the older code like this set false for the newRelease
  if (!settings.newRelease) {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', settings.setAccount]);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  }else{
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

    ga('create', settings.setAccount, window.location.hostname);
    ga('send', 'pageview');
  }

  $(settings.tag).on('click', settings.selector , function(event) {
    event.preventDefault();
    analytics(this.getAttribute("data-category"),this.getAttribute("data-action"), this.getAttribute('data-label'));
  });
};