document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('shadeButton');

    button.addEventListener('click', function() {
        // Toggle between two shades
        if (button.style.backgroundColor === 'lightgreen') {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'lightgreen';
        }
    });
});
