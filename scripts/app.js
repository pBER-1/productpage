// Accordion
function toggleAccordion(event) {
  const accordionItem = event.target.parentElement;
  const accordionContent = accordionItem.querySelector('.accordion-content');
  const isExpanded = accordionItem.classList.contains('expanded');
  const AccordionItems = document.querySelectorAll('.accordion-item');

  AccordionItems.forEach((item) => {
    if (item !== accordionItem) {
      const itemContent = item.querySelector('.accordion-content');
      itemContent.style.display = 'none';
      item.classList.remove('expanded');
    }
  });

  if (isExpanded) {
    accordionContent.style.display = 'none';
    accordionItem.classList.remove('expanded');
  } else {
    accordionContent.style.display = 'block';
    accordionItem.classList.add('expanded');
  }
}

// Product Slideshow
var slideshowContainer = document.querySelector('.slideshow');
var images = slideshowContainer.getElementsByTagName('img');
var prevArrow = slideshowContainer.querySelector('.prev');
var nextArrow = slideshowContainer.querySelector('.next');
var dots = slideshowContainer.getElementsByClassName('dot');
var slideIndex = 0;

function showSlides() {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  images[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
}

showSlides();

prevArrow.addEventListener('click', function () {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }
  showSlides();
});

nextArrow.addEventListener('click', function () {
  slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
  showSlides();
});

Array.from(dots).forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    slideIndex = index;
    showSlides();
  });
});

// Product size buttons
const buttons = document.querySelectorAll('.product-sizing button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});

// Mobile foldable menu buttons
const menuToggle = document.querySelector('.mobile-menu-btn');
const menuContainer = document.querySelector('.menu-fold');
const searchToggle = document.querySelector('.menu-search');
const searchField = document.querySelector('.search-field');

// Mobile foldable menu
menuToggle.addEventListener('click', function () {
  menuContainer.classList.toggle('visible');
});

// Mobile foldable search
searchToggle.addEventListener('click', function () {
  searchField.classList.toggle('visible');
});

// Mobile foldable menu containers hide when clicking outside
document.addEventListener('click', function (event) {
  const targetElement = event.target;
  if (
    !menuContainer.contains(targetElement) &&
    !menuToggle.contains(targetElement)
  ) {
    menuContainer.classList.remove('visible');
  }
  if (
    !searchField.contains(targetElement) &&
    !searchToggle.contains(targetElement)
  ) {
    searchField.classList.remove('visible');
  }
});
