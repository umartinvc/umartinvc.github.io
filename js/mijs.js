// Octubre Popups
const recOctubre23Button = document.getElementById("recOctubre23");
const popupOverlay1 = document.getElementById("popupOverlayOcutbre23");
const popupOverlay2 = document.getElementById("popupOverlayOcutbre23_2");
const siguiente1Button = document.getElementById("siguiente1");
const cerrar1Button = document.getElementById("cerrar1");
const anterior2Button = document.getElementById("anterior2");
const cerrar2Button = document.getElementById("cerrar2");

recOctubre23Button.addEventListener("click", mostrarPopupOctubre1);
siguiente1Button.addEventListener("click", siguientePopupOctubre1);
cerrar1Button.addEventListener("click", cerrarPopupOctubre1);
anterior2Button.addEventListener("click", anteriorPopupOctubre2);
cerrar2Button.addEventListener("click", cerrarPopupOctubre2);

function mostrarPopupOctubre1(event) {
  event.preventDefault();
  popupOverlay1.style.display = "flex"; // Muestra el primer overlay
}

function siguientePopupOctubre1() {
  popupOverlay1.style.display = "none"; // Oculta el primer overlay
  popupOverlay2.style.display = "flex"; // Muestra el segundo overlay
}

function cerrarPopupOctubre1() {
  popupOverlay1.style.display = "none"; // Oculta el primer overlay
}

function anteriorPopupOctubre2() {
  popupOverlay2.style.display = "none"; // Oculta el segundo overlay
  popupOverlay1.style.display = "flex"; // Muestra el primer overlay
}

function cerrarPopupOctubre2() {
  popupOverlay2.style.display = "none"; // Oculta el segundo overlay
}

// Noviembre Popup
const btnRecordarNoviembre = document.getElementById("recNoviem");
const btnCerrarNoviembre = document.getElementById("cerrarNoviembre");
const cartelNoviembre = document.getElementById("cartelNoviembre");

btnRecordarNoviembre.addEventListener("click", mostrarPopupNoviembre);
btnCerrarNoviembre.addEventListener("click", cerrarPopupNoviembre);

function mostrarPopupNoviembre(event) {
  event.preventDefault();
  cartelNoviembre.style.display = "flex"; // Muestra el overlay de noviembre
}

function cerrarPopupNoviembre(event) {
  event.preventDefault();
  cartelNoviembre.style.display = "none"; // Oculta el overlay de noviembre
}

// Diciembre Popup
const btnRecordarDiciembre = document.getElementById("recDiciembre");
const btnCerrarDiciembre = document.getElementById("cerrarDiciembre");
const cartelDiciembre = document.getElementById("cartelDiciembre");
const siguienteDiciembre = document.getElementById("siguienteDiciembre");
const anteriorDiciembre = document.getElementById("anteriorDiciembre");
const cerrarDiciembre2 = document.getElementById("cerrarDiciembre2");
const cartelDiciembre2 = document.getElementById("cartelDiciembre2");
const cartelDiciembre3 = document.getElementById("cartelDiciembre3");
const siguienteDiciembre2 = document.getElementById("siguienteDiciembre2");
const anteriorDiciembre2 = document.getElementById("anteriorDiciembre2");
const cerrarD3 = document.getElementById("cerrarD3");

btnRecordarDiciembre.addEventListener("click", mostrarDiciembre);
btnCerrarDiciembre.addEventListener("click", cerrarDiciembre);
siguienteDiciembre.addEventListener("click", mostrarDiciembre2);
cerrarDiciembre2.addEventListener("click", cerrarD2);
anteriorDiciembre.addEventListener("click", anteriorD);
siguienteDiciembre2.addEventListener("click", mostrarDiciembre3);
anteriorDiciembre2.addEventListener("click", anteriorD2);
cerrarD3.addEventListener("click", cerrarDiciembre3);

function mostrarDiciembre(event) {
  event.preventDefault();
  cartelDiciembre.style.display = "flex"; // Muestra el overlay de diciembre
}

function cerrarDiciembre(event) {
  event.preventDefault();
  cartelDiciembre.style.display = "none"; // Oculta el overlay de diciembre
}

function mostrarDiciembre2(event) {
  event.preventDefault();
  cartelDiciembre.style.display = "none";
  cartelDiciembre2.style.display = "flex"; // Muestra el segundo overlay de diciembre
}

function mostrarDiciembre3(event) {
  event.preventDefault();
  cartelDiciembre2.style.display = "none";
  cartelDiciembre3.style.display = "flex"; // Muestra el tercer overlay de diciembre
}

function cerrarD2(event) {
  event.preventDefault();
  cartelDiciembre2.style.display = "none"; // Oculta el segundo overlay de diciembre
}

function anteriorD(event) {
  event.preventDefault();
  cartelDiciembre2.style.display = "none";
  cartelDiciembre.style.display = "flex"; // Muestra el primer overlay de diciembre
}

function anteriorD2(event) {
  event.preventDefault();
  cartelDiciembre3.style.display = "none";
  cartelDiciembre2.style.display = "flex"; // Muestra el segundo overlay de diciembre
}

function cerrarDiciembre3(event) {
  event.preventDefault();
  cartelDiciembre3.style.display = "none";
}

// Enero 2024
const btnRecordarEnero = document.getElementById("recEnero");
const cartelEnero1 = document.getElementById("cartelEnero1");
const cartelEnero2 = document.getElementById("cartelEnero2");
const btnSiguienteEnero1 = document.getElementById("siguienteEnero1");
const btnCerrarEnero1 = document.getElementById("cerrarEnero1");
const btnAnteriorEnero2 = document.getElementById("anteriorEnero2");
const btnCerrarEnero2 = document.getElementById("cerrarEnero2");

