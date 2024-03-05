function insertionSort() {
    // Obtener la entrada del usuario y convertirla en un array de números
    var inputElement = document.getElementById("inputArray");
    var n = inputElement.value.split(",").map(Number);
    var v = n.slice();
    
    // Obtener la dirección de ordenamiento seleccionada por el usuario
    var orderDirection = document.getElementById("orderDirection").value;
    
    // Algoritmo de ordenamiento por inserción con dos ciclos for
    if (orderDirection == "noSelec") {
        alert("No Seleccionó Ordenamiento");
    } else {
        for (var i = 1; i < v.length; i++) {
            for (var j = i; j > 0 && ((orderDirection === "asc" && v[j - 1] > v[j]) || (orderDirection === "desc" && v[j - 1] < v[j])); j--) {
                // Intercambiar elementos
                var aux = v[j];
                v[j] = v[j - 1];
                v[j - 1] = aux;
            }
        }

        // Mostrar el array ordenado
        var resultElement = document.getElementById("result");
        resultElement.innerHTML = "Arreglo original: " + n.join(', ') + "<br>" +
                                  "Arreglo ordenado: " + v.join(', ');
    }
}
