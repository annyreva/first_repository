document.addEventListener('DOMContentLoaded', function () {
	const skillsListItems = document.querySelectorAll('.skills-list li')
	const infoBlocks = document.querySelectorAll('.info')
	const infoSecondBlocks = document.querySelectorAll('.second-info')
	const infoThirdBlocks = document.querySelectorAll('.third-info')
    const navLinks = document.querySelectorAll('.h-link');

    // Обходим каждую ссылку
    navLinks.forEach(link => {
        // Добавляем обработчик события для клика
        link.addEventListener('click', event => {
            // Отменяем стандартное поведение ссылки
            event.preventDefault();
            
            // Получаем целевую секцию для скролла
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Прокручиваем к целевой секции с плавной анимацией
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Показываем информацию для первого элемента каждого списка по умолчанию
infoBlocks[0].style.display = 'block';
infoSecondBlocks[0].style.display = 'block';
infoThirdBlocks[0].style.display = 'block';

// Обработчики клика для первого списка
skillsListItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
        // Получаем информацию о навыке, на который кликнули
        const info = this.querySelector('.info');
        // Скрываем информацию о других навыках
        infoBlocks.forEach(function (block) {
            if (block !== info) {
                block.style.display = 'none';
            }
        });
        // Показываем информацию о навыке, на который кликнули
        info.style.display = 'block';
    });
});

// Обработчики клика для второго списка
skillsListItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
        // Получаем информацию о навыке, на который кликнули
        const info = this.querySelector('.second-info');
        // Скрываем информацию о других навыках
        infoSecondBlocks.forEach(function (block) {
            if (block !== info) {
                block.style.display = 'none';
            }
        });
        // Показываем информацию о навыке, на который кликнули
        info.style.display = 'block';
    });
});

// Обработчики клика для третьего списка
skillsListItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
        // Получаем информацию о навыке, на который кликнули
        const info = this.querySelector('.third-info');
        // Скрываем информацию о других навыках
        infoThirdBlocks.forEach(function (block) {
            if (block !== info) {
                block.style.display = 'none';
            }
        });
        // Показываем информацию о навыке, на который кликнули
        info.style.display = 'block';
    });
});


})
