<script>
    let a = Math.floor(10*Math.random())
    let b = Math.floor(10*Math.random())
    let sum = a + b
</script>

<div class="tall">
    <h2>a = {a}</h2>
    <h2>b = {b}</h2>
</div>

{#if a % 2 == 0 && b % 2 == 0}
    <p style="color:green;">Både a og b er partall</p>
{:else if a % 2 != 0 && b % 2 != 0}
    <p style="color:orange;">Både a og b er oddetall</p>
{:else}
    <p style="color:purple;">Det ene tallet er partall og det andre er oddetall</p>
{/if}

<div class="sum">
    <h1>Summen av a og b er {sum} og er
    {#if sum > 10}
        større enn 10
    {:else if sum < 10}
        mindre enn 10
    {:else}
        lik 10
    {/if}
    </h1>
</div>

<style>
    h2 {
        margin: 10px;
    }

    .tall {
        display: flex;
    }
</style>