var clock;
var weekday;
var date;
var clases;
var currentClase;
var currentGroup;
var currentProfesor;
var sigClase;
var sigProfe;
var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
var weekdays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

function load() {
  clock = document.getElementById("clock");
  weekday = document.getElementById("weekday");
  date = document.getElementById("date");
  clases = document.getElementById("clases");
  restante = document.getElementById("restante");

  setInterval(update, 1000 / 30);
}
function SiguienteClase() {
  sigClase = currentClase;
  sigProfe = currentProfesor;
}
var Horario = [
  //lun mar mie jue vie
  [7, 7, 7, 7, 7],
  [0, 1, 6, 2, 3],
  [0, 1, 5, 2, 3],
  [4, 0, 6, 2, 5],
  [4, 0, 6, 2, 3],
  [4, 0, 6, 0, 5],
  [7, 7, 7, 7, 7],
];
// preclase, clase 1, clase 2, clase 3, clase 4, clase 5
var horasMaterias = [1.5, 2.5, 4, 5.5, 7, 8.5, 10];
function Materias(mat) {
  switch (mat) {
    case 0:
      currentClase = "  ";
      currentProfesor = "ninguno";
      currentGroup = "  ";
      break;
    case 1:
      currentClase = "Ingeniería económica";
      currentProfesor = "Feregrino Leyva Blanca Marina";
      currentGroup = "5AV4";
      break;
    case 2:
      currentClase = "Teoría de control I";
      currentProfesor = "Cantera Cantera Luis Alberto";
      currentGroup = "5AV4";
      break;
    case 3:
      currentClase = "Maquinas eléctricas I";
      currentProfesor = "Franco Montes José Uriel";
      currentGroup = "5AV4";
      break;
    case 4:
      currentClase = "Preparación y transporte de materiales";
      currentProfesor = "Pérez Vázquez Marisol";
      currentGroup = "5AV4";
      break;
    case 5:
      currentClase = "Electrónica operacional";
      currentProfesor = "Godoy Rodríguez Luis";
      currentGroup = "5AV4";
      break;
    case 6:
      currentClase = "Elementos primarios de medición";
      currentProfesor = "Tolentino Eslava René";
      currentGroup = "5AV4";
      break;
    case 7:
      currentClase = "  ";
      currentProfesor = "  ";
      currentGroup = "  ";
      break;
  }
}
function horaf12(h) {
  return (h + 12) * 60;
}
function update() {
  var currentTime = new Date();
  var currentTime2 = currentTime;
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  var currentDay = currentTime.getDay();
  var remtime;
  var currenthoramin = currentHour * 60 + currentMinute;
  var clasesSioNo = "no";
  var AMorPM = "PM";

  if (
    currenthoramin >= horaf12(horasMaterias[0]) &&
    currenthoramin < horaf12(horasMaterias[1])
  ) {
    Materias(Horario[currentDay][1]);
    SiguienteClase();
    Materias(Horario[currentDay][0]);
    remtime = horaf12(horasMaterias[1]) - currenthoramin;
  }
  if (
    currenthoramin >= horaf12(horasMaterias[1]) &&
    currenthoramin < horaf12(horasMaterias[2])
  ) {
    Materias(Horario[currentDay][1]);
    SiguienteClase();
    Materias(Horario[currentDay][0]);
    remtime = horaf12(horasMaterias[2]) - currenthoramin;
  }
  if (
    currenthoramin >= horaf12(horasMaterias[2]) &&
    currenthoramin < horaf12(horasMaterias[3])
  ) {
    Materias(Horario[currentDay][2]);
    SiguienteClase();
    Materias(Horario[currentDay][1]);
    remtime = horaf12(horasMaterias[3]) - currenthoramin;
  }
  if (
    currenthoramin >= horaf12(horasMaterias[3]) &&
    currenthoramin < horaf12(horasMaterias[4])
  ) {
    Materias(Horario[currentDay][3]);
    SiguienteClase();
    Materias(Horario[currentDay][2]);
    remtime = horaf12(horasMaterias[4]) - currenthoramin;
  }
  if (
    currenthoramin >= horaf12(horasMaterias[4]) &&
    currenthoramin < horaf12(horasMaterias[5])
  ) {
    Materias(Horario[currentDay][4]);
    SiguienteClase();
    Materias(Horario[currentDay][3]);
    remtime = horaf12(horasMaterias[5]) - currenthoramin;
  }
  if (
    currenthoramin >= horaf12(horasMaterias[5]) &&
    currenthoramin < horaf12(horasMaterias[6])
  ) {
    Materias(Horario[currentDay][5]);
    SiguienteClase();
    Materias(Horario[currentDay][4]);
    remtime = horaf12(horasMaterias[6]) - currenthoramin;
  }
  if (currentHour < 12) {
    AMorPM = "AM";
  }
  if (currentHour > 12) {
    currentHour = currentHour - 12;
  }
  if (currentHour == 0) {
    currentHour = 12;
  }
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }

  clock.innerHTML = currentHour + ":" + currentMinute;
  //	clock.innerHTML = clock.innerHTML + " " + AMorPM;

  weekday.innerHTML = weekdays[currentTime.getDay()];

  //	date.innerHTML = (currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear();
  date.innerHTML =
    months[currentTime.getMonth()] +
    " " +
    currentTime.getDate() +
    ", " +
    currentTime.getFullYear();

  //	clases.innerHTML = :
  if (currentDay < 6 && currentDay > 0) {
    if (
      currenthoramin >= horaf12(horasMaterias[1]) &&
      currenthoramin <= horaf12(horasMaterias[6])
    ) {
      clases.innerHTML =
        currentClase + " - " + currentGroup + "<br>" + currentProfesor;
      restante.innerHTML = "Tiempo restante: " + remtime + ":";
      if (60 - currentSeconds == 60) {
        restante.innerHTML = restante.innerHTML + "00";
      } else if (60 - currentSeconds < 10) {
        restante.innerHTML = restante.innerHTML + "0" + (60 - currentSeconds);
      } else if (60 - currentSeconds <= 60) {
        restante.innerHTML = restante.innerHTML + (60 - currentSeconds);
      }
      if (sigProfe == "ninguno") {
        siguiente.innerHTML = "<br> Siguiente clase: <br> Horario libre";
      }
      if (currentProfesor == "ninguno") {
        clases.innerHTML = "Horario libre <br>";
      }
      if (sigClase != "  ") {
        siguiente.innerHTML =
          "<br> Siguiente clase: <br>" + sigClase + "<br>" + sigProfe;
      }
    } else if (currenthoramin >= horaf12(horasMaterias[6])) {
      clases.innerHTML = "  ";
      restante.innerHTML = "  ";
      siguiente.innerHTML = "  ";
    }
    if (
      currenthoramin >= horaf12(horasMaterias[0]) &&
      currenthoramin < horaf12(horasMaterias[1]) &&
      currentDay < 6 &&
      currentDay > 0
    ) {
      remtime = horaf12(horasMaterias[1]) - currenthoramin;
      restante.innerHTML =
        "Tiempo restante para inicio de clase: " + remtime + ":";
      if (60 - currentSeconds == 60) {
        restante.innerHTML = restante.innerHTML + "00";
      } else if (60 - currentSeconds < 10) {
        restante.innerHTML = restante.innerHTML + "0" + (60 - currentSeconds);
      } else if (60 - currentSeconds <= 60) {
        restante.innerHTML = restante.innerHTML + (60 - currentSeconds);
      }
      restante.innerHTML = restante.innerHTML + "<br>" + currentClase;
    }
  }
}
