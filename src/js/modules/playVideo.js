export default class VideoPlyer {
    constructor(trigger, overley) {
        this.btns = document.querySelectorAll(trigger),
        this.overley = document.querySelector(overley),
        this.close = this.overley.querySelector('.close');
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    this.overley.style.display = 'flex';
                }else {
                    const path = btn.getAttribute('data-url');

                    this.createPlayer(path);
                }
               
            })
        });
    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overley.style.display = 'none';
            this.player.stopVideo();
            
        })
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
            
          });
          console.log(this.player);
          
    }


    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
  
    }
}