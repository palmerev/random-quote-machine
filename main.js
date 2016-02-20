var DATA = new FormData();
data.append("method", "getQuote");
data.append("format", "json");
data.append("lang", "en");

var request = new XMLHttpRequest();
request.onload = function () {
    "use strict";
    console.log(JSON.parse(this.responseText));
}
request.open("POST", "http://api.forismatic.com/api/1.0/");
request.send(data);
