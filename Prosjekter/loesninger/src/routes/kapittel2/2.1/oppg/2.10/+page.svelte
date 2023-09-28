<script>
    import { sumArray } from "../../../../../../../gjenbruk/mineFunksjoner"

    let tall = ""
    /* map-metoden kaller en funksjon på hvert element i array og returnerer
    resultatet av funksjonen som et nytt array */
    $: tallArray = tall.split(",").map((value) => Number(value))
    $: sum = sumArray(tallArray)
    $: gjennomsnitt = sum / tallArray.length
</script>

<p>Skriv in en liste med tall separert med komma</p>
<input type="text" bind:value={tall}>
<p>Sum: {sum}</p>
<p>Gjennomsnitt: {gjennomsnitt}</p>
<style>
    
</style>