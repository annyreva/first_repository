//hard skills 
document.addEventListener('DOMContentLoaded', () => {
    function handleButtonClick(buttons, textarea) {
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const experienceText = this.getAttribute('data-experience');
                textarea.value = experienceText;

                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    const programmingButtons = document.querySelectorAll('.panel:nth-child(1) .buttons button');
    const programmingTextarea = document.getElementById('experience-textarea');
    handleButtonClick(programmingButtons, programmingTextarea);

    const webDevButtons = document.querySelectorAll('.panel:nth-child(2) .buttons button');
    const webDevTextarea = document.getElementById('experience2-textarea');
    handleButtonClick(webDevButtons, webDevTextarea);

    const designButtons = document.querySelectorAll('.panel:nth-child(3) .buttons button');
    const designTextarea = document.getElementById('experience3-textarea');
    handleButtonClick(designButtons, designTextarea);
});