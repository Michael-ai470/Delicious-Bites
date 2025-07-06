// Expanded Menu Data
const menu = [
  { title: "Pancakes", category: "breakfast" },
  { title: "Omelette", category: "breakfast" },
  { title: "French Toast", category: "breakfast" },
  { title: "Fruit Bowl", category: "breakfast" },
  { title: "Grilled Chicken", category: "lunch" },
  { title: "Beef Burger", category: "lunch" },
  { title: "Caesar Salad", category: "lunch" },
  { title: "Club Sandwich", category: "lunch" },
  { title: "Steak", category: "dinner" },
  { title: "Spaghetti", category: "dinner" },
  { title: "Grilled Salmon", category: "dinner" },
  { title: "Lamb Chops", category: "dinner" }
];

const menuContainer = document.getElementById('menuItems');
const filterButtons = document.querySelectorAll('.filter-btn');

// Load All Menu Items Initially
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
});

// Display Menu Items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    return `
      <div class="menu-card">
        <div class="menu-image"></div>
        <h3>${item.title}</h3>
        <p>Category: ${item.category}</p>
      </div>
    `;
  });
  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
}

// Filter Menu Items
filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.category;
    const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);
    displayMenuItems(filteredMenu);
  });
});

// Section Entrance Animation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  this.reset();
});
