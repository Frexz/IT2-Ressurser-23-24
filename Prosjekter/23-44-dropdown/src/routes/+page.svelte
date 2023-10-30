<script>
    import DropDownMenu from "./_komponenter/DropDownMenu.svelte";
    let valgte = []
</script>

<div class="innhold">
    <h1>Sommeraktiviteter</h1>
    <DropDownMenu bind:valgte></DropDownMenu>
    <p>Du har valgt {valgte.join(", ")}</p>
</div>

<style>
    h1 {
        color: purple;
    }

    .innhold {
        background-color: aquamarine;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
</style>