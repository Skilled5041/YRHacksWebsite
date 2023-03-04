<script>
    import "../app.css";

    export let data;
</script>

<div class="navbar mb-2 shadow-lg">
    <div class="px-2 mx-2 mb-4 navbar-start">
        <a href="/" class="ml-4 text-lg font-bold">Contest Ace
            <a class="text-4xl">💯</a>
        </a>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
            <a href="/" class="btn btn-ghost btn-sm rounded-btn">
                Home
            </a>
            <a href="problems" class="btn btn-ghost btn-sm rounded-btn">
                Problems
            </a>
            <a href="about" class="btn btn-ghost btn-sm rounded-btn">
                About
            </a>
        </div>
    </div>
    {#if !data.session.session}
        <div class="navbar-end px-8">
            <button class="btn btn-sm btn-primary mx-4">
                <a href="login">Login</a>
            </button>
            <button class="btn btn-sm btn-primary mx-4">
                <a href="register">Register</a>
            </button>
        </div>
    {:else}
        <div class="navbar-end px-8">
            <form action="/logout" method="POST">
                <button class="btn btn-sm btn-primary mx-4">Logout</button>
            </form>
        </div>
    {/if}
</div>

<div class="max-w-xl mx-auto py-8 px-4 items-center">
    <slot/>
</div>