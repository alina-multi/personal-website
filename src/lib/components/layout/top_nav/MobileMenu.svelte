<script>
	import { X } from '@lucide/svelte';
	let { showModal = $bindable(), children } = $props();
	let dialog = $state();

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
	id="mobile-menu"
	aria-label="Mobile navigation menu"
	aria-modal="true"
	class="open:animate-slideIn pt-22 ml-auto h-screen min-h-screen w-3/4 bg-stone-950 p-9 text-stone-200 backdrop:backdrop-blur focus:ring-1 focus:ring-transparent md:w-2/3"
>
	{@render children?.()}

	<button
		type="button"
		autofocus
		aria-label="Close mobile menu"
		onclick={() => dialog.close()}
		class="absolute right-6 top-4 p-2 text-stone-400 hover:text-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-950"
	>
		<X size={36} strokeWidth={1} class="text-teal-400 hover:text-stone-200" aria-hidden="true" />
	</button>
</dialog>

<style>
	@layer utilities {
		@keyframes slideIn {
			from {
				transform: translateX(100%);
				opacity: 0;
			}
			to {
				transform: translateX(0);
				opacity: 1;
			}
		}
		.open\:animate-slideIn[open] {
			animation: slideIn 0.35s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
		}
	}
</style>
