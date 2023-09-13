<script>
    import { page } from '$app/stores'
    let path

    $: path = $page.url.pathname

</script>

<ul>
    <li class:active={path == "/"}><a href="/">Tilbake til oversikt</a></li>
    <li class:active={path == "/kapittel1"}><a href="/kapittel1">Kapittel 1</a></li>
    <li class:active={path == "/kapittel2"}><a href="/kapittel2">Kapittel 2</a></li>
    <li class:active={path == "/kapittel3"}><a href="/kapittel3">Kapittel 3</a></li>
    <li class:active={path == "/kapittel4"}><a href="/kapittel4">Kapittel 4</a></li>
    <li class:active={path == "/kapittel5"}><a href="/kapittel5">Kapittel 5</a></li>
    <li class:active={path == "/kapittel6"}><a href="/kapittel6">Kapittel 6</a></li>
</ul>

<slot></slot>

<style>
    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: #111;
    }

    .active {
        background-color: #04AA6D;
    }

</style>