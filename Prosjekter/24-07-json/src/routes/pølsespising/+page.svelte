<script>
    import pølse from '$lib/pølse.json'

    function sjekkUnik(deltaker, unikArray) {
        for (const unik of unikArray) {
            if (deltaker.winnerID == unik.winnerID) {
                return false
            }
        }

        return true
    }

    let sortertPølse = pølse.sort((a, b) => {return b.numberDogs - a.numberDogs})
    let unikPølse = []

    sortertPølse.forEach((element) => {
        if (sjekkUnik(element, unikPølse)) {
            unikPølse.push(element)
        }
    })

</script>

<table>
    <tr>
        <th>
            Navn
        </th>
        <th>
            Antall pølser
        </th>
    </tr>

    {#each unikPølse.slice(0, 5) as deltaker}
        <tr>
            <td>
                {deltaker.firstName + " " + deltaker.lastName}
            </td>
            <td>
                {deltaker.numberDogs}
            </td>
        </tr>
    {/each}
</table>

<style>
    
</style>