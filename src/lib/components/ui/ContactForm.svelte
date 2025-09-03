<script lang="ts">
  import Notification from "$lib/components/ui/Notification.svelte";

  let name = $state("");
  let email = $state("");
  let message = $state("");
  let isSubmitting = $state(false);
  let nameError = $state("");
  let emailError = $state("");
  let messageError = $state("");

  let notificationMessage = $state("");
  let notificationType: "success" | "error" = $state("error");
  let showNotification = $state(false);

  function validateForm() {
    nameError = "";
    emailError = "";
    messageError = "";

    let isValid = true;

    if (!name.trim()) {
      nameError = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      emailError = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Please enter a valid email address";
      isValid = false;
    }

    if (!message.trim()) {
      messageError = "Message is required";
      isValid = false;
    }

    return isValid;
  }

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (!validateForm()) return;

    isSubmitting = true;

    try {
      const response = await fetch("https://formspree.io/f/mandprvz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        name = "";
        email = "";
        message = "";
        notificationMessage =
          "Thanks for your message! I'll get back to you as soon as possible.";
        notificationType = "success";
      } else {
        throw new Error("Error sending message");
      }
    } catch (error) {
      notificationMessage =
        ` You can try again or send me a message via social media. Error: ${error.message}.`;
      notificationType = "error";
    } finally {
      isSubmitting = false;
      showNotification = true;
    }
  }
</script>

<div class="relative">
  <Notification
    message={notificationMessage}
    type={notificationType}
    bind:show={showNotification}
  />

  <form
    class="z-10"
    onsubmit={handleSubmit}
    aria-labelledby="contact-form-title"
    novalidate
  >
    <h2 id="contact-form-title" class="sr-only">Contact Form</h2>

    <div class="grid gap-9">
      <div class="relative">
        <label for="name" class="sr-only">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          bind:value={name}
          onchange={() => (nameError = "")}
          required
          aria-invalid={nameError ? "true" : "false"}
          aria-describedby={nameError ? "name-error" : undefined}
          class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg backdrop-blur-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {nameError
            ? 'ring-2 ring-red-500'
            : ''}"
          placeholder="Name"
        />
        {#if nameError}
          <p
            id="name-error"
            class="absolute -bottom-6 left-0 text-sm text-red-400"
            role="alert"
          >
            {nameError}
          </p>
        {/if}
      </div>

      <div class="relative">
        <label for="email" class="sr-only">Your Email</label>
        <input
          id="email"
          name="email"
          type="email"
          bind:value={email}
          onchange={() => (emailError = "")}
          required
          aria-invalid={emailError ? "true" : "false"}
          aria-describedby={emailError ? "email-error" : undefined}
          class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {emailError
            ? 'ring-2 ring-red-500'
            : ''}"
          placeholder="Email"
        />
        {#if emailError}
          <p
            id="email-error"
            class="absolute -bottom-6 left-0 text-sm text-red-400"
            role="alert"
          >
            {emailError}
          </p>
        {/if}
      </div>

      <div class="relative">
        <label for="message" class="sr-only">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          bind:value={message}
          onchange={() => (messageError = "")}
          required
          aria-invalid={messageError ? "true" : "false"}
          aria-describedby={messageError ? "message-error" : undefined}
          class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {messageError
            ? 'ring-2 ring-red-500'
            : ''}"
          placeholder="Message"
        ></textarea>
        {#if messageError}
          <p
            id="message-error"
            class="absolute -bottom-4 left-0 text-sm text-red-400"
            role="alert"
          >
            {messageError}
          </p>
        {/if}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-describedby="submit-button-description"
        class="rounded border cursor-pointer transition-all hover:text-white border-teal-500 bg-zinc-900 py-3 text-lg font-bold text-stone-400 hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        {isSubmitting ? "Sending..." : "Get in touch"}
      </button>
      <p id="submit-button-description" class="sr-only">
        Submit the contact form to send your message
      </p>
    </div>
  </form>
</div>
