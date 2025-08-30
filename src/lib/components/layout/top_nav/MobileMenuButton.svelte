<script lang="ts">
	import { AlignJustify } from '@lucide/svelte';
	let { showModal = $bindable() } = $props();
</script>

<button
	type="button"
	onclick={() => (showModal = true)}
	aria-expanded={showModal}
	aria-controls="mobile-menu"
	aria-label="Open main menu"
	class="relative rounded-md p-3 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-teal-500"
>
	<span class="sr-only">Open main menu</span>
	{#if !showModal}
		<AlignJustify size={36} strokeWidth={1} class="text-teal-400 hover:text-stone-200" />
	{/if}
</button>
