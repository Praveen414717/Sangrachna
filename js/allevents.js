// Open the modal
function openModal(eventName, eventImage, eventDate, eventDescription) {
    document.getElementById('modal-event-name').innerText = eventName;
    document.getElementById('modal-event-image').src = eventImage;
    document.getElementById('modal-event-date').innerText = "Date: " + eventDate;
    document.getElementById('modal-event-description').innerText = eventDescription;

    document.getElementById('event-modal').style.display = 'block';
    document.getElementById('event-modal-overlay').style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById('event-modal').style.display = 'none';
    document.getElementById('event-modal-overlay').style.display = 'none';
}

// Optional: Close the modal if clicked outside the modal content
document.getElementById('event-modal-overlay').addEventListener('click', closeModal);

// Ensure no modals open automatically on page load
window.onload = function() {
    document.getElementById('event-modal').style.display = 'none';
    document.getElementById('event-modal-overlay').style.display = 'none';
};
