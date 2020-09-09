'use strict'

const request = require("request");
const e = require("express");


var temporal= [];
var temp= [];
var id;
var nick;
var salida;

  
// buscar
function buscarApp(req, res) {
  var params = req.body;
  

  request("https://api.mercadolibre.com/sites/MLM/search?q="+params.busqueda+"&sort=price_asc", function(err, response, body){
  
    body = JSON.parse(body);
    
    
    for (var i = 0; i < body.results.length; i++){

      var marca = null;
      id=i;
      for (var j = 0; j < body.results[i].attributes.length; j++){

        if( body.results[i].attributes[j].id== "BRAND"){
          marca = body.results[i].attributes[j].value_name;
          
        }

      }
      
      
      
      
      nick = request("https://api.mercadolibre.com/users/"+body.results[i].seller.id, function(err, response, bodyii){
        
      bodyii = JSON.parse(bodyii);
        salida = bodyii.nickname;
        console.log(salida);  
      });
      
      
      temporal.push("{id:"+i+",sellerID:"+body.results[i].seller.id+",enviogratis:"+body.results[i].shipping.free_shipping+",tipologistica:"+body.results[i].shipping.logistic_type+",condicionart:"+body.results[i].condition+",lugaropera:"+body.results[i].address.city_name+",marca:"+marca+",nickname:"+salida+"}");
      
    }
      
      
    if(body.success != true){
          return res.status(201).send({
            suscess: false,
            data: temporal
          })
        }
  });
  
  

}


module.exports = {
  buscarApp
}
