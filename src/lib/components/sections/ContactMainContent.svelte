<script lang="ts">
	import PointerHighlight from '$lib/components/animation/PointerHighlight.svelte';
	import SocialLinks from '$lib/components/atoms/SocialLinks.svelte';
	import ContactForm from '$lib/components/ui/ContactForm.svelte';

	export let title = 'Get in touch';
</script>

<div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
	<div class="  text-2xl font-bold tracking-tight md:text-4xl">
		<h2 class="font-gilroy mb-6 text-lg text-teal-500">{title}</h2>
		<p class="">DO YOU HAVE ANY IDEA OR PROJECT YOU NEED HELP.</p>
		<PointerHighlight
			rectangleClassName=" bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
			pointerClassName="text-teal-500"
		>
			<div class="relative z-10 p-3">CONTACT ME</div>
		</PointerHighlight>

		<div class="font-gilroy mt-9 flex flex-col gap-3 text-base font-medium text-stone-400">
			<p class="font-gilroy">From Ukraine, based in Portugal</p>
			<address class="  not-italic">
				<a href="mailto:akseninkoalina@gmail.com"> akseninkoalina@gmail.com </a>
			</address>
			<SocialLinks />
		</div>
	</div>

	<ContactForm />
</div>
