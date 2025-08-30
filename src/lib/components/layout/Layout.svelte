<script>
	import MouseMoveLayout from './MouseMoveLayout.svelte';
	import Header from '$lib/components/layout/top_nav/Header.svelte';
</script>

<div class="relative">
	<!-- Ліва колонка -->
	<aside
		class="xl:pl-15 fixed bottom-0 left-0 z-10 hidden self-end pl-9 leading-5 text-stone-400 lg:flex"
	>
		<div class="flex rotate-180 items-center gap-4 [writing-mode:vertical-rl]">
			<div class="h-32 w-0.5 border border-stone-500"></div>
			<p class="font-gilroy space-x-2 text-lg">
				<span>svelte</span>
				<span class="text-teal-500">•</span>

				<span>typescript</span>
				<span class="text-teal-500">•</span>
				<span>react.js</span>
			</p>
		</div>
	</aside>
	<Header />

	<MouseMoveLayout>
		<slot></slot>
	</MouseMoveLayout>

	<!-- Права колонка -->
	<aside
		class="xl:pr-15 fixed bottom-0 right-0 hidden self-end pr-9 leading-5 text-stone-400 lg:flex"
	>
		<address
			class="font-gilroy flex items-center gap-4 text-lg not-italic [writing-mode:vertical-rl]"
		>
			<a href="mailto:akseninkoalina@gmail.com">akseninkoalina@gmail.com</a>
			<div class="h-32 w-0.5 border border-stone-500"></div>
		</address>
	</aside>
</div>
