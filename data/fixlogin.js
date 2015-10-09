/*
 * Find the login button (by class), detach event handlers and replace them with a simple redirect to homepage.
 */

// $('.signup_login_buttons').remove();
var login = document.getElementsByClassName('signup_login_buttons');
if (login.length > 0)
{
	/* Cloning the button didn't work; fade event kept being attached and overruled my event... So: custom button! */
	var cln = document.createElement('div');
	cln.style.float = 'right';
	cln.style.fontSize = '14px';
	cln.style.fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif'; 
	var btn = document.createElement('a');
	btn.href = '/';
	btn.style.display = 'inline-block';
	btn.style.backgroundColor = 'white';
	btn.style.color = 'black';
	btn.style.padding = '3px 7px 4px';
	btn.style.border = '1px solid #cbcbd8';
	btn.style.borderRadius = '3px';
	btn.style.margin = '10px 0 0 10px';
	btn.style.cursor = 'pointer';
	btn.appendChild(document.createTextNode('Sign in'));
	cln.appendChild(btn);
	var nw = login[0].parentNode.replaceChild(cln, login[0]);
}


