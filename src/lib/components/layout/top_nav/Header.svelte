<script>
	import { onMount } from 'svelte';
	import LogoOctopus from '$lib/components/atoms/LogoOctopus.svelte';
	import MobileMenu from '$lib/components/layout/top_nav/MobileMenu.svelte';
	import NavList from '$lib/components/layout/top_nav/NavList.svelte';
	import MobileMenuButton from '$lib/components/layout/top_nav/MobileMenuButton.svelte';

	let active = $state('home');

	const links = [
		{ id: 'about', label: 'About' },
		{ id: 'services', label: 'Services' },
		{ id: 'featuredProjects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	function onScroll() {
		for (const link of links) {
			const el = document.getElementById(link.id);

			if (el && el.getBoundingClientRect().top <= 150) {
				active = link.id;
			}
		}
	}

	onMount(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	let showModal = $state(false);
	let lastScroll = 0;
	let hidden = $state(false);
	let inScroll = $state(false);

	onMount(() => {
		const onScroll = () => {
			const current = window.scrollY;
			hidden = current > lastScroll && current > 50;
			lastScroll = current;
			inScroll = current > 50;
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class={`z-90  fixed left-0 top-0 w-full   transition-transform duration-300   ${
		hidden ? '-translate-y-full' : 'translate-y-0'
	}
		${inScroll ? 'shadow backdrop-blur-lg backdrop-brightness-95 max-xl:bg-stone-950/60' : ''}

	`}
>
	<nav
		aria-label="Main navigation"
		class="h-22 xl:px-15 mx-auto pl-6 pr-3 max-lg:container md:pl-12 md:pr-9"
	>
		<div class="h-22 relative flex items-center justify-between">
			<LogoOctopus />

			<div class=" lg:hidden">
				<MobileMenuButton bind:showModal />
			</div>
			<!-- Desktop Menu -->
			<div class="hidden lg:block">
				<NavList {links} {active}></NavList>
			</div>
		</div>
	</nav>
</header>

<!-- Mobile Menu -->
<div class="lg:hidden">
	<MobileMenu bind:showModal>
		<NavList {links} {active} />
	</MobileMenu>
</div>
