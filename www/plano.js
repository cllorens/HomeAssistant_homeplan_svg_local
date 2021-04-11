!function(a,b){"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports?module.exports=b():a.ReconnectingWebSocket=b()}(this,function(){function a(b,c,d){function l(a,b){var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,!1,!1,b),c}var e={debug:!1,automaticOpen:!0,reconnectInterval:1e3,maxReconnectInterval:3e4,reconnectDecay:1.5,timeoutInterval:2e3};d||(d={});for(var f in e)this[f]="undefined"!=typeof d[f]?d[f]:e[f];this.url=b,this.reconnectAttempts=0,this.readyState=WebSocket.CONNECTING,this.protocol=null;var h,g=this,i=!1,j=!1,k=document.createElement("div");k.addEventListener("open",function(a){g.onopen(a)}),k.addEventListener("close",function(a){g.onclose(a)}),k.addEventListener("connecting",function(a){g.onconnecting(a)}),k.addEventListener("message",function(a){g.onmessage(a)}),k.addEventListener("error",function(a){g.onerror(a)}),this.addEventListener=k.addEventListener.bind(k),this.removeEventListener=k.removeEventListener.bind(k),this.dispatchEvent=k.dispatchEvent.bind(k),this.open=function(b){h=new WebSocket(g.url,c||[]),b||k.dispatchEvent(l("connecting")),(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","attempt-connect",g.url);var d=h,e=setTimeout(function(){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","connection-timeout",g.url),j=!0,d.close(),j=!1},g.timeoutInterval);h.onopen=function(){clearTimeout(e),(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onopen",g.url),g.protocol=h.protocol,g.readyState=WebSocket.OPEN,g.reconnectAttempts=0;var d=l("open");d.isReconnect=b,b=!1,k.dispatchEvent(d)},h.onclose=function(c){if(clearTimeout(e),h=null,i)g.readyState=WebSocket.CLOSED,k.dispatchEvent(l("close"));else{g.readyState=WebSocket.CONNECTING;var d=l("connecting");d.code=c.code,d.reason=c.reason,d.wasClean=c.wasClean,k.dispatchEvent(d),b||j||((g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onclose",g.url),k.dispatchEvent(l("close")));var e=g.reconnectInterval*Math.pow(g.reconnectDecay,g.reconnectAttempts);setTimeout(function(){g.reconnectAttempts++,g.open(!0)},e>g.maxReconnectInterval?g.maxReconnectInterval:e)}},h.onmessage=function(b){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onmessage",g.url,b.data);var c=l("message");c.data=b.data,k.dispatchEvent(c)},h.onerror=function(b){(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","onerror",g.url,b),k.dispatchEvent(l("error"))}},1==this.automaticOpen&&this.open(!1),this.send=function(b){if(h)return(g.debug||a.debugAll)&&console.debug("ReconnectingWebSocket","send",g.url,b),h.send(b);throw"INVALID_STATE_ERR : Pausing to reconnect websocket"},this.close=function(a,b){"undefined"==typeof a&&(a=1e3),i=!0,h&&h.close(a,b)},this.refresh=function(){h&&h.close()}}return a.prototype.onopen=function(){},a.prototype.onclose=function(){},a.prototype.onconnecting=function(){},a.prototype.onmessage=function(){},a.prototype.onerror=function(){},a.debugAll=!1,a.CONNECTING=WebSocket.CONNECTING,a.OPEN=WebSocket.OPEN,a.CLOSING=WebSocket.CLOSING,a.CLOSED=WebSocket.CLOSED,a});

//******************************************************
// Get DOM objects
//******************************************************

// Ligth shadows
var LuzMesaComedor = document.getElementById('LuzMesaComedor');
var LuzSofa = document.getElementById('LuzSofa');
var LuzAseo = document.getElementById('LuzAseo');
var LuzHabitacion = document.getElementById('LuzHabitacion');
var LuzCocina = document.getElementById('LuzCocina');
var LuzTerraza = document.getElementById('LuzTerraza');
var LuzTerrazaSalon = document.getElementById('LuzTerrazaSalon');
var LuzEscobas = document.getElementById('LuzEscobas');
var LuzSofaAmbiente = document.getElementById('LuzSofaAmbiente');
var LuzCuadro = document.getElementById('LuzCuadro');
var LuzChillout = document.getElementById('LuzChillout');
var LuzBarbacoa = document.getElementById('LuzBarbacoa');

// Ligth shadows
var LuzMesaComedorOn1 = document.getElementById('LuzMesaComedorOn1');
var LuzSofaOn1 = document.getElementById('LuzSofaOn1');
var LuzAseoOn1 = document.getElementById('LuzAseoOn1');
var LuzHabitacionOn1 = document.getElementById('LuzHabitacionOn1');
var LuzCocinaOn1 = document.getElementById('LuzCocinaOn1');
var LuzTerrazaOn1 = document.getElementById('LuzTerrazaOn1');
var LuzTerrazaSalonOn1 = document.getElementById('LuzTerrazaSalonOn1');
var LuzEscobasOn1 = document.getElementById('LuzEscobasOn1');
var LuzSofaAmbienteOn1 = document.getElementById('LuzSofaAmbienteOn1');
var LuzCuadroOn1 = document.getElementById('LuzCuadroOn1');
var LuzChilloutOn1 = document.getElementById('LuzChilloutOn1');
var LuzBarbacoaOn1 = document.getElementById('LuzBarbacoaOn1');

// Ligth bulbs
var LuzMesaComedorOn2 = document.getElementById('LuzMesaComedorOn2');
var LuzSofaOn2 = document.getElementById('LuzSofaOn2');
var LuzAseoOn2 = document.getElementById('LuzAseoOn2');
var LuzHabitacionOn2 = document.getElementById('LuzHabitacionOn2');
var LuzCocinaOn2 = document.getElementById('LuzCocinaOn2');
var LuzTerrazaOn2 = document.getElementById('LuzTerrazaOn2');
var LuzTerrazaSalonOn2 = document.getElementById('LuzTerrazaSalonOn2');
var LuzEscobasOn2 = document.getElementById('LuzEscobasOn2');
var LuzSofaAmbienteOn2 = document.getElementById('LuzSofaAmbienteOn2');
var LuzCuadroOn2 = document.getElementById('LuzCuadroOn2');
var LuzChilloutOn2 = document.getElementById('LuzChilloutOn2');
var LuzBarbacoaOn2 = document.getElementById('LuzBarbacoaOn2');

// Moving parts
var PantallaMovil = document.getElementById('Pantalla_x0020_Movil');
var Persiana = document.getElementById('Persiana');

// Cover buttons
var PararPersiana = document.getElementById('PararPersiana');
var BajarPersiana = document.getElementById('BajarPersiana');
var SubirPersiana = document.getElementById('SubirPersiana');

var ParaPantalla = document.getElementById('ParaPantalla');
var BajarPantalla = document.getElementById('BajarPantalla');
var SubirPantalla = document.getElementById('SubirPantalla');
//******************************************************
// Init Objects
//******************************************************

// Set Ligths Shadows status
LuzMesaComedorOn2.setAttribute('PowerOn','0');
LuzSofaOn2.setAttribute('PowerOn','0');
LuzAseoOn2.setAttribute('PowerOn','0');
LuzHabitacionOn2.setAttribute('PowerOn','0');
LuzCocinaOn2.setAttribute('PowerOn','0');
LuzTerrazaOn2.setAttribute('PowerOn','0');
LuzTerrazaSalonOn2.setAttribute('PowerOn','0');
LuzEscobasOn2.setAttribute('PowerOn','0');
LuzSofaAmbienteOn2.setAttribute('PowerOn','0');
LuzCuadroOn2.setAttribute('PowerOn','0');
LuzChilloutOn2.setAttribute('PowerOn','0');
LuzBarbacoaOn2.setAttribute('PowerOn','0');

// Set Ligths Shadows opacity to 0
LuzMesaComedorOn1.style.opacity=0;
LuzSofaOn1.style.opacity=0;
LuzAseoOn1.style.opacity=0;
LuzHabitacionOn1.style.opacity=0;
LuzCocinaOn1.style.opacity=0;
LuzTerrazaOn1.style.opacity=0;
LuzTerrazaSalonOn1.style.opacity=0;
LuzEscobasOn1.style.opacity=0;
LuzSofaAmbienteOn1.style.opacity=0;
LuzCuadroOn1.style.opacity=0;
LuzChilloutOn1.style.opacity=0;
LuzBarbacoaOn1.style.opacity=0;

// Set Bulbs Shadows opacity to 0
LuzMesaComedorOn2.style.opacity=0;
LuzSofaOn2.style.opacity=0;
LuzAseoOn2.style.opacity=0;
LuzHabitacionOn2.style.opacity=0;
LuzCocinaOn2.style.opacity=0;
LuzTerrazaOn2.style.opacity=0;
LuzTerrazaSalonOn2.style.opacity=0;
LuzEscobasOn2.style.opacity=0;
LuzSofaAmbienteOn2.style.opacity=0;
LuzCuadroOn2.style.opacity=0;
LuzChilloutOn2.style.opacity=0;
LuzBarbacoaOn2.style.opacity=0;

// Set Ligths onclick functions
LuzMesaComedorOn2.addEventListener("click", function(){ligthclick(LuzMesaComedorOn2);}, false);
LuzMesaComedor.addEventListener("click", function(){ligthclick(LuzMesaComedorOn2);}, false);
LuzSofaOn2.addEventListener("click", function(){ligthclick(LuzSofaOn2);}, false);
LuzSofa.addEventListener("click", function(){ligthclick(LuzSofaOn2);}, false);
LuzAseoOn2.addEventListener("click", function(){ligthclick(LuzAseoOn2);}, false);
LuzAseo.addEventListener("click", function(){ligthclick(LuzAseoOn2);}, false);
LuzHabitacionOn2.addEventListener("click", function(){ligthclick(LuzHabitacionOn2);}, false);
LuzHabitacion.addEventListener("click", function(){ligthclick(LuzHabitacionOn2);}, false);
LuzCocinaOn2.addEventListener("click", function(){ligthclick(LuzCocinaOn2);}, false);
LuzCocina.addEventListener("click", function(){ligthclick(LuzCocinaOn2);}, false);
LuzTerrazaOn2.addEventListener("click", function(){ligthclick(LuzTerrazaOn2);}, false);
LuzTerraza.addEventListener("click", function(){ligthclick(LuzTerrazaOn2);}, false);
LuzTerrazaSalonOn2.addEventListener("click", function(){ligthclick(LuzTerrazaSalonOn2);}, false);
LuzTerrazaSalon.addEventListener("click", function(){ligthclick(LuzTerrazaSalonOn2);}, false);
LuzEscobasOn2.addEventListener("click", function(){ligthclick(LuzEscobasOn2);}, false);
LuzEscobas.addEventListener("click", function(){ligthclick(LuzEscobasOn2);}, false);
LuzSofaAmbienteOn2.addEventListener("click", function(){ligthclick(LuzSofaAmbienteOn2);}, false);
LuzSofaAmbiente.addEventListener("click", function(){ligthclick(LuzSofaAmbienteOn2);}, false);
LuzCuadroOn2.addEventListener("click", function(){ligthclick(LuzCuadroOn2);}, false);
LuzCuadro.addEventListener("click", function(){ligthclick(LuzCuadroOn2);}, false);
LuzChilloutOn2.addEventListener("click", function(){ligthclick(LuzChilloutOn2);}, false);
LuzChillout.addEventListener("click", function(){ligthclick(LuzChilloutOn2);}, false);
LuzBarbacoaOn2.addEventListener("click", function(){ligthclick(LuzBarbacoaOn2);}, false);
LuzBarbacoa.addEventListener("click", function(){ligthclick(LuzBarbacoaOn2);}, false);

// Set Cover onclick functions
PararPersiana.addEventListener("click", function(){coverclick('cover.persiana',Persiana.getAttribute("pos"));}, false);
BajarPersiana.addEventListener("click", function(){coverclick('cover.persiana',0);}, false);
SubirPersiana.addEventListener("click", function(){coverclick('cover.persiana',100);}, false);

ParaPantalla.addEventListener("click", function(){coverclick('cover.pantalla',PantallaMovil.getAttribute("pos"));}, false);
BajarPantalla.addEventListener("click", function(){coverclick('cover.pantalla',0);}, false);
SubirPantalla.addEventListener("click", function(){coverclick('cover.pantalla',100);}, false);
// Periodic Call to functions
setInterval(fadeligths,20);

var Entities={};
Entities['light.comedor']=LuzMesaComedorOn2;
LuzMesaComedorOn2.setAttribute('entity','light.comedor');

Entities['light.salon']=LuzSofaOn2;
LuzSofaOn2.setAttribute('entity','light.salon');

Entities['light.aseo']=LuzAseoOn2;
LuzAseoOn2.setAttribute('entity','light.aseo');

Entities['light.habitacion']=LuzHabitacionOn2;
LuzHabitacionOn2.setAttribute('entity','light.habitacion');

Entities['light.cocina']=LuzCocinaOn2;
LuzCocinaOn2.setAttribute('entity','light.cocina');

Entities['light.terraza_habitacion']=LuzTerrazaOn2;
LuzTerrazaOn2.setAttribute('entity','light.terraza_habitacion');

Entities['light.terraza_salon']=LuzTerrazaSalonOn2;
LuzTerrazaSalonOn2.setAttribute('entity','light.terraza_salon');

Entities['light.terraza_rincon']=LuzEscobasOn2;
LuzEscobasOn2.setAttribute('entity','light.terraza_rincon');

Entities['light.pared']=LuzSofaAmbienteOn2;
LuzSofaAmbienteOn2.setAttribute('entity','light.pared');

Entities['light.cuadro']=LuzCuadroOn2;
LuzCuadroOn2.setAttribute('entity','light.cuadro');

Entities['light.chillout']=LuzChilloutOn2;
LuzChilloutOn2.setAttribute('entity','light.chillout');

Entities['light.barbacoa']=LuzBarbacoaOn2;
LuzBarbacoaOn2.setAttribute('entity','light.barbacoa');

Entities['cover.pantalla']=PantallaMovil;
Entities['cover.persiana']=Persiana;

// Setup ClipPath rectangle to the Moving Parts
var ClipPantalla=initpersiana(PantallaMovil,"ClipPantalla");
var ClipPersiana=initpersiana(Persiana,"ClipPersiana");

// SELECT WS PROTOCOL
var httpProtocol = 'http://';
var wsProtocol = 'ws://';
if (window.location.protocol === 'https:')
	{
	httpProtocol = 'http://';
	wsProtocol = 'wss://';
	}

// REFRESH TOKEN
function refresh_token()
	{
	// RETRIEVE LAST hassToken
	var hassTokens = JSON.parse(localStorage.getItem('hassTokens'));

	// JSON VARIABLE
	var post_data={
	client_id: hassTokens.clientId,
	refresh_token: hassTokens.refresh_token,
	grant_type: 'refresh_token'
	};

	// POST REFRESH TOKEN
	$.post('/auth/token',post_data)
		.done(function(msg)
			{
			console.log(msg);
			var hassTokens = JSON.parse(localStorage.getItem('hassTokens'));
			hassTokens.access_token=msg.access_token;
			hassTokens.token_type=msg.token_type;
			hassTokens.expires_in=msg.expires_in;
			localStorage.setItem('hassTokens',JSON.stringify(hassTokens));
			})
		.fail(function(xhr, status, error) {console.log("ERROR: "+error+" STATUS: "+status);});
	}

// CREATE WEBSOCKET
const socket = new ReconnectingWebSocket(wsProtocol + location.host + "/api/websocket");

// ADD SOCKET EVENT LISTENERS
socket.addEventListener('open',       function(event) { console.log("CONNECTED"); });
socket.addEventListener('close',      function(event) { console.log("DISCONNECTED"); });
socket.addEventListener('connecting', function(event) { console.log("CONNECTING"); });
socket.addEventListener('error',      function(event) { console.log("ERROR"); });

// PARSE WEBSOCKET
socket.addEventListener('message', Parse_WebSocket);

// PARSE socket
function Parse_WebSocket(event)
		{
		// Parse socket response
		RES=JSON.parse(event.data);
		console.log(RES);

		// IF auth_required, SEND AUTH TOKEN
		if (RES.type=='auth_required')
			{
			console.log("AUTH REQUIRED");
			// GET LOCALSTORAGE TOKEN
			refresh_token();
			var hassTokens = JSON.parse(localStorage.getItem('hassTokens'));
			var auth = {};
			auth.type = "auth";
			auth.access_token = hassTokens.access_token;

			// SEND AUTH
			socket.send(JSON.stringify(auth));
			}

		// IF auth_invalid
		if (RES.type=='auth_invalid')
			{
			console.log("AUTH INVALID");
			}

		// IF auth_invalid, SUBSCRIBE TO EVENTS
		if (RES.type=='auth_ok')
			{
			console.log("AUTH OK");
			// create get_states object
			console.log("GET STATES");
			var get_states={};
			get_states.type='get_states';
			get_states.id=1;

			// SEND subscribe_events
			socket.send(JSON.stringify(get_states));

			// create subscribe_events object
			console.log("SUBSCRIBE EVENTS");
			var subscribe_events={};
			subscribe_events.type='subscribe_events';
			subscribe_events.id=2;
			// optional
			subscribe_events.event_type='state_changed';

			// SEND subscribe_events
			socket.send(JSON.stringify(subscribe_events));
			}

	  // ON GET STATES RESULT
		if (RES.type=='result' && RES.id==1)
			{
			RES.result.forEach(
				function(element)
					{
					//console.log(element);
					entity_id=element.entity_id;
					object=Entities[entity_id];
					new_state=element.state;
					current_position=element.attributes.current_position;
					if (object!==undefined)
						{
						if (new_state=='on') object.setAttribute('PowerOn','1');
						if (new_state=='off') object.setAttribute('PowerOn','0');
						if (entity_id=='cover.persiana' && current_position!=null) movepersiana(Persiana,ClipPersiana,current_position);
						if (entity_id=='cover.pantalla' && current_position!=null) movepersiana(PantallaMovil,ClipPantalla,current_position);
						}
					});
			}

		// ON EVENT
		if (RES.type=='event')
			{
			entity_id=RES.event.data.entity_id;
			new_state=RES.event.data.new_state.state;
			current_position=RES.event.data.new_state.attributes.current_position;
			object=Entities[entity_id];
			if (object!==undefined)
				{
				if (new_state=='on') object.setAttribute('PowerOn','1');
				if (new_state=='off') object.setAttribute('PowerOn','0');
				if (entity_id=='cover.persiana' && current_position!=null) movepersiana(Persiana,ClipPersiana,current_position);
				if (entity_id=='cover.pantalla' && current_position!=null) movepersiana(PantallaMovil,ClipPantalla,current_position);
				}
			console.log(entity_id+"="+new_state);
			console.log(entity_id+"="+current_position);
			}
		}

// FADE LIGTHS FUNCTION
function fadeligths()
	{
	changeopacity(LuzMesaComedorOn1,LuzMesaComedorOn2);
	changeopacity(LuzSofaOn1,LuzSofaOn2);
	changeopacity(LuzAseoOn1,LuzAseoOn2);
	changeopacity(LuzHabitacionOn1,LuzHabitacionOn2);
	changeopacity(LuzCocinaOn1,LuzCocinaOn2);
	changeopacity(LuzTerrazaOn1,LuzTerrazaOn2);
	changeopacity(LuzTerrazaSalonOn1,LuzTerrazaSalonOn2);
	changeopacity(LuzEscobasOn1,LuzEscobasOn2);
	changeopacity(LuzSofaAmbienteOn1,LuzSofaAmbienteOn2);
	changeopacity(LuzCuadroOn1,LuzCuadroOn2);
	changeopacity(LuzChilloutOn1,LuzChilloutOn2);
	changeopacity(LuzBarbacoaOn1,LuzBarbacoaOn2);
	}

// COMPUTE AND CHANGE LIGHTS OPACITY FUNCTION
function changeopacity(object1,object2)
	{
	var OPMULT=0.25;
	var OPINC=0.02;
	var opacity=parseFloat(object2.style.opacity)

	if (object2.getAttribute('PowerOn')=='1' && opacity<1)
		{
		opacity+=OPINC;
		object2.style.opacity=opacity;
		object1.style.opacity=opacity*OPMULT;
		}

	if (object2.getAttribute('PowerOn')=='0' && opacity>0)
		{
		opacity-=OPINC;
		object2.style.opacity=opacity;
		object1.style.opacity=opacity*OPMULT;
		}
	}

// COVER BUTTON CLICK FUNCTION
var id=3;
var change_cover={};
change_cover.type='call_service';
change_cover.id=3;
change_cover.domain='cover';
change_cover.service='set_cover_position',
change_cover.service_data={};
change_cover.service_data.entity_id='cover.persiana';
change_cover.service_data.position=0;
function coverclick(entity_id,pos)
	{
	id++;
	change_cover.id=id;
	change_cover.service_data.entity_id=entity_id;
	change_cover.service_data.position=pos;
	console.log(change_cover);
	socket.send(JSON.stringify(change_cover));

	//if (Ligth.getAttribute('PowerOn')=='1')Ligth.setAttribute('PowerOn','0'); else Ligth.setAttribute('PowerOn','1');
	}

// LIGHTS CLICK FUNCTION
var toggle_light={};
toggle_light.type='call_service';
toggle_light.id=3;
toggle_light.domain='light';
toggle_light.service='toggle',
toggle_light.service_data={};
toggle_light.service_data.entity_id='light.salon';
function ligthclick(Ligth)
	{
	id++;
	toggle_light.id=id;
	toggle_light.service_data.entity_id=Ligth.getAttribute('entity');
	console.log(toggle_light);
	socket.send(JSON.stringify(toggle_light));

	//if (Ligth.getAttribute('PowerOn')=='1')Ligth.setAttribute('PowerOn','0'); else Ligth.setAttribute('PowerOn','1');
	}

// TEST PERSIANA Y PANTALLA
//setInterval(pantalla,20);
var pos=0;
var dir=0.1;
function pantalla()
  {
  movepersiana(Persiana,ClipPersiana,pos);
  movepersiana(PantallaMovil,ClipPantalla,pos);
  if (pos>=100) dir=-0.1;
  if (pos<=0) dir=0.1;
  pos+=dir;
  }

function initpersiana(persiana,clippathid)
	{
	var svg = document.getElementsByTagName('svg')[0];
	var svgNS = svg.namespaceURI;
	var box = persiana.getBBox();

	var clipPath = document.createElementNS(svgNS,'clipPath');
	clipPath.setAttribute('id',clippathid);
	    var rect = document.createElementNS(svgNS,'rect');
	    rect.setAttribute('x',box.x);
	    rect.setAttribute('y',box.y);
	    rect.setAttribute('width',box.width);
	    rect.setAttribute('height',box.height);
    clipPath.appendChild(rect);

	persiana.setAttribute('clip-path','url(#'+clippathid+')');

	return svg.appendChild(clipPath);;

	}

function movepersiana(persiana,clippathid,pos)
	{
	var box = persiana.getBBox();
	var Y=-1*((box.height*pos)/100);

	persiana.setAttribute("pos",pos);
	persiana.setAttribute("transform","translate(0,"+Y.toString()+")");
	clippathid.setAttribute("transform","translate(0,"+(Y*-1).toString()+")");

	}