btnRecordarEnero.addEventListener("click", function(event) {
  event.preventDefault();
  cartelEnero1.style.display = "flex";
});

btnSiguienteEnero1.addEventListener("click", function() {
  cartelEnero1.style.display = "none";
  cartelEnero2.style.display = "flex";
});

btnCerrarEnero1.addEventListener("click", function() {
  cartelEnero1.style.display = "none";
});

btnAnteriorEnero2.addEventListener("click", function() {
  cartelEnero2.style.display = "none";
  cartelEnero1.style.display = "flex";
});

btnCerrarEnero2.addEventListener("click", function() {
  cartelEnero2.style.display = "none";
});

// Febrero 2024
const btnRecordarFebrero = document.getElementById("recFebrero");
const cartelFebrero = document.getElementById("cartelFebrero");
const btnCerrarFebrero = document.getElementById("cerrarFebrero");

btnRecordarFebrero.addEventListener("click", function(event) {
  event.preventDefault();
  cartelFebrero.style.display = "flex";
});

btnCerrarFebrero.addEventListener("click", function() {
  cartelFebrero.style.display = "none";
});

// Marzo 2024
const btnRecordarMarzo = document.getElementById("recMarzo");
const cartelMarzo = document.getElementById("cartelMarzo");
const btnCerrarMarzo = document.getElementById("cerrarMarzo");

btnRecordarMarzo.addEventListener("click", function(event) {
  event.preventDefault();
  cartelMarzo.style.display = "flex";
});

btnCerrarMarzo.addEventListener("click", function() {
  cartelMarzo.style.display = "none";
});

// Abril 2024
const btnRecordarAbril = document.getElementById("recAbril");
const cartelAbril = document.getElementById("cartelAbril");
const btnCerrarAbril = document.getElementById("cerrarAbril");

btnRecordarAbril.addEventListener("click", function(event) {
  event.preventDefault();
  cartelAbril.style.display = "flex";
});

btnCerrarAbril.addEventListener("click", function() {
  cartelAbril.style.display = "none";
});

// Mayo 2024
const btnRecordarMayo = document.getElementById("recMayo");
const cartelMayo = document.getElementById("cartelMayo");
const btnCerrarMayo = document.getElementById("cerrarMayo");

btnRecordarMayo.addEventListener("click", function(event) {
  event.preventDefault();
  cartelMayo.style.display = "flex";
});

btnCerrarMayo.addEventListener("click", function() {
  cartelMayo.style.display = "none";
});

// Junio 2024
const btnRecordarJunio = document.getElementById("recJunio");
const cartelJunio = document.getElementById("cartelJunio");
const btnCerrarJunio = document.getElementById("cerrarJunio");

btnRecordarJunio.addEventListener("click", function(event) {
  event.preventDefault();
  cartelJunio.style.display = "flex";
});

btnCerrarJunio.addEventListener("click", function() {
  cartelJunio.style.display = "none";
});

// Julio 2024
const btnRecordarJulio = document.getElementById("recJulio");
const cartelJulio = document.getElementById("cartelJulio");
const btnCerrarJulio = document.getElementById("cerrarJulio");

btnRecordarJulio.addEventListener("click", function(event) {
  event.preventDefault();
  cartelJulio.style.display = "flex";
});

btnCerrarJulio.addEventListener("click", function() {
  cartelJulio.style.display = "none";
});

// Agosto 2024
const btnRecordarAgosto = document.getElementById("recAgosto");
const cartelAgosto = document.getElementById("cartelAgosto");
const btnCerrarAgosto = document.getElementById("cerrarAgosto");

btnRecordarAgosto.addEventListener("click", function(event) {
  event.preventDefault();
  cartelAgosto.style.display = "flex";
});

btnCerrarAgosto.addEventListener("click", function() {
  cartelAgosto.style.display = "none";
});

// Septiembre 2024
const btnRecordarSeptiembre = document.getElementById("recSeptiembre");
const cartelSeptiembre = document.getElementById("cartelSeptiembre");
const btnCerrarSeptiembre = document.getElementById("cerrarSeptiembre");

btnRecordarSeptiembre.addEventListener("click", function(event) {
  event.preventDefault();
  cartelSeptiembre.style.display = "flex";
});

btnCerrarSeptiembre.addEventListener("click", function() {
  cartelSeptiembre.style.display = "none";
});

// Octubre 2024
const btnRecordarOctubre = document.getElementById("recOctubre");
const cartelOctubre1 = document.getElementById("cartelOctubre1");
const cartelOctubre2 = document.getElementById("cartelOctubre2");
const btnSiguienteOctubre1 = document.getElementById("siguienteOctubre1");
const btnCerrarOctubre1 = document.getElementById("cerrarOctubre1");
const btnAnteriorOctubre2 = document.getElementById("anteriorOctubre2");
const btnCerrarOctubre2 = document.getElementById("cerrarOctubre2");

btnRecordarOctubre.addEventListener("click", function(event) {
  event.preventDefault();
  cartelOctubre1.style.display = "flex";
});

btnSiguienteOctubre1.addEventListener("click", function() {
  cartelOctubre1.style.display = "none";
  cartelOctubre2.style.display = "flex";
});

btnCerrarOctubre1.addEventListener("click", function() {
  cartelOctubre1.style.display = "none";
});

btnAnteriorOctubre2.addEventListener("click", function() {
  cartelOctubre2.style.display = "none";
  cartelOctubre1.style.display = "flex";
});

btnCerrarOctubre2.addEventListener("click", function() {
  cartelOctubre2.style.display = "none";
});
