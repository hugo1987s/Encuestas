var pocoLider = "Tus rasgos como líder brillan por su ausencia. Te dejas llevar por la opinión y decisiones de los otros más que decidir por tu propia vida. Esta actitud puede esconder un bajo nivel de autoestima o un déficit de habilidades sociales. Revísalo.";
var medioLider = "Tienes una capacidad de liderazgo moderada. Tu actitud es inteligente pues te ahorra esfuerzos y te evita tener problemas. Eso sí, ten cuidado de no caer en la desidia ante situaciones en las que realmente pudiera resultarte ventajoso participar.";
var liderNato = "Tu rasgo de liderazgo es elevado. Necesitas sentirte el “jefe” u organizador de la mayoría de cosas en las que participas. Tal vez es tu forma de mostrar tu implicación. Está bien, pero recuerda que no siempre es posible y valora si realmente es necesario que asumas la responsabilidad de tantas cosas.";

var headingPocoLider = "Te dejas llevar"
var headingMedioLider = "Cuando es necesario me implico"
var headingLiderNato = "Jefe de equipo"

var cotaPocoLider = 7;
var cotaMedioLider = 14;



window.onload = function () {
    HideDivResultado()
    var radios = document.getElementsByClassName("form-check-input");

    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", function () { HideDivResultado(); });
    }
};

function Validar(cantidadPreguntas) {
    var radios = document.getElementsByClassName("form-check-input");
    var cantidadElegidos = 0;
    var sumatoria = 0;


    for (var i = 0; i < radios.length; i++) {
        if (radios.item(i).checked) {
            cantidadElegidos++;
            sumatoria += parseInt(radios.item(i).value);
        }
    }

    if (cantidadElegidos != cantidadPreguntas) {
        alert("Hay preguntas sin responder, por favor, verificar.");
        return;
    }

    var divRes = document.getElementById("divResultado")
    divRes.style.display = 'block';

    ToBottom();
}


function Calcular(nombreTest) {
    var radios = document.getElementsByClassName("form-check-input");
    var sumatoria = 0;
    var resultBody = "";

    for (var i = 0; i < radios.length; i++) {
        if (radios.item(i).checked) {
            sumatoria += parseInt(radios.item(i).value);
        }
    }

    switch (nombreTest) {
        case "Liderazgo":
            resultBody = GetResultLiderazgo(sumatoria);
            break;

        case "Comunicación":
            resultBody = GetResultComunicacion(sumatoria);
            break;

        case "Trabajo en Equipo":
            resultBody = GetResultTrabajo(sumatoria);
            break;

        case "Gestión":
            resultBody = GetResultGestion(sumatoria);
            break;

        case "Negociación":
            resultBody = GetResultNegociacion(sumatoria);
            break;
    }

    var nombre = document.getElementById("txtNombre").value;

    var htmlBody = `<h1>¡Enhorabuena ${nombre}!</h1>
                <p>Has finalizado el test de ${nombreTest} y a continuación te presentaremos los resultados</p>
                ${resultBody}
                <br>
                <p>Muchas gracias por utilizar nuestro servicio!<br> Atte. El equipo de UTN - LTE</p>`;

    EnviarEmail(htmlBody, nombreTest);

    ToBottom();
}


function GetResultNegociacion(sumatoria){
    var resultHeader = "";
    var resultText = "";

    if (sumatoria <= 24) {
        resultHeader = "Negociador novato"
        resultText = `Su puntaje ha sido de ${sumatoria} lo que indica que usted va a tener un camino más largo de aprendizaje para mejorar sus habilidades negociadoras.`
    }

    else if (sumatoria <= 39) {
        resultHeader = "Va por el buen camino"
        resultText = `Su puntaje ha sido de ${sumatoria} lo que indica que usted negocia bien pero precisa mejorar técnicas. Vamos! Usted puede lograrlo!`
    }
    else {
        resultHeader = "Gran negociador"
        resultText =  `Su puntaje ha sido de ${sumatoria} lo que indica que usted tiene las características de un buen negociador`
    }

    return `<h3>${resultHeader}</h3><p>${resultText}</p>`

}

function GetResultLiderazgo(sumatoria) {
    var resultHeader = "";
    var resultText = "";

    if (sumatoria <= cotaPocoLider) {
        resultHeader = headingPocoLider
        resultText = pocoLider
    }

    else if (sumatoria <= cotaMedioLider) {
        resultHeader = headingMedioLider
        resultText = medioLider
    }
    else {
        resultHeader = headingLiderNato
        resultText = liderNato
    }

    return `<h3>${resultHeader}</h3><p>${resultText}</p>`
}

