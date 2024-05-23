//burger menu
const burgers = document.querySelectorAll('.burger');
const asaid = document.querySelector('.asaid');

burgers.forEach(burger => {
    burger.addEventListener('click', function (e) {
        e.stopPropagation(); 
        const menubar = document.querySelector('.asaid');
        burgers.forEach(b => b.classList.toggle('burger_active'));
        menubar.classList.toggle("actives");
    });
});

//close menu 
document.addEventListener('click', function (e) {
    const isClickInsideAsaid = asaid.contains(e.target); 
    if (!isClickInsideAsaid) {
        asaid.classList.remove("actives"); 
        burgers.forEach(b => b.classList.remove('burger_active')); 
    }
});

//hide menu
function hideMenuIfOpen() {
    const asaid = document.querySelector('.asaid');
    const burgers = document.querySelectorAll('.burger');
    
    if (window.innerWidth >= 901) {
        asaid.classList.remove("actives"); 
        burgers.forEach(b => b.classList.remove('burger_active')); 
    }
}

window.addEventListener('resize', hideMenuIfOpen);
hideMenuIfOpen();

