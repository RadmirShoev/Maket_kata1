// ПРОГРАММА Работы Кнопки
let readMoreButton = document.querySelector('.read-more-button');
let brendsList = document.querySelector('.brends-list');
let containerForSwiper = document.querySelector('.for-swiper');

//Событие разворачивание сворачивание списка брендов
readMoreButton.addEventListener('click', function() {
    let classes = brendsList.className.split(/\s+/);

    for (let i = 0; i < classes.length; i++) {
        if (classes[i] === 'brends-list--show-part') {

            brendsList.classList.add('brends-list--show-all');
            brendsList.classList.remove('brends-list--show-part');

            readMoreButton.classList.remove('read-more-button--close');
            readMoreButton.classList.add('read-more-button--open');

            readMoreButton.firstChild.data = 'Скрыть';

        } else {

            brendsList.classList.remove('brends-list--show-all');
            brendsList.classList.add('brends-list--show-part');

            readMoreButton.classList.remove('read-more-button--open');
            readMoreButton.classList.add('read-more-button--slose');

            readMoreButton.firstChild.data = 'Показать всё';
        }
    }
})

/*---------------ОСНОВНАЯ ПРОГРАММА СО СВАЙПЕРОМ------------*/

//Функция добавления классов свайпера
 function addSwiperClasses() {
    //Находим основные контейнеры для элементов Свайпера
    let containerForSwiper = document.querySelector('.for-swiper');
    let wrapper = containerForSwiper.querySelector('.for-wrapper');

    //Находим слайды и пагинацию
    let slides = wrapper.querySelectorAll('.for-slide');
    let forPagination = containerForSwiper.querySelector('.for-pagination');
    
    containerForSwiper.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');

    //добавляем класс swiper-slide каждому слайду
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('swiper-slide');
    }

    forPagination.classList.add('swiper-pagination');

    wrapper.classList.remove('brends-list--show-part');
} 

 // Запускаем СВАЙПЕР//
let swiperInit = function(){

    let swiper = new Swiper('.swiper', {

        slidesPerView: 2,
        spaceBetween: 150,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            },
        });

    return swiper;
}

//Функция удаления классов свайпера
let deleteSwiperClasses = () => {
    //Находим основные контейнеры для элементов Свайпера
    let containerForSwiper = document.querySelector('.for-swiper');
    let wrapper = containerForSwiper.querySelector('.for-wrapper');

    //Находим слайды и пагинацию
    let slides = wrapper.querySelectorAll('.for-slide');
    let forPagination = containerForSwiper.querySelector('.for-pagination');

    //Удаляем классы свайпера
    containerForSwiper.classList.remove('swiper');

    wrapper.classList.remove('swiper-wrapper');

    //Удаляем класс swiper-slide каждому слайду
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('swiper-slide');
    }

    forPagination.classList.remove('swiper-pagination');
    forPagination.classList.remove('swiper-pagination-clickable');
    forPagination.classList.remove('swiper-pagination-bullets');
    forPagination.classList.remove('swiper-pagination-horizontal');

    wrapper.classList.add('brends-list--show-part');
}

//Проеврка изначальной ширины окна

document.addEventListener("DOMContentLoaded", function(){
    let windowWidth = document.documentElement.clientWidth;

    if(windowWidth < 768) {
        console.log('Включаем свайпер при начальной ширине < 768');
        addSwiperClasses();
        let globalSwiper = swiperInit();
        
    } else{
        console.log('Начальная ширина > 768 Свайпер не нужен');
        console.log('Свайпер не нужен');
    }
});

// Запуск свайпера при РЕСАЙЗЕ
window.addEventListener('resize', function() {
    let windowWidth = document.documentElement.clientWidth;

    console.log('Включаем свайпер при ресайзе');

    addSwiperClasses();
    let globalSwiper = swiperInit();
        
    if(windowWidth >= 768) {

        deleteSwiperClasses();
        globalSwiper.destroy(); 
    }
});




