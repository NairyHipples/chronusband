$(document).ready(function() {
  if (window.location.href.indexOf("/gallery-live", "/gallery-promo") > -1) {
    $('.referens').addClass('active');

  } else {
    $('.referens').removeClass('active');
  }

  (function() {
    var hidden = "hidden";
    var visible = "visible";
    var loaded = "loaded";

    // Standards:
    if (hidden in document)
      document.addEventListener("visibilitychange", onchange);
    else if ((hidden = "mozHidden") in document)
      document.addEventListener("mozvisibilitychange", onchange);
    else if ((hidden = "webkitHidden") in document)
      document.addEventListener("webkitvisibilitychange", onchange);
    else if ((hidden = "msHidden") in document)
      document.addEventListener("msvisibilitychange", onchange);
    // IE 9 and lower:
    else if ("onfocusin" in document)
      document.onfocusin = document.onfocusout = onchange;
    // All others:
    else
      window.onpageshow = window.onpagehide
      = window.onfocus = window.onblur = onchange;

    function onchange (evt) {
      var v = "visible", h = "hidden",
          evtMap = {
            focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
          };

      evt = evt || window.event;
      if (evt.type in evtMap)
        document.body.className = evtMap[evt.type];
      else (document.body.className = this[hidden] ? "hidden" : "visible loaded");
      if (document.getElementById("bodyElement").classList.contains("visible"))
      setTimeout(function(){ document.getElementById("bodyElement").className = "visible loaded"; }, 1500);

    }

    // set the initial state (but only if browser supports the Page Visibility API)
    if( document[hidden] !== undefined )
      onchange({type: document[hidden] ? "blur" : "focus"});
  })();
  
});