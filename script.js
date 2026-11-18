(function () {
    'use strict';

    // year
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // email assembled at runtime to keep it out of plain-HTML scrapers
    var address = 'contact' + '@' + 'ron.localplayer.dev';
    var link = document.getElementById('mail-link');
    var text = document.getElementById('mail-text');
    var copyBtn = document.getElementById('copy-btn');
    var status = document.getElementById('copy-status');

    if (link && text) {
        link.setAttribute('href', 'mailto:' + address);
        text.textContent = address;
    }

    if (copyBtn && navigator.clipboard) {
        copyBtn.hidden = false;
        copyBtn.setAttribute('aria-label', 'Copy email address');
        copyBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(address).then(function () {
                copyBtn.textContent = 'copied';
                if (status) status.textContent = 'Email address copied';
                setTimeout(function () { copyBtn.textContent = 'copy'; }, 1800);
            }).catch(function () {
                if (status) status.textContent = 'Could not copy. Select the address and copy it manually.';
            });
        });
    }

    // decorative hex dump in hero
    var hex = document.getElementById('hex');
    if (hex) {
        var bytes = 'ron'.split('').map(function (c) { return c.charCodeAt(0); });
        var seed = bytes[0] * 31 + bytes[1] * 17 + bytes[2];
        var rows = [];
        for (var r = 0; r < 8; r++) {
            var offset = ('0000' + (r * 16).toString(16)).slice(-4);
            var cells = [];
            for (var i = 0; i < 8; i++) {
                seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                cells.push(('0' + (seed >> 8 & 255).toString(16)).slice(-2));
            }
            if (r === 2) { cells[0] = '<b>72</b>'; cells[1] = '<b>6f</b>'; cells[2] = '<b>6e</b>'; }
            rows.push(offset + '  ' + cells.join(' '));
        }
        hex.innerHTML = rows.join('\n');
    }

    // scroll reveal
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('in'); });
        return;
    }
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el, i) {
        el.style.setProperty('--d', (i % 4) * 70 + 'ms');
        io.observe(el);
    });
})();
