<script>
    import './flag_styles.css'
    import Game from './components/Game.svelte'
    
    export let data
    let land = data.land

    let gamePlaying = false

</script>

<div class="game">
    {#if !gamePlaying}

    <div class="header">
        <h1>Flag-Quiz</h1>
    </div>

    <div class="menu">
        <button class="menu-button" on:click={() => {gamePlaying = true}}>Start Game</button>
    </div>

    {:else}

    <div class="quiz">
        <Game bind:gamePlaying bind:land/>
    </div>

    {/if}
        
    
</div>

<style>
    h1 {
        font-size: 80px;
        text-align: center;
        text-shadow: rgba(0, 0, 0, 0.4) 5px 5px 5px;
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
    }
</style>
