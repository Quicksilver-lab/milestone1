var toggleButton = document.getElementById('toggleButton');
var skillsDiv = document.getElementById('skills');
if (toggleButton && skillsDiv) {
    toggleButton.addEventListener('click', function () {
        if (skillsDiv.style.display === 'none') {
            skillsDiv.style.display = 'block';
            toggleButton.innerText = "Hide Skills"; // Use innerText or textContent for button text
        }
        else {
            skillsDiv.style.display = 'none';
            toggleButton.innerText = "Show Skills";
        }
    });
}
else {
    console.error("Required element not found in the DOM");
}
