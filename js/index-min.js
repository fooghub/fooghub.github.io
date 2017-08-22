/*! JavaScript para fooghub.github.io |Archivo: index-min.js|Autor: Foog.Software| **Dependencias:  modernizr.js, bowser.js y smoothScroll** 
//
/*! modernizr 3.5.0 (Custom Build) | MIT ** https://modernizr.com/download/?-borderradius-boxshadow-boxsizing-classlist-csscalc-csstransforms-csstransitions-generatedcontent-opacity-queryselector-rgba-textshadow-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,a;for(var l in b)if(b.hasOwnProperty(l)){if(e=[],t=b[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),x.push((s?"":"no-")+a.join("-"))}}function o(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?S.className.baseVal=t:S.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(w?"svg":"body"),e.fake=!0),e}function l(e,n,r,s){var o,l,u,d,f="modernizr",c=i("div"),p=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=s?s[r]:f+(r+1),c.appendChild(u);return o=i("style"),o.type="text/css",o.id="s"+f,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=d,S.offsetHeight):c.parentNode.removeChild(c),!!l}function u(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],r(s,"function")?f(s,n||t):s);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function y(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+p(t[s])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function g(e,t,s,o){function a(){f&&(delete k.style,delete k.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var l=y(e,s);if(!r(l,"undefined"))return l}for(var f,c,p,m,g,v=["modernizr","tspan","samp"];!k.style&&v.length;)f=!0,k.modElem=i(v.shift()),k.style=k.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],g=k.style[m],u(m,"-")&&(m=d(m)),k.style[m]!==n){if(o||r(s,"undefined"))return a(),"pfx"==t?m:!0;try{k.style[m]=s}catch(h){}if(k.style[m]!=g)return a(),"pfx"==t?m:!0}return a(),!1}function v(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?g(a,t,s,o):(a=(e+" "+E.join(i+" ")+i).split(" "),c(a,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var x=[],b=[],C={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t);var S=t.documentElement;Modernizr.addTest("classlist","classList"in S);var w="svg"===S.nodeName.toLowerCase();Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var T=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=T,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=i("a");return n.style.cssText=e+T.join(t+e),!!n.style.length}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=T.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var _=C.testStyles=l;_('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)});var z="Moz O ms Webkit",P=C._config.usePrefixes?z.split(" "):[];C._cssomPrefixes=P;var E=C._config.usePrefixes?z.toLowerCase().split(" "):[];C._domPrefixes=E;var j={elem:i("modernizr")};Modernizr._q.push(function(){delete j.elem});var k={style:j.elem.style};Modernizr._q.unshift(function(){delete k.style});var A=C.testProp=function(e,t,r){return g([e],n,t,r)};Modernizr.addTest("textshadow",A("textShadow","1px 1px")),C.testAllProps=v,C.testAllProps=h,Modernizr.addTest("borderradius",h("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",h("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",h("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",h("transition","all",!0)),s(),o(x),delete C.addTest,delete C.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);
//
/*! bowser - a browser detector | https://github.com/ded/bowser  MIT License | (c) Dustin Diaz 2015| With some modifications and additions by (c) 2017 Foog.Software | MIT License.*/
!function(m,k,l){"undefined"!==typeof module&&module.exports?module.exports=l():"function"===typeof define&&define.amd?define(k,l):m[k]=l()}(this,"bowser",function(){function m(b){function c(a){return(a=b.match(a))&&1<a.length&&a[1]||""}function h(a){return(a=b.match(a))&&1<a.length&&a[2]||""}function w(a){switch(a){case "NT":return"NT";case "XP":return"XP";case "NT 5.0":return"2000";case "NT 5.1":return"XP";case "NT 5.2":return"2003";case "NT 6.0":return"Vista";case "NT 6.1":return"7";case "NT 6.2":return"8";
case "NT 6.3":return"8.1";case "NT 10.0":return"10"}}var g=c(/(ipod|iphone|ipad)/i).toLowerCase(),d=!/like android/i.test(b)&&/android/i.test(b),l=/nexus\s*[0-6]\s*/i.test(b),m=!l&&/nexus\s*[0-9]+/i.test(b),a=/CrOS/.test(b),k=/silk/i.test(b),n=/sailfish/i.test(b),q=/tizen/i.test(b),r=/(web|hpw)os/i.test(b),t=/windows phone/i.test(b);/SamsungBrowser/i.test(b);var e=!t&&/windows/i.test(b),x=!g&&!k&&/macintosh/i.test(b),y=!d&&!n&&!q&&!r&&/linux/i.test(b),p=c(/edge\/(\d+(\.\d+)?)/i),f=c(/version\/(\d+(\.\d+)?)/i),
u=/tablet/i.test(b)&&!/tablet pc/i.test(b),v=!u&&/[^-]mobi/i.test(b),z=/xbox/i.test(b);/opera/i.test(b)?a={name:"Opera",opera:!0,version:f||c(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr|opios/i.test(b)?a={name:"Opera",opera:!0,version:c(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||f}:/SamsungBrowser/i.test(b)?a={name:"Samsung Internet for Android",samsungBrowser:!0,version:f||c(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(b)?a={name:"Opera Coast",coast:!0,version:f||c(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:
/yabrowser/i.test(b)?a={name:"Yandex Browser",yandexbrowser:!0,version:f||c(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(b)?a={name:"UC Browser",ucbrowser:!0,version:c(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios | maxthon/i.test(b)?a={name:"Maxthon",maxthon:!0,version:c(/(?:mxios | maxthon)[\s\/](\d+(?:\.\d+)+)/i)}:/avant\sbrowser\)$/i.test(b)?a={name:"Avant Browser ~ Internet Explorer",msie:!0,version:c(/(?:msie)[\s\/](\d+(?:\.\d+)+)/i)}:/dragon/i.test(b)?a={name:"Comodo Dragon",dragon:!0,
version:c(/(?:dragon)[\s\/](\d+(?:\.\d+)+)/i)}:/slimbrowser/i.test(b)?a={name:"SlimBrowser",slimbrowser:!0,version:c(/(?:slimbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(b)?a={name:"Epiphany",epiphany:!0,version:c(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/konqueror/i.test(b)?a={name:"Konqueror",konqueror:!0,version:c(/(?:konqueror)[\s\/](\d+(?:\.\d+)+)/i)}:/netscape/i.test(b)?a={name:"Netscape",netscape:!0,version:c(/(?:netscape)[\s\/](\d+(?:\.\d+)+)/i)}:/^w3m/i.test(b)?a={name:"w3m",w3m:!0,version:c(/(?:w3m)[\s\/](\d+(?:\.\d+)+)/i)}:
/^wget/i.test(b)?a={name:"Wget",wget:!0,version:c(/(?:wget)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(b)?a={name:"Puffin",puffin:!0,version:c(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(b)?a={name:"Sleipnir",sleipnir:!0,version:c(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(b)?a={name:"K-Meleon",kMeleon:!0,version:c(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:t?(a={name:"Windows Phone",windowsphone:!0},p?(a.msedge=!0,a.version=p):(a.msie=!0,a.version=c(/iemobile\/(\d+(\.\d+)?)/i))):
/msie|trident/i.test(b)?a={name:"Internet Explorer",msie:!0,version:c(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:a?a={name:"Chrome",chromeos:!0,chromeBook:!0,chrome:!0,version:c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(b)?a={name:"Microsoft Edge",msedge:!0,version:p}:/vivaldi/i.test(b)?a={name:"Vivaldi",vivaldi:!0,version:c(/vivaldi\/(\d+(\.\d+)?)/i)||f}:n?a={name:"Sailfish",sailfish:!0,version:c(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(b)?a={name:"SeaMonkey",seamonkey:!0,
version:c(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(b)?(a={name:"Firefox",firefox:!0,version:c(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(b)&&(a.firefoxos=!0)):k?a={name:"Amazon Silk",silk:!0,version:c(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(b)?a={name:"PhantomJS",phantom:!0,version:c(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(b)?a={name:"SlimerJS",slimer:!0,version:c(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(b)||
/rim\stablet/i.test(b)?a={name:"BlackBerry",blackberry:!0,version:f||c(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:r?(a={name:"WebOS",webos:!0,version:f||c(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(b)&&(a.touchpad=!0)):/bada/i.test(b)?a={name:"Bada",bada:!0,version:c(/dolfin\/(\d+(\.\d+)?)/i)}:q?a={name:"Tizen",tizen:!0,version:c(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||f}:/qupzilla/i.test(b)?a={name:"QupZilla",qupzilla:!0,version:c(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||f}:/chromium/i.test(b)?
a={name:"Chromium",chromium:!0,version:c(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||f}:/chrome|crios|crmo/i.test(b)?a={name:"Chrome",chrome:!0,version:c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:d?a={name:"Android",version:f}:/safari|applewebkit/i.test(b)?(a={name:"Safari",safari:!0},f&&(a.version=f)):g?(a={name:"iphone"===g?"iPhone":"ipad"===g?"iPad":"iPod"},f&&(a.version=f)):a=/googlebot/i.test(b)?{name:"Googlebot",googlebot:!0,version:c(/googlebot\/(\d+(\.\d+))/i)||f}:{name:c(/^(.*)\/(.*) /),version:h(/^(.*)\/(.*) /)};
!a.msedge&&/(apple)?webkit/i.test(b)?(/(apple)?webkit\/537\.36/i.test(b)?(a.name=a.name||"Blink",a.blink=!0):(a.name=a.name||"Webkit",a.webkit=!0),!a.version&&f&&(a.version=f)):!a.opera&&/gecko\//i.test(b)&&(a.name=a.name||"Gecko",a.gecko=!0,a.version=a.version||c(/gecko\/(\d+(\.\d+)?)/i));a.windowsphone||a.msedge||!d&&!a.silk?a.windowsphone||a.msedge||!g?x?a.mac=!0:z?a.xbox=!0:e?a.windows=!0:y&&(a.linux=!0):(a[g]=!0,a.ios=!0):a.android=!0;e="";a.windows?e=w(c(/Windows ((NT|XP)( \d\d?.\d)?)/i)):a.windowsphone?
e=c(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):a.mac?(e=c(/Mac OS X (\d+([_\.\s]\d+)*)/i),e=e.replace(/[_\s]/g,".")):g?(e=c(/os (\d+([_\s]\d+)*) like mac os x/i),e=e.replace(/[_\s]/g,".")):d?e=c(/android[ \/-](\d+(\.\d+)*)/i):a.webos?e=c(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):a.blackberry?e=c(/rim\stablet\sos\s(\d+(\.\d+)*)/i):a.bada?e=c(/bada\/(\d+(\.\d+)*)/i):a.tizen&&(e=c(/tizen[\/\s](\d+(\.\d+)*)/i));e&&(a.osversion=e);e=!a.windows&&e.split(".")[0];if(u||m||"ipad"===g||d&&(3===e||4<=e&&!v)||a.silk)a.tablet=
!0;else if(v||"iphone"===g||"ipod"===g||d||l||a.blackberry||a.webos||a.bada)a.mobile=!0;a.msedge||a.msie&&10<=a.version||a.yandexbrowser&&15<=a.version||a.vivaldi&&1<=a.version||a.chrome&&20<=a.version||a.samsungBrowser&&4<=a.version||a.firefox&&20<=a.version||a.safari&&6<=a.version||a.opera&&10<=a.version||a.ios&&a.osversion&&6<=a.osversion.split(".")[0]||a.blackberry&&10.1<=a.version||a.chromium&&20<=a.version?a.a=!0:a.msie&&10>a.version||a.chrome&&20>a.version||a.firefox&&20>a.version||a.safari&&
6>a.version||a.opera&&10>a.version||a.ios&&a.osversion&&6>a.osversion.split(".")[0]||a.chromium&&20>a.version?a.c=!0:a.x=!0;return a}function k(b,c){var h=[],d;if(Array.prototype.map)return Array.prototype.map.call(b,c);for(d=0;d<b.length;d++)h.push(c(b[d]));return h}function l(b){var c=Math.max(b[0].split(".").length,b[1].split(".").length);for(b=k(b,function(b){var d=c-b.split(".").length;b+=Array(d+1).join(".0");return k(b.split("."),function(b){return Array(20-b.length).join("0")+b}).reverse()});0<=
--c;){if(b[0][c]>b[1][c])return 1;if(b[0][c]===b[1][c]){if(0===c)return 0}else return-1}}function n(b,c,h){var k=d;"string"===typeof c&&(h=c,c=void 0);void 0===c&&(c=!1);h&&(k=m(h));h=""+k.version;for(var g in b)if(b.hasOwnProperty(g)&&k[g]){if("string"!==typeof b[g])throw Error("Browser version in the minVersion map should be a string: "+g+": "+String(b));return 0>l([h,b[g]])}return c}var d=m("undefined"!==typeof navigator?navigator.userAgent||"":"");d.test=function(b){for(var c=0;c<b.length;++c){var h=
b[c];if("string"===typeof h&&h in d)return!0}return!1};d.isUnsupportedBrowser=n;d.compareVersions=l;d.check=function(b,c,d){return!n(b,c,d)};d._detect=m;return d});
//
/*! Librería JavasCript smoothScroll de Alice Lieutier |  MIT License (MIT) : https://github.com/alicelieutier/smoothScroll */
(function(e,t){"use strict";typeof define=="function"&&define.amd?define(t):typeof exports=="object"&&typeof module=="object"?module.exports=t():e.smoothScroll=t()})(this,function(){"use strict";if(typeof window!="object")return;if(document.querySelectorAll===void 0||window.pageYOffset===void 0||history.pushState===void 0)return;var e=function(e,t){return e.nodeName==="HTML"?-t:e.getBoundingClientRect().top+t},t=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},n=function(e,n,r,i){return r>i?n:e+(n-e)*t(r/i)},r=function(t,r,i,s){r=r||500,s=s||window;var o=s.scrollTop||window.pageYOffset;if(typeof t=="number")var u=parseInt(t);else var u=e(t,o);var a=Date.now(),f=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,15)},l=function(){var e=Date.now()-a;s!==window?s.scrollTop=n(o,u,e,r):window.scroll(0,n(o,u,e,r)),e>r?typeof i=="function"&&i(t):f(l)};l()},i=function(e){e.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var t=document.getElementById(this.hash.substring(1));if(!t)return;r(t,500,function(e){location.replace("#"+e.id)})};return document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll('a[href^="#"]:not([href="#"])'),t;for(var n=e.length;t=e[--n];)t.addEventListener("click",i,!1)}),r});
//
/*! JavaScript para fooghub.github.io |Archivo: index.js|*/
var espera=null,demora=null,retraso=null,intervalo,intervaloDecreciente,contador,anualidadCorriente=(new Date).getFullYear(),formularioActivo="",puntoDeLlamada=0,solicitudAJAX,documentarErrorAJAX=function(a){if(0===arguments.length||null===a||"null"===a)a="";var b=a.toString().substr(0,3),d={400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",
410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Suitable",417:"Expectation Failed",418:"I'm a teapot",419:"I'm a fox",420:"Enhance Your Calm",422:"Unprocessable Entity",423:"Locked",424:"Falied Dependency",425:"Unassigned",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Headers Fileds Too Large",440:"Login Time-out",444:"No Response",449:"The request should be retried after doing the appropriate action",
450:"Blocked by Windows Parental Controls (Microsoft)",451:"Unavailable for Legal Reasons",495:"SSL Certificate Error",496:"SSL Certificate Required",497:"HTTP Request Sent to HTTPS Port",498:"Invalid Token",499:"Client Closed Request",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",
511:"Network Authentication Required",520:"Unknown Error",530:"Site is frozen",521:"Web Server Is Down",522:"Connection Timed Out",523:"Origin Is Unreachable",524:"A Timeout Occurred",525:"SSL Handshake Failed",526:"Invalid SSL Certificate",527:"Railgun Error",598:"Network read timeout error",599:"Network connect timeout error",601:"Access token invalid"};if(d.hasOwnProperty(b))return b+" : "+d[b];if(!1===isNaN(b))return"0"===b&&(b="520"),b+" : Unknown Error";if(""===a)return"520 : Unknown Error"};
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),d=b.length>>>0;if(0===d)return-1;var c=0;1<arguments.length&&(c=Number(arguments[1]),c!=c?c=0:0!=c&&Infinity!=c&&-Infinity!=c&&(c=(0<c||-1)*Math.floor(Math.abs(c))));if(c>=d)return-1;for(c=0<=c?c:Math.max(d-Math.abs(c),0);c<d;c++)if(c in b&&b[c]===a)return c;return-1});
var apalancar=function(a,b){var d=a.className.split(" "),c=d.indexOf(b);0<=c?d.splice(c,1):d.push(b);a.className=d.join(" ")},directorioContenidos={abierto:!1,clic:function(){this.abierto?this.cerrar():this.abrir()},abrir:function(){capacidadesNavegador.propiedades_dom?document.getElementById("pulsador-directorio-contenidos").classList.toggle("cambio-aspecto"):apalancar(document.getElementById("pulsador-directorio-contenidos"),"cambio-aspecto");document.getElementById("directorio-contenidos").style.display=
"block";this.abierto=!0},cerrar:function(){capacidadesNavegador.propiedades_dom?document.getElementById("pulsador-directorio-contenidos").classList.toggle("cambio-aspecto"):apalancar(document.getElementById("pulsador-directorio-contenidos"),"cambio-aspecto");document.getElementById("directorio-contenidos").style.display="none";this.abierto=!1}},seleccionar=function(a){switch(a){case "1":desplazarseHasta("referenciaNw",!0);break;case "2":desplazarseHasta("referenciaAir",!0);break;case "3":desplazarseHasta("referenciaCordova",
!0);break;case "4":cargarFormulario("acerca")}},desplazarseHasta=function(a,b){b=b||!1;var d=!1===isNaN(a)?parseInt(a,10):parseInt(document.getElementById(a).offsetTop,10)-18,c=document.getElementById("contenido");capacidadesNavegador.selector_de_consultas&&"function"===typeof window.smoothScroll||(b=!1);b?window.smoothScroll(d,2E3,function(){visorImagen.abierto?visorImagen.cerrar():directorioContenidos.abierto&&directorioContenidos.cerrar()},c):(document.getElementById("contenido").scrollTop=d,visorImagen.abierto?
visorImagen.cerrar():directorioContenidos.abierto&&directorioContenidos.cerrar())},visorImagen={abierto:!1,matrizCorriente:[],elementoMatrizCorriente:-1,carruselesCargados:[],imagenBaseCargada:!1,elementosCarrusel:0,nombreCarrusel:"",textoPie:"&#160",adaptarImagen:function(a,b,d){a=a||"images/capturas/capturas-imagen-base.png";if(this.abierto&&document.getElementById("visor-imagen-contenido")&&document.getElementById("visor-imagen-carrusel")){var c=parseInt(document.getElementById("visor-imagen-contenido").offsetHeight,
10)/2-parseInt(document.getElementById("visor-imagen-carrusel").height,10)/2;c=6>=c?0:c;"dimensionar"===b?(document.getElementById("visor-imagen-carrusel").style.opacity="0",document.getElementById("visor-imagen-carrusel").src="images/capturas/capturas-imagen-base.png",document.getElementById("visor-imagen-carrusel").style.marginTop="0px",document.getElementById("visor-imagen-pie-texto").innerHTML="&#160;",null!==espera&&clearTimeout(espera),espera=setTimeout(function(){document.getElementById("visor-imagen-carrusel").style.marginTop=
c+"px";document.getElementById("visor-imagen-pie-texto").innerHTML=visorImagen.textoPie;document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor="default";document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.cursor="default";document.getElementById("visor-imagen-carrusel").src=a;document.getElementById("visor-imagen-pie-texto").innerHTML=visorImagen.textoPie;document.getElementById("visor-imagen-carrusel").style.opacity="1"},1E3)):d?(document.getElementById("visor-imagen-carrusel").style.marginTop=
c+"px",contador=1,intervaloDecreciente=setInterval(function(){document.getElementById("visor-imagen-carrusel").style.opacity="1";contador-=.1;0<contador?document.getElementById("visor-imagen-carrusel").style.opacity=contador.toString():(clearInterval(intervaloDecreciente),contador=0,document.getElementById("visor-imagen-carrusel").style.opacity="0",document.getElementById("visor-imagen-carrusel").src=a,intervalo=setInterval(function(){contador+=.1;.9>contador?document.getElementById("visor-imagen-carrusel").style.opacity=
contador.toString():(clearInterval(intervalo),"hidden"===document.getElementById("visor-imagen-carrusel").style.visibility&&(document.getElementById("visor-imagen-carrusel").style.visibility="visible"),document.getElementById("visor-imagen-carrusel").style.opacity="1",document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor="default",document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.cursor="default",document.getElementById("visor-imagen-pie-texto").innerHTML=visorImagen.textoPie)},
50))},50)):(document.getElementById("visor-imagen-carrusel").style.opacity="0",document.getElementById("visor-imagen-carrusel").src=a,document.getElementById("visor-imagen-carrusel").style.marginTop=c+"px",document.getElementById("visor-imagen-carrusel").style.opacity="1",document.getElementById("visor-imagen-pie-texto").innerHTML=visorImagen.textoPie)}},abrir:function(a){restaurarEnfoque();var b="";switch(a){case "cdocs-nw":this.elementosCarrusel=15;this.nombreCarrusel="CDOCS NW ";break;case "reloj-air":this.elementosCarrusel=
23;this.nombreCarrusel="RELOJ AIR ";break;case "cdocs-air":this.elementosCarrusel=22;this.nombreCarrusel="CDOCS AIR ";break;case "reloj-cordova":this.elementosCarrusel=23,this.nombreCarrusel="RELOJ CORDOVA "}for(contador=this.matrizCorriente.length=0;contador<this.elementosCarrusel;contador+=1)b="images/capturas/"+a+"-"+contador+".png",this.matrizCorriente.push(b);(function(b){var c=new Image;this.imagenBaseCargada||(c.src="images/capturas/capturas-imagen-base.png",this.imagenBaseCargada=!0);if(-1===
visorImagen.carruselesCargados.indexOf(a))for(contador=0;contador<b.length;contador+=1)c.src=b[contador];visorImagen.carruselesCargados.push(a)})(visorImagen.matrizCorriente);this.abierto=!0;this.elementoMatrizCorriente=0;null!==retraso&&clearTimeout(retraso);retraso=setTimeout(function(){document.getElementById("visor-imagen").style.visibility="visible";visorImagen.adaptarImagen(visorImagen.matrizCorriente[0],"abrir",!0);visorImagen.textoPie=visorImagen.nombreCarrusel+"<span>&#160;["+(visorImagen.elementoMatrizCorriente+
1)+"/"+visorImagen.elementosCarrusel+"]</span>";document.getElementById("visor-imagen-pie-texto").innerHTML=visorImagen.textoPie},20)},prepararRetroceso:function(){0<visorImagen.elementoMatrizCorriente&&(document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.opacity="1",document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.cursor="pointer")},prepararAvance:function(){visorImagen.elementoMatrizCorriente<visorImagen.matrizCorriente.length-1&&(document.getElementById("visor-imagen-pie-pulsador-derecho").style.opacity=
"1",document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor="pointer")},restaurarRetroceso:function(){document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.opacity="0.8";document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.cursor="default"},restaurarAvance:function(){document.getElementById("visor-imagen-pie-pulsador-derecho").style.opacity="0.8";document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor="default"},avanzar:function(a){visorImagen.elementoMatrizCorriente<
visorImagen.matrizCorriente.length-1&&(document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor="wait",visorImagen.elementoMatrizCorriente+=1,visorImagen.textoPie=visorImagen.nombreCarrusel+"&#160;["+(visorImagen.elementoMatrizCorriente+1)+"/"+visorImagen.elementosCarrusel+"]",visorImagen.adaptarImagen(visorImagen.matrizCorriente[visorImagen.elementoMatrizCorriente],"avance",!1),document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor="default")},retroceder:function(){0<
visorImagen.elementoMatrizCorriente&&(--visorImagen.elementoMatrizCorriente,visorImagen.textoPie=visorImagen.nombreCarrusel+"&#160;["+(visorImagen.elementoMatrizCorriente+1)+"/"+visorImagen.elementosCarrusel+"]",visorImagen.adaptarImagen(visorImagen.matrizCorriente[visorImagen.elementoMatrizCorriente],"retroceso",!1),document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor="default")},cerrar:function(){restaurarEnfoque();directorioContenidos.abierto&&directorioContenidos.cerrar();
null!==retraso&&clearTimeout(retraso);retraso=setTimeout(function(){visorImagen.abierto=!1;visorImagen.matrizCorriente=[];visorImagen.elementoMatrizCorriente=-1;visorImagen.elementosCarrusel=0;visorImagen.nombreCarrusel="";visorImagen.textoPie="&#160";document.getElementById("visor-imagen-carrusel").src="images/capturas/capturas-imagen-base.png";document.getElementById("visor-imagen-pie-texto").innerHTML="&#160;";document.getElementById("visor-imagen").style.visibility="hidden"},20)}},mostrarErrorContenidoVariableAJAX=
function(a){a=a||"ERROR 520 : Unknown Error";switch(formularioActivo){case "licenciaMIT":var b="Licencia MIT";break;case "licenciaCCnc":case "licenciaCCinternacional":b="Creative Commons";break;case "acerca":b="Acerca de ...";break;default:b="Error AJAX"}protector.abierto&&(document.getElementById("protector").style.display="none",protector.abierto=!1);formularioActivo="error";a='<form id="errorAJAX" name="errorAJAX" class="formulario"><div class="formulario-cabecera"><div class="formulario-cabecera-texto">'+
b+'</div><div class="formulario-cabecera-cierre" title="Cerrar" onclick="cerrarVentanaContenidoVariableAJAX();">&#215;</div></div><div class="formulario-titular"><img class="icono-32" src="images/alerta_64.png" alt="Error AJAX" title="Error AJAX"><span style="text-align:center;">... error de carga del documento solicitado</span></div><div class="formulario-cuerpo"><p style="font-weight:bold;text-align:center;">'+a+'</p></div><div class="formulario-pie"><hr></div></form>';document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML=
"&#160;";document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML=a;"object"===typeof solicitudAJAX&&"function"===typeof solicitudAJAX.abort&&solicitudAJAX.abort();desplazarseHasta("contenido-auxiliar-variable-AJAX")},cerrarVentanaContenidoVariableAJAX=function(a){a=0===arguments.length?!0:a||!1;formularioActivo="";document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML="&#160;";!0===a&&desplazarseHasta(puntoDeLlamada,!0)},cargarFormulario=function(a){puntoDeLlamada="licenciaCCinternacional"===
a?0:parseFloat(document.getElementById("contenido").scrollTop);var b="./forms/"+a+".html";if(formularioActivo===a)desplazarseHasta("contenido-auxiliar-variable-AJAX"),directorioContenidos.abierto&&directorioContenidos.cerrar();else{protector.abrir();document.getElementById("contenido-auxiliar-variable-AJAX")&&(document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML="&#160;");var d=formularioActivo="";solicitudAJAX=new XMLHttpRequest;"function"===typeof solicitudAJAX.overrideMimeType&&
solicitudAJAX.overrideMimeType("text/html");solicitudAJAX.onreadystatechange=function(){4===solicitudAJAX.readyState&&(200===solicitudAJAX.status?document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML=solicitudAJAX.responseText:(d="ERROR "+documentarErrorAJAX(solicitudAJAX.status),mostrarErrorContenidoVariableAJAX(d),protector.cerrar()))};solicitudAJAX.open("GET",b,!0);solicitudAJAX.onload=function(){formularioActivo=a;"licenciaMIT"===a&&document.getElementById("licencia-mit-anualidad-corriente")&&
(document.getElementById("licencia-mit-anualidad-corriente").innerHTML=anualidadCorriente);desplazarseHasta("contenido-auxiliar-variable-AJAX");protector.cerrar()};solicitudAJAX.send(null)}},capacidadesNavegador={nombre_navegador:"object"===typeof bowser&&bowser.name?bowser.name:"?",serie_navegador:"object"===typeof bowser&&bowser.version?bowser.version:"?",navegador_cadena_texto:"?",competencia:"object"===typeof bowser&&bowser.a?"A":"object"===typeof bowser&&bowser.c?"C":"object"===typeof bowser&&
bowser.x?"X":"?",so_nombre:"?",so_serie:"object"===typeof bowser&&bowser.osversion?bowser.osversion:"?",so_cadena_texto:"?",so_navegador_cadena_html:"<span>&#160;</span>",dispositivo_celular:"object"===typeof bowser&&bowser.mobile&&!0===bowser.mobile?!0:!1,dispositivo_tableta:"object"===typeof bowser&&bowser.tablet&&!0===bowser.tablet&&!capacidadesNavegador.dispositivo_celular?!0:!1,propiedades_css3:!1,propiedades_dom:!1,selector_de_consultas:!1,test:function(){"object"===typeof bowser&&(this.so_nombre=
bowser.mac?"Mac OS X":bowser.windows?"Windows":bowser.windowsphone?"Windows Phone":bowser.linux?"Linux":bowser.linux?"Linux":bowser.chromeos?"Chrome OS":bowser.android?"Android":bowser.ios?"iOS":bowser.blackberry?"BlackBerry OS":bowser.firefoxos?"Firefox OS":bowser.webos?"webOS":bowser.bada?"Bada":bowser.tizen?"Tizen":bowser.sailfish?"Sailfish OS":"?",this.so_cadena_texto="?"!==this.so_nombre?this.so_nombre:"?",this.navegador_cadena_texto="?"!==this.nombre_navegador&&"?"!==this.serie_navegador?this.nombre_navegador+
" "+this.serie_navegador:"?"!==this.nombre_navegador&&"?"===this.serie_navegador?this.nombre_navegador:"?");this.so_navegador_cadena_html="?"!==this.navegador_cadena_texto&&"?"!==this.so_cadena_texto?"<span>&#160;("+this.navegador_cadena_texto+" \u2014 "+this.so_cadena_texto+")&#160;</span>":"?"!==this.navegador_cadena_texto&&"?"===this.so_cadena_texto?"<span>&#160;("+this.navegador_cadena_texto+")&#160;</span>":"<span>&#160;</span>";if("object"===typeof Modernizr){var a=[Modernizr.borderradius,Modernizr.boxshadow,
Modernizr.boxsizing,Modernizr.csscalc,Modernizr.generatedcontent,Modernizr.opacity,Modernizr.rgba,Modernizr.textshadow,Modernizr.csstransitions];for(contador=0;contador<a.length;contador+=1)if(a[contador])this.propiedades_css3=!0;else{this.propiedades_css3=!1;break}Modernizr.classlist&&(this.propiedades_dom=!0);Modernizr.queryselector&&(this.selector_de_consultas=!0)}document.getElementById("navegador-nombre-serie")&&(document.getElementById("navegador-nombre-serie").innerHTML=this.so_navegador_cadena_html)},
abrirNotificaciones:function(){document.getElementById("notificaciones")&&(document.getElementById("notificaciones").style.display="block",desplazarseHasta(0))},cerrarNotificaciones:function(){document.getElementById("notificaciones")&&(document.getElementById("notificaciones").style.display="none",desplazarseHasta(0))}},protector={abierto:!1,abrir:function(){!protector.abierto&&document.getElementById("protector")&&(document.getElementById("protector").style.display="block",protector.abierto=!0,
protector.temporizador())},cerrar:function(){protector.abierto&&document.getElementById("protector")&&(directorioContenidos.abierto&&directorioContenidos.cerrar(),null!==protector.autocierre&&(clearTimeout(protector.autocierre),protector.autocierre=null,clearTimeout(espera),espera=setTimeout(function(){document.getElementById("protector").style.display="none";protector.abierto=!1},1E3)))},autocierre:null,temporizador:function(){protector.autocierre=setTimeout(function(){"object"===typeof solicitudAJAX&&
"function"===typeof solicitudAJAX.abort&&solicitudAJAX.abort();protector.cerrar();"&#160;"!==document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML.trim()&&"&nbsp;"!==document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML.trim()&&""!==document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML.trim()||mostrarErrorContenidoVariableAJAX("ERROR 408 : Request Timeout");protector.cerrar()},1E4)}},restaurarEnfoque=function(){(capacidadesNavegador.dispositivo_celular||
capacidadesNavegador.dispositivo_tableta||"undefined"!==typeof window.orientation)&&("android"!==capacidadesNavegador.so_nombre.toLowerCase()||"firefox"!==capacidadesNavegador.nombre_navegador.toLowerCase())&&capacidadesNavegador.selector_de_consultas&&document.querySelector('meta[name="viewport"]')&&(document.querySelector('meta[name="viewport"]').setAttribute("content",""),document.querySelector('meta[name="viewport"]').setAttribute("content","width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"),
null!==demora&&clearTimeout(demora),demora=setTimeout(function(){document.querySelector('meta[name="viewport"]').setAttribute("content","");document.querySelector('meta[name="viewport"]').setAttribute("content","width=device-width, initial-scale=1")},16))},enviarCorreo=function(){var a="";for(contador=0;15>contador;contador++)if(-1==="pUA9qZFPMVevItf6bzLCNS78klohXnjuOH54mrQYGd30DsKa2g1JWByRTicxEw".indexOf("nddA3Ku@nddA.lE".charAt(contador))){var b="nddA3Ku@nddA.lE".charAt(contador);a+=b}else b=("pUA9qZFPMVevItf6bzLCNS78klohXnjuOH54mrQYGd30DsKa2g1JWByRTicxEw".indexOf("nddA3Ku@nddA.lE".charAt(contador))-
15+62)%62,a+="pUA9qZFPMVevItf6bzLCNS78klohXnjuOH54mrQYGd30DsKa2g1JWByRTicxEw".charAt(b);document.location.href="mailto:"+a},iniciar=function(){capacidadesNavegador.test();!1===capacidadesNavegador.propiedades_css3&&capacidadesNavegador.abrirNotificaciones();desplazarseHasta(0);visorImagen.adaptarImagen(visorImagen.matrizCorriente[visorImagen.elementoMatrizCorriente],"dimensionar",!1);document.getElementById("anualidad").innerHTML=anualidadCorriente;document.getElementById("contenido").addEventListener?
(document.getElementById("contenido").addEventListener("click",function(){directorioContenidos.abierto&&directorioContenidos.cerrar();""!==formularioActivo&&2E3>parseInt(document.getElementById("contenido").scrollTop,10)&&cerrarVentanaContenidoVariableAJAX("sin desplazamiento posterior",!1)}),document.getElementById("contenido").addEventListener("scroll",function(){directorioContenidos&&directorioContenidos.abierto&&directorioContenidos.cerrar();""!==formularioActivo&&2E3>parseInt(document.getElementById("contenido").scrollTop,
10)&&cerrarVentanaContenidoVariableAJAX("sin desplazamiento posterior",!1)})):document.getElementById("contenido").attachEvent&&(document.getElementById("contenido").attachEvent("onclick",function(){directorioContenidos.abierto&&directorioContenidos.cerrar()}),document.getElementById("contenido").attachEvent("onscroll",function(){directorioContenidos&&directorioContenidos.abierto&&directorioContenidos.cerrar()}));document.getElementById("pie").addEventListener?document.getElementById("pie").addEventListener("click",
function(){directorioContenidos&&directorioContenidos.abierto&&directorioContenidos.cerrar()}):document.getElementById("pie").attachEvent&&document.getElementById("pie").attachEvent("onclick",function(){directorioContenidos.abierto&&directorioContenidos.cerrar()})};window.onload=function(){iniciar()};window.onerror=function(a,b,d){alert("ERROR O EXCEPCI\u00d3N\n__________________\n\n"+a+"\nURL : "+b+"\nLine : "+d)};
window.onresize=function(){visorImagen.abierto&&(document.getElementById("visor-imagen-carrusel").style.opacity="0",null!==demora&&clearTimeout(demora),demora=setTimeout(function(){visorImagen.adaptarImagen(visorImagen.matrizCorriente[visorImagen.elementoMatrizCorriente],"dimensionar",!1)},500))};
// 