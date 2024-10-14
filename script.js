// Tally mark functionality and theme switching
const tallyContainer = document.getElementById('tally-container');
const addTallyButton = document.getElementById('addTally');
const themeToggle = document.getElementById('themeToggle');

// State variables
let tallyCount = 0;
let isDarkMode = false;

// Function to render tally marks in European style (grouping in 5)
function renderTally() {
  const group = document.createElement('div');
  group.classList.add('tally-group');

  for (let i = 0; i < 4; i++) {
    const mark = document.createElement('div');
    mark.classList.add('tally-mark');
    group.appendChild(mark);
  }

  if ((tallyCount + 1) % 5 === 0) {
    const cross = document.createElement('div');
    cross.classList.add('tally-cross');
    group.appendChild(cross);
  }

  // Add functionality to remove the tally mark on click
  group.addEventListener('click', () => {
    tallyContainer.removeChild(group);
    tallyCount--;
  });

  tallyContainer.appendChild(group);
  tallyCount++;
}

// Add tally mark on button click
addTallyButton.addEventListener('click', renderTally);

// Dark/Light mode toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  themeToggle.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
});
