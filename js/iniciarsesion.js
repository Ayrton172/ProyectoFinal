// Storing an object in localStorage
function iniciarsesion(){
    var data = { email: "email", pass: "password" };
    localStorage.setItem('user', JSON.stringify(data));

// Retrieving and parsing the object from localStorage
    var storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('User Object:', storedUser);
}
document .getElementById('btnlogin').addEventListener('click', () => {
    iniciarsesion({})
});

        // Función para guardar datos en localStorage
function guardarEnLocalStorage() {
    var datoInput1 = document.getElementById('datoInput1');
    var datoInput2 = document.getElementById('datoInput2');
    var dato = {email: datoInput1.value, password: datoInput2.value};

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("dato", JSON.stringify(dato));
        // Actualizar la sección de visualización
        mostrarLocalStorage();
    }

        // Función para mostrar datos almacenados en localStorage
    function mostrarLocalStorage() {
        var datoRecuperado = JSON.parse(localStorage.getItem("dato"));
        var mostrar = document.getElementById('mostrarLocalStorage');
        console.log(datoRecuperado)

        // Verificamos si hay un dato almacenado
        if (datoRecuperado) {
            mostrar.textContent = "Dato almacenado en localStorage: Email: " + datoRecuperado.email +" password: "+datoRecuperado.password;
        } else {
            mostrar.textContent = "No hay datos almacenados en localStorage.";
        } 
    }

        // Llamamos a mostrarLocalStorage al cargar la página
        mostrarLocalStorage();
}