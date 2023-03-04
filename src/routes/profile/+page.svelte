<script>

    export let data;
    const user = data.session.session.user;

</script>

<h1 class="font-bold text-4xl mt-32">{user.user_metadata.username}</h1>
<hr class="h-px mt-2">
<h1 class="mt-8">Problems solved: {data.problemsSolved}</h1>
<h1 class="mt-2">Points: {data.points}</h1>
<h1 class="mt-2">Rank: </h1>