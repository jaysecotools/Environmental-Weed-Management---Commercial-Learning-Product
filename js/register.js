// js/register.js
// Front-end validation and a clearly labelled demonstration submit.
// No data is transmitted, stored or logged. No password is retained anywhere.

const form = document.getElementById("register-form");
const successPanel = document.getElementById("register-success");
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- Field map: field id -> validation function returning error string or "" ---- */
const validators = {
  "first-name": (v) => (v.trim() ? "" : "Please enter your first name."),
  "last-name": (v) => (v.trim() ? "" : "Please enter your last name."),
  email: (v) => {
    if (!v.trim()) return "Please enter your email address.";
    // Deliberately simple pattern; final validation belongs server-side.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid email address.";
    return "";
  },
  organisation: () => "", // optional
  role: (v) => (v ? "" : "Please select your role."),
  password: (v) => {
    if (!v) return "Please choose a password.";
    if (v.length < 8) return "Password must be at least 8 characters.";
    return "";
  },
  "confirm-password": (v) => {
    const pw = document.getElementById("password")?.value ?? "";
    if (!v) return "Please confirm your password.";
    if (v !== pw) return "Passwords do not match.";
    return "";
  },
  "accept-terms": (_, el) => (el.checked ? "" : "Please accept the privacy policy and terms."),
};

const errorFor = (id) => document.getElementById(`${id}-error`);

function setError(id, message) {
  const field = document.getElementById(id);
  const errorEl = errorFor(id);
  if (!field || !errorEl) return;
  if (message) {
    field.setAttribute("aria-invalid", "true");
    errorEl.textContent = message;
    errorEl.hidden = false;
  } else {
    field.removeAttribute("aria-invalid");
    errorEl.textContent = "";
    errorEl.hidden = true;
  }
}

function validateField(id) {
  const field = document.getElementById(id);
  const validator = validators[id];
  if (!field || !validator) return true;
  const message = validator(field.type === "checkbox" ? "" : field.value, field);
  setError(id, message);
  return message === "";
}

function validateAll() {
  let ok = true;
  let firstInvalid = null;
  for (const id of Object.keys(validators)) {
    const valid = validateField(id);
    if (!valid) {
      ok = false;
      if (!firstInvalid) firstInvalid = id;
    }
  }
  if (firstInvalid) document.getElementById(firstInvalid)?.focus();
  return ok;
}

/* ---- Live re-validation once a field has been touched ---- */
const touched = new Set();
form?.addEventListener("blur", (e) => {
  const target = e.target;
  if (target?.id && validators[target.id]) {
    touched.add(target.id);
    validateField(target.id);
  }
}, true);

form?.addEventListener("input", (e) => {
  const id = e.target?.id;
  if (!id || !touched.has(id)) return;
  validateField(id);
  // Keep password + confirm in sync once either has been touched
  if (id === "password" && touched.has("confirm-password")) validateField("confirm-password");
});

form?.addEventListener("change", (e) => {
  const id = e.target?.id;
  if (id && validators[id] && touched.has(id)) validateField(id);
});

/* ---- Submit: demonstration only ---- */
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateAll()) return;

  // IMPORTANT: no fetch(), no localStorage, no sessionStorage, no console logging of values.
  // This is a demonstration; replace this function body when a real backend exists.
  simulateRegistration();
});

function simulateRegistration() {
  if (!form || !successPanel) return;

  form.hidden = true;
  successPanel.hidden = false;

  // Clear field values from the DOM after "submit" (defence-in-depth for a demo)
  form.reset();
  for (const id of ["first-name", "last-name", "email", "organisation", "role", "password", "confirm-password"]) {
    const el = document.getElementById(id);
    if (el) el.value = "";
  }

  successPanel.focus?.();
  successPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}
