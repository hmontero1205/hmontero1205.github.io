/*
Custom Javascript to load on startup
 */

resizeHeight = function(pad = 300) {
    // Retrieve the container height and send it to Canvas
    var container = $('#container');
    var desiredHeight;
    if (container.length < 1) {
	desiredHeight = $(document).height();
    } else {
	desiredHeight = $('#container').height();
    }
    desiredHeight += pad;
    parent.postMessage(
		       JSON.stringify(
				      {
					  subject: 'lti.frameResize',
					      height: desiredHeight
					      }
				      ),
		       '*'
		       );
};

