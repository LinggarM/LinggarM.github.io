function getCurrentYear() {
    return new Date().getFullYear();
};

document.getElementById("footer-year").innerHTML = getCurrentYear();

function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
        const offset = 90; // Adjust the offset as needed
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Optional: Add smooth scrolling effect
        });
    }
}