/*! JavaScript para fooghub.github.io |Archivo: index.js|Autor: Foog.Software| **Dependencias:  modernizr.js, bowser.js e index-auxiliar.js** */
/* jshint undef: true, unused: true, eqeqeq: true, browser: true, node: false, loopfunc: true */
/* globals bowser, Modernizr, alert */

var espera = null, demora = null, retraso = null, intervalo, intervaloDecreciente, contador;
var anualidadCorriente = new Date().getFullYear();
var formularioActivo = "";
var puntoDeLlamada = 0;
var solicitudAJAX;
var documentarErrorAJAX = function (estado) {	
	if((arguments.length === 0) || (estado === null) || (estado === "null")){estado = "";}
	var errorCode = estado.toString().substr(0,3);	
	var errorAJAX={
	"400":"Bad Request",
	"401":"Unauthorized",
	"402": "Payment Required",
	"403":"Forbidden",
	"404":"Not Found",
	"405":"Method Not Allowed",
	"406":"Not Acceptable",
	"407":"Proxy Authentication Required",
	"408":"Request Timeout",
	"409":"Conflict",
	"410":"Gone",
	"411":"Length Required",
	"412":"Precondition Failed",
	"413":"Request Entity Too Large",
	"414":"Request-URI Too Long",
	"415":"Unsupported Media Type",
	"416":"Requested Range Not Suitable",
	"417":"Expectation Failed",
	"418": "I'm a teapot",
	"419": "I'm a fox",
	"420": "Enhance Your Calm",
	"422":"Unprocessable Entity",
	"423":"Locked",
	"424":"Falied Dependency",
	"425":"Unassigned",
	"426":"Upgrade Required",
	"428":"Precondition Required",
	"429":"Too Many Requests",
	"431":"Request Headers Fileds Too Large",
	"440":"Login Time-out",	
	"444":"No Response",
	"449":"The request should be retried after doing the appropriate action",
	"450": "Blocked by Windows Parental Controls (Microsoft)",
	"451":"Unavailable for Legal Reasons",
	"495":"SSL Certificate Error",
	"496":"SSL Certificate Required",
	"497":"HTTP Request Sent to HTTPS Port",
	"498":"Invalid Token",
	"499":"Client Closed Request",	
	"500":"Internal Server Error",
	"501":"Not Implemented",
	"502":"Bad Gateway",
	"503":"Service Unavailable",
	"504":"Gateway Timeout",
	"505":"HTTP Version Not Supported",
	"506":"Variant Also Negotiates",
	"507":"Insufficient Storage",
	"508":"Loop Detected",
	"509":"Bandwidth Limit Exceeded",
	"510":"Not Extended",
	"511":"Network Authentication Required",
	"520": "Unknown Error",
	"530" : "Site is frozen",
	"521": "Web Server Is Down",
	"522":"Connection Timed Out",
	"523":"Origin Is Unreachable",
	"524" : "A Timeout Occurred",
	"525":"SSL Handshake Failed",
	"526":"Invalid SSL Certificate",
	"527":"Railgun Error",	
	"598" : "Network read timeout error",
	"599" : "Network connect timeout error",
	"601" : "Access token invalid",	
	};
	if (errorAJAX.hasOwnProperty(errorCode)) {
		return errorCode + " : " + errorAJAX[errorCode];
	} else {
		if(isNaN(errorCode) === false){
			if(errorCode === "0"){errorCode = "520";}
			return errorCode + " : Unknown Error";
		}else{
			if(estado === ""){
				return "520 : Unknown Error";	
			}
		}
		
	}
};

/* Add the following code to add trim functionality to the string. https://stackoverflow.com/questions/2308134/trim-in-javascript-not-working-in-ie */
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  };
}

/*
* MDN web docs | moz://a
* Array.prototype.indexOf()
* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf
* indexOf es una incorporación reciente al estándar ECMA-262; por tanto no está implementado en todos los navegadores. Puedes hacerlo funcionar insertando el siguiente código al comienzo de tus scripts, permitiendo usar  indexOf en implementaciones que no lo soporten de forma nativa. Este algoritmo es exáctamente el especificado en ECMA-262, 5ª edición, asumiendo Object, TypeError, Number, Math.floor, Math.abs, y Math.max tienen sus valores originales.
*/


