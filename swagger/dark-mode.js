// Create a button to toggle between themes
const switchButton = document.createElement('button');
switchButton.textContent = 'Switch Mode';
switchButton.style.display = 'block';
switchButton.style.margin = 'auto'; // Center horizontally
switchButton.style.backgroundColor = 'transparent';
switchButton.style.color = '#fff';
switchButton.style.padding = '10px 20px';
switchButton.style.border = 'none';
switchButton.style.borderRadius = '5px';
switchButton.style.cursor = 'pointer';
switchButton.style.backgroundImage = 'linear-gradient(to right, #4e54c8, #8f94fb)'; // Gradient color

document.body.appendChild(switchButton);

// Event listener for the toggle button
switchButton.addEventListener('click', function() {
  // Check if the current mode is light mode or dark mode
  const currentTheme = document.getElementById('theme').getAttribute('href');
  if (currentTheme === './swagger/style.css') {
    // If it's light mode, switch to dark mode
    document.getElementById('theme').setAttribute('href', './swagger/dark-mode.css');
  } else {
    // If it's dark mode, switch to light mode
    document.getElementById('theme').setAttribute('href', './swagger/style.css');
  }
});
