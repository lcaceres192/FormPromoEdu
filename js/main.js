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
        /* info: {
            title: `Brief de pedido de difusion: ${nEvento}`,
            author: `${nombreSolicitante}`,
            subject: 'subject of document',
            keywords: 'keywords for document',
        }, */

        /*  content: [
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
             
 
         ] */

        content: [
            {
                text: 'BRIEF DE PEDIDO DE DIFUSIÓN',
                style: 'header',
                alignment: 'center'
            },
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam libero voluptates? Est sit cupiditate nihil alias odit qui totam?',
                style: 'subheader',
                alignment: 'center'
            },
            {
                layout: 'lightHorizontalLines', // optional
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: ['*', 'auto', 100, '*'],

                    body: [
                        [{ text: 'Ficha tecnica', colSpan: 4, aligment: 'left' }, {}, {}, {}],
                        /* [ 'First', 'Second', 'BRIEF DE PEDIDO DE DIFUSIÓN', 'The last one' ], */
                        [`Sede: `, `${sedeEvento}`, `Fecha: `, `${ffecha}`],
                        [`Objetivo difusión:`, `${obje}`, {}, {}],
                        [`Sede: `, `${sedeEvento}`, `Fecha: `, `${ffecha}`],
                    ]
                }
            },

            {
                layout: 'lightHorizontalLines', // optional
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: ['*', 'auto', 100, '*'],

                    body: [
                        [{ text: 'INFORMACIÓN DEL EVENTO', colSpan: 4, aligment: 'left' }, {}, {}, {}],
                        /* [ 'First', 'Second', 'BRIEF DE PEDIDO DE DIFUSIÓN', 'The last one' ], */
                        [`Numero de orden:`, `${orden}`, `Fecha: `, `${ffecha}`],
                        [{ text: `Nombre del Evento:` }, `${nEvento}`, {}, {}],
                        [{ text: `Nombre del Evento:` }, `${nEvento}`, {}, {}]
                    ]
                }
            }

        ],

        styles: {
            header: {
                fontSize: 36,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 16,

                margin: [0, 10, 0, 10]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        }



    };



    /* docDefinition.content = `Numero de orden: ${orden}`; */

    pdfMake.createPdf(docDefinition).download('name.pdf');

}

/* var docDefinition = { content: `Numero de orden: ${orden}` }; / `Numero de orden: ${varia}`,  content: [ ] /

docDefinition.content = `Numero de orden: ${orden}`; */