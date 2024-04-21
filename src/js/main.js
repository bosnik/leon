import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlyer from './modules/playVideo';



window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const slider = new MainSlider({btns: '.next',
    container: '.page'});
    slider.render();
   
    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
        
    });

    showUpSlider.init();

    const modulesSlider = new MiniSlider ({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true
        
        
    });

    modulesSlider.init();

    const feedSlider = new MiniSlider ({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
        
       
    });

    feedSlider.init();

    const player = new VideoPlyer('.showup .play', '.overlay');
    player.init();
    

});