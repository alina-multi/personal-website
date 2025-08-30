<script>
	import CvLink from '$lib/components/atoms/CvLink.svelte';
	import NavLink from '$lib/components/layout/top_nav/NavLink.svelte';
	let { links, active } = $props();
</script>

<ul
	class="flex w-full flex-col items-center gap-6 text-lg font-medium tracking-wider text-stone-400 lg:flex-row"
	role="menubar"
>
	{#each links as { id, label }, index (id)}
		<li class="w-full">
			<NavLink {id} {label} {index} {active} />
		</li>
	{/each}

	<li class="w-full max-lg:mt-6 max-lg:text-center">
		<CvLink primary={true} />
	</li>
</ul>
