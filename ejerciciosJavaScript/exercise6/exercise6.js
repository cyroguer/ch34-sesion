function ordenamientoBurbuja(arr) {
    var n = arr.length;
    var intercambiado;
    
    for (var i = 0; i < n - 1; i++) {
        intercambiado = false;
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar elementos si están en el orden incorrecto
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                intercambiado = true;
            }
        }
        // Si no se hizo ningún intercambio en el bucle interno, la matriz ya está ordenada
        if (!intercambiado) {
            break;
        }
    }
}

// Ejemplo de uso:
var entrada = [3, 6, 12, 5, 100, 1];
ordenamientoBurbuja(entrada);
console.log("Lista ordenada:", entrada);
