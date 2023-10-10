<script>
    import { sjekkPartall } from "../../../gjenbruk/myFunctions"
    let tall = 0
    let sekvens = []

    function collatz() {
        sekvens = [tall]

        while (tall > 1) {
            if (sjekkPartall(tall)) {
            tall = tall / 2
            } else {
                tall = 3*tall + 1
            }

            sekvens.push(tall)
        }

        sekvens = sekvens
    }

</script>

<h1>{sekvens}</h1>
<input type="number" bind:value={tall}>
<button on:click={collatz}>Kjør</button>

<style>
    
</style>