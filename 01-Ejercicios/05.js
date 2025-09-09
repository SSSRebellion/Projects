
function verificarEdad() {
      let edad = document.getElementById("edad").value;
      let resultado = document.getElementById("resultado");

      if (edad === "") {
        resultado.textContent = "Por favor, escribe tu edad.";
      } else if (edad >= 18) {
        resultado.textContent = "Eres mayor de edad ";
      } else {
        resultado.textContent = "Eres menor de edad ";
      }
    }
