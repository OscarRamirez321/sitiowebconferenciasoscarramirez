document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const carrera = document.getElementById("carrera").value.trim();
    const conferencias = document.querySelectorAll("input[name='conferencias']:checked");
  
    if (nombre === "" || correo === "" || carrera === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    if (!correo.endsWith("@uam.edu.ni")) {
      alert("El correo debe ser institucional (@uam.edu.ni).");
      return;
    }
  
    if (conferencias.length === 0) {
      alert("Selecciona al menos una conferencia.");
      return;
    }
  
    // Mostrar mensaje de éxito
    document.getElementById("mensajeExito").style.display = "block";
  
    // Reiniciar formulario después de 2 segundos
    setTimeout(() => {
      document.getElementById("registroForm").reset();
      document.getElementById("mensajeExito").style.display = "none";
    }, 3000);
  });
  