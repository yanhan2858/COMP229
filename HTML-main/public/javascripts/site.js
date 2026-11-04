/*
 * File name: site.js
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-05
 */

/* Section: contact form */
function watchContactForm() {
  var contactForm = document.getElementById('contact-form');

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener('submit', function (submitEvent) {
    var messageField = document.getElementById('message');

    if (!messageField.value.trim()) {
      submitEvent.preventDefault();
      messageField.focus();
    }
  });
}

watchContactForm();