if (!Array.prototype.indexOf) {	
    Array.prototype.indexOf = function (searchElement /*, fromIndex */  ) { 
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // para verificar si es NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };	
}

//Método alternativo a classList.toggle
var apalancar = function(elemento, nombre_clase){
	var clases = elemento.className.split(" ");
    var indicativo = clases.indexOf(nombre_clase);
    if (indicativo >= 0){
        clases.splice(indicativo, 1);
   }else{
        clases.push(nombre_clase);
	}	
    elemento.className = clases.join(" ");
};




// Métodos relacionados con el menú:
var directorioContenidos = {
	abierto: false,

	clic : function(){
		if(!this.abierto){
			this.abrir();
		}else{
			this.cerrar();
		}
	},

	abrir : function(){
		if(capacidadesNavegador.propiedades_dom){
			document.getElementById("pulsador-directorio-contenidos").classList.toggle("cambio-aspecto");
		}else{
			apalancar(document.getElementById("pulsador-directorio-contenidos"), "cambio-aspecto");
		}
		document.getElementById("directorio-contenidos").style.display = "block";
		this.abierto = true;	
	},

	cerrar : function(){
		if(capacidadesNavegador.propiedades_dom){
			document.getElementById("pulsador-directorio-contenidos").classList.toggle("cambio-aspecto");
		}else{
			apalancar(document.getElementById("pulsador-directorio-contenidos"), "cambio-aspecto");
		}
		document.getElementById("directorio-contenidos").style.display = "none";
		this.abierto = false;	
	}
};

//Selección de elementos desde el menú:

var seleccionar = function(elementoElegido) {
	
	switch(elementoElegido){
		case "1":		
		desplazarseHasta("referenciaNw", true);		
		break;
		case "2" :
		desplazarseHasta("referenciaAir", true);	
		break;
		case "3" :
		desplazarseHasta("referenciaCordova", true);
		break;
		case "4" :
		cargarFormulario("acerca");
		break;		
	}
	
};

// Método para el desplazamiento automático entre contenidos. 
// Con la librería smoothScroll de Alice Lieutier, para ele efecto de "scroll suave":
// https://github.com/alicelieutier/smoothScroll

var desplazarseHasta = function( elementoDestino_puntoDeLlamada, desplazamientoSuave){
	
	desplazamientoSuave = desplazamientoSuave || false;
	
	var destino = (isNaN(elementoDestino_puntoDeLlamada) === false) ? parseInt(elementoDestino_puntoDeLlamada, 10) : parseInt(document.getElementById(elementoDestino_puntoDeLlamada).offsetTop, 10) - 18;
	
	
	//puntoDeLlamada = 0;	
	
	var elementoDesplazable = document.getElementById("contenido");


	if((!capacidadesNavegador.selector_de_consultas) || (typeof window.smoothScroll !== "function")){
		
		desplazamientoSuave = false;
	}
	
	
	
	if(desplazamientoSuave){
		
		var finDesplazamiento = function(){
			if(visorImagen.abierto){
				visorImagen.cerrar();				
			}else{
				if(directorioContenidos.abierto){directorioContenidos.cerrar();}
			}	
		};		
		
		window.smoothScroll(destino, 2000, finDesplazamiento, elementoDesplazable);
		
	}else{
		document.getElementById("contenido").scrollTop = destino;
		if(visorImagen.abierto){
				visorImagen.cerrar();				
			}else{
				if(directorioContenidos.abierto){directorioContenidos.cerrar();}
			}	
	}		
	
};



//Métodos relacionados con el visor de imágenes:

var visorImagen = {
	abierto: false,
	matrizCorriente : [],
	elementoMatrizCorriente : -1,
	carruselesCargados : [],
	imagenBaseCargada :false,
	elementosCarrusel : 0,
	nombreCarrusel : "",
	textoPie : "&#160",
	
	adaptarImagen : function(imagen, tarea, metamorfosis){
		imagen = imagen || "images/capturas/capturas-imagen-base.png";
		if(this.abierto && document.getElementById("visor-imagen-contenido") && document.getElementById("visor-imagen-carrusel")){
			var margenSuperior = (parseInt(document.getElementById("visor-imagen-contenido").offsetHeight,10) /2) - (parseInt(document.getElementById("visor-imagen-carrusel").height,10)/2);
			margenSuperior = (margenSuperior <= 6) ? 0 : margenSuperior;
			if(tarea === "dimensionar"){
				document.getElementById("visor-imagen-carrusel").style.opacity = "0"; 
				document.getElementById("visor-imagen-carrusel").src = "images/capturas/capturas-imagen-base.png"; 
				document.getElementById("visor-imagen-carrusel").style.marginTop = "0px";	
				document.getElementById("visor-imagen-pie-texto").innerHTML = "&#160;";			
				if(espera !== null){clearTimeout(espera);}
				espera = setTimeout(function(){
					document.getElementById("visor-imagen-carrusel").style.marginTop = margenSuperior + "px";
					document.getElementById("visor-imagen-pie-texto").innerHTML = visorImagen.textoPie;
					document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor = "default";	
					document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.cursor = "default";
					document.getElementById("visor-imagen-carrusel").src = imagen; 	
					document.getElementById("visor-imagen-pie-texto").innerHTML = visorImagen.textoPie;	
					document.getElementById("visor-imagen-carrusel").style.opacity = "1"; 
				}, 1000);
			}else{
				if(metamorfosis){
					document.getElementById("visor-imagen-carrusel").style.marginTop = margenSuperior + "px";
					contador = 1;				
					intervaloDecreciente = setInterval(function(){
						document.getElementById("visor-imagen-carrusel").style.opacity = "1";
						contador -= 0.1;
						if(contador > 0){
							document.getElementById("visor-imagen-carrusel").style.opacity = contador.toString();
						}else{
							clearInterval(intervaloDecreciente);
							contador = 0;
							document.getElementById("visor-imagen-carrusel").style.opacity = "0";
							document.getElementById("visor-imagen-carrusel").src = imagen;
							intervalo = setInterval(function(){
								contador += 0.1;
								if(contador < 0.9){
									document.getElementById("visor-imagen-carrusel").style.opacity = contador.toString();
								}else{
									clearInterval(intervalo);
									if(document.getElementById("visor-imagen-carrusel").style.visibility === "hidden"){document.getElementById("visor-imagen-carrusel").style.visibility = "visible";}
									document.getElementById("visor-imagen-carrusel").style.opacity = "1";								
									document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor = "default";	
									document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.cursor = "default";
									document.getElementById("visor-imagen-pie-texto").innerHTML = visorImagen.textoPie;	
								}						
							},50);
						}
					},50);	
				}else{
					document.getElementById("visor-imagen-carrusel").style.opacity = "0";
					document.getElementById("visor-imagen-carrusel").src = imagen; 
					document.getElementById("visor-imagen-carrusel").style.marginTop = margenSuperior + "px";
					document.getElementById("visor-imagen-carrusel").style.opacity = "1";
					document.getElementById("visor-imagen-pie-texto").innerHTML = visorImagen.textoPie;	
				}
			}
		}
	},

	abrir : function(carrusel){
		restaurarEnfoque();
		var rutaElemento = "";	
		switch(carrusel){
			case "cdocs-nw":
			this.elementosCarrusel = 15;
			this.nombreCarrusel = "CDOCS NW ";
			break;
			case "reloj-air":
			this.elementosCarrusel = 23;
			this.nombreCarrusel = "RELOJ AIR ";
			break;
			case "cdocs-air":
			this.elementosCarrusel = 22;
			this.nombreCarrusel = "CDOCS AIR ";
			break;
			case "reloj-cordova":
			this.elementosCarrusel = 23;
			this.nombreCarrusel = "RELOJ CORDOVA ";
			break;
		}
		this.matrizCorriente.length = 0;
		for(contador = 0; contador < this.elementosCarrusel; contador += 1){
			rutaElemento = "images/capturas/" + carrusel + "-" + contador + ".png";
			this.matrizCorriente.push(rutaElemento);
		}

		var almacenarCarrusel = function(matriz) {
			var imagenVirtual = new Image();
			if(!this.imagenBaseCargada){
				imagenVirtual.src = "images/capturas/capturas-imagen-base.png";
				this.imagenBaseCargada = true;
			}
			if(visorImagen.carruselesCargados.indexOf(carrusel) === -1){
				for (contador = 0; contador < matriz.length; contador +=1) {
					imagenVirtual.src = matriz[contador];
				}
			}
			visorImagen.carruselesCargados.push(carrusel);
		};
		
		almacenarCarrusel(visorImagen.matrizCorriente);	
		this.abierto = true;
		this.elementoMatrizCorriente = 0;
		if(retraso !== null){clearTimeout(retraso);}
		retraso = setTimeout(function(){
			document.getElementById("visor-imagen").style.visibility = "visible";
			visorImagen.adaptarImagen(visorImagen.matrizCorriente[0],"abrir", true);	
			visorImagen.textoPie = visorImagen.nombreCarrusel + "<span>&#160;[" + (visorImagen.elementoMatrizCorriente + 1) + "/" + visorImagen.elementosCarrusel +"]</span>";  
			document.getElementById("visor-imagen-pie-texto").innerHTML = visorImagen.textoPie;
		},20);
	},



	prepararRetroceso : function(){
		if(visorImagen.elementoMatrizCorriente > 0){
			document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.opacity = "1";
			document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.cursor = "pointer";
	}
	},

	prepararAvance : function(){
		if(visorImagen.elementoMatrizCorriente < visorImagen.matrizCorriente.length -1){
			document.getElementById("visor-imagen-pie-pulsador-derecho").style.opacity = "1";
			document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor = "pointer";
		}
	},

	restaurarRetroceso : function(){
		document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.opacity = "0.8";
		document.getElementById("visor-imagen-pie-pulsador-izquierdo").style.cursor = "default";
	},

	restaurarAvance : function(){
		document.getElementById("visor-imagen-pie-pulsador-derecho").style.opacity = "0.8";
		document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor = "default";
	},
	avanzar:function(identificador){
		if(visorImagen.elementoMatrizCorriente < visorImagen.matrizCorriente.length -1){
			document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor = "wait";
			visorImagen.elementoMatrizCorriente += 1;
			visorImagen.textoPie = visorImagen.nombreCarrusel + "&#160;[" + (visorImagen.elementoMatrizCorriente + 1) + "/" + visorImagen.elementosCarrusel +"]";  
			visorImagen.adaptarImagen(visorImagen.matrizCorriente[visorImagen.elementoMatrizCorriente],"avance",false);
			document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor = "default";
		}
	},

	retroceder:function(){
		if(visorImagen.elementoMatrizCorriente > 0){
			visorImagen.elementoMatrizCorriente -= 1;
			visorImagen.textoPie = visorImagen.nombreCarrusel + "&#160;[" + (visorImagen.elementoMatrizCorriente + 1) + "/" + visorImagen.elementosCarrusel +"]";  
			visorImagen.adaptarImagen(visorImagen.matrizCorriente[visorImagen.elementoMatrizCorriente], "retroceso", false);
			document.getElementById("visor-imagen-pie-pulsador-derecho").style.cursor = "default";
		}
	},

	cerrar : function(){
		restaurarEnfoque();
		if(directorioContenidos.abierto){
			directorioContenidos.cerrar();
		}
		if(retraso !== null){clearTimeout(retraso);}
		retraso = setTimeout(function(){
			visorImagen.abierto = false;
			visorImagen.matrizCorriente = [];
			visorImagen.elementoMatrizCorriente = -1;
			visorImagen.elementosCarrusel = 0;
			visorImagen.nombreCarrusel = "";
			visorImagen.textoPie = "&#160";
			document.getElementById("visor-imagen-carrusel").src = "images/capturas/capturas-imagen-base.png"; 	
			document.getElementById("visor-imagen-pie-texto").innerHTML = "&#160;";
			document.getElementById("visor-imagen").style.visibility = "hidden";
		}, 20);
	}
};


// Métodos para carga de contenido variable y notificación de errores // AJAX:

var mostrarErrorContenidoVariableAJAX = function (mensaje){
	mensaje = mensaje || "ERROR 520 : Unknown Error";
	var titular = "";	
	switch(formularioActivo){
		case "licenciaMIT":
		titular = "Licencia MIT";
		break;
		case "licenciaCCnc":
		case "licenciaCCinternacional":
		titular = "Creative Commons";
		break;
		case "acerca":
		titular = "Acerca de ...";
		break;
		default:
		titular = "Error AJAX";
	}
	if(protector.abierto){
		document.getElementById("protector").style.display = "none";
		protector.abierto = false;
	}
		
	formularioActivo = "error";
	var contenidoVariableAJAX = '<form id="errorAJAX" name="errorAJAX" class="formulario">' + 
	'<div class="formulario-cabecera"><div class="formulario-cabecera-texto">' + titular + '</div><div class="formulario-cabecera-cierre" title="Cerrar" onclick="cerrarVentanaContenidoVariableAJAX();">&#215;</div></div>' +
	'<div class="formulario-titular"><img class="icono-32" src="images/alerta_64.png" alt="Error AJAX" title="Error AJAX"><span style="text-align:center;">... error de carga del documento solicitado</span></div>'+
	'<div class="formulario-cuerpo">' +
	'<p style="font-weight:bold;text-align:center;">' + mensaje +'</p>' +
	'</div>' +
	'<div class="formulario-pie"><hr></div>' +
	'</form>';
	document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML = "&#160;";
	document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML = contenidoVariableAJAX;
	if((typeof solicitudAJAX === "object") && (typeof solicitudAJAX.abort === "function")){solicitudAJAX.abort();}
	desplazarseHasta("contenido-auxiliar-variable-AJAX");
};

var cerrarVentanaContenidoVariableAJAX = function(desplazamiento){
	if(arguments.length === 0){
		desplazamiento = true;
	}else{
		desplazamiento = desplazamiento || false;
	}
		formularioActivo = "";
		document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML = "&#160;";
		if(desplazamiento === true){
			desplazarseHasta(puntoDeLlamada, true);
	}
};

// Métodos para carga de contenido variable // AJAX:

var cargarFormulario = function (formulario){
	if(formulario === "licenciaCCinternacional"){
		puntoDeLlamada = 0; 		
	}else{
		puntoDeLlamada = parseFloat(document.getElementById("contenido").scrollTop);
	}
	
	var rutaFormulario = "./forms/" + formulario + ".html";
	if(formularioActivo === formulario){
		desplazarseHasta("contenido-auxiliar-variable-AJAX");
		if(directorioContenidos.abierto){directorioContenidos.cerrar();}
	return;
	}
	protector.abrir();
	if(document.getElementById("contenido-auxiliar-variable-AJAX")){document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML = "&#160;";}		
	formularioActivo = ""; 
	var errorSolicitudMensaje = "";
	solicitudAJAX = new XMLHttpRequest();
	if (!solicitudAJAX) {		
		mostrarErrorContenidoVariableAJAX("ERROR 418 : Cannot create an XMLHTTP instance.");
		protector.cerrar();
		return;
	}
	if(typeof solicitudAJAX.overrideMimeType === "function"){
		
		solicitudAJAX.overrideMimeType("text/html");
	}
	solicitudAJAX.onreadystatechange = function(){
		if (solicitudAJAX.readyState === 4) {
			if(solicitudAJAX.status === 200){				
				document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML = solicitudAJAX.responseText;
			}else{					
				errorSolicitudMensaje = "ERROR " + documentarErrorAJAX(solicitudAJAX.status);
				mostrarErrorContenidoVariableAJAX(errorSolicitudMensaje);
				protector.cerrar();
				return;
			}			
		}	
	};
	
	solicitudAJAX.open("GET", rutaFormulario, true);
	
	solicitudAJAX.onload = function() {
		formularioActivo = formulario;		
		if(formulario === "licenciaMIT"){
			if(document.getElementById("licencia-mit-anualidad-corriente")){document.getElementById("licencia-mit-anualidad-corriente").innerHTML = anualidadCorriente;}
		}
		desplazarseHasta("contenido-auxiliar-variable-AJAX");
		protector.cerrar();		
	};
	solicitudAJAX.send(null);
};

// Analísis de características del navegador del usuario (con Modernizr y bowser.js):
var capacidadesNavegador = {
	nombre_navegador : ((typeof bowser === "object" && bowser.name) ?  bowser.name : "?"),
	serie_navegador : (typeof bowser === "object" && bowser.version) ?  bowser.version : "?", //versión
	navegador_cadena_texto :  "?",
	competencia : ((typeof bowser === "object" && bowser.a) ? "A" : (typeof bowser === "object" && bowser.c) ? "C" : (typeof bowser === "object" && bowser.x) ? "X" : "?"),
	so_nombre : "?",
	so_serie : ((typeof bowser === "object" && bowser.osversion) ? bowser.osversion : "?"), //versión
	so_cadena_texto :  "?",
	so_navegador_cadena_html : "<span>&#160;</span>",
	dispositivo_celular : ((typeof bowser === "object" && bowser.mobile && bowser.mobile === true) ? true : false),
	dispositivo_tableta : ((typeof bowser === "object" && bowser.tablet && bowser.tablet === true && !capacidadesNavegador.dispositivo_celular) ? true : false),
	propiedades_css3 : false,
	propiedades_dom: false,
	selector_de_consultas : false,
	
	test:function(){
		if(typeof bowser === "object"){
			var sistema = "?";
			if(bowser.mac){
				sistema = "Mac OS X";
			}else if(bowser.windows){
				sistema = "Windows";
			}else if(bowser.windowsphone){
				sistema = "Windows Phone";
			}else if(bowser.linux){
				sistema = "Linux";
			}else if(bowser.linux){
				sistema = "Linux";
			}else if(bowser.chromeos){
				sistema = "Chrome OS";
			}else if(bowser.android){
				sistema = "Android";
			}else if(bowser.ios){
				sistema = "iOS";
			}else if(bowser.blackberry){
				sistema = "BlackBerry OS";
			}else if(bowser.firefoxos){
				sistema = "Firefox OS";
			}else if(bowser.webos){
				sistema = "webOS";
			}else if(bowser.bada){
				sistema = "Bada";
			}else if(bowser.tizen){
				sistema = "Tizen";
			}else if(bowser.sailfish){
				sistema = "Sailfish OS";
			}else{
				sistema = "?";	
			}
			
			this.so_nombre = sistema;
			
			if(this.so_nombre !== "?"){
				this.so_cadena_texto = this.so_nombre;
			}else{
				this.so_cadena_texto = "?";
			}
			if(this.nombre_navegador !== "?" && this.serie_navegador !== "?"){
				this.navegador_cadena_texto = this.nombre_navegador + " " + this.serie_navegador;  	
			}else if(this.nombre_navegador !== "?" && this.serie_navegador === "?"){
				this.navegador_cadena_texto = this.nombre_navegador;  		
			}else{
				this.navegador_cadena_texto = "?";
			}
			
		}
		
		if(this.navegador_cadena_texto !== "?" && this.so_cadena_texto !== "?"){
			this.so_navegador_cadena_html="<span>&#160;(" + this.navegador_cadena_texto + " — " + this.so_cadena_texto + ")&#160;</span>"; 
		}else if(this.navegador_cadena_texto !== "?" && this.so_cadena_texto === "?"){
			this.so_navegador_cadena_html="<span>&#160;(" + this.navegador_cadena_texto + ")&#160;</span>";			
		}else{
			this.so_navegador_cadena_html="<span>&#160;</span>";
		}

		if(typeof Modernizr === "object"){
			var test_css = [Modernizr.borderradius, Modernizr.boxshadow, Modernizr.boxsizing, Modernizr.csscalc, Modernizr.generatedcontent, Modernizr.opacity, Modernizr.rgba, Modernizr.textshadow, Modernizr.csstransitions];
			for(contador = 0; contador < test_css.length; contador += 1 ){				
				if(test_css[contador]){
					this.propiedades_css3 = true;
				}else{
					this.propiedades_css3 = false;
					break;
				}			
			}
			if(Modernizr.classlist){
				this.propiedades_dom = true;
			}

			if(Modernizr.queryselector){
				this.selector_de_consultas = true;
			}
		}

		if(document.getElementById("navegador-nombre-serie")){			
			document.getElementById("navegador-nombre-serie").innerHTML = this.so_navegador_cadena_html;	
		}		
	},
	abrirNotificaciones :function(){
		if(document.getElementById("notificaciones")){
			document.getElementById("notificaciones").style.display = "block";
			desplazarseHasta(0);
		}
	},
	cerrarNotificaciones : function() {
		if(document.getElementById("notificaciones")){
			document.getElementById("notificaciones").style.display = "none";
			desplazarseHasta(0);
		}
	}
};

// Escudo de pantalla. Capa transparente con imágen de precarga. Impide la interación directa del usuario con la página mientras se procesa una petición AJAX:

var protector ={};
protector.abierto = false;
protector.abrir = function(){
	if(!protector.abierto && document.getElementById("protector")){
		document.getElementById("protector").style.display = "block";
		protector.abierto = true;
		protector.temporizador();
	}
};

protector.cerrar = function(){
	if(protector.abierto && document.getElementById("protector")){
		if(directorioContenidos.abierto){directorioContenidos.cerrar();}
		if(protector.autocierre !== null){			
			clearTimeout(protector.autocierre);
			protector.autocierre = null;
			clearTimeout(espera);
			espera = setTimeout(function(){
				document.getElementById("protector").style.display = "none";
				protector.abierto = false;			
			}, 1000);			
		}
	}
};

protector.autocierre = null;
protector.temporizador = function(){
	protector.autocierre = setTimeout(function(){
		if((typeof solicitudAJAX === "object") && (typeof solicitudAJAX.abort === "function")){solicitudAJAX.abort();}	
		protector.cerrar();
		if((document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML.trim() === "&#160;") || (document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML.trim() === "&nbsp;")  || (document.getElementById("contenido-auxiliar-variable-AJAX").innerHTML.trim() === "")){
			mostrarErrorContenidoVariableAJAX("ERROR 408 : Request Timeout");
		}
		protector.cerrar();
	}, 10000);
};

// Método para restaurar el "zoom" de la pantalla de dispositivos móviles a la escala inicial. En Firefox para Android, no funciona:
var restaurarEnfoque = function(){
	if(capacidadesNavegador.dispositivo_celular || capacidadesNavegador.dispositivo_tableta || typeof window.orientation !== "undefined"){	
		if(capacidadesNavegador.so_nombre.toLowerCase() === "android" && capacidadesNavegador.nombre_navegador.toLowerCase()=== "firefox"){
			//TODO
			//Buscando alguna solución, hasta el momento no he dado con ello.
			// Si alguien tiene alguna idéa agradeceré sus comentarios				      
					
		}else{	
			if(capacidadesNavegador.selector_de_consultas && document.querySelector('meta[name="viewport"]')){
				document.querySelector('meta[name="viewport"]').setAttribute("content", "");
				document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1");	
				if(demora !== null){clearTimeout(demora);}
				demora = setTimeout(function(){
					document.querySelector('meta[name="viewport"]').setAttribute("content", "");
					document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1");
				},16);		
			}
		}
	}
};

// Método paraenvíar mensajes de correo electrico. Si el usuario dispone de un cliente de correo activo, en dispositivo.
// La dirección de correo está encriptada mendiante la propuesta de: http://www.jottings.com/obfuscator/
var enviarCorreo = function(){
	// Email obfuscator script 2.1 by Tim Williams, University of Arizona
	// Random encryption key feature coded by Andrew Moulden
	// This code is freeware provided these four comment lines remain intact
	// A wizard to generate this code is at http://www.jottings.com/obfuscator/
	var codificado = "nddA3Ku@nddA.lE";
	var llave = "pUA9qZFPMVevItf6bzLCNS78klohXnjuOH54mrQYGd30DsKa2g1JWByRTicxEw";
	var cambio=codificado.length;
	var enlace="";
	var de_izquierda_a_derecha = "";

	for (contador=0; contador<codificado.length; contador++) {
		if (llave.indexOf(codificado.charAt(contador))===-1) {
		  de_izquierda_a_derecha = codificado.charAt(contador);
		  enlace += (de_izquierda_a_derecha);
		}
		else {     
		  de_izquierda_a_derecha = (llave.indexOf(codificado.charAt(contador))-cambio+llave.length) % llave.length;
		  enlace += (llave.charAt(de_izquierda_a_derecha));
		}
	}
	document.location.href = "mailto:" +enlace;
};

// Puesta en marcha: 
var iniciar = function(){
	capacidadesNavegador.test();
	if(capacidadesNavegador.propiedades_css3 === false){
		capacidadesNavegador.abrirNotificaciones();
	}
	desplazarseHasta(0);
	visorImagen.adaptarImagen(visorImagen.matrizCorriente[visorImagen.elementoMatrizCorriente], "dimensionar", false );

	document.getElementById("anualidad").innerHTML = anualidadCorriente;
	
	// Escucha de eventos "click" y "scroll", cuando el DOM está cargado.
	if (document.getElementById("contenido").addEventListener){ 
		document.getElementById("contenido").addEventListener("click", function(){
			if(directorioContenidos.abierto){directorioContenidos.cerrar();}
			if((formularioActivo !== "") && (parseInt(document.getElementById("contenido").scrollTop,10) < 2000)){
				cerrarVentanaContenidoVariableAJAX("sin desplazamiento posterior", false);
			}
		});
		document.getElementById("contenido").addEventListener("scroll", function(){
			if(directorioContenidos && directorioContenidos.abierto){directorioContenidos.cerrar();}
			if((formularioActivo !== "") && (parseInt(document.getElementById("contenido").scrollTop,10) < 2000)){
				cerrarVentanaContenidoVariableAJAX("sin desplazamiento posterior", false);
			}
		});
	}else if (document.getElementById("contenido").attachEvent) {
		document.getElementById("contenido").attachEvent("onclick", function(){
			if(directorioContenidos.abierto){directorioContenidos.cerrar();}
		});
		document.getElementById("contenido").attachEvent("onscroll", function(){
			if(directorioContenidos && directorioContenidos.abierto){directorioContenidos.cerrar();}
		});
	}

	if (document.getElementById("pie").addEventListener){ 
	document.getElementById("pie").addEventListener("click", function(){
		if(directorioContenidos && directorioContenidos.abierto){directorioContenidos.cerrar();}
	});
	}else if(document.getElementById("pie").attachEvent){
			document.getElementById("pie").attachEvent("onclick", function(){
		if(directorioContenidos.abierto){directorioContenidos.cerrar();}
		});
	}

		
	

	
};

// Eventos generales:

window.onload=function(){
	iniciar();
};

window.onerror = function(error, url, line) {
	alert("ERROR O EXCEPCIÓN" + "\n" +  "__________________"  + "\n\n" + error + "\n" + "URL : " + url + "\n" + "Line : " + line);
};

window.onresize = function () {
	if(visorImagen.abierto){
		document.getElementById("visor-imagen-carrusel").style.opacity = "0"; 
		if(demora !== null){clearTimeout(demora);}
		demora = setTimeout(function(){
			visorImagen.adaptarImagen(visorImagen.matrizCorriente[visorImagen.elementoMatrizCorriente], "dimensionar", false);
		}, 500);
	} 
};
