import hamburguerMenu from './dom/menu_hamburguesa.js';
import { digitalClock, alarm } from './dom/reloj.js'; 
import {shorcuts, moveBall} from './dom/teclado.js';
import countdown from './dom/cuenta_regresiva.js';
import  scrollTopBtn from './dom/boton_scroll.js';
import darkTheme from './dom/tema_oscuro.js';
import responsiveMedia from './dom/objeto_responsive.js';
import responsiveTester from './dom/prueba_responsive.js';

const d = document;

d.addEventListener('DOMContentLoaded',e => {

    hamburguerMenu('.panel-btn','.panel','.menu a');
    digitalClock('#reloj','#activar-reloj', '#desactivar-reloj');
    alarm('./assets/alarm.mp3', '#activar-alarma', '#desactivar-alarma');
    countdown('countdown', 'Mar 06, 2021, 03:00:00', 'feliz cumple caito!');
    scrollTopBtn('.scroll-top-btn');
    responsiveMedia('youtube', '(min-width: 1024px)', `<a href="https://www.youtube.com/watch?v=e_Th4Tji5Io" target="_blank" rel="noopener">Ver Video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/e_Th4Tji5Io" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia('gmap', '(min-width: 1024px)', `<a href="https://goo.gl/maps/4sp9UrYXjFn4BmhB9"
    target='_blank' rel='noopener'>Ver Mapa</a>`, `<iframe src=
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276845!2d-58.3837590853841!3d-34.60373888045951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1597182626728!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveTester('responsive-tester');

});

d.addEventListener('keydown',e => {
    shorcuts(e);
    moveBall(e, '.ball', '.stage')
});

darkTheme('.dark-theme-btn','dark-mode')

// `<a href:"https://www.youtube.com/watch?v=e_Th4Tji5Io"
//     target='_blank' rel='noopener'>Ver Video</a>`