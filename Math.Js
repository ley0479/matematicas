// Incluye la librería Math.js
// <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.5.2/math.min.js"></script>

document.getElementById('enviar-respuestas').addEventListener('click', function() {
    // Obtener las respuestas del usuario
    const suma = document.getElementById('suma').value;
    const resta = document.getElementById('resta').value;
    const multiplicacion = document.getElementById('multiplicacion').value;
    const division = document.getElementById('division').value;
    const modulo = document.getElementById('modulo').value;
    const argumento = document.getElementById('argumento').value;
  
    // Calcular las respuestas correctas
    const respuestaSuma = math.add(math.complex(3, 4), math.complex(1, 2)).toString();
    const respuestaResta = math.subtract(math.complex(5, 6), math.complex(2, 3)).toString();
    const respuestaMultiplicacion = math.multiply(math.complex(2, 3), math.complex(4, 5)).toString();
    const respuestaDivision = math.divide(math.complex(6, 8), math.complex(3, 4)).toString();
    const respuestaModulo = math.abs(math.complex(3, 4)).toString();
    const respuestaArgumento = math.arg(math.complex(3, 4)).toString();
  
    // Verificar las respuestas
    const respuestasCorrectas = [respuestaSuma, respuestaResta, respuestaMultiplicacion, respuestaDivision, respuestaModulo, respuestaArgumento];
    const respuestasUsuario = [suma, resta, multiplicacion, division, modulo, argumento];
  
    let puntaje = 0;
    respuestasUsuario.forEach((respuesta, index) => {
      if (respuesta.trim() === respuestasCorrectas[index]) {
        puntaje++;
      }
    });
  
    // Calcular la media aritmética
    const mediaAritmetica = puntaje / respuestasCorrectas.length;
  
    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Puntaje: ${puntaje} / 6 <br> Media Aritmética: ${mediaAritmetica}`;
  });
  