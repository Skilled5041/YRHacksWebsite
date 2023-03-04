<script>
    export let data;
</script>

{#if data.session.session}
    <h1 class="text-3xl font-bold">Welcome to Contest Ace, {data.session.session.user.user_metadata.username}!</h1>
{:else}
    <h1 class="text-3xl font-bold">Welcome to Contest Ace!</h1>
{/if}