var cotaComu1 = 7
var cotaComu2 = 14
var cotaComu3 = 21

var comuDinamita = "Solo necesitas que alguien fume cerca de ti para estallar. Dices lo que piensas cuando y donde quieres, algo que te enorgullece de corazón, pero que no siempre es bueno. Hay momentos más o menos propicios para hablar, y formas de decir las cosas sin desatar una tormenta. El problema es que a veces piensas que tienes la verdad absoluta, y que el mundo está en tu contra, por eso tiendes a victimizarte cuando las personas te llevan la contraria. Esta forma de ser hace que tengas problemas con frecuencia a la hora de hacer amigos, en reuniones familiares y en el trabajo. Las personas reconocen tu carisma y talento en otras áreas, pero pocos están dispuestos a pasar tiempo contigo. Necesitas comenzar a cambiar o tarde o temprano te quedarás solo.";
var comuEscurridizo = "Eres un evasor comunicativo. Prefieres acomodarte bajo la sombra del árbol más grande, porque temes ser rechazado o excluido por tener ideas propias. Esto te impide ser una persona asertiva, porque para empezar no te gusta hablar mucho. Estás convencido de que para encajar es mejor dejarse llevar por la corriente y adaptarse a los demás cuando, en realidad, solo estás renunciando a tu personalidad vilmente. ¡Cuidado! Ser un títere nunca es bueno. En algún momento, la vida te pondrá a prueba.";
var comuTejedor = "Tu consigna es: 'Un plan de comunicación para cada situación'. Tejes tu discurso con pinzas y tu principal habilidad es quedar bien con todo el mundo (casi siempre). La desventaja de ser un 'diplomático' A veces, en la vida se requiere tener un criterio formado sobre ciertos temas y cruzar la acera constantemente para dejar una buena impresión puede hacerte parecer falto de carácter o hipócrita. Como dicen por ahí: 'Nadie es moneda de oro para caerle bien a todo el mundo'. Esta es una verdad incómoda, pero verdad al fin, así que no esperes ser la adoración de la humanidad. ¡Párate firme cuando sea necesario!";
var comuPoeta = "Eres un verdadero Houdini de la comunicación. Aunque te has visto en aprietos, has sabido manejar los momentos incómodos bastante bien gracias a que no te tomas nada personal. Respetar las opiniones de los demás es fácil para ti, porque tú mismo tienes las tuyas. Festejas el compartir emociones, sueños e historias de vida en público, ya que siempre estás en busca de experiencias enriquecedoras. Vives la vida como un poeta nómada, aprendiendo a cada paso. Solo un consejo: habrá momentos en los que tendrás que ponerte al 'mismo nivel' de los demás y expresar claramente lo que piensas. De lo contrario, las personas podrán confundir tu soltura con desinterés, y meterte en problemas (sobre todo en las relaciones de pareja).";


function GetResultComunicacion(sumatoria) {
    var resultHeader = "";
    var resultText = "";

    if (sumatoria <= cotaComu1) {
        resultHeader = "Dinamita"
        resultText = comuDinamita
    }
    else if (sumatoria <= cotaComu2) {
        resultHeader = "Escurridizo"
        resultText = comuEscurridizo
    }
    else if (sumatoria <= cotaComu3) {
        resultHeader = "Tejedor"
        resultText = comuTejedor
    }
    else {
        resultHeader = "Poeta"
        resultText = comuPoeta
    }
    return `<h3>${resultHeader}</h3><p>${resultText}</p>`
}



function BackHome()
{
    window.location.href = 'index.html';
}

function ToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function Reset() {
    ToTop();
    ClearRadios();

}

function ToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function HideDivResultado() {
    var divRes = document.getElementById("divResultado");
    divRes.style.display = 'none';
}

function ClearRadios() {
    var radios = document.getElementsByClassName("form-check-input");

    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}




function EnviarEmail(body, test) {
    var emailTo = document.getElementById("txtEmail").value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "megafonomailer",
        Password: "IvoVirginia2017",
        To: emailTo,
        From: "megafonomailer@gmail.com",
        Subject: `Resultados del test de ${test}`,
        Body: body
    }).then(
        message => alert("Resultado enviado")
    );

}