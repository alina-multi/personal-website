<script lang="ts">
  import { socialLinks } from "$lib/data/socialLinks.js";
  import GitHubIcon from "./icons/GitHubIcon.svelte";
  import LinkedInIcon from "./icons/LinkedInIcon.svelte";
  import InstagramIcon from "./icons/InstagramIcon.svelte";
  import TelegramIcon from "./icons/TelegramIcon.svelte";

  const iconComponents = {
    GitHub: GitHubIcon,
    LinkedIn: LinkedInIcon,
    Instagram: InstagramIcon,
    Telegram: TelegramIcon,
  };
</script>

<ul class="-ml-1 mt-8 flex items-center">
  {#each socialLinks as link (link.url)}
    <li>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 p-2 text-stone-400 transition-colors hover:text-teal-300"
        aria-label={link.name}
      >
        <svelte:component this={iconComponents[link.icon]} />
      </a>
    </li>
  {/each}
</ul>
