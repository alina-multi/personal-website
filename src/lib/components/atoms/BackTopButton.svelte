<script lang="ts">
	export let href: string = '/';
</script>

<a
	class="inline-block rounded-full bg-teal-600 p-4 text-white shadow-sm transition hover:bg-teal-500 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600"
	{href}
>
	<span class="sr-only">Back to top</span>

	<svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 20 20" fill="currentColor">
		<path
			fill-rule="evenodd"
			d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
			clip-rule="evenodd"
		/>
	</svg>
</a>
