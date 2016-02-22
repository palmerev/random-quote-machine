$(document).ready(function () {
    function getQuote() {
      var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: displayQuote,
        success: function (results) {
          console.log("success: ", results);
          displayQuote(results);
        },
        error: function (results) {
          console.log("error: ", results);
        }
      });
    }

  function displayQuote(quote) {
    console.log("display quote running");
    var $qBody = $("#body"),
        $qAuthor = $("#author");
    $qBody.text(quote.quoteText);
    if (quote.quoteAuthor !== "") {
      $qAuthor.text(quote.quoteAuthor);
    }
    else {
      $qAuthor.text("unknown");
    }
  }

  var $getQuoteBtn = $("#get-quote-btn");
  $getQuoteBtn.on("click", getQuote);

  getQuote();
});
