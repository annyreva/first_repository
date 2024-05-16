document.addEventListener('DOMContentLoaded', function () {
	const skillsListItems = document.querySelectorAll('.skills-list li')
	const infoBlocks = document.querySelectorAll('.info')
	const infoSecondBlocks = document.querySelectorAll('.second-info')
	const infoThirdBlocks = document.querySelectorAll('.third-info')

	// Показываем информацию для первой картинки по умолчанию
	infoBlocks[0].style.display = 'block'

	skillsListItems.forEach(function (item) {
		item.addEventListener('click', function (event) {
			event.stopPropagation()

			// Сначала скрываем все блоки с информацией
			infoBlocks.forEach(function (info) {
				info.style.display = 'none'
			})

			// Затем показываем информацию о навыке, на который кликнули
			const info = this.querySelector('.info')
			info.style.display = 'block'
		})
	})

	// Обработчик клика на документе для скрытия информации при клике вне блока
	document.addEventListener('click', function (event) {
		if (!event.target.closest('.skills-list')) {
			infoBlocks.forEach(function (info) {
				info.style.display = 'none'
			})
		}
	})

	infoSecondBlocks[0].style.display = 'block'

	skillsListItems.forEach(function (item) {
		item.addEventListener('click', function (event) {
			event.stopPropagation()

			// Сначала скрываем все блоки с информацией
			infoSecondBlocks.forEach(function (info) {
				info.style.display = 'none'
			})

			// Затем показываем информацию о навыке, на который кликнули
			const info = this.querySelector('.second-info')
			info.style.display = 'block'
		})
	})

	// Обработчик клика на документе для скрытия информации при клике вне блока
	document.addEventListener('click', function (event) {
		if (!event.target.closest('.skills-list')) {
			infoSecondBlocks.forEach(function (info) {
				info.style.display = 'none'
			})
		}
	})

	infoThirdBlocks[0].style.display = 'block'

	skillsListItems.forEach(function (item) {
		item.addEventListener('click', function (event) {
			event.stopPropagation()

			// Сначала скрываем все блоки с информацией
			infoThirdBlocks.forEach(function (info) {
				info.style.display = 'none'
			})

			// Затем показываем информацию о навыке, на который кликнули
			const info = this.querySelector('.third-info')
			info.style.display = 'block'
		})
	})

	// Обработчик клика на документе для скрытия информации при клике вне блока
	document.addEventListener('click', function (event) {
		if (!event.target.closest('.skills-list')) {
			infoThirdBlocks.forEach(function (info) {
				info.style.display = 'none'
			})
		}
	})
})
