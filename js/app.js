//Carrega um componente pelo ID
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o componente:', error));
}

//Chamada para carregar o sidebar
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('../sidebar.html', 'sidebar-container');
});