<script>
    import { page } from '$app/stores';
</script>

<p class="font-bold text-3xl text-center">{$page.status}: {$page.error.message}</p>