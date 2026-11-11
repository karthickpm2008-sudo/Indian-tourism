/**
 * ==============================================================================
 * INDIA TOURISM - INTERACTIVE JAVASCRIPT (script.js)
 * Clean, well-commented vanilla JavaScript for single-page interactions.
 * Features:
 *   1. Smooth scroll to sections with navigation active link highlighting
 *   2. Mobile hamburger menu toggle
 *   3. Dynamic destination pre-selection from cards to booking form
 *   4. Date picker minimum date restriction (disallows past dates)
 *   5. Client-side booking form validation and confirmation alert
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. MOBILE NAVIGATION TOGGLE
  // --------------------------------------------------------------------------
  const navToggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile navigation menu on hamburger click
  if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navbar.classList.toggle('open');
    });

    // Close mobile menu whenever a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navbar.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. SMOOTH SCROLLING & ACTIVE LINK HIGHLIGHTING
  // --------------------------------------------------------------------------
  // Smooth scroll handler for all internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Calculate offset for fixed/sticky header height
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight active navigation link while scrolling (ScrollSpy)
  const sections = document.querySelectorAll('section[id], header[id]');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 3. SET MINIMUM DATE FOR BOOKING (No past travel dates)
  // --------------------------------------------------------------------------
  const travelDateInput = document.getElementById('travelDate');
  if (travelDateInput) {
    // Format today's date as YYYY-MM-DD
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${yyyy}-${mm}-${dd}`;

    // Set the min attribute on the date input
    travelDateInput.min = formattedToday;
  }

  // --------------------------------------------------------------------------
  // 4. BOOKING FORM VALIDATION & SUBMISSION
  // --------------------------------------------------------------------------
  const bookingForm = document.getElementById('bookingForm');
  const bookingAlert = document.getElementById('bookingAlert');
  const alertTitle = document.getElementById('alertTitle');
  const alertMessage = document.getElementById('alertMessage');

  // Input elements
  const userNameInput = document.getElementById('userName');
  const userEmailInput = document.getElementById('userEmail');
  const userPhoneInput = document.getElementById('userPhone');
  const destinationSelect = document.getElementById('destinationSelect');
  const numPersonsInput = document.getElementById('numPersons');

  // Error label elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const destError = document.getElementById('destError');
  const dateError = document.getElementById('dateError');
  const personsError = document.getElementById('personsError');

  // Helper function to reset all error messages and styles
  function clearErrors() {
    const errorSpans = [nameError, emailError, phoneError, destError, dateError, personsError];
    errorSpans.forEach(span => {
      if (span) span.textContent = '';
    });

    const inputs = [userNameInput, userEmailInput, userPhoneInput, destinationSelect, travelDateInput, numPersonsInput];
    inputs.forEach(input => {
      if (input) input.classList.remove('error');
    });
  }

  // Email format validation regex
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Phone number validation regex (allows 10 digits or optional +91 prefix)
  function isValidPhone(phone) {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    return phoneRegex.test(cleaned);
  }

  // Form submit event handler
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      // Prevent browser default form submission / page reload
      e.preventDefault();
      clearErrors();

      let isValid = true;

      // 1. Validate Name
      const nameVal = userNameInput.value.trim();
      if (nameVal === '') {
        nameError.textContent = 'Please enter your full name.';
        userNameInput.classList.add('error');
        isValid = false;
      } else if (nameVal.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        userNameInput.classList.add('error');
        isValid = false;
      }

      // 2. Validate Email
      const emailVal = userEmailInput.value.trim();
      if (emailVal === '') {
        emailError.textContent = 'Please enter your email address.';
        userEmailInput.classList.add('error');
        isValid = false;
      } else if (!isValidEmail(emailVal)) {
        emailError.textContent = 'Please enter a valid email address (e.g. name@domain.com).';
        userEmailInput.classList.add('error');
        isValid = false;
      }

      // 3. Validate Phone Number
      const phoneVal = userPhoneInput.value.trim();
      if (phoneVal === '') {
        phoneError.textContent = 'Please enter your contact phone number.';
        userPhoneInput.classList.add('error');
        isValid = false;
      } else if (!isValidPhone(phoneVal)) {
        phoneError.textContent = 'Please enter a valid 10-digit Indian mobile number.';
        userPhoneInput.classList.add('error');
        isValid = false;
      }

      // 4. Validate Destination Selection
      const destVal = destinationSelect.value;
      if (!destVal) {
        destError.textContent = 'Please select your desired travel destination.';
        destinationSelect.classList.add('error');
        isValid = false;
      }

      // 5. Validate Travel Date
      const dateVal = travelDateInput.value;
      if (!dateVal) {
        dateError.textContent = 'Please choose your preferred date of departure.';
        travelDateInput.classList.add('error');
        isValid = false;
      }

      // 6. Validate Number of Persons
      const personsVal = parseInt(numPersonsInput.value, 10);
      if (isNaN(personsVal) || personsVal < 1) {
        personsError.textContent = 'Number of travelers must be at least 1.';
        numPersonsInput.classList.add('error');
        isValid = false;
      } else if (personsVal > 50) {
        personsError.textContent = 'For groups larger than 50, please contact our office directly.';
        numPersonsInput.classList.add('error');
        isValid = false;
      }

      // If validation fails, stop execution
      if (!isValid) return;

      // ------------------------------------------------------------------------
      // SUCCESS: Display confirmation message and reset form
      // ------------------------------------------------------------------------
      if (bookingAlert && alertTitle && alertMessage) {
        alertTitle.textContent = `Booking Confirmed for ${nameVal}!`;
        alertMessage.innerHTML = `
          We have received your reservation for <strong>${destVal}</strong> starting on <strong>${dateVal}</strong> for <strong>${personsVal} person(s)</strong>.<br>
          A confirmation receipt has been sent to <strong>${emailVal}</strong>. Our travel consultant will call you at <strong>${phoneVal}</strong> shortly.
        `;
        bookingAlert.classList.remove('hidden');

        // Smooth scroll to the alert so user sees confirmation clearly
        bookingAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset form fields
      bookingForm.reset();

      // Reset minimum date again after form reset
      if (travelDateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        travelDateInput.min = `${yyyy}-${mm}-${dd}`;
      }
    });
  }

});

// ----------------------------------------------------------------------------
// 5. HELPER FUNCTION: PRE-SELECT DESTINATION FROM CARDS
// ----------------------------------------------------------------------------
/**
 * Auto-selects destination in booking form and scrolls down to the form.
 * Can be called from any "Book This" or "Book Now" link or button.
 * @param {string} destinationValue - Name of destination matching dropdown value
 * @param {string} [packageName] - Optional package title
 */
function selectDestination(destinationValue, packageName) {
  const destSelect = document.getElementById('destinationSelect');
  const bookingSection = document.getElementById('booking');

  if (destSelect) {
    // Look for matching option in the dropdown
    let matched = false;
    for (let i = 0; i < destSelect.options.length; i++) {
      if (destSelect.options[i].value === destinationValue || 
          destSelect.options[i].text.includes(destinationValue)) {
        destSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }

    // Trigger visual highlight on the dropdown
    destSelect.focus();
    destSelect.classList.remove('error');
  }

  // Smooth scroll down to the booking section
  if (bookingSection) {
    const headerOffset = 70;
    const elementPosition = bookingSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

