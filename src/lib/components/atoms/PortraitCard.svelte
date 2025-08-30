<script>
	import FollowPointerCard from '$lib/components/animation/FollowPointerCard.svelte';
</script>

<div class=" group mb-9 mt-9 flex shrink-0 max-lg:mx-auto lg:pl-9 xl:mb-0 xl:w-2/6">
	<FollowPointerCard title="Alina Akseninko">
		<div class="relative">
			<div
				class="group-hover:-translate-1.5 inset-shadow-sm inset-shadow-teal-500/40 absolute -left-3 -top-3 size-80 rounded bg-teal-900 transition-all group-hover:bg-teal-600 lg:-left-9 lg:-top-9"
			></div>
			<img
				src="/images/akseninkoalina.jpg"
				alt="Alina Akseninko Svelte Developer"
				class="grayscale-100 group-hover:translate-1.5 inset-shadow-sm inset-shadow-black/20 aspect-square size-80 rounded object-cover transition-all"
			/>
			<div
				class="inset-shadow-sm group-hover:translate-1.5 inset-shadow-zinc-600/20 absolute inset-0 size-80 rounded bg-black/40 transition-all active:bg-transparent group-hover:bg-transparent"
			></div>
		</div>
	</FollowPointerCard>
</div>

<!-- 
<div class="relative group mb-9  flex mx-auto  shrink-0 lg:w-2/6 xl:mb-0">
	<FollowPointerCard title="Alina Akseninko">

<div class="flex items-center justify-between ">
	<div class='size-10 bg-teal-500'> </div>
		<div class='size-10 bg-teal-500'> </div>


</div>


<div class="mx-10  overflow-hidden relative">
		<img
			src="/images/akseninkoalina.jpg"
			alt="Alina Akseninko Svelte Developer"
			class="grayscale-100 group-hover:translate-1.5 inset-shadow-sm inset-shadow-black/20 aspect-square object-cover transition-all "
		/>


		<div
			class="inset-shadow-sm group-hover:translate-1.5 inset-shadow-zinc-600/20 absolute inset-0  bg-black/40 transition-all  group-hover:bg-transparent active:bg-transparent "
		></div>
	
	</div>

		<div class="flex items-center justify-between ">
		<div class='size-10 bg-teal-500'> </div>
		<div class='size-10 bg-teal-500'> </div>


</div>
		
	</FollowPointerCard>
</div> -->
