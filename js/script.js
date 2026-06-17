const timeLeft = document.querySelector('.time-left');

new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    on: {
        // s: Swiper / time: 残り時間(ms) / progress: 進捗率(0 - 1)
        autoplayTimeLeft(s, time, progress) {
            // console.log(progress);
            timeLeft.textContent = Math.ceil(time / 1000);
            console.log(Math.floor(progress * 100) + '%');
        }
    }
});