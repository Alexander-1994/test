'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header__menu-link'),
          linksParrent = document.querySelector('.header__menu-links'),
          arrowDown = document.querySelector('.header__menu-link-down'),
          slider = document.querySelector('.slider__wrapper'),
          slides = document.querySelectorAll('.carousel-item');
    
    const deleteActive = items => {
        items.forEach(elem => {
            elem.classList.remove('active')
        });
    };

    const createActive = (items, i = 2) => {
        items[i].classList.add('active');
        i === 2 ? arrowDown.style="display: block" : arrowDown.style="display: none";
    };

    deleteActive(links);
    createActive(links);

    linksParrent.addEventListener('click', e => {
        links.forEach((elem, i) => {
            if (elem === e.target) {
                deleteActive(links);
                createActive(links, i);
            } 
        })
    })

    const descrArr = [
        `
            Тема постоянной экспозиции – жизнь и творчество Александра Вампилова, выдающегося драматурга. 
            Более 120 экспонатов: личные вещи Вампилова, предметы, связанные с эпохой 1960-х, а также с историей театра и Иркутска.
        `,
        `
            Включает актуальные течения ХХ и XXI века.
            Художественная коллекция содержит более 200 работ: живопись, графика и декоративно-прикладное искусство. 
            Формируется с 1996 года.
        `,
        `
            На полках – книги на вампиловскую тематику. Самые ценные сборники материалов и статей о жизни и творчестве мирового драматурга. 
            А также художественная проза, книги по истории театра, филологии, краеведению.
        `,
        `
            Регулярно устраиваем творческие вечера, представления и презентации. Вы можете провести свое мероприятие в салоне. 
            Мы посодействуем вам в организации культурного, научного или познавательно-развлекательного события.
        `    
    ];    

    const descr = document.createElement('div'),
          detail = document.createElement('div');

    descr.classList.add('slider__descr');
    descr.innerHTML = `${descrArr[0]}`;

    detail.classList.add('slider__detail');
    detail.innerHTML = `подробнее →`;

    slider.append(descr);
    descr.append(detail);

    slider.addEventListener('click', () => {
        slides.forEach((slide, i) => {
            if (slide.classList.contains('active')) {
                descr.innerHTML = `${descrArr[i]}`
            }
        })
    })
})