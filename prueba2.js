const targetElement = document.querySelectorAll('p')[0]; // Reemplaza '.nombre' con el selector de tus elementos HTML
let finalName = ['JOHN DOE']; // Reemplaza con los nombres que deseas mostrar

function animateName(targetElement, finalName) {
  
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    const interval = 100; // Intervalo entre cada cambio de letra en milisegundos
    let currentIndex = 0;
  
    const animation = setInterval(() => {
      // Generar letra aleatoria
      const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  
      // Construir el texto animado
      const animatedText = finalName.substring(0, currentIndex) + randomChar + finalName.substring(currentIndex + 1);
  
      // Actualizar el contenido
      if (isTextNode) {
        targetElement.parentNode.replaceChild(document.createTextNode(animatedText), targetElement);
      } else {
        targetElement.innerHTML = animatedText;
      }
  
      // Pasar al siguiente índice cuando se encuentre la letra correcta
      if (randomChar === finalName[currentIndex]) {
        currentIndex++;
      }
  
      // Detener la animación cuando se haya mostrado todo el nombre
      if (currentIndex >= finalName.length) {
        clearInterval(animation);
      }
    }, interval);
  }
    
  
  animateName(targetElement, finalName);
  