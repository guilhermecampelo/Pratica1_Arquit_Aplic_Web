var fs = require('fs');

function bancos() {}

bancos.prototype.getBancos = function(callback) {
  fs.readFile('./data/bancosBr.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

      if (obj.bancosBr.length > 4) {
        var i = 4;
      } else {
        var i = (obj.bancosBr.length - 1);
      }
    
      obj.bancosBr.forEach(function(banco) {
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