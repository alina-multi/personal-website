const aboutMeIntro = [
	{
		p1: 'Hello! I’m Alina and I enjoy creating web things where user needs and business goals come together. Before web development, I worked in project management, where I learned to see the big picture, from tiny details to overall user flow.'
	},
	{
		p2: 'I started out with React but found my perfect match in Svelte and SvelteKit. Along the way, I’ve also picked up experience in branding, content creation, and SEO, which helps me understand how design, usability, and visibility all fit together to make a product succeed.'
	},
	{
		p3: 'Currently, I’m a Frontend Engineer at Arts.Center, focusing on product development and UX-centric solutions that connect artists with audiences through unique digital experiences.'
	},
	{ p4: 'Here are a few technologies I’ve been working with recently:' }
];

const techStack = [
	'TypeScript',
	'JavaScript (ES6+)',
	'Svelte/SvelteKit',
	'Tailwind CSS',
	'React.js',
	'Prisma'
];
const services = [
	{
		title: 'Landing Pages',
		description:
			'One-page websites that effectively showcase your business or portfolio. Fast, responsive, and optimized for search engines.',
		icon: 'FolderCode'
	},
	{
		title: 'Web Applications',
		description:
			'Lightning-fast applications with modern architecture (SSR/SSG), authentication forms, dashboards, and optimized bundles.',
		icon: 'Cpu'
	},
	{
		title: 'MVP Development',
		description:
			'Validate your startup idea quickly. Turning concept into a functional prototype. Scalable and maintainable from the start.',
		icon: 'Rocket'
	},
	{
		title: 'Legacy System Revamps',
		description:
			'Upgrade outdated sites with modern stacks, faster load times, and refreshed designs, keeping your functionality intact.',
		icon: 'Zap'
	},
	{
		title: 'Website Speed Optimization',
		description:
			'Improving load times, interactivity, and overall performance for a better user experience.',
		icon: 'Gauge'
	},
	{
		title: 'Custom Feature Development',
		description:
			'Ownership of complex features from design to deployment, ensuring clean, scalable integration into your project.',
		icon: 'Puzzle'
	}
];

const featured_projects = [
	{
		title: 'Arts.Center',
		description:
			'Redesigned and rebuilt a social platform with 12k users - turning a slow MVP into a fast, scalable, and user-friendly product, now preparing for marketplace expansion.',
		tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Prisma'],

		image: { src: '/images/arts_center.jpeg', alt: 'Arts.Center screenshot' },
		url: 'https://arts.center'
	},
	{
		title: 'Blog Platform',
		description:
			'A blog platform for reading and sharing ideas. Users can create an account to publish articles, comment, and manage their profile with simple navigation and secure authorization.',

		tags: ['React.js', 'Tailwind CSS', 'Firebase/Firestore'],
		image: { src: '/images/blog.001.jpeg', alt: 'Blog Platform screenshot' },
		url: 'https://aesthetic-madeleine-126da3.netlify.app'
	}
];

const whySvelteIntro = [
	{
		p1: 'Choosing a framework isn’t about following the latest trend. It’s about picking tools that efficiently solve real problems. After building apps with React, I often found myself wrestling with boilerplate, complex state management, and performance overheads.'
	},
	{
		p2: 'When I discovered Svelte, it felt like a breath of fresh air. Components that are reactive by default, minimal setup, and bundles that stay lean and fast. It’s not just faster code, it’s a development experience that lets me focus on creating value for users, not wrestling with the framework.'
	},
	{
		p3: 'Svelte consistently ranks high in developer satisfaction surveys. The ecosystem keeps growing, and so do the possibilities. Below, I’ve highlighted the key reasons why Svelte has become my go-to choice for building modern, maintainable applications.'
	}
];

const svelteBenefits = [
	{
		title: 'Zero Boilerplate',
		description:
			'No virtual DOM, no endless hooks. Svelte compiles at build-time, so what ships to users is only the code they need, lean, fast, and reliable',
		icon: 'Sprout'
	},
	{
		title: 'Built-in Performance',
		description:
			'Smaller bundle sizes, faster load times, smoother UX. Switching to Svelte often cuts project weight dramatically, meaning happier users and better SEO.',
		icon: 'PawPrint'
	},
	{
		title: 'Simple Project Structure',
		description:
			'   With file-based routing in SvelteKit, creating a new page is as easy as adding a file. It keeps projects organized and easy to scale',
		icon: 'FolderTree'
	},
	{
		title: 'Reactivity That Just Works',
		description:
			'No over-engineered state management. Svelte’s reactivity model is intuitive and powerful, keeping even complex features manageable.',
		icon: 'Rabbit'
	},
	{
		title: 'Stress-Free Styles',
		description:
			'Component-scoped CSS by default. No naming conflicts, no bloated stylesheets. Paired with Tailwind, it’s a dream for clean, maintainable design',
		icon: 'Sticker'
	},
	{
		title: 'Trusted by  Leaders',
		description:
			'Big names like The New York Times, Google, Apple, and Spotify use it in production. ',
		icon: 'Crown'
	}
];

export const sections = [
	{
		id: 'about' as const,
		title: 'About Me',
		data: { aboutMeIntro, techStack }
	},
	{
		id: 'services' as const,
		title: 'What can I do for you',
		data: { services }
	},
	{
		id: 'featuredProjects' as const,
		title: 'Some things I have built',
		data: { featured_projects }
	},
	{
		id: 'whySvelte' as const,
		title: 'Why do I choose Svelte & SvelteKit?',
		data: { svelteBenefits, whySvelteIntro }
	},
	{
		id: 'contact' as const,
		title: 'Get in touch',
		data: {}
	}
] as const;
