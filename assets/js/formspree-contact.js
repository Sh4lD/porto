
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const loading = form.querySelector(".loading");
    const errorMessage = form.querySelector(".error-message");
    const sentMessage = form.querySelector(".sent-message");
    const submitButton = form.querySelector('button[type="submit"]');

    loading.classList.add("d-block");
    errorMessage.classList.remove("d-block");
    sentMessage.classList.remove("d-block");

    submitButton.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
      });

      const result = await response.json();

      if (response.ok) {
        form.reset();
        sentMessage.classList.add("d-block");
      } else {
        const errorText = result.errors
          ? result.errors.map(error => error.message).join(", ")
          : "Unable to send your message. Please try again.";

        errorMessage.textContent = errorText;
        errorMessage.classList.add("d-block");
      }

    } catch (error) {
      errorMessage.textContent =
        "Connection error. Please check your internet connection and try again.";

      errorMessage.classList.add("d-block");

    } finally {
      loading.classList.remove("d-block");
      submitButton.disabled = false;
    }
  });
});
