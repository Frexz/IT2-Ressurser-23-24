<script>
    let radius = 2
    $: areal = Math.PI*radius**2
    $: volum = (4*Math.PI*radius**3) / 3
</script>

<svg height="500" width="500">
    <circle cx="250" cy="250" r="{radius}" stroke="orange" stroke-width="2" fill="yellow" />
</svg>

<!-- Kopiert fra oppgave 1.19 -->
<input type="range" min="1" max="100" bind:value={radius}>
<input type="number" bind:value={radius} placeholder="Skriv inn radius">
<h3>Arealet av en sirkel med radius {radius} er {areal.toFixed(2)}</h3>
<h3>Volumet av en kule med radius {radius} er {volum.toFixed(2)}</h3>

<style>

</style>