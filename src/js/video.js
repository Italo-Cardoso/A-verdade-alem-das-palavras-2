document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('meuVideo');
    video.volume = 0.1;
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('meuVideo');
    var toggleSoundButton = document.getElementById('toggleSound');

    toggleSoundButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            video.volume = 0.2; // Define o volume desejado
            toggleSoundButton.textContent = "🔊";
        } else {
            video.muted = true;
            toggleSoundButton.textContent = "🔇";
        }
    });
});

const myObserver = new IntersectionObserver ((entries) => {
    entries.forEach ( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element) );

