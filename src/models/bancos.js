var fs = require('fs');

function bancos() {}

bancos.prototype.getBancos = function(callback) {
  fs.readFile('./data/bancos.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

      if (obj.bancos.length > 9) {
        var i = 9;
      } else {
        var i = (obj.bancos.length - 1);
      }
    
      obj.bancos.forEach(function(banco) {
        if (i >=  0) {
          data[i] = banco;
	        i--;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return bancos;
}