<script lang="ts">
  import { onMount } from "svelte";
  import Notification from "#lib/components/ui/Notification.svelte";
  import { trackFormAbandon } from "#lib/utils/analytics.js";

  interface Props {
    placement?: "contact_section" | "hero_modal";
    open?: boolean;
    idPrefix?: string;
  }

  let {
    placement = "contact_section",
    open = true,
    idPrefix = "contact",
  }: Props = $props();

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
  let submitted = false;
  let abandonSent = false;
  let previouslyOpen = false;
  let pendingExit: "modal_close" | "page_leave" | null = null;
  let formEl: HTMLFormElement | undefined = $state();

  const fieldId = (field: string) => `${idPrefix}-${field}`;

  function filledFields() {
    const fields: string[] = [];
    if (name.trim()) fields.push("name");
    if (email.trim()) fields.push("email");
    if (message.trim()) fields.push("message");
    return fields;
  }

  function reportAbandon(exit: "modal_close" | "page_leave") {
    if (submitted || abandonSent) return;
    if (formEl && formEl.getClientRects().length === 0) return;
    if (isSubmitting) {
      pendingExit = exit;
      return;
    }
    const fields = filledFields();
    if (fields.length === 0) return;
    abandonSent = true;
    trackFormAbandon(placement, fields, exit);
  }

  function onEdit() {
    abandonSent = false;
    submitted = false;
  }

  $effect(() => {
    if (placement !== "hero_modal") return;
    if (previouslyOpen && !open) reportAbandon("modal_close");
    previouslyOpen = open;
  });

  onMount(() => {
    const onLeave = () => reportAbandon("page_leave");
    window.addEventListener("pagehide", onLeave);
    return () => {
      reportAbandon("page_leave");
      window.removeEventListener("pagehide", onLeave);
    };
  });

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
        submitted = true;
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
      const detail = error instanceof Error ? error.message : "Unknown error";
      notificationMessage = ` You can try again or send me a message via social media. Error: ${detail}.`;
      notificationType = "error";
    } finally {
      isSubmitting = false;
      showNotification = true;
      if (pendingExit) {
        const exit = pendingExit;
        pendingExit = null;
        reportAbandon(exit);
      }
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
    bind:this={formEl}
    class="z-10"
    onsubmit={handleSubmit}
    aria-labelledby={fieldId("title")}
    novalidate
  >
    <h2 id={fieldId("title")} class="sr-only">Contact Form</h2>

    <div class="grid gap-9">
      <div class="relative">
        <label for={fieldId("name")} class="sr-only">Your Name</label>
        <input
          id={fieldId("name")}
          name="name"
          type="text"
          bind:value={name}
          oninput={onEdit}
          onchange={() => (nameError = "")}
          required
          aria-invalid={nameError ? "true" : "false"}
          aria-describedby={nameError ? fieldId("name-error") : undefined}
          class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg backdrop-blur-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {nameError
            ? 'ring-2 ring-red-500'
            : ''}"
          placeholder="Name"
        />
        {#if nameError}
          <p
            id={fieldId("name-error")}
            class="absolute -bottom-6 left-0 text-sm text-red-400"
            role="alert"
          >
            {nameError}
          </p>
        {/if}
      </div>

      <div class="relative">
        <label for={fieldId("email")} class="sr-only">Your Email</label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          bind:value={email}
          oninput={onEdit}
          onchange={() => (emailError = "")}
          required
          aria-invalid={emailError ? "true" : "false"}
          aria-describedby={emailError ? fieldId("email-error") : undefined}
          class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {emailError
            ? 'ring-2 ring-red-500'
            : ''}"
          placeholder="Email"
        />
        {#if emailError}
          <p
            id={fieldId("email-error")}
            class="absolute -bottom-6 left-0 text-sm text-red-400"
            role="alert"
          >
            {emailError}
          </p>
        {/if}
      </div>

      <div class="relative">
        <label for={fieldId("message")} class="sr-only">Your Message</label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows="4"
          bind:value={message}
          oninput={onEdit}
          onchange={() => (messageError = "")}
          required
          aria-invalid={messageError ? "true" : "false"}
          aria-describedby={messageError ? fieldId("message-error") : undefined}
          class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {messageError
            ? 'ring-2 ring-red-500'
            : ''}"
          placeholder="Message"
        ></textarea>
        {#if messageError}
          <p
            id={fieldId("message-error")}
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
        aria-describedby={fieldId("submit-description")}
        class="rounded border cursor-pointer transition-all hover:text-white border-teal-500 bg-zinc-900 py-3 text-lg font-bold text-stone-400 hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        {isSubmitting ? "Sending..." : "Get in touch"}
      </button>
      <p id={fieldId("submit-description")} class="sr-only">
        Submit the contact form to send your message
      </p>
    </div>
  </form>
</div>
