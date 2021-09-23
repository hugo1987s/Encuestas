window.onload = function init()
{
    document.getElementById("divDetalleLiderazgo").style.display = 'none';
    document.getElementById("divDetalleComunicacion").style.display = 'none';
    document.getElementById("divDetalleNegociacion").style.display = 'none';
    document.getElementById("divDetalleTrabajo").style.display = 'none';
    document.getElementById("divDetalleGestion").style.display = 'none';
    document.getElementById("divGoTest").style.display = 'none';
}


function ddlTestChange()
{
    var ddl = document.getElementById("ddlTest").value;
 
    document.getElementById("divDetalleLiderazgo").style.display = 'none';
    document.getElementById("divDetalleComunicacion").style.display = 'none';
    document.getElementById("divDetalleNegociacion").style.display = 'none';
    document.getElementById("divDetalleTrabajo").style.display = 'none';
    document.getElementById("divDetalleGestion").style.display = 'none';
    document.getElementById("divGoTest").style.display = 'none';

    document.getElementById("divDetalle" + ddl).style.display = 'block';

    if(ddl != "Seleccione una opción")
    {
        document.getElementById("divGoTest").style.display = 'block'; 
    }

}

function GoTest()
{
    var ddl = document.getElementById("ddlTest").value;

    switch(ddl)
    {
        case "Liderazgo":
            window.location.href = 'liderazgo.html';
        break;
        case "Comunicacion":
            window.location.href = 'comunicacion.html';
        break;
        case "Negociacion":
            window.location.href = 'negociacion.html';
        break;
        case "Trabajo":
            window.location.href = 'trabajo.html';
        break;
        case "Gestion":
            window.location.href = 'gestion.html';
        break;
    }

}