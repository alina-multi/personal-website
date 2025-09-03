<script>
	import { FolderCode, Gauge, Cpu, Rocket, Zap, Puzzle } from '@lucide/svelte';
	import SectionTitle from '$lib/components/atoms/SectionTitle.svelte';
	export let title = 'What can I do for you';
	export let order = 2;
	export let data;

	const icons = { FolderCode, Gauge, Cpu, Rocket, Zap, Puzzle };
	// Sample services data; replace with {data} prop when integrating
</script>

<SectionTitle {title} {order} />

<ul class="mt-16 grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-3">
	{#each data.services as service (service.title)}
		{@const Icon = icons[service.icon]}

		<li
			class="inset-shadow-sm inset-shadow-gray-700/20 group relative rounded border border-dashed border-zinc-400 bg-gray-700/20 p-9 shadow shadow-gray-700/20 backdrop-blur-3xl transition-all hover:-translate-y-1 hover:bg-teal-950 dark:border-zinc-700"
		>
			<div class="">
				<Icon  color="#ff3e98" strokeWidth={1.5} class="stroke-teal-500 size-10 lg:size-9 " />

				<h3 class="text-shadow-lg font-accent mt-6 text-2xl lg:text-xl font-normal">{service.title}</h3>
				<p class="mt-6 text-stone-400">{service.description}</p>
			</div>
		</li>
	{/each}
</ul>
