window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.addProduct');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            Swal.fire({
                title: 'Ingrese la cantidad',
                input: 'number',
                inputLabel: 'Cantidad',
                inputPlaceholder: 'Escribe la cantidad aquí',
                inputAttributes: {
                    'min': '1',
                    'step': '1',
                    'max': '20'
                },
                showCancelButton: true,
                confirmButtonText: 'Agregar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {
                    const cantidad = Number(result.value);
                    fetch('/cart', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ cantidad, id: button.getAttribute('id') })
                    })
                        .then(response => {
                            if (!response.ok) {
                                Swal.fire({
                                    title: "Error! ❌",
                                    text: 'Error al agregar el producto',

                                });
                            } else {
                                Swal.fire({
                                    title: "Producto agregado",
                                    text: 'Producto agregado con exito',
                                });
                            }
                        })
                        .then(data => {
                            console.log(data)
                        })
                }
            }).catch(error => {

                console.log(error)
            })


        })
    })
});