document.querySelector('#form-edit').addEventListener('submit', function (event) {
    event.preventDefault();
   
    const formData = new FormData(event.target);
    let id = window.location.href.split('/').pop();

    fetch('/product/edit/' + id, {
        method: 'PUT',
        
        body: formData
    })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: "Producto actualizado",
                    text: 'producto actualizado con exito',
                    icon: 'success',
                }).then(()=> window.location.href = '/');

            } else {
                throw new Error('Error en la actualización del producto');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
})