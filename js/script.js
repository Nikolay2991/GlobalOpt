
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.747956, 37.627202],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter([55.747956, 37.627202]), {
            hintContent: 'Glopt'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/bulit.png',
            // Размеры метки.
            iconImageSize: [62, 63],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-31, -68]
        });
    
    myMap.behaviors.disable([
        'drag',
        'scrollZoom'
    ]);

    myMap.geoObjects
        .add(myPlacemark);
});


$('.reviews-slider').slick({
    centerMode: true,
    arrows: true,
    infinite: true,
    speed: 300,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
        breakpoint: 768,
        settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
        }
    }
    ]
});


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-list'),
    menuItem = document.querySelectorAll('.header-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header-list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-list_active');
        })
    })
})