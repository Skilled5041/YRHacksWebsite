<script>
    import "../app.css";
</script>

<div class="navbar mb-2 shadow-lg">
    <div class="px-2 mx-2 navbar-start">
        <a href="/" class="text-lg font-bold">
            name
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
    <div class="navbar-end px-8">
        <button class="btn btn-sm btn-primary mx-4">
            <a href="login">Login</a>
        </button>
        <button class="btn btn-sm btn-primary mx-4">
            <a href="register">Register</a>
        </button>
    </div>
</div>

<div class="max-w-xl mx-auto py-8 px-4 items-center">
    <slot/>
</div>