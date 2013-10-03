Janalytics V0.1 - Beta
======================

Little jQuery plugin to create custom event for Google Analytics dashboard.

Basic Usage
===========

Janalytics is a simple way to create an event on an element. You can use a link for the element, but you can also use it on any element you want.

	<a href="#" class="trueLink" data-category="Social" data-action="Facebook" data-label="Facebook page">Alert</a>

This a basic kind of link that you can use with this plugin.
You have a class to control wich link you want to target and 3 data-attribute : 

data-category for the category of your event
data-action for the action of your event
data-label for the label of your event

It's quite simple, no?

Now the javascript
------------------

Basic
-----

````javascript
$('body').janalytics();
````

With argument
-------------

````javascript
$('body').janalytics({
	setAccount: "", // put your Google Analytics account tracker ID
    tag: "body", // Select the parent, heare I use the body, simple
    selector : ".trueLink", // the classe of the selector of your link (can be class, ID, whatever)
    newRelease : true // this is something you need to be careful
});
````

newRelease : You need to be careful, Google changer the javascript code to put on your website, if you haven't create your analytics account, you probably have the new code, so don't touch the value. If not, juste check if you have a code like this :

````javascript
var _gaq = _gaq || [];
_gaq.push(['_setAccount', settings.setAccount]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
````

set the value of newRelease to false and GA will work with the old code.

Next step
---------

Improvement of the code
If you have any suggestions : hoshi.graphi@gmail.com