document.addEventListener('DOMContentLoaded', function () {
    const programmingItems = document.querySelectorAll('.skills-list:nth-of-type(1) li');
    const webDevItems = document.querySelectorAll('.skills-list:nth-of-type(2) li');
    const designItems = document.querySelectorAll('.skills-list:nth-of-type(3) li');
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

    // Переменные для хранения индексов последних выбранных элементов каждого списка
    let lastSelectedIndex = 0;
    let lastSelectedSecondIndex = 0;
    let lastSelectedThirdIndex = 0;

    // Функция для обновления подсветки
    function updateSelection(listItems, lastSelectedIndex) {
        listItems.forEach((item, index) => {
            if (index === lastSelectedIndex) {
                item.querySelector('img').classList.add('selected');
            } else {
                item.querySelector('img').classList.remove('selected');
            }
        });
    }

    // Инициализация подсветки первых элементов
    programmingItems[0].querySelector('img').classList.add('selected');
    webDevItems[0].querySelector('img').classList.add('selected');
    designItems[0].querySelector('img').classList.add('selected');

    // Функция для обработки клика по элементам списка навыков
    function handleSkillListClick(infoBlocks, clickedInfoBlock, index, lastSelectedIndex, listItems) {
        // Скрыть все информационные блоки
        infoBlocks.forEach(function(block) {
            block.style.display = 'none';
        });

        // Отобразить кликнутый информационный блок
        clickedInfoBlock.style.display = 'block';

        // Обновляем индекс последнего выбранного элемента и подсветку
        updateSelection(listItems, index);
        return index;
    }

    // Обработчики клика для каждого списка навыков
    programmingItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            lastSelectedIndex = handleSkillListClick(infoBlocks, item.querySelector('.info'), index, lastSelectedIndex, programmingItems);
        });
    });

    webDevItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            lastSelectedSecondIndex = handleSkillListClick(infoSecondBlocks, item.querySelector('.second-info'), index, lastSelectedSecondIndex, webDevItems);
        });
    });

    designItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            lastSelectedThirdIndex = handleSkillListClick(infoThirdBlocks, item.querySelector('.third-info'), index, lastSelectedThirdIndex, designItems);
        });
    });

    //слайдеры
    let currentIndex = 0

    const slides = document.querySelector('.slides')
    const totalSlides = document.querySelectorAll('.slide').length

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides
        updateSlider()
    })

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
        updateSlider()
    })

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`
    }

})
