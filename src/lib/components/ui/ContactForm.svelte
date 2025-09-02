<script lang="ts">
  let name = $state('');
  let email = $state('');
  let message = $state('');
  let isSubmitting = $state(false);
  let nameError = $state('');
  let emailError = $state('');
  let messageError = $state('');

  function validateForm() {
    nameError = '';
    emailError = '';
    messageError = '';

    let isValid = true;

    if (!name.trim()) {
      nameError = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      emailError = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'Please enter a valid email address';
      isValid = false;
    }

    if (!message.trim()) {
      messageError = 'Message is required';
      isValid = false;
    }

    return isValid;
  }

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    
    if (!validateForm()) return;

    isSubmitting = true;
    // TODO: Implement form submission logic
    console.log('Form submitted:', { name, email, message });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    isSubmitting = false;
  }
</script>

<!-- class="inset-shadow-sm xl:inset-shadow-gray-700/20 relative z-50 rounded xl:bg-gray-700/20 xl:p-16 xl:shadow-xl xl:backdrop-blur-lg" -->

<form 
  class="z-1" 
  onsubmit={handleSubmit}
  aria-labelledby="contact-form-title"
  novalidate
>
  <h2 id="contact-form-title" class="sr-only">Contact Form</h2>
  
  <div class="grid gap-9">
    <div>
      <label for="name" class="sr-only">Your Name</label>
      <input
        id="name"
        name="name"
        type="text"
        bind:value={name}
        required
        aria-invalid={nameError ? 'true' : 'false'}
        aria-describedby={nameError ? 'name-error' : undefined}
        class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg backdrop-blur-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {nameError ? 'ring-2 ring-red-500' : ''}"
        placeholder="Name"
      />
      {#if nameError}
        <p id="name-error" class="mt-1 text-sm text-red-400" role="alert">{nameError}</p>
      {/if}
    </div>
    
    <div>
      <label for="email" class="sr-only">Your Email</label>
      <input
        id="email"
        name="email"
        type="email"
        bind:value={email}
        required
        aria-invalid={emailError ? 'true' : 'false'}
        aria-describedby={emailError ? 'email-error' : undefined}
        class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {emailError ? 'ring-2 ring-red-500' : ''}"
        placeholder="Email"
      />
      {#if emailError}
        <p id="email-error" class="mt-1 text-sm text-red-400" role="alert">{emailError}</p>
      {/if}
    </div>
    
    <div>
      <label for="message" class="sr-only">Your Message</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        bind:value={message}
        required
        aria-invalid={messageError ? 'true' : 'false'}
        aria-describedby={messageError ? 'message-error' : undefined}
        class="focus:ring-primary-100 mt-1 w-full rounded border-0 bg-zinc-900 px-6 py-3 text-lg placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 xl:bg-gray-700/40 {messageError ? 'ring-2 ring-red-500' : ''}"
        placeholder="Message"
      ></textarea>
      {#if messageError}
        <p id="message-error" class="mt-1 text-sm text-red-400" role="alert">{messageError}</p>
      {/if}
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      aria-describedby="submit-button-description"
      class="rounded border border-teal-500 bg-zinc-900 py-3 text-lg font-bold text-stone-400 hover:bg-teal-500/20 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
    >
      {isSubmitting ? 'Sending...' : 'Get in touch'}
    </button>
    <p id="submit-button-description" class="sr-only">
      Submit the contact form to send your message
    </p>
  </div>
</form>
