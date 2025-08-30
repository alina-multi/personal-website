<script>
	import SectionTitle from '$lib/components/atoms/SectionTitle.svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	export let title;
	export let order;
	export let data;
</script>

<SectionTitle {title} {order} />
<div class="relative mt-16 space-y-16">
	{#each data.featured_projects as project, index (project.title)}
		<ProjectCard {project} {index} />
	{/each}
</div>
