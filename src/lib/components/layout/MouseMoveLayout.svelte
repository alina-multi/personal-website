<script>
	let x = 800;
	let y = 800;
	let isTouchDevice = false;

	if (typeof window !== 'undefined') {
		isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
	}

	const handleMouseMove = (e) => {
		if (isTouchDevice) return;
		x = e.clientX;
		y = e.clientY;
	};
</script>


<div on:mousemove={handleMouseMove} role="presentation">
	<div
		class=" -z-10 pointer-events-none fixed h-36 w-36 rounded-full bg-teal-950/30 blur-3xl transition-transform duration-75 ease-out xl:size-[800px]"
		style="transform: translate(calc({x}px - 50%), calc({y}px - 50%));"
	></div>

	<slot></slot>
</div>
