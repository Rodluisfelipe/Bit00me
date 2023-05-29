document.getElementById("cv").addEventListener("click", function () {
    window.location.href = "https://drive.google.com/file/d/14JzKzKtmg0N5eskTWPdWIOQFaWAE94Pq/view";});
    function copiarAlPortapapeles(button) {
        var enlace = button.previousElementSibling.getAttribute("href");
    
        // Crear un elemento de input temporal
        var tempInput = document.createElement("input");
        tempInput.value = enlace;
        document.body.appendChild(tempInput);
    
        // Seleccionar el contenido del input temporal
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
    
        // Copiar el contenido al portapapeles
        document.execCommand("copy");
    
        // Eliminar el input temporal
        document.body.removeChild(tempInput);
    
        // Cambiar el texto del botón a "Copiado"
        button.textContent = "Copiado";
      }
    
