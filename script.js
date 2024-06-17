let backgrounds = ['assents/imagens/bg-desktop.png', 'assents/imagens/bg-desktop2.png'];
let currentBg = 0;

function changeBackground() {
    currentBg = (currentBg + 1) % backgrounds.length;
    document.querySelector('.background').style.backgroundImage = `url('${backgrounds[currentBg]}')`;
    document.querySelector('.change-bg-btn').classList.toggle('active');
    document.querySelector('#divulgacao').classList.toggle('active');
    document.querySelector('#social-icons').classList.toggle('active');
}
