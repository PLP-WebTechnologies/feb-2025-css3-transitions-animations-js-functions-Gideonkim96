// Selecting the button and box elements
const animateButton = document.getElementById('animateButton');
const animatedBox = document.getElementById('animatedBox');

// Check if the animation has been performed before (from localStorage)
if (localStorage.getItem('animationTriggered') === 'true') {
    animatedBox.classList.add('animate'); // Apply animation if saved
    animateButton.disabled = true; // Disable button if already triggered
    animateButton.textContent = 'Animation Triggered';
}

// Button click event listener to trigger animation and store state
animateButton.addEventListener('click', function () {
    // Trigger the animation by adding the CSS class
    animatedBox.classList.add('animate');

    // Store the animation state in localStorage
    localStorage.setItem('animationTriggered', 'true');

    // Disable the button and change its text once animation is triggered
    animateButton.disabled = true;
    animateButton.textContent = 'Animation Triggered';
});
