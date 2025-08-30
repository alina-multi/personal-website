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
		class=" pointer-events-none fixed h-36 w-36 rounded-full bg-teal-400/5 blur-2xl transition-transform duration-75 ease-out xl:size-72"
		style="transform: translate(calc({x}px - 50%), calc({y}px - 50%));"
	></div>

	<slot></slot>
</div>
