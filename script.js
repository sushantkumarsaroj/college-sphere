document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
      alert(`Searching for: ${query}`);
    } else {
      alert('Please enter a search query!');
    }
  });
    // URL se data fetch karna
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const gender = params.get("gender");
    const email = params.get("email");
    const dob = params.get("dob");

    function showSection(sectionId) {
        let sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    }
    // Section Show Karne ka Function
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

// Add College
function addCollege() {
  const collegeName = document.getElementById('collegeName').value;
  if (collegeName) {
    const li = document.createElement('li');
    li.textContent = collegeName;
    document.getElementById('collegeList').appendChild(li);
    document.getElementById('collegeName').value = '';
  }
}

// Add Exam
function addExam() {
  const examName = document.getElementById('examName').value;
  if (examName) {
    const li = document.createElement('li');
    li.textContent = examName;
    document.getElementById('examList').appendChild(li);
    document.getElementById('examName').value = '';
  }
}

// Add Course
function addCourse() {
  const courseName = document.getElementById('courseName').value;
  if (courseName) {
    const li = document.createElement('li');
    li.textContent = courseName;
    document.getElementById('courseList').appendChild(li);
    document.getElementById('courseName').value = '';
  }
}



// Add Event
function addEvent() {
  const eventName = document.getElementById('eventName').value;
  if (eventName) {
    const li = document.createElement('li');
    li.textContent = eventName;
    document.getElementById('eventList').appendChild(li);
    document.getElementById('eventName').value = '';
  }
}
// isske ander hum pdf file storre karenge
function openBrochure() {
  window.open('assets/img/brochureshivalik.pdf', '_blank');
}
// isme hum apne company logo wala sliding ka code dalenge
document.addEventListener('DOMContentLoaded', function() {
  const logoSliderContainer = document.querySelector('.logo-slider-container');
  const logoSlider = document.querySelector('.logo-slider');
  const viewAllButton = document.getElementById('view-all-button');
  const hiddenLogos = document.querySelectorAll('.hidden-logo');

  // Existing logic for dynamic slide animation
  if (logoSliderContainer && logoSlider) {
    const containerWidth = logoSliderContainer.offsetWidth;
    const sliderWidth = logoSlider.offsetWidth;

    if (sliderWidth > containerWidth) {
      const slideKeyframes = `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${sliderWidth - containerWidth}px); }
        }
      `;

      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = slideKeyframes;
      document.head.appendChild(styleSheet);

      logoSlider.style.animation = `slide 30s linear infinite`; // Re-apply animation
    }
  }

  // "View All" button click event
  if (viewAllButton) {
    viewAllButton.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior

      hiddenLogos.forEach(logo => {
        logo.style.display = 'inline-block'; // Or 'block' depending on your layout
      });

      viewAllButton.style.display = 'none'; // Optionally hide the "View All" button
      // You might want to add a "View Less" button here if needed
    });
  }
});
// isme hum our schol wala jo hai woh   wala code dalenge
const carousel = document.querySelector('.colleges-carousel');
const prevButton = document.querySelector('.nav-button.prev');
const nextButton = document.querySelector('.nav-button.next');
const dotsContainer = document.querySelector('.dots');
const collegeCards = document.querySelectorAll('.college-card');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function getCardWidth() {
    return collegeCards[0].offsetWidth + 20; // Card width + gap
}

function scrollToCard(index) {
    carousel.scrollLeft = getCardWidth() * index;
    updateDots(index);
}

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

function goToPrev() {
    currentIndex = Math.max(currentIndex - 1, 0);
    scrollToCard(currentIndex);
}

function goToNext() {
    currentIndex = Math.min(currentIndex + 1, collegeCards.length - 1);
    scrollToCard(currentIndex);
}

prevButton.addEventListener('click', goToPrev);
nextButton.addEventListener('click', goToNext);

dotsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('dot')) {
        const dotIndex = Array.from(dots).indexOf(event.target);
        currentIndex = dotIndex;
        scrollToCard(currentIndex);
    }
});

// Initialize dots
function initializeDots() {
    dotsContainer.innerHTML = ''; // Clear existing dots
    for (let i = 0; i < collegeCards.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = i;
            scrollToCard(currentIndex);
        });
        dotsContainer.appendChild(dot);
    }
    // Set the first dot as active initially
    if (dotsContainer.firstChild) {
        dotsContainer.firstChild.classList.add('active');
    }
}

// Update active dot
function updateDots(index) {
    const allDots = document.querySelectorAll('.dots .dot');
    allDots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

// Initial setup
initializeDots();
scrollToCard(currentIndex);

// Optional: Update on window resize (for responsiveness)
window.addEventListener('resize', () => scrollToCard(currentIndex));