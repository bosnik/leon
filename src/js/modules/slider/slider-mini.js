import Slider from './slider';

export default class MiniSlider extends Slider {

    constructor(container, next, prev, activeClass, animate, autoPlay) {
        super(container, next, prev, activeClass, animate, autoPlay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSLide());
        this.prev.addEventListener('click', () => {
            let active = this.slides[this.slides.length - 1];
            this.container.insertBefore(active, this.slides[0]);
            this.slides = [...this.container.children];
            this.resetActicveBtn();
            this.decorizeSlides();
        });

        
    }

    resetActicveBtn() {
        // Sprawdź, czy kontener pasuje do selektora '.feed__slider'
        if (this.container.classList.contains('feed__slider')) {
            // Znajdź kontener o nazwie 'feed__slider'
            const container = document.querySelector('.feed__slider');
    
            // Sprawdź, czy kontener istnieje
            if (container) {
                // Jeśli znaleziono przyciski, wykonaj operacje
                if (this.next && this.prev) {
                    // Przesuń przyciski next i prev na środek kontenera feed__slider
                    const middleIndex = Math.floor(this.slides.length / 2);
                    container.insertBefore(this.next, this.slides[middleIndex]);
                    container.insertBefore(this.prev, this.slides[middleIndex]);
                    // Zaktualizuj listę slajdów
                    this.slides = [...container.children];
                } else {
                    console.error("Nie znaleziono przycisków 'next' i 'prev' w kontenerze 'feed__slider'");
                }
            } else {
                console.error("Nie znaleziono kontenera 'feed__slider'");
            }
        }
    }
    

    nextSLide() {
            this.container.appendChild(this.slides[0]);
            this.slides = [...this.container.children];    
            this.resetActicveBtn();      
            this.decorizeSlides();
        
    }

    stopSlider() {
        let intervalId; // Zmienna do przechowywania identyfikatora interwału

        // Funkcja do uruchamiania intervalu
        const startInterval = () => {
            intervalId = setInterval(() => {
                this.nextSLide();
            }, 5000);
        };
        
        // Funkcja do zatrzymywania intervalu
        const stopInterval = () => {
            clearInterval(intervalId);
        };
        // Sprawdź, czy autoPlay jest włączone
if (this.autoPlay) {
    // Uruchom interval
    startInterval();

    // Dodaj obsługę zdarzenia 'mouseover'
    this.container.addEventListener('mouseover', () => {
        // Zatrzymaj interval po najechaniu myszą na slider
        stopInterval();
    });

    // Dodaj obsługę zdarzenia 'mouseout'
    this.container.addEventListener('mouseout', () => {
        // Uruchom ponownie interval po opuszczeniu myszy z slidera
        startInterval();
    });
}
    }


    init() {
        
       try {
        this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;  
        `;
        
        this.bindTriggers();
        this.decorizeSlides();
        this.stopSlider();
       }catch(e){}

        
       
    }

}