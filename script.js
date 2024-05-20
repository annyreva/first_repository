function updateExperience(element) {
    // Remove 'selected' class from all skill elements
    const skillsList = element.closest(".skills-list");
    skillsList.querySelectorAll("li").forEach((el) => {
      el.classList.remove("selected");
    });
  
    // Add 'selected' class to the clicked element
    element.classList.add("selected");
  
    const skill = element.getAttribute("data-skill");
    const parentDiv = element.closest(".list_1");
    const experienceLanguageElement = parentDiv.querySelector(
      ".experience-language"
    );
    const experienceDescriptionElement = parentDiv.querySelector(
      ".experience-description"
    );
  
    experienceLanguageElement.textContent = skill;
  
    switch (skill) {
      case "C++":
        experienceDescriptionElement.textContent =
          "Description of experience C++.";
        break;
      case "Java":
        experienceDescriptionElement.textContent =
          "Description of experience Java.";
        break;
      case "C":
        experienceDescriptionElement.textContent = 
          "Description of experience C.";
        break;
      case "Python":
        experienceDescriptionElement.textContent =
          "Description of experience Python.";
        break;
      case "HTML":
        experienceDescriptionElement.textContent =
          "Description of experience HTML.";
        break;
      case "JavaScript":
        experienceDescriptionElement.textContent =
          "Description of experience JavaScript.";
        break;
      case "TypeScript":
        experienceDescriptionElement.textContent =
          "Description of experience TypeScript.";
        break;
      case "Angular":
        experienceDescriptionElement.textContent =
          "Description of experience Angular.";
        break;
      case "Figma":
        experienceDescriptionElement.textContent =
          "Description of experience Figma.";
        break;
      case "Blender":
        experienceDescriptionElement.textContent =
          "Description of experience Blender.";
        break;
      default:
        experienceDescriptionElement.textContent = 
          "Description of experience ";
    }
  }
  
  // Initialize the first skill as selected by default
  document.addEventListener("DOMContentLoaded", () => {
    const firstSkills = document.querySelectorAll(".skills-list li:first-child");
    firstSkills.forEach((skill) => {
      updateExperience(skill);
    });
  });
  
  //scroll
  const navLinks = document.querySelectorAll('.h-link');
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  //sliders
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;
  
    function showSlide(index) {
      const slidesContainer = document.getElementById("slides");
      const slideWidth = slides[0].clientWidth;
      slidesContainer.style.transform = `translateX(${-index * slideWidth}px)`;
    }
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);
});
  