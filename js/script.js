const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    loop: true,

    // Автоматическая прокрутка
    autoplay: {
        delay: 5000, // Задержка в миллисекундах (5 секунд)
        disableOnInteraction: false, // Не останавливать при взаимодействии
        pauseOnMouseEnter: true, // Пауза при наведении мыши
    },

    // Скорость перехода между слайдами
     speed: 600,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Точки можно нажимать
        dynamicBullets: true, // Динамические точки (удобно для большого количества слайдов)
    },

    // Поддержка свайпов
    grabCursor: true, // Курсор-рука при наведении

    breakpoints: {
        430: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
    },
});

// маска для телефона
let inputPhone=document.getElementById("phone");
inputPhone.oninput=()=>phoneMask(inputPhone)
function phoneMask(inputEl) {
    let patStringArr = "+7(___)___-__-__".split('');
    let arrPush = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15]
    let val = inputEl.value;
    let arr = val.replace(/\D+/g, "").split('').splice(1);
    let n;
    let ni;
    arr.forEach((s, i) => {
        n = arrPush[i];
        patStringArr[n] = s
        ni = i
    });
    inputEl.value = patStringArr.join('');
    n ? inputEl.setSelectionRange(n + 1, n + 1) : inputEl.setSelectionRange(17, 17)
}