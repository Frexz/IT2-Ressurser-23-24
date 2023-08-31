<script>
    let side
    $: omkrets = 3*side 
    $: areal = (side*Math.sqrt(side**2 - (side/2)**2)) / 2
</script>

<h1>Likesidet Trekant</h1>
<span style="color: orange; font-size: {side*50}px;">&#9651;</span>
<input type="number" placeholder="Skriv inn lengden på sidene i trekanten" bind:value={side}>
<h3>Omkretsen av trekanten er {omkrets}</h3>
<h3>Arealet av trekanten er {areal.toFixed(2)}</h3>

<style>
  h1 {
    color: green;
  }
</style>