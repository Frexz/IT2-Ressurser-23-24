<script>
    import { kastTerning } from "../../../../gjenbruk/myFunctions"

    let tall = kastTerning()
    export let kastAlle

    $: {
        if (kastAlle) {
            tall = kastTerning()
            kastAlle = false
        }
        
    }
</script>

<div class="terning">
    <img src="/terning/{tall}.png" alt="">
    <button on:click={() => tall = kastTerning()}>Kast terning</button>
</div>

<style>
    button {
        border-radius: 50px;
        color: white;
        background-color: rgb(7, 7, 43);
        padding: 5px;
        width: 120px;
    }

    img {
        margin-bottom: 10px;
        width: 100px;
    }
    .terning {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>