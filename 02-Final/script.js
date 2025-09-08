 const hobbies = ['Leer', 'programar', 'Jugar Video Juegos', 'Nadar' , 'Salir al aire libre'];

    // Hobbies
    const lista = document.getElementById("listaHobbies");
    hobbies.forEach(hobby => {
      const li = document.createElement("li");
      li.textContent = hobby;
      lista.appendChild(li);
    });

    //Saludo
    function mostrarSaludo() {
      const nombre = document.getElementById("nombre").value;
      const edad = document.getElementById("edad").value;
      const saludo = document.getElementById("saludo");

       if (edad > 15){
        saludo.textContent = `¡Hmm..., ${nombre}, Está muy viejo, dizque ${edad} años, ahahha!`;

      } else if (nombre && edad) {
        saludo.textContent = `¡Hola ${nombre}, tienes ${edad} años, You're so Young, enjoy uwu!`;
        
      }
      
      else {
        saludo.textContent = "Por favor ingresa tu nombre y edad.";
      }
    }

    function cambiarColor() {
      const colores = ["#f0f4f8", "#ffe4e1", "#e6ffe6", "#e0f7fa", "#fff3cd", "#d1c4e9"];
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      document.body.style.background = colorAleatorio;
    }
