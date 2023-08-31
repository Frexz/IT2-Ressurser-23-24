<script>
    let r = 0
    let g = 0
    let b = 0
</script>

<h1 style="color: rgb({r}, {g}, {b})">Fjong Farge</h1>

{r}
<input type="range" min="0" max="255" bind:value={r}>
{g}
<input type="range" min="0" max="255" bind:value={b}>
{b}
<input type="range" min="0" max="255" bind:value={g}>

<style>
   
</style>