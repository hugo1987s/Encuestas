var pocoLider = "Tus rasgos como líder brillan por su ausencia. Te dejas llevar por la opinión y decisiones de los otros más que decidir por tu propia vida. Esta actitud puede esconder un bajo nivel de autoestima o un déficit de habilidades sociales. Revísalo.";
var medioLider = "Tienes una capacidad de liderazgo moderada. Tu actitud es inteligente pues te ahorra esfuerzos y te evita tener problemas. Eso sí, ten cuidado de no caer en la desidia ante situaciones en las que realmente pudiera resultarte ventajoso participar.";
var liderNato = "Tu rasgo de liderazgo es elevado. Necesitas sentirte el “jefe” u organizador de la mayoría de cosas en las que participas. Tal vez es tu forma de mostrar tu implicación. Está bien, pero recuerda que no siempre es posible y valora si realmente es necesario que asumas la responsabilidad de tantas cosas.";

var headingPocoLider = "Te dejas llevar"
var headingMedioLider = "Cuando es necesario me implico"
var headingLiderNato = "Jefe de equipo"

var cotaPocoLider = 7;
var cotaMedioLider = 14;

function Calcular()
{
    var radios = document.getElementsByClassName("form-check-input");
    var cantidadElegidos = 0;
    var sumatoria = 0;
    var cantidadPreguntas = 7;

    for (var i = 0; i < radios.length; i++) {
  
        
        if(radios.item(i).checked)
         {
             cantidadElegidos++;
             sumatoria += parseInt(radios.item(i).value);
         }  


     }

     if(cantidadElegidos != cantidadPreguntas)
     {
        alert("Hay preguntas sin responder, por favor, verificar.");
        return;
     }

     var txtResultado = document.getElementById("lblResultado");
     var txtHeading = document.getElementById("headingResults")

     if(sumatoria <= cotaPocoLider){
         txtHeading.innerHTML = headingPocoLider
        txtResultado.innerHTML = pocoLider;
     }
        
     else if (sumatoria <= cotaMedioLider)
        {
            txtHeading.innerHTML = headingMedioLider
            txtResultado.innerHTML = medioLider;
        }
     else
        {
            txtHeading.innerHTML = headingLiderNato
            txtResultado.innerHTML = liderNato;
        }
    
}