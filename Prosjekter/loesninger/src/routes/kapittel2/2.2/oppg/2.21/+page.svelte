<script>
    import Knapp from "../../../../../../../gjenbruk/komponentbibliotek/Knapp.svelte";

    let sifre = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let visning = "1234"
    
</script>

<div class="kalkulator">
    <div class="skjerm">
        <p>{visning}</p>
    </div>
    
    <div class="tastatur">
        {#each sifre as siffer}
            <Knapp siffer={siffer} bind:visning></Knapp>
        {/each}
        <Knapp siffer={0} bind:visning></Knapp>
        <Knapp siffer={"C"} bind:visning></Knapp>
    </div>
</div>

<style>
    .kalkulator {
        display: flex;
        flex-direction: column;
    }

    .tastatur {
        display: grid;
        grid-template-columns: repeat(3, 50px);
        grid-template-rows: repeat(4, 50px);
        gap: 10px;
    }

    .skjerm {
        display: flex;
        justify-content: right;
        align-items: center;
        background-color: rgb(214, 255, 214);
        border: 1px solid black;
        padding-right: 5px;
        margin-bottom: 30px;
        text-align: right;
        height: 30px;
        width: 100%;
    }

</style>