<script>
    export let data;
</script>

{#if data.session.session}
    <h1 class="text-3xl font-bold">Welcome, {data.session.session.user.email}</h1>
{:else}
    <h1 class="text-3xl font-bold">Welcome, Guest</h1>
{/if}