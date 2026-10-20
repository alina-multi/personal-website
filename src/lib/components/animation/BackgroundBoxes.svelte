<script lang="ts">
	import { cn } from '#lib/utils.js';

	let className = '';
	export { className as class };
	export let r = 30;
	export let c = 30;
	let rows = new Array(r).fill(1);
	let cols = new Array(c).fill(1);
</script>

<div class="">
	<div class={cn('relative z-0 flex h-full w-full justify-center ', className)}>
		{#each rows as _, i (i)}<!-- eslint-disable-line @typescript-eslint/no-unused-vars -->
			<div class="h-9 w-9 sm:h-12 md:w-12">
				{#each cols as _, j (j)}<!-- eslint-disable-line @typescript-eslint/no-unused-vars -->
					<div
						class="relative h-9 w-9 border-r border-t border-neutral-900 last:border-b sm:h-12 md:w-12 {i === 0 && j >= 0
							? 'border-l'
							: ''}"
					></div>
				{/each}
			</div>
		{/each}
	</div>
</div>
