let orden;
let ffecha;
let nEvento;
let areaSolicitante;
let nombreSolicitante;
let sedeEvento;
let obje;
let dEven;
let hInicio;
let hFin;
let mailRefe;
let programa;
let diser;
let obs;


/* Genrador de numero de Orden */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let random = getRndInteger(100, 999);
document.getElementById("nOrden").value = random;
/* Genrador de numero de Orden */


/* Fecha */
/* Genera Fecha */
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let todayDate = String(date.getDate()).padStart(2, '0');
let datePattern = year + '-' + month + '-' + todayDate;
/* Escribe fecha en input id=Fecha */
document.getElementById("fecha").value = datePattern;
/* document.write(datePattern); */
/* Fecha */


function crearPDF() {
    orden = document.getElementById("nOrden").value
    ffecha = document.getElementById("fecha").value
    nEvento = document.getElementById("nombreEvento").value
    areaSolicitante = document.getElementById("area").value
    nombreSolicitante = document.getElementById("nSolicitante").value
    sedeEvento = document.getElementById("sede").value
    obje = document.getElementById("objetivo").value
    dEven = document.getElementById("diaEvento").value
    hInicio = document.getElementById("horaInicio").value
    hFin = document.getElementById("horaFin").value
    mailRefe = document.getElementById("emailSolicitante").value
    programa = document.getElementById("prog").value
    diser = document.getElementById("disertante").value
    obs = document.getElementById("obser").value

    

    var docDefinition = {
        info: {
            title: `Brief de pedido de difusion: ${nEvento}`,
            author: `${nombreSolicitante}`,
            subject: 'subject of document',
            keywords: 'keywords for document',
        },

        content: [
            `Numero de orden: ${orden}`,
            `Fecha: ${ffecha}`,
            `Nombre del Evento: ${nEvento}`,
            `Area: ${areaSolicitante}`,
            `Solicitante: ${nombreSolicitante}`,
            `Sede: ${sedeEvento}`,
            `Objetivo difusión: ${obje}`,
            `Día del evento: ${dEven}`,
            `Hora de inicio: ${hInicio}`,
            `Hora de fin: ${hFin}`,
            `Email de referente: ${mailRefe}`,
            `Programa del evento: ${programa}`,
            `Disertante: ${diser}`,
            `Observaciones: ${obs}`,
            

        ]
    };



    /* docDefinition.content = `Numero de orden: ${orden}`; */

    pdfMake.createPdf(docDefinition).download('name.pdf');

}

/* var docDefinition = { content: `Numero de orden: ${orden}` }; / `Numero de orden: ${varia}`,  content: [ ] /

docDefinition.content = `Numero de orden: ${orden}`; */