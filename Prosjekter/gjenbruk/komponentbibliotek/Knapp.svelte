<script>
    export let siffer
    export let visning
</script>

{#if typeof siffer == "number"}
    <button class={siffer == 0 ? "null" : ""} on:click={() => visning += siffer.toString()}>{siffer}</button>
{:else if siffer == "C"}
    <button class="clear" on:click={() => visning = ""}>{siffer}</button>
{/if}

<style>
    button {
        background-color: rgb(242, 242, 242);
        border: 1px solid rgb(157, 157, 157);
        border-radius: 50%;
        color: rgb(99, 99, 99);
    }

    button:hover {
        color: black;
    }

    .null {
        grid-column: 2;
        grid-row: 4;
    }

    .clear {
        grid-column: 3;
        grid-row: 4;
    }
</style>