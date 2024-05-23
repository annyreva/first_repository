//certificates
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const title = item.querySelector(".accordion-title");
        const toggle = document.createElement("span");
        toggle.classList.add("accordion-toggle");
        title.appendChild(toggle);

        title.addEventListener("click", function () {
            accordionItems.forEach(item => {
                const content = item.querySelector(".accordion-content");
                if (item !== this.parentNode) {
                    item.classList.remove("active-c");
                    content.style.height = "0";
                }
            });

            const content = item.querySelector(".accordion-content");
            const isActive = item.classList.toggle("active-c");
            content.style.height = isActive ? `${content.scrollHeight}px` : "0";
        });
    });
});
