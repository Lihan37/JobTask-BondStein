document.addEventListener('DOMContentLoaded', function () {
  const initialRoute = window.location.hash.slice(1);
  showPage(initialRoute);

  window.addEventListener('hashchange', function () {
      const route = window.location.hash.slice(1);
      showPage(route);
  });
});

function showPage(route) {
  const pageSections = document.querySelectorAll('.page-section');
  pageSections.forEach(section => {
      section.style.display = 'none';
  });

  const selectedSection = document.getElementById(route);
  if (selectedSection) {
      selectedSection.style.display = 'block';
      toggleMobileMenu();
  }
}

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
}
