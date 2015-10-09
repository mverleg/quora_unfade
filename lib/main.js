// Import the page-mod API & file loader
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

// see https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm

// Quora overlay and registration
pageMod.PageMod({
	include: "*.quora.com",
	contentScriptWhen: "start",
	contentStyle: '.modal_signup_background, .dialog_wrapper { display: none; }'
});

// Quora fix login button broken by above
pageMod.PageMod({
	include: "*.quora.com",
	contentScriptWhen: "ready",
	contentScriptFile: [
		data.url('fixlogin.js')
	]
});


