<script>
    export let session;
</script>

{#if !session}
    <h1>Not logged in</h1>
{:else}
    <h1>Logged in as {session.user.email}</h1>
{/if}