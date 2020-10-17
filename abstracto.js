console.log('Hola desde abstracto');

const mostrarPrecio = document.getElementById('mostrarPrecio')
let precioTotal = document.getElementById('precioTotal')
let abstracto1 = document.getElementById('abstractoCompra1');
let abstracto2 = document.getElementById('abstractoCompra2');
let abstracto3 = document.getElementById('abstractoCompra3');
let abstracto4 = document.getElementById('abstractoCompra4');
let abstracto5 = document.getElementById('abstractoCompra5');
let abstracto6 = document.getElementById('abstractoCompra6');


abstracto1Precio = parseInt('100');
abstracto2Precio = parseInt('200');
abstracto3Precio = parseInt('300');
abstracto4Precio = parseInt('400');
abstracto5Precio = parseInt('500');
abstracto6Precio = parseInt('600');


function mostrarPrecioTotal() {
  if (abstracto1.checked && !abstracto2.checked && !abstracto3.checked && !abstracto4.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio);
  } else if (abstracto2.checked && !abstracto1.checked && !abstracto3.checked && !abstracto4.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto2Precio);
  } else if (abstracto3.checked && !abstracto1.checked && !abstracto2.checked && !abstracto4.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto3Precio);
  } else if (abstracto4.checked && !abstracto1.checked && !abstracto3.checked && !abstracto2.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto4Precio);
  } else if (abstracto5.checked && !abstracto1.checked && !abstracto3.checked && !abstracto4.checked && !abstracto2.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto5Precio);
  } else if (abstracto6.checked && !abstracto1.checked && !abstracto3.checked && !abstracto4.checked && !abstracto5.checked && !abstracto2.checked){
    precioTotal.innerHTML = "$" + (abstracto6Precio);
  }
  else if (abstracto1.checked && abstracto2.checked && !abstracto3.checked && !abstracto4.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto2Precio);
  } else if (abstracto1.checked && abstracto3.checked && !abstracto2.checked && !abstracto4.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto3Precio);
  } else if (abstracto1.checked && abstracto4.checked && !abstracto3.checked && !abstracto2.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto4Precio);
  } else if (abstracto1.checked && abstracto5.checked && !abstracto3.checked && !abstracto4.checked && !abstracto2.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto5Precio);
  } else if (abstracto1.checked && abstracto6.checked && !abstracto3.checked && !abstracto4.checked && !abstracto5.checked && !abstracto2.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto6Precio);
  }
  else if (abstracto2.checked && abstracto3.checked && !abstracto1.checked && !abstracto4.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto2Precio + abstracto3Precio);
  } else if (abstracto2.checked && abstracto4.checked && !abstracto3.checked && !abstracto1.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto2Precio + abstracto4Precio);
  } else if (abstracto2.checked && abstracto5.checked && !abstracto3.checked && !abstracto1.checked && !abstracto4.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto2Precio + abstracto5Precio);
  } else if (abstracto2.checked && abstracto6.checked && !abstracto3.checked && !abstracto1.checked && !abstracto5.checked && !abstracto4.checked){
    precioTotal.innerHTML = "$" + (abstracto2Precio + abstracto6Precio);
  }
  else if (abstracto3.checked && abstracto4.checked && !abstracto2.checked && !abstracto1.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto3Precio + abstracto4Precio);
  } else if (abstracto3.checked && abstracto5.checked  && !abstracto2.checked && !abstracto1.checked && !abstracto4.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto3Precio + abstracto5Precio);
  } else if (abstracto3.checked && abstracto6.checked && !abstracto2.checked && !abstracto1.checked && !abstracto5.checked && !abstracto4.checked){
    precioTotal.innerHTML = "$" + (abstracto3Precio + abstracto6Precio);
  }
  else if (abstracto4.checked && abstracto5.checked && !abstracto3.checked && !abstracto1.checked && !abstracto2.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto4Precio + abstracto5Precio);
  } else if (abstracto4.checked && abstracto6.checked && !abstracto3.checked && !abstracto1.checked && !abstracto5.checked && !abstracto2.checked){
    precioTotal.innerHTML = "$" + (abstracto4Precio + abstracto6Precio);
  }
  else if (abstracto5.checked && abstracto6.checked && !abstracto3.checked && !abstracto1.checked && !abstracto2.checked && !abstracto4.checked){
    precioTotal.innerHTML = "$" + (abstracto5Precio + abstracto6Precio);
  }
  else if (abstracto1.checked && abstracto2.checked && abstracto3.checked && !abstracto4.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto2Precio + abstracto3Precio);
  } else if (abstracto1.checked && abstracto2.checked && abstracto4.checked && !abstracto3.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto2Precio + abstracto4Precio);
  } else if (abstracto1.checked && abstracto2.checked && abstracto5.checked && !abstracto3.checked && !abstracto4.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto2Precio + abstracto5Precio);
  } else if (abstracto1.checked && abstracto2.checked && abstracto6.checked && !abstracto3.checked && !abstracto5.checked && !abstracto4.checked){
    precioTotal.innerHTML = "$" + (abstracto1Precio + abstracto2Precio + abstracto6Precio);
  }
  else if (abstracto2.checked && abstracto3.checked && abstracto4.checked && !abstracto1.checked && !abstracto5.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto2Precio + abstracto3Precio + abstracto4Precio);
  } else if (abstracto2.checked && abstracto3.checked && abstracto5.checked && !abstracto1.checked && !abstracto4.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto2Precio + abstracto3Precio + abstracto5Precio);
  } else if (abstracto2.checked && abstracto3.checked && abstracto6.checked && !abstracto1.checked && !abstracto5.checked && !abstracto4.checked){
    precioTotal.innerHTML = "$" + (abstracto2Precio + abstracto3Precio + abstracto6Precio);
  }
  else if (abstracto3.checked && abstracto4.checked && abstracto5.checked && !abstracto1.checked && !abstracto2.checked && !abstracto6.checked){
    precioTotal.innerHTML = "$" + (abstracto3Precio + abstracto4Precio + abstracto6Precio);
  } else if (abstracto3.checked && abstracto4.checked && abstracto6.checked && !abstracto1.checked && !abstracto2.checked && !abstracto5.checked){
    precioTotal.innerHTML = "$" + (abstracto3Precio + abstracto4Precio + abstracto6Precio);
  } else if (abstracto3.checked && abstracto4.checked && abstracto1.checked && !abstracto6.checked && !abstracto2.checked && !abstracto5.checked){
    precioTotal.innerHTML = "$" + (abstracto3Precio + abstracto4Precio + abstracto1Precio);
  }
  else if (abstracto4.checked && abstracto5.checked && abstracto6.checked && !abstracto1.checked && !abstracto2.checked && !abstracto3.checked){
    precioTotal.innerHTML = "$" + (abstracto4Precio + abstracto5Precio + abstracto6Precio);
  } else if (abstracto4.checked && abstracto5.checked && abstracto1.checked && !abstracto6.checked && !abstracto2.checked && !abstracto3.checked){
    precioTotal.innerHTML = "$" + (abstracto4Precio + abstracto5Precio + abstracto1Precio);
  } else if (abstracto4.checked && abstracto5.checked && abstracto2.checked && !abstracto6.checked && !abstracto1.checked && !abstracto3.checked){
    precioTotal.innerHTML = "$" + (abstracto4Precio + abstracto5Precio + abstracto2Precio);
  } else {
    alert("No has seleccionado ningun artículo");
  }
}

mostrarPrecio.addEventListener("click", mostrarPrecioTotal);
