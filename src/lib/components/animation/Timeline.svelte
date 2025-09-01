<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { writable } from 'svelte/store';

	export let timelineData: {
		year: string;
		companyName?: string;
		jobTitle?: string;
		description: string;
		skills?: string[];
		link?: string;
		projects?: { name: string; link: string }[];
	}[] = [
		{
			year: '2022–2025',
			companyName: 'Arts.Center',
			jobTitle: 'UI Engineer',
			description:
				'Redesigned and rebuilt the frontend of a niche art marketplace using SvelteKit, Tailwind, and TypeScript. Led UX, performance, accessibility, and SEO improvements. Built key features from scratch, including a Medium-style editor, and introduced component testing with Vitest.',
			skills: [
				'SvelteKit',
				'Tailwind CSS',
				'TypeScript',
				'Storybook',
				'Vitest',
				'UX/UI',
				'SEO',
				'Quill.js'
			],
			link: 'https://arts.center',
			projects: []
		},
		{
			year: '2021–2022',
			companyName: 'Freelance',
			jobTitle: 'Junior Frontend Developer',
			description:
				'Delivered responsive web apps with React, Redux, and Firebase. Focused on UI consistency, navigation flow, and mobile-first design across small-to-mid scale projects.',
			skills: ['React', 'Redux', 'Firebase'],
			projects: [
				{ name: 'React Blog', link: '' },
				{ name: 'Filmoteka', link: '' }
			]
		},
		{
			year: '2021–2022',
			companyName: 'Freelance',
			jobTitle: 'Junior Frontend Developer',
			description:
				'Delivered responsive web apps with React, Redux, and Firebase. Focused on UI consistency, navigation flow, and mobile-first design across small-to-mid scale projects.',
			skills: ['React', 'Redux', 'TypeScript', 'JavaScript', 'UX/UI', 'Firebase'],
			projects: [
				{ name: 'Oh my donut', link: '' },
				{ name: 'Web Studio', link: '' }
			]
		},
		{
			year: '2016–2021',
			companyName: 'Farfor',
			jobTitle: 'Project Manager | Event Designer',
			description:
				'Led event production from concept to execution for corporate and private clients. Managed budgets, communication, and teams. Built strong planning, communication, and problem-solving skills that now inform my dev work.',
			skills: ['Project Management', 'Client Communication', 'Creative Direction']
		}
	];

	let containerRef: HTMLDivElement;
	let height = 0;
	let scrollProgress = writable(0);
	let heightTransform = tweened(0, { duration: 400, easing: cubicOut });
	let opacityTransform = tweened(0, { duration: 400, easing: cubicOut });

	onMount(() => {
		if (containerRef) {
			const rect = containerRef.getBoundingClientRect();
			height = rect.height;
		}

		let onScroll = () => {
			const rect = containerRef.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			let progress = Math.min(
				1,
				Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
			);
			progress = progress < 0.6 ? progress - 0.09 : progress - 0.004;
			scrollProgress.set(progress);
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	$: scrollProgress.subscribe((progress) => {
		heightTransform.set(progress * height);
		opacityTransform.set(progress < 0.1 ? progress * 10 : 1);
	});
</script>

<div class="w-full" bind:this={containerRef}>
	<slot />

	<div class="relative mx-auto space-y-6 overflow-hidden py-20">
		{#each timelineData as item, index (index)}
			<div class="group rounded-md transition-transform duration-200 hover:z-50 hover:bg-stone-950">
				<div
					class="hover:inset-shadow-sm inset-shadow-gray-700/20 flex justify-start rounded-md py-10 transition-transform duration-200 hover:z-50 hover:bg-gray-700/20 lg:gap-9"
				>
					<div class="sticky top-40 z-40 flex shrink-0 md:flex-row">
						<div
							class="absolute left-2 flex size-6 items-center justify-center rounded-full max-sm:top-1 sm:size-10 md:left-3 lg:left-3 dark:bg-stone-900"
						>
							<div
								class="size-2 rounded-full border border-neutral-300 sm:size-4 sm:p-2 dark:border-neutral-700 dark:bg-stone-700"
							></div>
						</div>

						<h3
							class="hidden text-xl font-semibold text-neutral-500 md:block md:pl-20 md:text-base dark:text-stone-500"
						>
							{item.year}
						</h3>
					</div>

					<div class="relative w-full flex-grow pl-12 sm:pl-20 sm:pr-4 md:pl-4">
						<h3
							class="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden dark:text-stone-500"
						>
							{item.year}
						</h3>

						<div class=" ">
							<div class="">
								<div
									class="mb-3 flex items-center gap-3 text-base font-medium text-white group-hover:text-teal-500"
								>
									<h4 class="font-accent text-lg">
										{item.jobTitle}
									</h4>
									<div class="h-0.5 w-0.5 rounded-full bg-white group-hover:bg-teal-500"></div>
									{#if item.link}
										<a
											href={item.link}
											class="font-accent flex items-center text-lg hover:text-teal-500 hover:underline"
										>
											{item.companyName}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class=" group-hover:scale-120 ml-1 h-4 w-4 transition-transform duration-200"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
												/>
											</svg>
										</a>
									{:else}
										<span class="font-accent flex items-center text-lg text-neutral-400"
											>{item.companyName}</span
										>
									{/if}
								</div>

								<p class="text-stone-400 group-hover:text-stone-300">
									{#if typeof item.description === 'string'}
										{item.description}
									{:else}
										<svelte:component this={item.description} />
									{/if}
								</p>
							</div>

							<ul class="mt-4 flex gap-3 text-sm font-medium text-neutral-200">
								{#each item.projects as project, index (index)}
									<li class="flex items-center gap-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
											/>
										</svg>

										<a href={project.link} class="hover:text-teal-500 hover:underline">
											{project.name}
										</a>
									</li>
								{/each}
							</ul>

							<ul class="mt-4 flex flex-wrap gap-2">
								{#each item.skills as skill (skill)}
									<li
										class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
									>
										{skill}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		{/each}

		<div
			style="height: {height}px;"
			class="timeline-line absolute left-5 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] md:left-8 dark:via-neutral-700"
		>
			<div
				style="height: {$heightTransform}px; opacity: {$opacityTransform};"
				class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-teal-500 from-[0%] via-teal-500 via-[10%] to-transparent"
			> </div>
		</div>
	</div>
</div>

<style>
	.timeline-line {
		mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
	}
</style>
