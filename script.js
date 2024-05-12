window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navLinks = document.querySelectorAll('#navbar ul li a'); // Select all nav links

    if (window.pageYOffset > 50) { // You may need to adjust the '50'
        navbar.classList.add("scrolled");
        navLinks.forEach(link => {
            link.classList.add("scrolled"); // Add 'scrolled' class to each link
        });
    } else {
        navbar.classList.remove("scrolled");
        navLinks.forEach(link => {
            link.classList.remove("scrolled"); // Remove 'scrolled' class from each link
        });
    }
});

// When the user scrolls the page, execute the function
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    // If the page is scrolled more than 50px from the top, change the navbar style
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}


// Existing JavaScript code
// ...

// ... existing scroll function ...

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo");

    // When the user scrolls down 50px from the top of the document, switch to the scrolled logo
    if (window.pageYOffset > 50) {
        navbar.classList.add("scrolled");
        logo.src = "https://i.postimg.cc/7hFyFxRr/Untitled-2.png"; // New logo when scrolled
    } else {
        navbar.classList.remove("scrolled");
        logo.src = "https://i.postimg.cc/qvZdQPr3/Logo-name.png"; // Original logo when at the top
    }
}


// Remember to call this function on window scroll
window.onscroll = function() {
    scrollFunction();
};


// Initialize any other scripts (e.g., lightGallery)

// ... existing scroll function ...

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
document.addEventListener('DOMContentLoaded', (event) => {
  // Get all the elements that will have the dynamic shadow
  var dynamicElements = document.querySelectorAll('.dynamic-shadow');

  dynamicElements.forEach(function(dynamicElement) {
    dynamicElement.addEventListener('mousemove', function(e) {
      var rect = dynamicElement.getBoundingClientRect();
      var x = e.clientX - rect.left; // X position within the element
      var y = e.clientY - rect.top;  // Y position within the element

      // Calculate shadow direction
      var shadowX = (x - rect.width / 2) / 20;
      var shadowY = (y - rect.height / 2) / 20;

      // Apply the shadow effect
      dynamicElement.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.4)`;
    });

    dynamicElement.addEventListener('mouseleave', function(e) {
      // Reset the shadow effect when the mouse leaves the element
      dynamicElement.style.boxShadow = 'none';
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Calculate the offset position to account for the navigation bar height
        var navBarHeight = document.getElementById('navbar').offsetHeight;
        var scrollTargetId = this.getAttribute('href');
        var scrollTarget = document.querySelector(scrollTargetId);

        // Calculate the position of the top of the target element, minus the navBarHeight
        var topOffset = scrollTarget.getBoundingClientRect().top + window.pageYOffset - navBarHeight;

        // Scroll to the target position
        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        });
    });
});