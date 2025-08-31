<script>
	import { cn } from '$lib/utils.js';

	let className = '';

	export { className as class };
</script>

<div class={cn('h-full w-full overflow-hidden', className)}>
	<div
		style={`background:
    radial-gradient(circle at 60% 40%, #14b8a6 0%, transparent 60%),
    radial-gradient(circle at 90% 80%, #22d3ee 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, #248c81 0%, transparent 55%);
    filter: blur(80px);
    opacity: 25%;`}
		class="absolute bottom-24 left-0 z-[-1] h-full w-full transition-all duration-500 ease-in-out"
	></div>
</div>



