// ==UserScript==
// @name           ResetLove
// @namespace      http://www.grinnellplans.com
// @description    Resets all planlove values
// @include        http://www.grinnellplans.com/search.php?mysearch=*&planlove=1*
// @match          http://www.grinnellplans.com/search.php?mysearch=*&planlove=1*
// ==/UserScript==

// credit Joe Simmons http://greasefire.userscripts.org/users/JoeSimmons
var isGM = (typeof getValue != 'undefined' && typeof getValue('a', 'b') != 'undefined'),
getValue = (isGM ? getValue : (function(name, def) {var s=localStorage.getItem(name); return (s=="undefined" || s=="null") ? def : s})),
setValue = (isGM ? setValue : (function(name, value) {return localStorage.setItem(name, value)})),
deleteValue = (isGM ? GM_deleteValue : (function(name, def) {return localStorage.setItem(name, def)}));

// We need to determine the username. Let's make a guess based on
// the current url of the page.
var urly = window.location.href;
var startIndex = urly.indexOf("mysearch=") + 9;
var endIndex = urly.indexOf("&", startIndex);
var guessUsername = urly.substring(startIndex, endIndex);

deleteValue("username", "");
deleteValue("planloveHash" + guessUsername, "");