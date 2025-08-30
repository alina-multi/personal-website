<script>
	import { socialLinks } from '$lib/data/socialLinks.js';
</script>

<ul class="ml-1 mt-8 flex items-center gap-4">
	{#each socialLinks as link (link.url)}
		<li>
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 text-stone-400 transition-colors hover:text-teal-300"
				aria-label={link.name}
			>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html link.icon}
			</a>
		</li>
	{/each}
</ul>
