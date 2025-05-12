document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navContainer = document.querySelector('.nav-container');
    const socialIcons = document.querySelector('.social-icons');
    
    // Function to show menu and hide menu button
    function showMenu() {
      // Show navigation and social icons
      navContainer.classList.add('show');
      socialIcons.classList.add('show');
      
      // Hide the hamburger button when menu is shown
      mobileMenuButton.style.display = 'none';
    }
    
    // Function to hide menu and show menu button
    function hideMenu() {
      // Hide navigation and social icons
      navContainer.classList.remove('show');
      socialIcons.classList.remove('show');
      
      // Show the hamburger button when menu is hidden (only on mobile)
      if (window.innerWidth <= 768) {
        mobileMenuButton.style.display = 'block';
      }
    }
    
    // Add click event listener to mobile menu button
    mobileMenuButton.addEventListener('click', showMenu);
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-container li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          hideMenu();
        }
      });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        // On desktop: ensure menu is visible and button is hidden
        navContainer.classList.remove('show');
        socialIcons.classList.remove('show');
        mobileMenuButton.style.display = 'none';
      } else {
        // On mobile: show hamburger button when menu is closed
        if (!navContainer.classList.contains('show')) {
          mobileMenuButton.style.display = 'block';
        }
      }
    });
    
    // Initialize button state based on screen size
    if (window.innerWidth <= 768) {
      mobileMenuButton.innerHTML = '&#9776;'; // ☰ symbol
      mobileMenuButton.style.display = 'block';
    } else {
      mobileMenuButton.style.display = 'none';
    }
  });