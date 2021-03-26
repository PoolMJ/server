//https://www.eclipse.org/paho/clients/js/






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
   client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "pemaldonado.fie@unach.edu.ec",
    password: "625366236",
    onSuccess:onConnect,
    onFailure:doFail
  }


  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("pemaldonado.fie@unach.edu.ec/pagweb");
    message = new Paho.MQTT.Message("Conectado..........!!!..!!.!..");
    message.destinationName = "pemaldonado.fie@unach.edu.ec/psd";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }





  // called when a message arrives
  // visualizacion de los estados del led
  
function onMessageArrived(message) {
	 texto=(message.payloadString);
	 document.getElementById("estado").innerHTML=texto;
}


  // envio de las acciones de los botones hacia PROTEUS
  
function LED_PRENDIDO(){
	console.log("Led Prendido");
	message=new Paho.MQTT.Message("ledP");
	message.destinationName="pemaldonado.fie@unach.edu.ec/psd";
	client.send(message);
}

function LED_APAGADO(){
	console.log("Led Apagado");
	message=new Paho.MQTT.Message("ledA");
	message.destinationName="pemaldonado.fie@unach.edu.ec/psd";
	client.send(message);
}
