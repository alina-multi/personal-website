<script lang="ts">
  let { message = '', type = "success", show = $bindable(false) }: {
    message: string;
    type: "success" | "error";
    show: boolean;
} = $props();
import {Rocket} from '@lucide/svelte';

const bgColor = $derived(type === "success" ? "bg-teal-600  inset-shadow-teal-300/40" : "bg-stone-950  inset-shadow-gray-300/40 ");
const textColor = $derived("text-white");

$effect(() => {
  if (show) {
    const timeout = setTimeout(() => (show = false), 3000);
    return () => clearTimeout(timeout);
  }
});
</script>

{#if show}
  <div
    class={`absolute inset-0 z-50 rounded px-6 py-4 lg:p-9 shadow-lg  inset-shadow-sm  ${bgColor} ${textColor} animate-fade-in`}
  >
   <div class="flex flex-col items-center justify-center gap-6 h-full">
  {#if type === "success"}
   
      <div class="border border-teal-500 p-6 rounded-full inset-shadow-sm inset-shadow-teal-300/40">
        <Rocket class="size-14 stroke-1 stroke-stone-200" />
      </div>
      <div class="text-center font-medium text-xl">{message}</div>

  {:else}
  <div class="border text-3xl font-bold tracking-widest border-red-500 py-5 px-8 rounded-full inset-shadow-sm inset-shadow-red-300/40 bg-red-900">
       OOPS!
      </div>

      <div class="text-center font-medium text-xl">{message}</div>
 
  {/if}
     </div>
  </div>
{/if}

<style>
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
