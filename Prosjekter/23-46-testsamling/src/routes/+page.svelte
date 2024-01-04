<script>
    import ErLikTest from '../../../gjenbruk/komponentbibliotek/ErLikTest.svelte'
    import { kastTerning } from '../../../gjenbruk/myFunctions'

    let testtilfeller = [
        [[], 3]
    ]
</script>

<h1>Enhetstest for storForbokstav</h1>

    {#each testtilfeller as tilfelle}
        <div class="tester">
            <ErLikTest
                funksjon={kastTerning}
                inndata={tilfelle[0]}
                forventetUtData = {tilfelle[1]}
            />
        </div>
    {/each}


<style>
    .tester {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>