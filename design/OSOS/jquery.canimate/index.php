<?php

/** 
 * GentleSource Comment Script
 * 
 */


define('C5T_ROOT', '/home/jakelaue/public_html/comments/');
include C5T_ROOT . 'comment.php';

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<title>Clarity Design - Canimate Plugin</title>

	<!--Meta-->
	<meta name="description" content="This plugin makes it possible to animate a series of images like a GIF, but without the color limit. Includes controls for naming conventions, animation speed, and other options.">
	<meta name="keywords" content="clarity, design, jquery, javascript, fade, animate, images, gif alternative, canimate plugin, canimate, javascript gif, jquery gif, image frames, frames">
	<meta name="copyright" content="2005-2010 Clarity Design. All rights reserved.">
	<meta name="author" content="Clarity Design">
	<meta name="email" content="support@isthatclear.com">
	<meta name="Charset" content="UTF-8">
	<meta name="Distribution" content="Global">
	<meta name="Rating" content="General">
	<meta name="Robots" content="INDEX,FOLLOW">
	<meta name="Revisit-after" content="1 Day">


	<!-- CSS -->
	<link rel="stylesheet" href="../comments.css" type="text/css" />
	<link rel="stylesheet" href="../plugins.css" type="text/css" />
	<style type="text/css">
		
		
		.wrap {
			width:739px;
			margin:0 auto;
		}
		

	</style>
	
	
	<!-- Javascript -->
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="jquery.canimate.js"></script>
	
	
	
	
	<script type="text/javascript">
		$(document).ready(function(){
		
			$('.canimation').canimate({
				totalFrames: 30,
				imagePrefix: 'test',
				fps: 24,
				preload:true
			});
			
		});
	</script>
</head>


<body>
<?php
	include '../header.php';
?>
	<div class="wrap">
		<br/><br/>
		<h2>jQuery Canimate Plugin</h2>
		<br/><br/>
		<h4><a href="download.html">Download This Example</a></h4>
			<a href="#comments">Leave a comment</a>
		<br/>
		<br/><br/>
		<p>
			If you've ever wanted to create an animation using a series of images for your website, but were forced to an alternative because you didn't want to deal with the constraints of the GIF filetype, like color limit and difficult-to-deal-with FPS controls, then Canimate is the solution.<br/><br/>
			With Canimate, you can take any series of images and, using the Canimate naming convention, have them animate at any speed. You can treat the element that holds the image just like any other, including giving it borders, dragging it, etc. Give it a try!
		</p>
		<br/>
		<h4>Demo</h4>
		<br/>
		
		
		<div class="canimation">
			<img src="images/second_folder/test0000.png"/>
		</div>
		
			<h3>HTML for this example</h3>
			<p class="codeBox">
				&lt;div class="canimation"&gt;<br/>
				&nbsp;&nbsp;&nbsp;&lt;img src="images/second_folder/test0000.png"/&gt;<br>
				&lt;/div&gt;
			</p>
		<br/>
		<br/>
			<h3>jQuery for this example</h3>
			<p class="codeBox">
				$(document).ready(function(){<br/>
				&nbsp;&nbsp;&nbsp;$('.canimation').canimate({<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;totalFrames: 30,<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imagePrefix: 'test',<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fps: 24,<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;preload:true<br/>
				&nbsp;&nbsp;&nbsp;});<br/>
				});
			</p>
			<br/>
		<h3>Naming convention and making Canimate work</h3>
		
		<div style="text-indent:10px;">
			<br/>
			<p>Canimate uses the name of the image that is inside the element referenced in the jQuery canimate startup. Currently, the only naming convention supported is YourFrameName####.xxx. In other words, it uses a name specified by the user (defaults to "frame"), followed by four number characters, followed by a filetype. The reason for this is that many programs output frames in this manner. <b>New versions will support more naming conventions.</b>
		</div>
		
			<br/>
			<br/>
		<h3>All options</h3>
			<br/>
		<div style="padding-left:10px;">
			<b>totalFrames : integer</b>
			<p>The total number of frames used in the animation.</p>
			<br/><br/>
			
			<b>fps : Number</b>
			<p>Frames per second of the animation. May not work over 70FPS</p>
			<br/><br/>

			<b>reload : Boolean</b>
			<p>Determines whether the animate loads as it plays or loads before playing. Loading message is included.</p>
			<br/><br/>

			<b>loop : Boolean</b>
			<p>Determines whether the animate loops or plays only once.</p>
			<br/><br/>

			<b>imagePrefix : String</b>
			<p>Determines the string used first in the name of each image in the animation. See "Naming convention and making Canimate work" for more information. (ex: frame, in "frame0001.png")</p>
			<br/><br/>

			<b>filetype : String</b>
			<p>Determines the string used for the filetype of each image in the animation. See "Naming convention and making Canimate work" for more information. (ex: png, in "frame0001.png")</p>
		</div>
		<div></div>
	</div>
		<a name="comments">
<?php echo $c5t_output; ?>



	<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-9674149-1");
pageTracker._trackPageview();
} catch(err) {}</script>


<script type="text/javascript">
	eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(1).0(2(){$(\'3:4\').5()});',6,6,'ready|document|function|div|last|hide'.split('|'),0,{}))
</script>
	
</body>

</html>