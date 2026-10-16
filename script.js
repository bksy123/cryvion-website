// IMPORTANT: Replace this with the real company email before publishing.
const COMPANY_EMAIL = "REPLACE-WITH-YOUR-EMAIL@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("enquiry-form").addEventListener("submit", event => {
  event.preventDefault();
  const message = document.getElementById("form-message");
  if (COMPANY_EMAIL.includes("REPLACE-WITH-YOUR-EMAIL")) {
    message.textContent = "Website setup note: add your real business email in script.js before publishing the enquiry form.";
    return;
  }
  const data = new FormData(event.target);
  const subject = encodeURIComponent("Business enquiry - " + data.get("service"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\n" +
    "Company: " + data.get("company") + "\n" +
    "Service: " + data.get("service") + "\n" +
    "Location: " + data.get("location") + "\n" +
    "Contact: " + data.get("contact") + "\n\n" +
    "Details:\n" + data.get("details")
  );
  window.location.href = "mailto:" + COMPANY_EMAIL + "?subject=" + subject + "&body=" + body;
  message.textContent = "Your email app should open with the enquiry ready to send.";
});
