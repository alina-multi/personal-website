<script>
	import { scale } from 'svelte/transition';
	export let x;
	export let y;
	export let title = 'William Shakespeare';
</script>

<div
	class="absolute z-50 rounded-full"
	style="top: {y}px; left: {x}px; pointer-events: none;"
	in:scale
>
	<svg
		stroke="currentColor"
		fill="currentColor"
		stroke-width="1"
		style="transform: rotate(-70deg) translateX(-2px) translateY(-15px); "
		viewBox="0 0 16 16"
		class="h-6 w-6 stroke-teal-600 text-teal-500"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
		></path>
	</svg>

	<div
		class="  inset-shadow-sm xl:inset-shadow-stone-700/40 min-w-max whitespace-nowrap rounded-full bg-stone-700/60 px-4 py-2 text-xs text-white backdrop-blur-lg"
	>
		{title}
	</div>
</div>
