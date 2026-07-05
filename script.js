document.getElementById('year').textContent = new Date().getFullYear();

(function () {
    const user = 'contact';
    const domain = 'ron.localplayer.dev';
    const address = user + '@' + domain;

    const mailBtn = document.getElementById('mail-btn');
    const mailText = document.getElementById('mail-text');

    mailText.textContent = address;
    mailBtn.setAttribute('href', 'mailto:' + address);
})();