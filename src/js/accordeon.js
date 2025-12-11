const details = document.querySelectorAll("details");
details.forEach(e => {
    e.addEventListener('click', () => {
        details.forEach((det) => (det.open = false));
    })
});