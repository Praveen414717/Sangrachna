const slidesContainer = document.querySelector('.slider-images');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

// Clone the first and last slides
const firstSlideClone = slides[0].cloneNode(true);
const lastSlideClone = slides[totalSlides - 1].cloneNode(true);

// Append the cloned first slide to the end and prepend the cloned last slide to the start
slidesContainer.appendChild(firstSlideClone);
slidesContainer.insertBefore(lastSlideClone, slidesContainer.firstChild);

// Update total number of slides to include clones
let updatedSlidesCount = totalSlides + 2;
slidesContainer.style.width = `${updatedSlidesCount * 100}vw`; // Adjust width to fit all slides

// Start at the actual first slide (index 1 after prepending the last slide clone)
slidesContainer.style.transform = `translateX(-100vw)`; // Move to the actual first slide

function showNextSlide() {
    currentIndex++;

    slidesContainer.style.transition = 'transform 1s ease-in-out';
    slidesContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}vw)`; // Adjust to the next slide

    // If we've reached the end (past the original last slide), reset to the first original slide
    if (currentIndex === totalSlides) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none'; // Disable transition
            slidesContainer.style.transform = 'translateX(-100vw)'; // Move back to the first slide without visual transition
            currentIndex = 0; // Reset index
        }, 1000); // Wait for the last slide transition to complete
    }
}

setInterval(showNextSlide, 4000); // Change slide every 4 seconds

// Hamburger menu
function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const hamburger = document.querySelector('.hamburger');

    dropdownMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Ensure the slider does not interfere with the hamburger menu
    if (dropdownMenu.classList.contains('active')) {
        slidesContainer.style.pointerEvents = 'none'; // Disable pointer events on the slider when the menu is active
    } else {
        slidesContainer.style.pointerEvents = 'auto'; // Re-enable pointer events
    }
}
