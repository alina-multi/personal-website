<script>
  import SideNav from "$lib/components/resume/SideNav.svelte";
  import SocialLinks from "$lib/components/atoms/SocialLinks.svelte";
  import ProfileHeader from "$lib/components/resume/ProfileHeader.svelte";
</script>

<div
  class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col max-lg:space-y-9 lg:justify-between py-24 lg:mt-4"
>
  <ProfileHeader />

  <SideNav />

  <SocialLinks />
</div>
