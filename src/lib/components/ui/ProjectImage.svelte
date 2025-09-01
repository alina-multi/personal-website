<script>
	import FollowPointerCard from '$lib/components/animation/FollowPointerCard.svelte';
	export let project;




</script>

<div
	class="inset-shadow-xs inset-shadow-teal-700/20 group relative w-full space-y-9 overflow-hidden rounded lg:w-3/5"
>
	<FollowPointerCard title={project.title}>
		<a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="View {project.title} project"
			class=" inset-shadow-xs inset-shadow-teal-500/20 absolute left-0 top-0 h-full w-full rounded bg-teal-950/20 transition-opacity group-hover:opacity-0 lg:bg-teal-950/70"
		></a>

		<enhanced:img src={project.image.src} alt={project.image.alt} class="h-full w-full object-cover" />
	</FollowPointerCard>
</div>
