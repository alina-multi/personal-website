<script>
  let { id, label, index, active } = $props();

  function scrollToSection(id) {
    const section = document.getElementById(id);

    section?.scrollIntoView({ behavior: "smooth" });
    active = id;
  }
</script>

<a
  href={`/#${id}`}
  onclick={() => scrollToSection(id)}
  aria-current={active === id ? 'page' : undefined}
  aria-label={`Navigate to ${label} section`}
  class="flex cursor-pointer flex-col items-center max-lg:w-full max-lg:py-3 max-lg:text-xl lg:flex-row {active ===
  id
    ? 'text-white after:scale-x-100 after:bg-teal-400'
    : ' hover:scale-105 hover:text-white'} transition-transform focus:outline-none focus:ring-offset-stone-950"
>
  <span class="text-teal-300" aria-hidden="true">{`0${index + 1}.`}</span>
  <span class="ml-2">{label}</span>
</a>
