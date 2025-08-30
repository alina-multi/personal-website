<script>
	import SectionTitle from '$lib/components/atoms/SectionTitle.svelte';
	import PortraitCard from '$lib/components/atoms/PortraitCard.svelte';
	import ResumeLink from '../atoms/ResumeLink.svelte';
	export let title;
	export let order;
	export let data;
</script>

<div class="flex w-full flex-col-reverse justify-between gap-12 xl:flex-row">
	<div class="w-full text-center lg:w-1/2 xl:hidden">
		<ResumeLink />
	</div>
	<PortraitCard />

	<div class="xl:w-2/3">
		<SectionTitle {title} {order} />

		<div>
			<div class="font-gilroy text-[18px] text-stone-400">
				{#each data.aboutMeIntro as { p1, p2, p3, p4 }, i (i)}
					<p class="mb-7">{p1}</p>
					<p class="mb-7">{p2}</p>
					<p class="mb-7">{p3}</p>
					<p class="mb-7">{p4}</p>
				{/each}
			</div>

			<ul
				class=" mt-9 grid w-full grid-flow-row-dense grid-cols-2 grid-rows-3 gap-x-4 gap-y-1 text-stone-400 xl:gap-x-0"
				aria-label="Key skills and roles"
			>
				{#each data.techStack as skill (skill)}
					<li>
						<span class="mr-1 font-mono text-teal-500" aria-hidden="true">▹</span>
						{skill}
					</li>
				{/each}
			</ul>
			<div class="mt-12 hidden lg:justify-start xl:flex">
				<ResumeLink />
			</div>
		</div>
	</div>
</div>
