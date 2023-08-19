'use strict';

window.onload = function () {
    /* effet scroll */
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    /* burger menu */
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');

        if (mobile_menu.classList.contains('is-active')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    const mobile_nav_links = document.querySelectorAll('.mobile-nav a');

    mobile_nav_links.forEach(link => {
        link.addEventListener('click', function () {
            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
            enableScroll(); // Réactiver le défilement après avoir cliqué sur un élément du menu
        });
    });

    /* effet menu */
    var prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        var header = document.querySelector('header');

        if (prevScrollPos > currentScrollPos) {
            header.classList.remove('hide');
        } else {
            header.classList.add('hide');
        }

        prevScrollPos = currentScrollPos;
    };

    /* phrase déroulante */
    const intros = document.querySelectorAll('.intro');

    intros.forEach(intro => {
        const introContent = intro.querySelector('.intro-content');

        introContent.addEventListener('click', () => {
            intro.classList.toggle('active');
            header.classList.add('hide'); // Cacher le header lors du clic sur un élément du menu
        });
    });

    function disableScroll() {
        // Désactiver le défilement de la souris
        window.addEventListener('wheel', preventDefaultScroll, { passive: false });

        // Désactiver le défilement tactile
        window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
    }

    function enableScroll() {
        // Réactiver le défilement de la souris
        window.removeEventListener('wheel', preventDefaultScroll);

        // Réactiver le défilement tactile
        window.removeEventListener('touchmove', preventDefaultScroll);
    }

    function preventDefaultScroll(event) {
        event.preventDefault();
    }
};






