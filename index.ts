const toggleButton = document.getElementById('togglebutton') as HTMLInputElement | null;  // ID should match exactly
const skillsDiv = document.getElementById('skills') as HTMLDivElement | null;

if (toggleButton && skillsDiv) {
    toggleButton.addEventListener('click', () => {
        if (skillsDiv.style.display === 'none') {
            skillsDiv.style.display = 'block';
            toggleButton.value = 'Hide Skills';
        } else {
            skillsDiv.style.display = 'none';
            toggleButton.value = 'Show Skills';
        }
    });
} else {
    console.error('Required elements not found in the DOM.');
}
