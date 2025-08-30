<script>
	import SectionList from '$lib/components/ui/SectionList.svelte';
	import SectionTitle from '$lib/components/atoms/SectionTitle.svelte';
	export let title;
	export let order;
	export let data;
</script>

<SectionTitle {title} {order} />
<div class="mb-9 mt-6 text-lg text-stone-400">
	{#each data.whySvelteIntro as { p1, p2, p3 }, i (i)}
		<p class="mb-7">{p1}</p>
		<p class="mb-7">{p2}</p>
		<p class="mb-7">{p3}</p>
	{/each}
</div>

<SectionList list={data.svelteBenefits} />
