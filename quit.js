var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();

groupsList = document.querySelectorAll("#content > div > div.article > div.mod > div > ul")[0]
groupItems = groupsList.getElementsByTagName("li")
for (var i = 0; i < groupItems.length; i++) {  
  groupUrl = groupItems[i].getElementsByClassName("pic")[0].children[0].href;
  quitGroupUrl = groupUrl + "?action=quit&ck=DKmO";
  console.log("Quitting " + quitGroupUrl);
  
  client.get(quitGroupUrl, function(response) {
     console.log("Quited " + groupUrl);
  });
}
