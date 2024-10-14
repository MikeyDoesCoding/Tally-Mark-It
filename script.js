// Tally mark functionality and theme switching
const tallyContainer = document.getElementById('tally-container');
const addTallyButton = document.getElementById('addTally');
const themeToggle = document.getElementById('themeToggle');

// State variables
let tallyCount = 0;
let isDarkMode = false;

// Function to render tally marks in European style (grouping in 5)
function renderTally() {
  // Create a new group every 5 tallies
  if (tallyCount % 5 === 0) {
    const group = document.createElement('div');
    group.classList.add('tally-group');
    tallyContainer.appendChild(group);
  }

  const currentGroup = tallyContainer.lastChild;

  const mark = document.createElement('div');
  mark.classList.add('tally-mark');
  currentGroup.appendChild(mark);

  // Add diagonal cross if it's the 5th tally in the group
  if (tallyCount % 5 === 4) {
    const cross = document.createElement('div');
    cross.classList.add('tally-cross');
    currentGroup.appendChild(cross);
  }

  // Add functionality to remove the tally mark on click
  mark.addEventListener('click', () => {
    currentGroup.removeChild(mark);
    tallyCount--;
  });

  tallyCount++;
}

// Add tally mark on button click
addTallyButton.addEventListener('click', renderTally);

// Dark/Light mode toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  themeToggle.innerHTML = isDarkMode ? '<span class="material-icons">light_mode</span>' : '<span class="material-icons">dark_mode</span>';
});
