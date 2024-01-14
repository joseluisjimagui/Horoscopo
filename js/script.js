// Example starter JavaScript for disabling form submissions if there are invalid fields
var sexo = document.getElementById("validationCustom03").value;
var dia = document.getElementById("validationCustom04").value;
var mes = document.getElementById("validationCustom05").value;
var anio = document.getElementById("validationCustom06").value;
var texto = "";
(function() {
    'use strict'
    var saludo = function() {
        var nombre = document.getElementById("validationCustom01").value;
        var apellidos = document.getElementById("validationCustom02").value;
        texto = "Asi que tú eres " + nombre + "...interesante nombre, tus apellidos son " + apellidos + ", ";
    }
    var suerteSexo = function(sexo) {
        if (sexo == 2) {
            texto = texto + "la vida sera algo dura, pero nada compleja, sabras que lo mejor, es reservarse para esa persona que tienes en el corazon....." + ", ";
        } else {
            texto = texto + "todo en este momento te resulta dificil todo, pero la verdad es que lo ves mas oscuro y complejo.....";
        }
    }
    var suerteDia = function(dia) {
        if (dia % 2 == 0) {
            texto = texto + "siempre te elebraran, pero cuidado, no todos los hacen de corazon, ";
        } else {
            texto = texto + "tendras pocas amistades, pero son de las que mas valen, ";
        }
    }
    var suerteMes = function(mes) {
        if (dia % 2 == 0) {
            texto = texto + "estaras en el principio y el final, pero nunca en proceso....";
        } else {
            texto = texto + "nunca veras como se crearon o como terminan las cosas, pero aydaras a construilas....";
        }
    }
    var suerteAnio = function(anio) {
        if (dia % 2 == 0) {
            texto = texto + "y al final de todo, te veras fragil, como una estrella, alrededor de muchas mas.";
        } else {
            texto = texto + "y la paz no vendra por ti, siempre ocupado, pero cuandose termine todo, tal vez encuentres lo que te falta.";
        }
    }
    var presionarEnviar = function() {
        texto = "";
        saludo();
        suerteSexo();
        suerteDia();
        suerteMes();
        suerteAnio();
        document.getElementById("textoRespuesta").innerHTML = texto;
        cambiarViDiv();
    }
    var cambiarViDiv = function() {
        var x = document.getElementById("respuesta");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                presionarEnviar();
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated')
        }, false)
    })
})()