<script>
    import "../app.css";

    export let data;
</script>

<div class="navbar mb-2 bg-base-200 300 shadow-lg fixed">
    <div class="px-2 mx-2 mb-4 navbar-start">
        <a href="/" class="ml-4 text-lg font-bold">
            <img src="src/imgs/logo.png" class="w-16 mt-4 px-4" alt="Contest Ace">
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
            {#if data.session.session}
                <a class="btn btn-ghost btn-sm rounded-btn" href="profile">Profile</a>
            {/if}
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