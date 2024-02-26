<script>
    import pølsespising from '$lib/pølse.json'
    import chartjs from 'chart.js/auto'
    import { onMount } from 'svelte'

    let ctx
    let chartCanvas

    onMount(() => {
        ctx = chartCanvas.getContext('2d')

        new chartjs(ctx, {
            type: 'bar',
            data: {
                labels: finnRekorder(pølsespising).map((element) => element.firstName + " " + element.lastName),
                datasets: [{
                    label: "Pølsespiserekorder",
                    data: finnRekorder(pølsespising).map((element) => element.numberDogs),
                }]
            }
        })
    })

    function sjekkUnik(navn, arr) {
        for (const n of arr) {
            if (navn == n.firstName + n.lastName) {
                return false
            }
        }

        return true
    }

    function finnUnikeNavn() {
        let navneListe = []

        for (const deltaker of pølsespising) {
            let navn = deltaker.firstName + deltaker.lastName
                if (sjekkUnik(navn, navneListe)) {
                    navneListe.push(navn)
                }
        }

        return navneListe
    }

    function finnRekorder(arr) {
        arr = arr.sort((a, b) => b.numberDogs - a.numberDogs)

        let unik = []

        for (const rekord of arr) {
            let navn = rekord.firstName + rekord.lastName
            if (sjekkUnik(navn, unik)) {
                unik.push(rekord)
            }
        }

        return unik.slice(0, 5)
    }
</script>

<div class="innhold">
    <div class="table">
        <table>
            <tr>
                <td>Navn</td>
                <td>År</td>
                <td>Antall pølser</td>
            </tr>
            {#each finnRekorder(pølsespising) as rekord}
                <tr>
                    <td>{rekord.firstName + " " + rekord.lastName}</td>
                    <td>{rekord.year}</td>
                    <td>{rekord.numberDogs}</td>
                </tr>
            {/each}
        </table>
    </div>

    <div class="chart">
        <canvas bind:this={chartCanvas}/>
    </div>
</div>

<style>
    table {
        border-collapse: collapse;
    }

    td {
        border: 1px solid black;
        padding: 10px;
    }

    .chart {
        display: flex;
        height: 100%;
        width: 50%;
        justify-content: center;
        align-items: center;

    }

    .innhold {
        display: flex;
        column-gap: 100px;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>