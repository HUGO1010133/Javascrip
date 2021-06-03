var time = 27
var saludo;

if (time >= 0 && time < 12) {
  saludo = "buenos dias";
} else if (time >= 12 && time < 20) {
  sasludo = "buenas tardes";
} else if (time >= 20 && time <= 24) {
  saludo = "buenas noches";
} else {
  saludo = "hora desconocida";
}
