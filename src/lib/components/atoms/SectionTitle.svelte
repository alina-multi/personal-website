<script lang="ts">
	export let title: string;
	export let order: number;
</script>

<div class=" mb-16 flex items-center gap-6 md:gap-16">
	<h2 class="font-gilroy text-2xl font-bold xl:text-3xl">
		<span class="text-teal-500" aria-hidden="true"> 0{order}. </span>
		<span class=" ">{title}</span>
	</h2>
	<span class="inline-block w-full min-w-0 max-w-full flex-1 border-t border-zinc-500/50" aria-hidden="true"></span>
</div>
