import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlyer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/form';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';




window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const slider = new MainSlider({btns: '.next',
    container: '.page'});
    slider.render();

    const modulesPageSlider = new MainSlider({
        container: '.moduleapp',
        btns: '.next'
    });
   
    modulesPageSlider.render();

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

    new VideoPlyer('.showup .play', '.overlay').init();
    new VideoPlyer('.module__video-item .play', '.overlay').init();
    

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Form('.form').init();

    new ShowInfo('.plus__content').init();

    new Download('.download').init();
    
    

});