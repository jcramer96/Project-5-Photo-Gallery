const photoSearch = document.getElementById('search');

photoSearch.addEventListener('keyup', e =>{
    let currentValue = e.target.value.toLowerCase();
    let photos = document.querySelectorAll('img');

    photos.forEach(photo => {
        const caption = photo.getAttribute('data-caption');
        if (caption.toLowerCase().includes(currentValue)) {
            photo.style.display = 'grid';
        } else {
            photo.style.display = 'none';
        }
    });
});


const photos = document.querySelectorAll('img');

photos.forEach(photo => {
    let randomAniDelay = Math.floor(Math.random() * 500);
    photo.style.animation =  `fadeIn 1s .${randomAniDelay}s ease forwards`;
});