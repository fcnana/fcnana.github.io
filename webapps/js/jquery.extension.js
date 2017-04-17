/*! Extension Library - v1.0.0 - 04/07/2017
 * (c) Yuhei Nakamura */
var $x = function(arg1, arg2) {
	var jqo = $(arg1, arg2);

	return jqo;
}

$x.log = function(message) {
	console.log(message);
}

$x.loading = function() {
	$("div[name='blocking-overlay']").popup("open");
	$.mobile.loading("show", {
		text: "loading...",
		textVisible: true,
		textonly: false
	});
	setTimeout(function() {
		$.mobile.loading("hide");
		$("div[name='blocking-overlay']").popup("close");
	}, 3000);
}

$(function() {
	$("div[data-role='page']").each(function() {
		$("<div></div>", {
			"data-role": "popup",
			"name": "blocking-overlay",
			"data-overlay-theme": "b",
			"data-dismissible": false
		}).appendTo($(this));
		$(this).enhanceWithin();
	});
});
