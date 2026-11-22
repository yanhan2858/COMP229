/*
 * File name: ContactPage.jsx
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 */

import { useNavigate } from "react-router-dom";
import { siteOwner } from "../data/portfolioContent";

/* The form keeps the fields in the browser, then returns to the home page. */
function keepContactSubmission(contactForm) {
  const formData = new FormData(contactForm);

  const contactSubmission = {
    firstName: String(formData.get("firstName") || "").trim(),
    lastName: String(formData.get("lastName") || "").trim(),
    contactNumber: String(formData.get("contactNumber") || "").trim(),
    emailAddress: String(formData.get("emailAddress") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  const missingField = ["firstName", "lastName", "contactNumber", "emailAddress", "message"].find(
    (fieldName) => !contactSubmission[fieldName]
  );

  if (missingField) {
    const emptyInput = contactForm.elements.namedItem(missingField);
    if (emptyInput && "focus" in emptyInput) {
      emptyInput.focus();
    }
    return null;
  }

  sessionStorage.setItem("contactSubmission", JSON.stringify(contactSubmission));
  return contactSubmission;
}

export default function ContactPage() {
  const navigate = useNavigate();

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    const contactSubmission = keepContactSubmission(submitEvent.currentTarget);

    if (!contactSubmission) {
      return;
    }

    navigate("/?sent=1");
  }

  return (
    <div className="wrap contact">
      <form id="contact-form" onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <div className="name-row">
          <div>
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" name="firstName" type="text" autoComplete="given-name" required />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" name="lastName" type="text" autoComplete="family-name" required />
          </div>
        </div>
        <label htmlFor="contact-number">Contact Number</label>
        <input id="contact-number" name="contactNumber" type="tel" autoComplete="tel" required />
        <label htmlFor="email-address">Email Address</label>
        <input id="email-address" name="emailAddress" type="email" autoComplete="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />
        <button type="submit">Send message</button>
      </form>
      <aside className="contact-panel">
        <h2>Reach me</h2>
        <p>{siteOwner.englishName}</p>
      </aside>
    </div>
  );
}
