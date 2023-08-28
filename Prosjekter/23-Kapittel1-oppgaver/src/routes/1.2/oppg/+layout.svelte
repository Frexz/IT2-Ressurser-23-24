<script>
    import { page } from '$app/stores'
    let oppgavenummer = $page.url.pathname.slice(-4)
</script>

<h1>Oppgave {oppgavenummer}</h1>

<slot></slot>

<style>
    
</style>