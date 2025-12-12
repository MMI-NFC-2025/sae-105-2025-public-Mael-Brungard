const btn_list = document.querySelector('.section--filtre__btn-list');
const filtres = document.querySelectorAll('.filtre');
let activeFiltres = '';
const filtresOptions = {
    genre: ['Reggae', 'Rock', 'Pop', 'Electro', 'Hip-Hop'],
    horaire: ['Après-midi', 'Soirée', 'Nuit'],
    scene: ['Scène principale', 'Scène alternative', 'Scène acoustique']
};
filtres.forEach(filtre => {
    filtre.addEventListener('click', () => {
        const filtreId = filtre.id;
        const options = filtresOptions[filtreId];
        if (activeFiltres === filtreId) {
            btn_list.innerHTML = '';
            activeFiltres = '';
        } else {
            // Clear previous buttons
            btn_list.innerHTML = '';
            options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'filtre-option';
                button.textContent = option;
                btn_list.appendChild(button);
            });
            activeFiltres = filtreId;
        }
    })
});