<script>
    import { page } from '$app/stores'
    let oppgavenummer = $page.url.pathname.slice(-4)
</script>

<h1>Oppgave {oppgavenummer}</h1>

<div class="innhold">
    <slot></slot>
</div>

<style>
    .innhold {
        display: flex;
        flex-direction: column;
        height: 80vh;
        justify-content: center;
        align-items: center;
    }
</style>