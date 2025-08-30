<script>
	const projects = [
		{
			title: 'Arts.Center Marketplace',
			image: '/images/arts.center.png',
			description:
				'An online marketplace for unique artworks and handcrafted pieces from artists and artisans. Built with SvelteKit and Tailwind CSS, featuring secure checkout and responsive design.',
			liveUrl: 'https://arts.center',
			githubUrl: '',
			stack: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Storybook', 'Prisma']
		},
		{
			title: 'React Blog Platform',
			image: '/images/blog.png',
			description:
				'A blogging platform built with React and Firebase that lets users create, edit, and share blog posts seamlessly. Features include user authentication, real-time updates, and a fully responsive design. Developed as an individual training project, the platform supports user profiles, adding posts, commenting, and storing images via Firebase Storage.',
			liveUrl: 'https://ecotrack.app',
			githubUrl: 'https://github.com/yourusername/eco-track',
			stack: ['React.js', 'Tailwind CSS', 'Firebase', 'Netlify']
		},
		{
			title: 'Filmoteka',
			image: '/images/filmoteka.png',
			description:
				'A collaborative project that allows users to discover movies and save their favorites in a personalized library',
			liveUrl: 'https://yourportfolio.com',
			githubUrl: 'https://github.com/yourusername/portfolio',
			stack: ['JavaScript', 'SCSS', 'Firebase']
		},
		{
			title: 'Web Studio',
			image: '/images/webstudio.png',
			description:
				'A web app that lets users search recipes by ingredients, cuisine, and dietary preferences. Integrated with the Spoonacular API and built with Vue.js.',
			liveUrl: 'https://recipefinder.app',
			githubUrl: 'https://github.com/yourusername/recipe-finder',
			stack: []
		},
		{
			title: 'Image Finder',
			image: '/images/imagefinder.png',
			description:
				'Image Finder Web App. An individual educational project that lets users find images instantly by keywords and tags using the Pixabay API. .',
			liveUrl: 'https://travelplanner.io',
			githubUrl: 'https://github.com/yourusername/travel-planner',
			stack: [
				'SvelteKit',
				'Tailwind CSS',
				'TypeScript',
				'Storybook',
				'Vitest',
				'UX/UI',
				'SEO',
				'Quill.js'
			]
		}
	];
</script>

<section id="projects" class="scroll-mt-16 lg:scroll-mt-24">
	<h2
		class="font-accent mb-4 max-w-4xl pl-6 text-2xl font-semibold text-stone-200 md:text-4xl dark:text-white"
	>
		Projects
	</h2>
	<ul class="group/list py-20">
		{#each projects as project (project.title)}
			<li
				class="hover:inset-shadow-sm inset-shadow-gray-700/20 group rounded-md p-6 transition-transform duration-200 hover:z-50 hover:bg-gray-700/20"
			>
				<div
					class="group relative grid gap-4 pb-1 transition-all duration-200 sm:grid-cols-8 sm:gap-8 md:gap-9"
				>
					<img
						src={project.image}
						alt={project.title}
						class="aspect-video rounded border-2 border-slate-200/10 object-cover transition sm:col-span-2"
					/>
					<div class="col-span-6">
						<h3 class="text-lg font-semibold text-stone-200">{project.title}</h3>
						<p class="mt-2 text-sm text-stone-400">{project.description}</p>
						<div class="mt-4 flex items-center gap-2">
							<a href={project.liveUrl} target="_blank" class="text-sm font-medium hover:underline">
								View Project</a
							>
							{#if project.githubUrl}
								<span class="text-sm text-slate-400">|</span>
								<a
									href={project.githubUrl}
									target="_blank"
									class="text-sm font-medium hover:underline">GitHub Repo</a
								>
							{/if}
						</div>
						<ul class="mt-4 flex flex-wrap gap-2">
							{#each project.stack as skill (skill)}
								<li
									class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
								>
									{skill}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>
