<script>
	import { X } from '@lucide/svelte';
	let { showModal = $bindable(), children } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) {
			dialog.showModal();
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
			dialog.close();
		}
	});

	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			dialog.close();
		}
	}
</script>

<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onkeydown={handleKeyDown}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
	aria-label="Contact form modal"
	aria-modal="true"
	class="sm:w-xl lg:w-4xl xl:w-6xl sm:rounded-4xl w-full bg-stone-950/95 px-6 py-12 text-stone-300 backdrop:bg-teal-950/40 backdrop:backdrop-blur-sm
           max-sm:h-screen sm:m-auto
           sm:p-16 sm:pt-36 lg:p-20"
>
	<div class="flex h-full items-center">{@render children?.()}</div>

	<button
		type="button"
		autofocus
		aria-label="Close modal"
		onclick={() => dialog.close()}
		class="absolute right-6 top-6 rounded-full bg-stone-800/50 p-2 text-stone-400 transition-colors hover:bg-stone-800/70 hover:text-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-950 sm:max-lg:right-16 sm:max-lg:top-12"
	>
		<X class="h-5 w-5" aria-hidden="true" />
	</button>
</dialog>

<style>
	dialog {
		border: none;

		max-width: none;
		max-height: none;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
