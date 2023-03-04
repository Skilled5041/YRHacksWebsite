<form action="?/register" method="POST" class="card top-24 items-center">
    <label class="text-2xl mb-4 w-80">
        Username
        <input type="text" name="username" placeholder="Username" class="input input-bordered w-full max-w-xs"/>
    </label>
    <label class="text-2xl mb-4 w-80">
        Email
        <input type="email" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs"/>
    </label>
    <label class="text-2xl mb-4 w-80">
        Password
        <input type="password" name="password" placeholder="Password" class="input input-bordered w-full max-w-xs"/>
    </label>
    <label class="text-2xl mb-4 w-80">
        Confirm Password
        <input type="password" name="password_confirmation" placeholder="Confirm Password"
               class="input input-bordered w-full max-w-xs"/>
    </label>
    <button class="btn btn-primary w-80 mt-8">Register</button>
</form>