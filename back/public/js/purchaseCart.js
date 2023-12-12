document.getElementById('endPurchase').addEventListener('click', function () {
    fetch('/cart/finalizePurchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: 'ok' }),
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Algo salió mal en el servidor');
            }
        })
        .then(data => {
            Swal.fire({
                title: "Compra realizada!",
                text: "Muchas gracias!",
                icon: "success"
            }).then(() => window.location.href = "/");
        })
        .catch(error => {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error"
            });
        });
})
