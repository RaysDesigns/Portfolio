// NAVBAR TRANSITION

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var logo = document.getElementById('logo');
  var navLinks = document.querySelectorAll('#navbar ul li a');

  // Check if the page is scrolled more than 50px
  if (window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
      logo.src = "https://i.postimg.cc/XJmcnNB2/Untitled-1.png"; // New logo when scrolled
      navLinks.forEach(link => {
          link.classList.add("scrolled"); // Add 'scrolled' class to each link
      });
  } else {
      navbar.classList.remove("scrolled");
      logo.src = "https://i.postimg.cc/qvZdQPr3/Logo-name.png"; // Original logo when at the top
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





// SCROLLED LOGO

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo");

    // When the user scrolls down 50px from the top of the document, switch to the scrolled logo
    if (window.pageYOffset > 50) {
        navbar.classList.add("scrolled");
        logo.src = "https://i.postimg.cc/XJmcnNB2/Untitled-1.png"; // New logo when scrolled
    } else {
        navbar.classList.remove("scrolled");
        logo.src = "https://i.postimg.cc/qvZdQPr3/Logo-name.png"; // Original logo when at the top
    }
}


// Remember to call this function on window scroll
window.onscroll = function() {
    scrollFunction();
};



// DYNAMIC SHADOW //


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



document.addEventListener("DOMContentLoaded", function() {
  const navbarHeight = document.getElementById('navbar').offsetHeight; // Get the navbar's height

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor click behavior

          let targetId = this.getAttribute('href'); // Get the target id (e.g., #graphic-design)
          let targetElement = document.querySelector(targetId); // Select the target element

          if (targetElement) {
              let topOffset = targetElement.offsetTop - navbarHeight; // Calculate position to scroll to
              window.scrollTo({
                  top: topOffset,
                  behavior: 'smooth' // Smooth scroll to the target
              });
          }
      });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.aside a');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default anchor behavior

          const targetSection = document.querySelector(this.getAttribute('href')); // Get the target section based on href of clicked link

          // Hide all sections
          sections.forEach(section => {
              section.style.display = 'none';
          });

          // Show the target section
          if (targetSection) {
              targetSection.style.display = 'block';
          }

          // Optionally, add smooth scroll to the top of the newly displayed section
          window.scrollTo({
              top: targetSection.offsetTop - document.getElementById('navbar').offsetHeight,
              behavior: 'smooth'
          });
      });
  });
});


links.forEach(link => {
  link.classList.remove('active'); // Remove active class from all links
});
this.classList.add('active'); // Add active class to the clicked link



// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Sticky Navbar
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Get the current URL path
  var currentPath = window.location.pathname.split("/").pop();

  // Get all navigation links
  var navLinks = document.querySelectorAll('.nav-link');

  // Loop through each link
  navLinks.forEach(function(link) {
      // Extract the href attribute of each link
      var linkPath = link.getAttribute('href');

      // Compare the link path with the current path
      if (linkPath === currentPath) {
          // Add the active class to the matching link
          link.classList.add('active');
      }
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Automatic Slideshow - uncomment below if you want automatic slideshow

let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndexAuto++;
    if (slideIndexAuto > slides.length) {slideIndexAuto = 1}    
    slides[slideIndexAuto-1].style.display = "block";  
    setTimeout(showSlidesAuto, 3000); // Change image every 3 seconds
}

