// Copyright 2012 Constantine Sapuntzakis
//

function onload() {
    var ws = window.location.search;

  if (ws !== undefined) {
      var kvs = ws.substring(1).split('&');
      for (var i = 0; i < kvs.length; i++) {
         var kv = kvs[i].split('=');
         if (kv[0] == 'url') {
             let url = window.location.href
             document.getElementById("p1").innerHTML = url;
            
                       
            var url = decodeURIComponent(kv[1]);
            u.href = url;
            u.appendChild(document.createTextNode(url));
         }
      }
  }
}

document.addEventListener('DOMContentLoaded', onload);

