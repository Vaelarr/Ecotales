

/*

// Get all elements with class 'popup-trigger'
const popupTriggers = document.querySelectorAll('.popup-trigger');

// Get the popup container and image elements
const popupContainer = document.getElementById('popupContainer');
const popupImage = document.getElementById('popupImage');

// Add click event listeners to all popup triggers
popupTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => openPopup(trigger.src));
});

// Function to open the popup
function openPopup(imageSrc) {
  popupImage.src = imageSrc;
  popupContainer.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  popupContainer.style.display = 'none';
}

// Close the popup when clicking outside the image
popupContainer.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    closePopup();
  }
});

// Close the popup with the 'Esc' key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePopup();
  }
});


*/