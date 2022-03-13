var fs = require('fs');

function bancos() {}

bancos.prototype.getBancos = function(callback) {
  fs.readFile('./data/bancosBrs.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

      if (obj.bancosBrs.length > 9) {
        var i = 9;
      } else {
        var i = (obj.bancosBrs.length - 1);
      }
    
      obj.bancosBrs.forEach(function(bancosBr) {
        if (i >=  0) {
          data[i] = bancosBr;
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