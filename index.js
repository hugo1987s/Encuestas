var pocoLider = "Tus rasgos como líder brillan por su ausencia. Te dejas llevar por la opinión y decisiones de los otros más que decidir por tu propia vida. Esta actitud puede esconder un bajo nivel de autoestima o un déficit de habilidades sociales. Revísalo.";
var medioLider = "Tienes una capacidad de liderazgo moderada. Tu actitud es inteligente pues te ahorra esfuerzos y te evita tener problemas. Eso sí, ten cuidado de no caer en la desidia ante situaciones en las que realmente pudiera resultarte ventajoso participar.";
var liderNato = "Tu rasgo de liderazgo es elevado. Necesitas sentirte el “jefe” u organizador de la mayoría de cosas en las que participas. Tal vez es tu forma de mostrar tu implicación. Está bien, pero recuerda que no siempre es posible y valora si realmente es necesario que asumas la responsabilidad de tantas cosas.";

var headingPocoLider = "Te dejas llevar"
var headingMedioLider = "Cuando es necesario me implico"
var headingLiderNato = "Jefe de equipo"

var cotaPocoLider = 7;
var cotaMedioLider = 14;



window.onload = function() {
    HideDivResultado()
    var radios = document.getElementsByClassName("form-check-input");

    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", function(){ HideDivResultado(); }); 
     }
  };

function Validar()
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

     var divRes = document.getElementById("divResultado")
     divRes.style.display = 'block';

     ToBottom();
}


function Calcular()
{
    var radios = document.getElementsByClassName("form-check-input");
    var cantidadElegidos = 0;
    var sumatoria = 0;
    var resultHeader = "";
    var resultText = "";

    for (var i = 0; i < radios.length; i++) {
        if(radios.item(i).checked)
         {
             cantidadElegidos++;
             sumatoria += parseInt(radios.item(i).value);
         }  
     }

     if(sumatoria <= cotaPocoLider){
        resultHeader = headingPocoLider
        resultText = pocoLider
     }
        
     else if (sumatoria <= cotaMedioLider)
        {
            resultHeader = headingMedioLider
            resultText = medioLider
        }
     else
        {
            resultHeader = headingLiderNato
            resultText = liderNato
        }

        var nombre = document.getElementById("txtNombre").value;

        var htmlBody = `<h1>¡Enhorabuena ${nombre}!</h1>
                <p>Has finalizado el test de Liderazgo y aquí te presentaremos los resultados</p>
                <h3>${resultHeader}</h3>
                <p>${resultText}</p>
                <br>
                <p>Muchas gracias por utilizar nuestro servicio!<br> Atte. El equipo de UTN - LTE</p>`;

        EnviarEmail(htmlBody);

        ToBottom();
}

function ToBottom()
{
    window.scrollTo(0,document.body.scrollHeight);
}

function Reset()
{
    ToTop();
    //HideDivResultado();
    ClearRadios();

}

function ToTop()
{
    //window.scroll(0,0);
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
}

function HideDivResultado()
{
    var divRes = document.getElementById("divResultado");
    divRes.style.display = 'none'; 
}

function ClearRadios()
{
    var radios = document.getElementsByClassName("form-check-input");
   
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}




function EnviarEmail(body)
{
    var emailTo = document.getElementById("txtEmail").value;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "megafonomailer",
        Password : "IvoVirginia2017",
        To : emailTo,
        From : "megafonomailer@gmail.com",
        Subject : "Resultados del test de Liderazgo",
        Body : body
    }).then(
      message => alert("Resultado enviado")
    );

}