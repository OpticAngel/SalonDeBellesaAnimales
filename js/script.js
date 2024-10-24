let cita = {
    nombreMascota: '',
    tipoMascota: '',
    raza: '',
    preferencias: ''
};

function agendarCita() {
    cita.nombreMascota = document.getElementById('nombreMascota').value;
    cita.tipoMascota = document.getElementById('tipoMascota').value;
    cita.raza = document.getElementById('raza').value;
    cita.preferencias = document.getElementById('preferencias').value;

    guardarCita(cita);

    mostrarCitas();

    generarTicket(cita);
}

function guardarCita(cita) {
    let citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citas));
}

function mostrarCitas() {
    let citas = JSON.parse(localStorage.getItem('citas')) || [];
    let listadoCitas = '';

    citas.forEach(function(c, index) {
        listadoCitas += `<p><strong>Mascota:</strong> ${c.nombreMascota}, <strong>Tipo:</strong> ${c.tipoMascota}, 
                         <strong>Raza:</strong> ${c.raza}, <strong>Preferencias:</strong> ${c.preferencias}</p>`;
    });

    document.getElementById('listaCitas').innerHTML = listadoCitas;
}

function generarTicket(cita) {
    let ticketHTML = `
        <html>
        <head>
            <title>Ticket de Cita</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                h2 {
                    color: #4CAF50;
                }
                p {
                    font-size: 18px;
                }
                .ticket-container {
                    border: 2px solid #ddd;
                    padding: 10px;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <div class="ticket-container">
                <h2>Ticket de Cita</h2>
                <p><strong>Mascota:</strong> ${cita.nombreMascota}</p>
                <p><strong>Tipo:</strong> ${cita.tipoMascota}</p>
                <p><strong>Raza:</strong> ${cita.raza}</p>
                <p><strong>Preferencias:</strong> ${cita.preferencias}</p>
            </div>
        </body>
        </html>
    `;

    let nuevaVentana = window.open('', '_blank');
    nuevaVentana.document.write(ticketHTML);
}

document.addEventListener('DOMContentLoaded', mostrarCitas);
