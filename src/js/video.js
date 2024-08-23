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
        }
    });
}, {
    threshold: 0.1
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element) );


document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.equipe-imagem');
    const image = document.querySelector('.image-to-fade');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          image.classList.add('image-visible');
        }
      });
    }, {
      threshold: 0.7 // Ajuste conforme necessário
    });
  
    observer.observe(section);
  });