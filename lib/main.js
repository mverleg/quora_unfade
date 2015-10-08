// Import the page-mod API
var pageMod = require("sdk/page-mod");

// see https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm

// Quora overlay and registration
pageMod.PageMod({
	include: "*.quora.com",
	contentScriptWhen: "start",
	contentStyle: '.modal_signup_background, .dialog_wrapper { display: none; }'
});

//


