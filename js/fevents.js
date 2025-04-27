// Function to slide left
function slideLeft(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft -= 300; // Adjust the scroll distance as per your requirement
}

// Function to slide right
function slideRight(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft += 300; // Adjust the scroll distance as per your requirement
}

// Function to open the modal with event details
function openModal(eventName, eventImage, eventDate, eventDescription) {
    document.getElementById('modal-event-name').innerText = eventName;
    document.getElementById('modal-event-image').src = eventImage;
    document.getElementById('modal-event-date').innerText = "Date: " + eventDate;
    document.getElementById('modal-event-description').innerText = eventDescription;

    const modal = document.getElementById('event-modal');
    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('event-modal');
    modal.style.display = "none"; // Hide the modal
}
