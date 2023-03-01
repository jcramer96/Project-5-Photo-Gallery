window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

const photoSearch = document.getElementById('search');
let photos = document.querySelectorAll('.gallery a');


photoSearch.addEventListener('keyup', e =>{
    let currentValue = e.target.value.toLowerCase();

    photos.forEach(photo => {
        const caption = photo.getAttribute('data-caption');
        if (caption.toLowerCase().includes(currentValue)) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
});

// Animation Delay for Gallery

photos.forEach(photo => {
    let randomAniDelay = Math.floor(Math.random() * 500);
    photo.style.animation =  `fadeIn 1s .${randomAniDelay}s ease forwards`;
});