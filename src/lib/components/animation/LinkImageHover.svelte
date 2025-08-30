<script lang="ts">
	import { blur } from 'svelte/transition';

	export let hrefDetails = {
		href: 'https://in.pinterest.com/pin/724375921339895692/',
		text: 'Alina Akseninko',
		imgSrc: 'https://i.pinimg.com/736x/7e/61/74/7e6174c858a5aa169de033f55fc3050c.jpg',
		imgAlt: 'Mumbai'
	};
	let isHover = false;

	let linkEffect = (node: HTMLElement) => {
		node.addEventListener('mouseenter', () => {
			isHover = true;
		});
		node.addEventListener('mouseleave', () => {
			isHover = false;
		});
	};
</script>

<div class="relative z-50 inline">
	{#if isHover}
		<img
			in:blur={{ duration: 300 }}
			style="position:absolute;  bottom:40px;  left:50%; transform:translateX(-50%);"
			src="/images/akseninkoalina.jpg"
			alt={hrefDetails.imgAlt}
			class="z-50 h-24 w-24 rounded-full object-cover shadow-lg"
		/>
	{/if}
	<a
		use:linkEffect
		href={hrefDetails.href}
		target="_blank"
		class="text-md z-50 cursor-pointer underline"
	>
		{hrefDetails.text}
	</a>
</div>
