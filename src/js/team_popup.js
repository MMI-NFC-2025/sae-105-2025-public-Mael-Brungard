const teamIMG = document.querySelectorAll('.section--equipe__list img');
document.body.addEventListener('touchmove', (e) => {
    if (document.body.classList.contains("scroll-listener")) {
        document.body.classList.remove('scroll-listener');
        hideOverlay();
    };
});
document.addEventListener('scroll', (e) => {
    if (document.body.classList.contains("scroll-listener")) {
        document.body.classList.remove('scroll-listener');
        hideOverlay();
    };
});
const team = {
    valentine: {
        name: 'Valentine Dupont',
        role: 'Chef de projet',
        description: 'Valentine est responsable de la coordination globale du projet, assurant que toutes les équipes travaillent en harmonie pour atteindre les objectifs fixés.'
    },
    pedro: {
        name: 'Pedro Silva',
        role: 'Responsable logistique',
        description: 'Pedro gère tous les aspects logistiques du festival, y compris la planification des transports, l\'hébergement et la gestion des fournisseurs.'
    }
    , maxence: {
        name: 'Maxence Martin',
        role: 'Directeur artistique',
        description: 'Maxence est en charge de la sélection des artistes et de la programmation musicale du festival, veillant à offrir une expérience diversifiée et captivante aux festivaliers.'
    },
    lea: {
        name: 'Léa Bernard',
        role: 'Ingénieure du son',
        description: 'Léa supervise la qualité sonore de l\'événement, travaillant en étroite collaboration avec les techniciens pour garantir une expérience audio optimale.'
    },
    constance: {
        name: 'Constance Dubois',
        role: 'Technicienne lumière',
        description: 'Constance est responsable de la conception et de la mise en œuvre des effets lumineux, créant une ambiance visuelle immersive pour les performances.'
    },
    roxanne: {
        name: 'Roxanne Lefèvre',
        role: 'Responsable sécurité',
        description: 'Roxanne coordonne les mesures de sécurité pour assurer la sûreté des participants, du personnel et des artistes tout au long du festival.'
    },
    evan: {
        name: 'Evan Moreau',
        role: 'Coordinateur support',
        description: 'Evan assure le support opérationnel pendant le festival, aidant à résoudre les problèmes et à coordonner les équipes sur le terrain.'
    },
    nina: {
        name: 'Nina Rousseau',
        role: 'Assistante logistique',
        description: 'Nina assiste Pedro dans la gestion logistique, contribuant à la planification et à l\'exécution des opérations quotidiennes du festival.'
    },
    camille: {
        name: 'Camille Fontaine',
        role: 'Technicienne support',
        description: 'Camille travaille aux côtés d\'Evan pour fournir un support technique et opérationnel, garantissant le bon déroulement des activités du festival.'
    }
}
console.log(teamIMG);
teamIMG.forEach(img => {
    img.addEventListener('click', () => {
        const popup = document.querySelector('.section--equipe__popup');
        const url = img.getAttribute('src');
        const name = img.getAttribute('id');
        popup.querySelector('img').setAttribute('src', url);
        popup.querySelector('.section--equipe__popup__name').textContent = team[name].name;
        popup.querySelector('.section--equipe__popup__role').textContent = team[name].role;
        popup.querySelector('.section--equipe__popup__description').textContent = team[name].description;
        popup.classList.add('section--equipe__popup--show');
        document.body.classList.add('scroll-listener');
    });
});
function hideOverlay() {
    const popup = document.querySelector('.section--equipe__popup');
    popup.classList.remove('section--equipe__popup--show');
}

// festival.html