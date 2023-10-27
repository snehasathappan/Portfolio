document.addEventListener('DOMContentLoaded', function () {
    const headerElement = document.querySelector('header');

    const colors = ['#FF5733', '#FFD733', '#33FF57', '#337DFF', '#F333FF'];
    
    function changeBackgroundColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        headerElement.style.backgroundColor = randomColor;
    }

    // Change the background color every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundColor, 3000);
});
