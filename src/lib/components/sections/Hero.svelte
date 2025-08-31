<script lang="ts">
	import Modal from '$lib/components/ui/Modal.svelte';
	import ContactForm from '$lib/components/ui/ContactForm.svelte';
	import ContactMainContent from './ContactMainContent.svelte';
	import CvLink from '$lib/components/atoms/CvLink.svelte';
	import LogoOctopus from '../atoms/LogoOctopus.svelte';

	let showModal = $state(false);
</script>

<section
	aria-labelledby="intro-heading "
	class="   mx-auto h-screen max-w-4xl scroll-mt-16 px-6 max-lg:container md:px-12 lg:scroll-mt-24 lg:px-20 xl:max-w-5xl xl:px-0"
	id="home"
>
	<div class="relative mx-auto flex h-full w-full items-center">
		<article class=" space-y-9">
			<p class=" text-lg font-medium tracking-wider text-teal-300">Hi, my name is</p>

			<div class="  xs:text-4xl space-y-3 text-4xl font-bold sm:text-5xl xl:text-6xl">
				<h1 id="intro-heading" class="font-gilroy text-stone-300">Alina Akseninko.</h1>

				<h2 class="sr-only">Professional Roles</h2>
				<h3 class="  text-stone-400">
					I make things happen <br />on the web.
				</h3>
			</div>

			<p class="font-gilroy text-lg text-stone-400 md:w-10/12">
				I’m a software engineer specializing in building (and sometimes designing) fast,
				pixel-perfect and intuitive interfaces that power exceptional digital experiences.
			</p>

			<nav class="mt-9 flex flex-wrap items-center gap-4" aria-label="Primary actions">
				<button
					type="button"
					onclick={() => (showModal = true)}
					class="z-50 inline-flex cursor-pointer items-center justify-center rounded border border-teal-400/50 bg-stone-950/60 px-4 py-3.5 font-medium text-teal-300 transition-colors hover:bg-teal-400/50 hover:text-stone-200"
				>
					Get in touch
				</button>

				<CvLink />
			</nav>
		</article>
	</div>
</section>



<Modal bind:showModal>
	<div class=" hidden lg:block"><ContactMainContent /></div>
	<div class=" w-full lg:hidden">
		<div class="absolute left-6 top-6 sm:left-16 sm:top-12"><LogoOctopus /></div>
		<h1 class="font-accent pb-9 text-3xl font-bold">Contact Me</h1>
		<ContactForm />
	</div>
</Modal>

