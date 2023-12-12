const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Automatically change slide every 5 seconds
setInterval(nextSlide, 3000);


		
				
// Get all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove the 'active' class from all links
    navLinks.forEach(otherLink => otherLink.classList.remove('active'));
    // Add the 'active' class to the clicked link
    this.classList.add('active');
  });
});

// Get the cross button element
const crossButton = document.getElementById('cross-2');

// Add a click event listener to the cross button
crossButton.addEventListener('click', function () {
  // Find the currently active link
  const activeLink = document.querySelector('nav ul li a.active');

  // Remove the 'active' class from the active link
  if (activeLink) {
    activeLink.classList.remove('active');
  }
});


// Get the cross button element
const cross3Button = document.getElementById('cross-3');

// Add a click event listener to the cross button
cross3Button.addEventListener('click', function () {
  // Find the currently active link
  const activeLink = document.querySelector('nav ul li a.active');

  // Remove the 'active' class from the active link
  if (activeLink) {
    activeLink.classList.remove('active');
  }
});


			//drop down menu	
					$(".drop-down").hover(function() {
						$('.mega-menu').addClass('display-on');
					});
					$(".drop-down").mouseleave(function() {
						$('.mega-menu').removeClass('display-on');
					});
			


          


	 