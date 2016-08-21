var $ = require('jquery')

var Util = {
  currentRequest: null,
  search: function(data, callback){
    var key = 'AIzaSyDTej1Et8DPK5pc1gQ6rt4VGcJVknCGglA';
    var endpoint = 'https://www.googleapis.com/books/v1/volumes?q=' + data + '&projection=lite&key=' + key + '&maxResults=5';
    console.log('Ajax: '+ endpoint);
    this.currentRequest = $.ajax({
      url: endpoint,
      method: "GET",
      dataType: 'json',
      beforeSend : function() {          
        if(this.currentRequest != null) {
            this.currentRequest.abort();
            this.currentRequest = null
        }
      }.bind(this),
      success: function (data) {
        callback(data);
      },
      error: function (e) {
        console.log('ERROR')
      }
    });
  }

};

module.exports = Util;