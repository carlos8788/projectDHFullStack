window.addEventListener('DOMContentLoaded', () => { 
    const formSearch = document.querySelector('#form-search')

    formSearch.addEventListener('submit', (e) => {
        // e.preventDefault()

        const data = Object.fromEntries(new FormData(e.target))
        localStorage.setItem('search', JSON.stringify(data))
        
    })
})