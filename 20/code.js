/*
    Conceptos
    1.  BOM (Browser Object Model): Que contiene el navegador, history, screen, location, 
        los cuales son hijos de window
    2.  DOM (Document Objetc Model): Es una interfaz para HTML, CSS y SVG que nos facilita 
        una forma de arbol sobre la que podemos trabajar con JavaScript. 
*/

function allDate(){
    
    var fecha = new Date();
    var hh = fecha.getUTCHours();
    var mm = fecha.getUTCMonth();
    var ss = fecha.getSeconds();

    console.log(fecha);
    console.log(hh);
    console.log(mm);
    console.log(ss);

}

function systemInformation(){

    console.log(window.navigator.appCodeName);
    console.log(window.navigator.appName);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.platform);
    console.log(window.navigator.product);
    console.log(window.navigator.userAgent);
    console.log(window.navigator.javaEnabled());
    console.log(window.navigator.language);
    console.log(window.navigator.languages);
    console.log(window.navigator.onLine);
    console.log(window.navigator.mimeTypes);
    console.log("_________________________________")
    console.log(window.navigator.plugins[0][0]['description']);

}
/*  https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas - Uso de promesas
    Pagina sobre el uso de promesas y como consumirlas.
    Definiremos una promesa como un objeto que representa la finalizacion de un una operacion asincrona 
    en javascript, usamos la funcion then que sirve para poder consumir una funcion asincrona 
    en esta declaramos una funcion que recibe el primer parametro que recibe el primer parametro si este 
    llamado fue hecho de manera correcta y se recibe un segundo parametro si  
*/

navigator.getBattery().then(function(bateria, falloCallback, thirdParameter){
    console.log("Bateria cargando", bateria.charging);
})

