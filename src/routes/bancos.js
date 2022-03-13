module.exports = function(application){
  application.get('/', function(req, res){
    application.src.controllers.bancos.index(application, req, res);
  });
}