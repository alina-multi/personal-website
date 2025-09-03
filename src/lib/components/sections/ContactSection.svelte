<script lang="ts">
	import SpinningText from '$lib/components/animation/SpinningText.svelte';
	import ContactMainContent from './ContactMainContent.svelte';

	export let title;
</script>

<div class="relative w-full">
	<ContactMainContent {title} />
	<div class="right-0 top-0 -z-10 hidden xl:absolute xl:block xl:h-full">
		<SpinningText children="learn more • earn more • grow more •"></SpinningText>
	</div>
</div>
