<script>
    import { page } from '$app/stores'
    let deloppgaver = ["a)", "b)", "c)", "d)"]
</script>

<ul>
    {#each deloppgaver as oppg}
        <li>
            <a href="{$page.url.pathname}/{oppg}">{oppg}</a>
        </li>
    {/each}
</ul>


<style>
    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin: 0 10px;
    }
</style>