/*! Extension Library - v1.0.0 - 04/07/2017
 * (c) Yuhei Nakamura */
var $x = function(arg1, arg2) {
	var jqo = $(arg1, arg2);

	return jqo;
}

$x.log = function(message) {
	console.log(message);
}

$x.showLoading = function() {
	$("div[name='blocking-overlay']").popup("open");
	$.mobile.loading("show", {
		text: "loading...",
		textVisible: true,
		textonly: false
	});
}

$x.hideLoading = function() {
	$.mobile.loading("hide");
	$("div[name='blocking-overlay']").popup("close");
}

$x.ajax = function(url, data, callback) {
	$.ajax({
		type: "POST",
		url: url,
		data: data,
		dataType: "jsonp",
		beforeSend: function(jqXHR) {
			$x.showLoading();
		}
	}).done(function(data, textStatus, jqXHR) {
		callback(data);
	}).always(function(jqXHR, textStatus) {
		$x.hideLoading();
	});
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
